const App = {
  currentView: null,

  init() {
    this.route();
    window.addEventListener('hashchange', () => this.route());

    // Nav button clicks
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        location.hash = btn.dataset.view;
      });
    });

    this.refreshStreak();

    // Init AI chat assistant
    if (typeof AIChat !== 'undefined') {
      AIChat.init();
    }
  },

  route() {
    const hash = location.hash.slice(1) || 'dashboard';
    this.showView(hash);
  },

  showView(name) {
    // Update nav active state with OK Computer × motif
    document.querySelectorAll('.nav-btn').forEach(b => {
      const isActive = b.dataset.view === name;
      b.classList.toggle('active', isActive);
      // Strip any existing × prefix then add it back for active
      let label = b.textContent.replace(/^×\s*/, '');
      b.textContent = isActive ? '× ' + label : label;
    });

    const container = document.getElementById('main-content');
    this.currentView = name;

    // Update page title
    const titles = {
      dashboard: '📊 仪表盘',
      lesson: '📖 今日课程',
      fretboard: '🎸 指板探索',
      chords: '🎵 和弦库',
      riffs: '🎼 Riff库',
      progressions: '🔀 进行生成器',
      stats: '📈 统计'
    };
    document.getElementById('page-title').textContent = `🎸 ${titles[name] || '吉他乐理'}`;

    // Render view
    switch (name) {
      case 'dashboard': DashboardView.render(container); break;
      case 'lesson': LessonView.render(container); break;
      case 'fretboard': FretboardView.render(container); break;
      case 'chords': ChordsView.render(container); break;
      case 'riffs': RiffsView.render(container); break;
      case 'progressions': ProgressionView.render(container); break;
      case 'stats': StatsView.render(container); break;
      default:
        location.hash = 'dashboard';
    }

    // Update AI chat context
    if (typeof AIChat !== 'undefined' && AIChat.updateContext) {
      AIChat.updateContext();
    }
  },

  refreshStreak() {
    const streak = Storage.getStreak();
    document.getElementById('streak-count').textContent = streak;
  }
};

// Boot on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
