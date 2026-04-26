const DashboardView = {
  render(container) {
    const progress = Storage.getProgress();
    const streak = Storage.getStreak();
    const totalDays = Object.values(LESSONS).flat().length;
    const completed = progress.completedDays.length;
    const pct = Math.round((completed / 180) * 100);
    const currentDay = Math.min(progress.currentDay || 1, 180);

    // Get today's lesson
    const todayLesson = this.getLessonForDay(currentDay);

    container.innerHTML = `
      <div class="view active">
        <div class="dashboard-grid">
          <div class="card today-card" data-day="${currentDay}">
            <div class="day-label">第 ${currentDay} 天 / 180 天</div>
            <div class="day-title">${todayLesson.title}</div>
            <button class="btn-primary" onclick="App.showView('lesson')">
              ${progress.completedDays.includes(currentDay) ? '📖 复习今日课程' : '▶ 开始今日学习'}
            </button>
          </div>

          <div class="card">
            <div class="card-title">连续打卡</div>
            <div class="card-value" style="color:var(--accent3)">${streak} 天</div>
          </div>

          <div class="card">
            <div class="card-title">总完成</div>
            <div class="card-value" style="color:var(--success)">${completed}/180</div>
          </div>

          <div class="card">
            <div class="card-title">完成率</div>
            <div class="card-value" style="color:var(--accent)">${pct}%</div>
          </div>

          <div class="card">
            <div class="card-title">当前进度</div>
            <div style="margin-top:8px">
              <div style="background:var(--bg-surface);border-radius:10px;height:12px;overflow:hidden">
                <div style="width:${pct}%;height:100%;background:linear-gradient(90deg,var(--accent),var(--accent3));border-radius:10px;transition:width 0.5s"></div>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-top:4px">
                <span>开始</span>
                <span>第 ${Math.min(Math.floor(pct/16.67)+1, 6)} 月</span>
                <span>目标</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-title">每月进度</div>
          <div id="monthly-mini-chart" class="chart-container">
            ${this.renderMiniChart(progress)}
          </div>
        </div>
      </div>
    `;
  },

  getLessonForDay(day) {
    for (const month of Object.values(LESSONS)) {
      for (const lesson of month) {
        if (lesson.id === day) return lesson;
      }
    }
    return { title: '完成所有课程！恭喜！', id: day };
  },

  renderMiniChart(progress) {
    const months = ['M1','M2','M3','M4','M5','M6'];
    const monthNames = ['第一月','第二月','第三月','第四月','第五月','第六月'];
    const completedDays = progress.completedDays || [];

    return months.map((m, mi) => {
      const monthLessons = LESSONS[mi + 1] || [];
      const monthDayIds = monthLessons.map(l => l.id);
      const completed = monthDayIds.filter(id => completedDays.includes(id)).length;
      const total = monthDayIds.length;
      const pct = total ? Math.round((completed / total) * 100) : 0;

      return `
        <div class="chart-bar-group" style="margin-bottom:4px">
          <span class="chart-label" style="width:36px">${monthNames[mi]}</span>
          <div class="chart-bar-track" style="height:14px">
            <div class="chart-bar-fill" style="width:${pct}%;height:100%"></div>
          </div>
          <span class="chart-value" style="width:50px;font-size:11px">${completed}/${total}</span>
        </div>
      `;
    }).join('');
  }
};
