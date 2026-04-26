const RiffsView = {
  difficultyFilter: 'all',
  expandedRiff: null,
  searchTag: '',

  render(container) {
    container.innerHTML = `
      <div class="view active">
        <div class="fretboard-controls" style="margin-bottom:12px">
          <button class="mode-btn ${this.difficultyFilter === 'all' ? 'active' : ''}" data-diff="all">🎸 全部</button>
          <button class="mode-btn ${this.difficultyFilter === 'easy' ? 'active' : ''}" data-diff="easy">🌟 入门 (1-2)</button>
          <button class="mode-btn ${this.difficultyFilter === 'medium' ? 'active' : ''}" data-diff="medium">🔥 进阶 (3)</button>
          <button class="mode-btn ${this.difficultyFilter === 'hard' ? 'active' : ''}" data-diff="hard">💀 高难度 (4-5)</button>
        </div>
        <div id="riff-list">
          ${this.renderRiffList()}
        </div>
      </div>
    `;

    container.querySelectorAll('[data-diff]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.difficultyFilter = e.target.dataset.diff;
        this.expandedRiff = null;
        this.render(container);
      });
    });

    this._bindRiffEvents(container);
  },

  renderRiffList() {
    let riffs = [...RIFF_LIBRARY];

    // Filter by difficulty
    if (this.difficultyFilter === 'easy') riffs = riffs.filter(r => r.difficulty <= 2);
    else if (this.difficultyFilter === 'medium') riffs = riffs.filter(r => r.difficulty === 3);
    else if (this.difficultyFilter === 'hard') riffs = riffs.filter(r => r.difficulty >= 4);

    if (riffs.length === 0) {
      return '<div class="card" style="text-align:center;color:var(--text-secondary);padding:40px">没有找到匹配的Riff</div>';
    }

    return riffs.map(riff => {
      const isExpanded = this.expandedRiff === riff.id;
      const stars = '★'.repeat(riff.difficulty) + '☆'.repeat(5 - riff.difficulty);

      return `
        <div class="riff-card ${isExpanded ? 'expanded' : ''}" data-riff="${riff.id}">
          <div class="riff-card-header" style="cursor:pointer">
            <div class="riff-header">
              <div>
                <div class="riff-title">${riff.title}</div>
                <div class="riff-artist">${riff.artist}</div>
              </div>
              <div class="riff-difficulty" style="color:var(--accent3)">${stars}</div>
            </div>
            <div class="riff-tags">
              <span class="riff-tag">${riff.key}</span>
              <span class="riff-tag">${riff.tempo}</span>
              ${riff.tags.slice(0, 3).map(t => `<span class="riff-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="riff-details" style="${isExpanded ? 'display:block' : 'display:none'}">
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;font-size:12px;color:var(--text-secondary)">
              <span>🎵 ${riff.tuning}</span>
              <span>⏱ ${riff.timeSignature} · ${riff.tempo}</span>
              <span>🎼 ${riff.chordContext}</span>
            </div>

            <div style="margin:8px 0;padding:8px 12px;background:var(--bg-surface);border-radius:var(--radius);font-size:13px;color:var(--text-secondary)">
              <strong>音阶分析:</strong> ${riff.scaleAnalysis.scale}
              <span style="margin-left:8px;color:var(--accent)">${riff.scaleAnalysis.notes.join(' ')}</span>
            </div>

            ${riff.tabs.map(tab => `
              <div style="margin:8px 0">
                <div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">${tab.section}</div>
                <div class="riff-tabs">${tab.lines.join('\n')}</div>
              </div>
            `).join('')}

            <div style="font-size:13px;color:var(--text-secondary);margin:8px 0;padding:8px;background:rgba(255,217,61,0.08);border-radius:var(--radius)">
              💡 ${riff.practiceNotes}
            </div>

            <button class="btn-riff-fretboard" data-riff="${riff.id}" style="padding:6px 16px;background:var(--accent);color:#000;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600">
              🎸 在指板中查看音阶
            </button>
            <div class="mini-fretboard" id="riff-fb-${riff.id}" style="margin-top:8px;display:none"></div>
          </div>
        </div>
      `;
    }).join('');
  },

  _bindRiffEvents(container) {
    // Toggle expand on card click
    container.querySelectorAll('.riff-card-header').forEach(header => {
      header.addEventListener('click', (e) => {
        const card = header.closest('.riff-card');
        const riffId = card.dataset.riff;
        this.expandedRiff = this.expandedRiff === riffId ? null : riffId;
        this._refreshList(container);
      });
    });

    // "View on fretboard" buttons
    container.querySelectorAll('.btn-riff-fretboard').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const riffId = btn.dataset.riff;
        const fbContainer = document.getElementById(`riff-fb-${riffId}`);
        if (!fbContainer) return;

        if (fbContainer.style.display !== 'none') {
          fbContainer.style.display = 'none';
          btn.textContent = '🎸 在指板中查看音阶';
          return;
        }

        fbContainer.style.display = 'block';
        btn.textContent = '🔼 收起指板';

        const riff = RIFF_LIBRARY.find(r => r.id === riffId);
        if (!riff) return;

        FretboardRenderer.render(fbContainer, {
          fretCount: 12,
          width: 600,
          height: 160,
          showNotes: true,
          highlight: {
            mode: 'scale',
            notes: riff.scaleAnalysis.notes,
            root: riff.scaleAnalysis.notes[0]
          }
        });
      });
    });
  },

  _refreshList(container) {
    const list = document.getElementById('riff-list');
    if (list) {
      list.innerHTML = this.renderRiffList();
      this._bindRiffEvents(container);
    }
  }
};
