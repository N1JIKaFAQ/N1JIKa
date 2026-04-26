const ProgressionView = {
  selectedKey: 'C',
  selectedStyle: 'rock',
  result: null,

  render(container) {
    const keys = ProgressionGenerator.getKeys();
    const styles = ProgressionGenerator.getStyles();

    container.innerHTML = `
      <div class="view active">
        <div class="card">
          <div class="card-title">🎛️ 控制面板</div>
          <div class="progression-controls">
            <div>
              <label style="font-size:13px;color:var(--text-secondary);display:block;margin-bottom:4px">调性</label>
              <select id="prog-key">
                ${keys.map(k => `
                  <option value="${k}" ${k === this.selectedKey ? 'selected' : ''}>${k}</option>
                `).join('')}
              </select>
            </div>

            <div>
              <label style="font-size:13px;color:var(--text-secondary);display:block;margin-bottom:4px">风格</label>
              <div style="display:flex;gap:4px;flex-wrap:wrap">
                ${styles.map(s => `
                  <button class="style-btn ${s.id === this.selectedStyle ? 'active' : ''}" data-style="${s.id}">${s.name}</button>
                `).join('')}
              </div>
            </div>

            <button class="btn-generate" id="btn-generate-prog">🎲 生成进行</button>
          </div>
          <div style="font-size:12px;color:var(--text-muted)" id="prog-style-desc">
            ${styles.find(s => s.id === this.selectedStyle)?.description || ''}
          </div>
        </div>

        <div id="progression-result">
          ${this.result ? this.renderResult() : `
            <div class="card" style="text-align:center;padding:40px;color:var(--text-secondary)">
              <div style="font-size:48px;margin-bottom:16px">🎸</div>
              <div>选择调性和风格，点击「生成进行」</div>
              <div style="font-size:13px;margin-top:8px">获取摇滚和弦进行 + 指板图</div>
            </div>
          `}
        </div>
      </div>
    `;

    // Bind style buttons
    container.querySelectorAll('.style-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectedStyle = e.target.dataset.style;
        this.result = null;
        this.render(container);
      });
    });

    // Bind generate button
    container.querySelector('#btn-generate-prog')?.addEventListener('click', () => {
      this.selectedKey = document.getElementById('prog-key').value;
      this.result = ProgressionGenerator.generate(this.selectedKey, this.selectedStyle);
      this._renderResult();
    });
  },

  renderResult() {
    if (!this.result) return '';
    const r = this.result;

    return `
      <div class="card">
        <div class="card-title">🎼 生成结果</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;font-size:13px;color:var(--text-secondary);margin-bottom:12px">
          <span>🎵 ${r.key} · ${r.style}</span>
          <span>⏱ ${r.tempo} BPM · ${r.timeSignature}</span>
        </div>

        <div style="font-size:24px;font-weight:700;text-align:center;padding:16px;background:var(--bg-surface);border-radius:var(--radius);margin-bottom:16px;letter-spacing:4px">
          ${r.progressionRoman.map((roman, i) => `
            <span style="color:var(--accent3)">${roman}</span>
            ${i < r.progressionRoman.length - 1 ? '<span style="color:var(--text-muted)"> → </span>' : ''}
          `).join('')}
        </div>

        <div class="progression-chords">
          ${r.chords.map(chord => `
            <div class="progression-chord-item">
              <div class="roman-numeral">${chord.roman}</div>
              <div class="chord-label">${chord.name}</div>
              <div class="mini-fretboard" id="prog-chord-${chord.name.replace('#','s')}"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  _renderResult() {
    const container = document.getElementById('progression-result');
    if (!container) return;
    container.innerHTML = this.renderResult();

    // Render mini fretboards for each chord
    if (!this.result) return;
    this.result.chords.forEach(chord => {
      const fbContainer = document.getElementById(`prog-chord-${chord.name.replace('#','s')}`);
      if (!fbContainer) return;

      if (chord.diagram) {
        const d = chord.diagram;
        const tuning = MusicTheory.STANDARD_TUNING;
        const notes = [];

        d.frets.forEach((fret, si) => {
          if (fret >= 0) {
            const midi = tuning[si] + fret;
            notes.push(MusicTheory.midiToNote(midi));
          }
        });

        FretboardRenderer.render(fbContainer, {
          fretCount: 5,
          width: 180,
          height: 110,
          showNotes: true,
          startFret: d.startFret || 1,
          highlight: {
            mode: 'scale',
            notes: notes,
            root: notes[0] || ''
          }
        });
      } else {
        fbContainer.innerHTML = '<div style="text-align:center;color:var(--text-muted);font-size:12px;padding:20px">暂无指型</div>';
      }
    });
  }
};
