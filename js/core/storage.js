const Storage = {
  _prefix: 'guitar_theory_',

  get(key) {
    try {
      const data = localStorage.getItem(this._prefix + key);
      return data ? JSON.parse(data) : null;
    } catch { return null; }
  },

  set(key, value) {
    try {
      localStorage.setItem(this._prefix + key, JSON.stringify(value));
      return true;
    } catch { return false; }
  },

  getProgress() {
    return this.get('progress') || {
      startDate: null,
      completedDays: [],
      currentDay: 1,
      quizScores: {},
      lastLoginDate: null
    };
  },

  saveProgress(p) {
    return this.set('progress', p);
  },

  getSettings() {
    return this.get('settings') || {
      fretCount: 22,
      tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
      showNoteNames: true
    };
  },

  saveSettings(s) {
    return this.set('settings', s);
  },

  isDayCompleted(day) {
    const p = this.getProgress();
    return p.completedDays.includes(day);
  },

  toggleDay(day) {
    const p = this.getProgress();
    const idx = p.completedDays.indexOf(day);
    if (idx > -1) {
      p.completedDays.splice(idx, 1);
    } else {
      p.completedDays.push(day);
      if (!p.startDate) p.startDate = new Date().toISOString().split('T')[0];
    }
    if (day >= p.currentDay) p.currentDay = day + 1;
    this.saveProgress(p);
    return !(idx > -1);
  },

  getStreak() {
    const p = this.getProgress();
    if (!p.completedDays.length) return 0;
    const sorted = [...p.completedDays].sort();
    let streak = 0;
    const today = new Date();
    for (let i = sorted.length - 1; i >= 0; i--) {
      const d = new Date(sorted[i]);
      const diff = Math.round((today - d) / 86400000);
      if (diff === streak) { streak++; }
      else if (diff > streak) break;
    }
    return streak;
  },

  getCompletionPercent() {
    const p = this.getProgress();
    return Math.round((p.completedDays.length / 180) * 100);
  }
};
