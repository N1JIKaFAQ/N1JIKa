const LessonView = {
  currentDay: null,
  answeredQuestions: {},
  practiceNote: null,
  practiceStats: { correct: 0, total: 0 },
  practiceFretNotes: null,

  // All possible notes in first 5 frets
  FRET_NOTES: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#'],

  render(container, day) {
    const progress = Storage.getProgress();
    this.currentDay = day || progress.currentDay || 1;
    if (this.currentDay > 180) this.currentDay = 180;
    if (this.currentDay < 1) this.currentDay = 1;

    const lesson = this.getLesson(this.currentDay);
    if (!lesson) {
      container.innerHTML = '<div class="view active"><p>课程加载失败</p></div>';
      return;
    }

    this.answeredQuestions = {};
    this.practiceStats = { correct: 0, total: 0 };
    this.practiceNote = this.generatePracticeNote();

    container.innerHTML = `
      <div class="view active">
        <div class="lesson-header">
          <div class="lesson-nav">
            <button id="prev-day" ${this.currentDay <= 1 ? 'disabled' : ''}>← 前一天</button>
            <span class="day-indicator">第 ${this.currentDay} 天 / 180</span>
            <button id="next-day" ${this.currentDay >= 180 ? 'disabled' : ''}>后一天 →</button>
          </div>
          <h2 class="lesson-title">${lesson.title}</h2>
          <div class="lesson-meta">
            <span>📅 第 ${lesson.month || Math.ceil(this.currentDay / 30)} 月</span>
            <span>⏱ ${lesson.practiceMins || 15} 分钟</span>
            ${(lesson.tags || []).map(t => `<span class="lesson-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="card">
          <div class="lesson-content">${lesson.content || '<p>课程内容准备中...</p>'}</div>
        </div>

        <!-- Interactive Fretboard Practice -->
        <div class="card" id="practice-section">
          <h3 style="margin-bottom:12px">🎯 指板练习</h3>
          <div id="practice-area">
            ${this.renderPracticeArea()}
          </div>
        </div>

        ${lesson.quizIds && lesson.quizIds.length ? `
        <div class="card quiz-section">
          <h3>📝 小测验</h3>
          <div id="quiz-container"></div>
        </div>` : ''}

        <div class="complete-section">
          <button id="btn-complete" class="btn-complete ${progress.completedDays.includes(this.currentDay) ? 'done' : ''}"
            ${progress.completedDays.includes(this.currentDay) ? 'disabled' : ''}>
            ${progress.completedDays.includes(this.currentDay) ? '✅ 已完成' : '✅ 完成打卡'}
          </button>
        </div>
      </div>
    `;

    // Render quiz
    if (lesson.quizIds && lesson.quizIds.length) {
      this.renderQuiz(lesson.quizIds);
    }

    // Render practice fretboard
    this.renderPracticeFretboard();

    // Bind nav events
    document.getElementById('prev-day')?.addEventListener('click', () => {
      this.render(container, this.currentDay - 1);
    });
    document.getElementById('next-day')?.addEventListener('click', () => {
      this.render(container, this.currentDay + 1);
    });
    document.getElementById('btn-complete')?.addEventListener('click', () => {
      this.toggleComplete();
    });

    this.renderEmbeddedFretboards();
  },

  renderPracticeArea() {
    const note = this.practiceNote || 'C';
    return `
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px">点击指板上的位置找到这个音：</div>
        <div class="target-note" style="font-size:42px;font-weight:700;color:var(--accent3)">${note}</div>
        <div id="practice-feedback" style="font-size:14px;min-height:24px;margin-top:4px;color:var(--text-secondary)">
          ${this.practiceStats.total > 0 ? `得分：${this.practiceStats.correct}/${this.practiceStats.total}` : '点击指板上的弦和品'}
        </div>
      </div>
      <div class="fretboard-container" id="mini-practice-fretboard"></div>
      <div style="display:flex;justify-content:center;gap:12px;margin-top:8px">
        <button id="btn-new-note" style="padding:6px 16px;background:var(--bg-surface);border:1px solid var(--border);color:var(--text-primary);border-radius:6px;cursor:pointer;font-size:13px">🎲 换一个音</button>
        <button id="btn-reset-stats" style="padding:6px 16px;background:var(--bg-surface);border:1px solid var(--border);color:var(--text-secondary);border-radius:6px;cursor:pointer;font-size:13px">🔄 重置统计</button>
      </div>
    `;
  },

  renderPracticeFretboard() {
    const container = document.getElementById('mini-practice-fretboard');
    if (!container) return;

    FretboardRenderer.render(container, {
      fretCount: 5,
      width: 600,
      height: 160,
      showNotes: false,
      highlight: null
    });

    // Bind click
    const svg = container.querySelector('svg');
    if (svg) {
      svg.style.cursor = 'pointer';
      svg.addEventListener('click', (e) => this.handlePracticeClick(e));
    }

    document.getElementById('btn-new-note')?.addEventListener('click', () => {
      this.practiceNote = this.generatePracticeNote();
      const area = document.getElementById('practice-area');
      if (area) area.innerHTML = this.renderPracticeArea();
      this.renderPracticeFretboard();
    });

    document.getElementById('btn-reset-stats')?.addEventListener('click', () => {
      this.practiceStats = { correct: 0, total: 0 };
      this.practiceNote = this.generatePracticeNote();
      const area = document.getElementById('practice-area');
      if (area) area.innerHTML = this.renderPracticeArea();
      this.renderPracticeFretboard();
    });
  },

  generatePracticeNote() {
    // Focus on natural notes + some accidentals, weighted by lesson progress
    const notes = this.currentDay < 20
      ? ['E','F','G','A','B','C','D'] // Month 1 early: natural notes only
      : this.FRET_NOTES;
    return notes[Math.floor(Math.random() * notes.length)];
  },

  handlePracticeClick(e) {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const vb = (svg.getAttribute('viewBox') || '0 0 600 160').split(' ').map(Number);
    const vw = vb[2], vh = vb[3];
    const vx = x * vw / rect.width;
    const vy = y * vh / rect.height;

    // Calculate parameters matching FretboardRenderer
    const padY = 40;
    const usableH = vh - padY * 2;
    const stringSpacing = usableH / 5;

    // Find string (0-5)
    const stringIdx = Math.round((vy - padY) / stringSpacing);
    if (stringIdx < 0 || stringIdx > 5) return;

    // Calculate fret positions using same formula as FretboardRenderer
    const padX = 30;
    const usableW = vw - padX * 2;
    const scaleLength = usableW * 1.1;
    const fretCount = 5;
    const fretPos = [];
    for (let f = 0; f <= fretCount; f++) {
      const pos = padX + scaleLength * (1 - Math.pow(2, -f / 12));
      fretPos.push(pos);
    }

    // Find which fret was clicked (between fret lines)
    let fret = 0;
    if (vx < fretPos[0]) {
      fret = 0; // nut area = open string
    } else {
      for (let i = 0; i < fretPos.length - 1; i++) {
        if (vx >= fretPos[i] && vx < fretPos[i + 1]) {
          fret = i + 1;
          break;
        }
      }
    }
    if (vx > fretPos[fretCount]) return; // beyond fretboard

    // Calculate note at this position
    const tuning = MusicTheory.STANDARD_TUNING;
    const midi = tuning[stringIdx] + fret;
    const noteName = MusicTheory.midiToNote(midi);

    // Show feedback
    const feedback = document.getElementById('practice-feedback');
    if (!feedback) return;

    this.practiceStats.total++;
    const isCorrect = noteName === this.practiceNote;

    if (isCorrect) {
      this.practiceStats.correct++;
      feedback.innerHTML = `
        <span style="color:var(--success);font-weight:600;font-size:16px">✓ 正确！</span>
        <span style="color:var(--text-secondary)"> 第${stringIdx+1}弦 第${fret===0?'空':fret}品 = ${noteName}</span>
        <span style="color:var(--accent3);margin-left:12px">得分：${this.practiceStats.correct}/${this.practiceStats.total}</span>
      `;
      setTimeout(() => {
        this.practiceNote = this.generatePracticeNote();
        const area = document.getElementById('practice-area');
        if (area) {
          area.innerHTML = this.renderPracticeArea();
          this.renderPracticeFretboard();
        }
      }, 800);
    } else {
      feedback.innerHTML = `
        <span style="color:var(--accent2);font-weight:600;font-size:16px">✗ 不对</span>
        <span style="color:var(--text-secondary)"> 第${stringIdx+1}弦 第${fret===0?'空':fret}品 = <strong>${noteName}</strong>，不是 ${this.practiceNote}</span>
        <span style="color:var(--accent3);margin-left:12px">得分：${this.practiceStats.correct}/${this.practiceStats.total}</span>
      `;
    }
  },

  getLesson(day) {
    for (const month of Object.values(LESSONS)) {
      for (const lesson of month) {
        if (lesson.id === day) return lesson;
      }
    }
    return null;
  },

  renderQuiz(quizIds) {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    let html = '';
    quizIds.forEach((qid, idx) => {
      const q = QUIZBANK.find(q => q.id === qid);
      if (!q) return;

      html += `
        <div class="quiz-question" data-qid="${qid}" data-idx="${idx}">
          <div class="q-text">${idx + 1}. ${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((opt, oi) => `
              <button class="quiz-option" data-opt="${oi}" data-qid="${qid}">${opt}</button>
            `).join('')}
          </div>
          <div class="quiz-result" id="result-${qid}"></div>
          <div class="quiz-explanation" id="explain-${qid}">${q.explanation || ''}</div>
        </div>
      `;
    });
    container.innerHTML = html;

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const qid = parseInt(e.target.dataset.qid);
        const optIdx = parseInt(e.target.dataset.opt);
        this.answerQuiz(qid, optIdx);
      });
    });
  },

  answerQuiz(qid, optIdx) {
    if (this.answeredQuestions[qid]) return;
    this.answeredQuestions[qid] = optIdx;

    const q = QUIZBANK.find(q => q.id === qid);
    if (!q) return;

    const options = document.querySelectorAll(`[data-qid="${qid}"]`);
    const result = document.getElementById(`result-${qid}`);
    const explain = document.getElementById(`explain-${qid}`);

    options.forEach((opt, i) => {
      opt.disabled = true;
      if (i === q.answer) opt.classList.add('reveal-correct');
      if (i === optIdx && i !== q.answer) opt.classList.add('wrong');
      if (i === optIdx && i === q.answer) opt.classList.add('correct');
    });

    const isCorrect = optIdx === q.answer;
    result.textContent = isCorrect ? '✓ 回答正确！' : '✗ 回答错误';
    result.className = `quiz-result ${isCorrect ? 'correct' : 'wrong'}`;
    explain.classList.add('show');
  },

  toggleComplete() {
    const day = this.currentDay;
    Storage.toggleDay(day);
    const nowCompleted = Storage.isDayCompleted(day);

    const btn = document.getElementById('btn-complete');
    if (nowCompleted) {
      btn.textContent = '✅ 已完成';
      btn.classList.add('done');
      btn.disabled = true;
    } else {
      btn.textContent = '✅ 完成打卡';
      btn.classList.remove('done');
      btn.disabled = false;
    }

    App.refreshStreak();
  },

  renderEmbeddedFretboards() {
    document.querySelectorAll('.lesson-fretboard[data-notes]').forEach(el => {
      const notes = (el.dataset.notes || '').split(',').filter(Boolean);
      const root = el.dataset.root || notes[0] || null;
      FretboardRenderer.renderMini(el, notes, root);
    });
  }
};
