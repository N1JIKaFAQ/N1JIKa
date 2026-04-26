const StatsView = {
  currentMonth: null,

  render(container) {
    const progress = Storage.getProgress();
    const streak = Storage.getStreak();
    const completed = progress.completedDays.length;
    const pct = Math.round((completed / 180) * 100);

    // Default to current month
    if (!this.currentMonth) {
      const now = new Date();
      this.currentMonth = now.getFullYear() * 100 + (now.getMonth() + 1);
    }

    const year = Math.floor(this.currentMonth / 100);
    const month = this.currentMonth % 100;

    container.innerHTML = `
      <div class="view active">
        <div class="stats-grid">
          <div class="card">
            <div class="card-title">打卡天数</div>
            <div class="card-value" style="color:var(--success)">${completed}</div>
          </div>
          <div class="card">
            <div class="card-title">连续打卡</div>
            <div class="card-value" style="color:var(--accent3)">${streak} 天</div>
          </div>
          <div class="card">
            <div class="card-title">完成率</div>
            <div class="card-value" style="color:var(--accent)">${pct}%</div>
          </div>
          <div class="card" style="grid-column:1/-1">
            <div class="card-title">当前阶段</div>
            <div style="margin-top:8px;font-size:15px">
              ${this.getPhaseInfo(completed)}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="calendar-nav">
            <button id="prev-month">← ${month > 1 ? month - 1 : 12} 月</button>
            <h3>${year} 年 ${month} 月</h3>
            <button id="next-month">${month < 12 ? month + 1 : 1} 月 →</button>
          </div>
          <div id="calendar-grid-container">${this.renderCalendar(year, month, progress)}</div>
        </div>

        <div class="card">
          <div class="card-title">每月完成情况</div>
          <div id="monthly-chart" class="chart-container">
            ${this.renderMonthlyChart(progress)}
          </div>
        </div>
      </div>
    `;

    document.getElementById('prev-month')?.addEventListener('click', () => {
      if (month > 1) this.currentMonth = year * 100 + (month - 1);
      else this.currentMonth = (year - 1) * 100 + 12;
      this.render(container);
    });

    document.getElementById('next-month')?.addEventListener('click', () => {
      if (month < 12) this.currentMonth = year * 100 + (month + 1);
      else this.currentMonth = (year + 1) * 100 + 1;
      this.render(container);
    });
  },

  renderCalendar(year, month, progress) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startWeekday = firstDay.getDay(); // 0=Sun, 1=Mon, ...
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month - 1;

    const weekHeaders = ['日', '一', '二', '三', '四', '五', '六'];
    let html = '<div class="calendar-grid">';
    weekHeaders.forEach(d => {
      html += `<div class="calendar-header">${d}</div>`;
    });

    // Empty cells before first day
    for (let i = 0; i < startWeekday; i++) {
      html += '<div class="calendar-day empty"></div>';
    }

    // Day cells
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = isCurrentMonth && today.getDate() === d;
      const isFilled = progress.completedDays.some(cd => cd.startsWith(dateStr));

      let cls = 'calendar-day';
      if (isFilled) cls += ' filled';
      if (isToday) cls += ' today';

      html += `<div class="${cls}">${d}</div>`;
    }

    // Remaining empty cells
    const totalCells = startWeekday + daysInMonth;
    const remaining = (7 - (totalCells % 7)) % 7;
    for (let i = 0; i < remaining; i++) {
      html += '<div class="calendar-day empty"></div>';
    }

    html += '</div>';
    return html;
  },

  renderMonthlyChart(progress) {
    const monthNames = ['一月','二月','三月','四月','五月','六月',
                        '七月','八月','九月','十月','十一月','十二月'];
    const completedDays = progress.completedDays || [];

    return [1,2,3,4,5,6].map(mi => {
      const monthLessons = LESSONS[mi] || [];
      const monthDayIds = monthLessons.map(l => l.id);
      const completed = monthDayIds.filter(id => completedDays.includes(id)).length;
      const total = monthDayIds.length;
      const pct = total ? Math.round((completed / total) * 100) : 0;

      return `
        <div class="chart-bar-group">
          <span class="chart-label">${`M${mi}`}</span>
          <div class="chart-bar-track">
            <div class="chart-bar-fill" style="width:${pct}%"></div>
          </div>
          <span class="chart-value">${completed}/${total}</span>
        </div>
      `;
    }).join('');
  },

  getPhaseInfo(completed) {
    if (completed === 0) {
      return '🎯 还没开始呢！去 <a href="#lesson" style="color:var(--accent)">今日课程</a> 开始你的学习之旅吧！';
    }
    if (completed < 30) return '🌱 第一阶段：基础音名与指板入门 — 继续加油！';
    if (completed < 60) return '📚 第二阶段：音阶与调式 — 你在构建音乐词汇！';
    if (completed < 90) return '🎵 第三阶段：和弦构造与进行 — 和声的世界在等你！';
    if (completed < 120) return '🥁 第四阶段：节奏与律动 — 感受律动的力量！';
    if (completed < 150) return '🎸 第五阶段：旋律创作与即兴 — 释放你的创造力！';
    if (completed < 180) return '✍️ 第六阶段：作曲实践 — 准备创作你的第一首歌！';
    return '🏆 恭喜完成全部 180 天课程！你已经是吉他乐理达人了！';
  }
};
