const FretboardView = {
  mode: 'explore', // 'explore' | 'practice' | 'interval'
  targetNote: null,
  targetNote2: null,
  selectedFrets: [],
  intervalChecked: false,

  render(container) {
    container.innerHTML = `
      <div class="view active">
        <div class="fretboard-controls">
          <button class="mode-btn active" data-mode="explore">🔍 探索模式</button>
          <button class="mode-btn" data-mode="practice">🎯 找音练习</button>
          <button class="mode-btn" data-mode="interval">📏 音程识别</button>
        </div>

        <div id="practice-area">
          ${this.mode === 'practice' ? this.renderPracticePrompt() : ''}
          ${this.mode === 'interval' ? this.renderIntervalPrompt() : ''}
        </div>

        <div class="fretboard-container" id="fretboard-explorer"></div>

        <div class="card" style="font-size:13px;color:var(--text-secondary)">
          <div>💡 <strong>操作提示：</strong></div>
          <div id="help-text">
            ${this.mode === 'explore' ? '在指板上点击任意位置，显示该音的音名。' : ''}
            ${this.mode === 'practice' ? '在指板上找到目标音的位置，点击作答。' : ''}
            ${this.mode === 'interval' ? '依次点击两个音，显示它们的音程关系。' : ''}
          </div>
        </div>
      </div>
    `;

    // Bind mode buttons
    container.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.mode = e.target.dataset.mode;
        this.selectedFrets = [];
        this.intervalChecked = false;
        this.targetNote = this.generateRandomNote();
        this.render(container);
      });
    });

    // Render the fretboard
    this.renderFretboard();
  },

  renderFretboard() {
    const container = document.getElementById('fretboard-explorer');
    if (!container) return;

    const settings = Storage.getSettings();
    const tuning = settings.tuning
      ? settings.tuning.map(s => {
          const noteMap = { C:0,D:2,E:4,F:5,G:7,A:9,B:11 };
          const m = s.match(/^([A-G]#?)(\d)$/);
          return m ? (noteMap[m[1]] + (parseInt(m[2]) + 1) * 12) : 40;
        })
      : MusicTheory.STANDARD_TUNING;

    let highlight = null;

    if (this.mode === 'practice' && this.targetNote) {
      highlight = { mode: 'scale', notes: [this.targetNote], root: this.targetNote };
    }

    FretboardRenderer.render(container, {
      fretCount: settings.fretCount || 22,
      width: 800,
      height: 220,
      tuning: tuning,
      showNotes: this.mode === 'explore',
      highlight: highlight
    });

    // Add click interaction
    const svg = container.querySelector('svg');
    if (svg) {
      svg.style.cursor = 'pointer';
      svg.addEventListener('click', (e) => this.handleFretClick(e));
    }
  },

  handleFretClick(e) {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert to viewBox coordinates
    const viewBox = (svg.getAttribute('viewBox') || '0 0 800 220').split(' ').map(Number);
    const vw = viewBox[2], vh = viewBox[3];
    const scaleX = vw / rect.width;
    const scaleY = vh / rect.height;
    const vx = x * scaleX;
    const vy = y * scaleY;

    // Parse SVG to find fret positions
    const lines = svg.querySelectorAll('line');
    const fretLines = [];
    lines.forEach(l => {
      const x1 = parseFloat(l.getAttribute('x1'));
      if (x1 > 0 && x1 < vw) fretLines.push(x1);
    });
    fretLines.sort((a, b) => a - b);

    // Find nearest fret
    let fret = 0;
    if (vx < fretLines[0] - 15) {
      fret = -1; // Nut area = open string
    } else if (vx > fretLines[fretLines.length - 1]) {
      return; // Beyond fretboard
    } else {
      for (let i = 1; i < fretLines.length; i++) {
        if (vx >= fretLines[i - 1] && vx < fretLines[i]) {
          fret = i;
          break;
        }
      }
    }

    // Find nearest string
    const padY = 40;
    const usableH = 220 - padY * 2;
    const stringSpacing = usableH / 5;
    const stringIdx = Math.round((vy - padY) / stringSpacing);
    if (stringIdx < 0 || stringIdx > 5) return;

    if (this.mode === 'explore') {
      this.showNoteAt(stringIdx, fret);
    } else if (this.mode === 'practice') {
      this.checkPracticeAnswer(stringIdx, fret);
    } else if (this.mode === 'interval') {
      this.selectIntervalNote(stringIdx, fret);
    }
  },

  showNoteAt(stringIdx, fret) {
    const tuning = MusicTheory.STANDARD_TUNING;
    const midi = tuning[stringIdx] + (fret >= 0 ? fret : 0);
    const noteName = MusicTheory.midiToNote(midi);
    const noteFull = MusicTheory.midiToName(midi);

    // Flash the note information
    const helpText = document.getElementById('help-text');
    if (helpText) {
      helpText.innerHTML = `
        <span style="color:var(--accent3);font-weight:700;font-size:18px">${noteName}</span>
        &nbsp; ${noteFull}
        &nbsp; | 第 ${stringIdx + 1} 弦 · 第 ${fret >= 0 ? fret : '空'} 品
      `;
    }
  },

  generateRandomNote() {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    return notes[Math.floor(Math.random() * 12)];
  },

  renderPracticePrompt() {
    if (!this.targetNote) this.targetNote = this.generateRandomNote();
    return `
      <div class="practice-prompt">
        <div class="target-note">${this.targetNote}</div>
        <div class="hint">在指板上找到这个音！点击正确的弦和品。</div>
        <div id="practice-result"></div>
      </div>
    `;
  },

  renderIntervalPrompt() {
    return `
      <div class="practice-prompt">
        <div class="hint">在指板上依次点击<strong>两个音</strong>，显示它们的音程关系。</div>
        <div id="interval-result"></div>
      </div>
    `;
  },

  checkPracticeAnswer(stringIdx, fret) {
    const tuning = MusicTheory.STANDARD_TUNING;
    const midi = tuning[stringIdx] + (fret >= 0 ? fret : 0);
    const noteName = MusicTheory.midiToNote(midi);
    const result = document.getElementById('practice-result');

    if (noteName === this.targetNote) {
      result.innerHTML = '<div class="practice-result correct">✓ 正确！继续下一个</div>';
      setTimeout(() => {
        this.targetNote = this.generateRandomNote();
        this.render(document.getElementById('main-content'));
      }, 1200);
    } else {
      result.innerHTML = `<div class="practice-result wrong">✗ 这是 ${noteName}，不是 ${this.targetNote}，再试试！</div>`;
    }
  },

  selectIntervalNote(stringIdx, fret) {
    const tuning = MusicTheory.STANDARD_TUNING;
    const midi = tuning[stringIdx] + (fret >= 0 ? fret : 0);
    const noteName = MusicTheory.midiToNote(midi);
    const noteFull = MusicTheory.midiToName(midi);

    this.selectedFrets.push({ stringIdx, fret, midi, noteName, noteFull });
    const result = document.getElementById('interval-result');

    if (this.selectedFrets.length === 1) {
      result.innerHTML = `<div style="font-size:16px;color:var(--accent)">第一个音：${noteFull} — 现在点击第二个音</div>`;
    } else if (this.selectedFrets.length === 2) {
      const n1 = this.selectedFrets[0];
      const n2 = this.selectedFrets[1];
      const semitones = (n2.midi - n1.midi + 12) % 12;
      const intervalName = MusicTheory.getIntervalName(semitones);
      const direction = n2.midi >= n1.midi ? '上行' : '下行';

      result.innerHTML = `
        <div style="font-size:16px">
          <span style="color:var(--accent3)">${n1.noteFull}</span>
          → <span style="color:var(--accent2)">${n2.noteFull}</span>
          = <strong style="color:#fff;font-size:20px">${intervalName}</strong>
          (${direction}，${semitones} 半音)
          <br><button onclick="FretboardView.resetInterval()" style="margin-top:8px;padding:4px 12px;background:var(--bg-surface);border:1px solid var(--border);color:var(--text-primary);border-radius:4px;cursor:pointer">重新选择</button>
        </div>
      `;
    }
  },

  resetInterval() {
    this.selectedFrets = [];
    const container = document.getElementById('main-content');
    this.render(container);
  }
};
