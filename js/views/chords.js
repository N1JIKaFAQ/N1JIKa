const ChordsView = {
  currentCategory: null,
  currentChord: null,
  currentPosition: 0,

  render(container) {
    const cats = CHORD_LIBRARY.categories;
    if (!this.currentCategory) this.currentCategory = cats[0].id;

    container.innerHTML = `
      <div class="view active">
        <div class="tab-bar" id="chord-tabs">
          ${cats.map(c => `
            <button class="tab-btn ${c.id === this.currentCategory ? 'active' : ''}" data-cat="${c.id}">
              ${c.icon} ${c.name}
            </button>
          `).join('')}
        </div>
        <div id="chord-list">
          ${this.renderChordList()}
        </div>
      </div>
    `;

    // Tab switching
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentCategory = e.target.dataset.cat;
        this.currentChord = null;
        this.currentPosition = 0;
        this.render(container);
      });
    });

    // Event delegation on chord-list for card headers and position buttons
    const list = document.getElementById('chord-list');
    if (list) {
      list.addEventListener('click', (e) => {
        const header = e.target.closest('.chord-card-header');
        const posBtn = e.target.closest('.pos-btn');

        if (header) {
          const card = header.closest('.chord-card');
          const chordId = card.dataset.chord;
          if (this.currentChord === chordId) {
            this.currentChord = null;
          } else {
            this.currentChord = chordId;
            this.currentPosition = 0;
          }
          list.innerHTML = this.renderChordList();
          this._renderFretboards();
          return;
        }

        if (posBtn) {
          this.currentPosition = parseInt(posBtn.dataset.pos);
          list.innerHTML = this.renderChordList();
          this._renderFretboards();
        }
      });
    }

    // Render fretboards for any expanded chords
    this._renderFretboards();
  },

  renderChordList() {
    const cat = CHORD_LIBRARY.categories.find(c => c.id === this.currentCategory);
    if (!cat) return '<p>暂无和弦数据</p>';

    return cat.chords.map(chord => {
      const isExpanded = this.currentChord === chord.id;
      const pos = chord.positions[this.currentPosition] || chord.positions[0];

      return `
        <div class="chord-card" data-chord="${chord.id}">
          <div class="chord-card-header">
            <div>
              <div class="chord-name">${chord.name}</div>
              <div class="chord-intervals">${chord.intervals.join(' · ')}</div>
            </div>
            <span style="color:var(--text-muted);font-size:12px">
              ${'★'.repeat(chord.difficulty)}${'☆'.repeat(5 - chord.difficulty)}
            </span>
          </div>

          <div class="chord-details" style="${isExpanded ? 'display:block' : 'display:none'}">
            <p style="font-size:13px;color:var(--text-secondary);margin:8px 0">${chord.description}</p>

            ${chord.positions.length > 1 ? `
              <div class="chord-positions">
                ${chord.positions.map((p, i) => `
                  <button class="pos-btn ${i === this.currentPosition && isExpanded ? 'active' : ''}" data-pos="${i}">${p.label}</button>
                `).join('')}
              </div>
            ` : ''}

            <div class="mini-fretboard" id="chord-fb-${chord.id}"></div>
          </div>
        </div>
      `;
    }).join('');
  },

  _renderFretboards() {
    const cat = CHORD_LIBRARY.categories.find(c => c.id === this.currentCategory);
    if (!cat) return;

    cat.chords.forEach(chord => {
      if (this.currentChord !== chord.id) return;
      const container = document.getElementById(`chord-fb-${chord.id}`);
      if (!container) return;

      const pos = chord.positions[this.currentPosition] || chord.positions[0];
      const tuning = MusicTheory.STANDARD_TUNING;
      const highlightedNotes = [];
      let rootNote = null;

      pos.frets.forEach((fret, si) => {
        if (fret >= 0) {
          const midi = tuning[si] + fret;
          const noteName = MusicTheory.midiToNote(midi);
          highlightedNotes.push(noteName);
          if (si === pos.rootString) rootNote = noteName;
        }
      });

      FretboardRenderer.render(container, {
        fretCount: 5,
        width: 320,
        height: 150,
        showNotes: true,
        highlight: {
          mode: 'scale',
          notes: highlightedNotes,
          root: rootNote
        }
      });
    });
  }
};
