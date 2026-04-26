const AIChat = {
  isOpen: false,
  apiKey: null,
  provider: 'anthropic',
  messages: [],
  contextInfo: '',
  abortController: null,

  PROVIDERS: {
    anthropic: {
      name: 'Anthropic Claude',
      endpoint: 'https://api.anthropic.com/v1/messages',
      model: 'claude-3-haiku-20240307',
      headers: (key) => ({
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      }),
      body: (sysPrompt, msgs) => ({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1024,
        system: sysPrompt,
        messages: msgs,
        stream: true
      }),
      parseStream(line) {
        if (!line.startsWith('data: ')) return null;
        const data = line.slice(6).trim();
        if (!data || data === '[DONE]') return null;
        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
            return parsed.delta.text;
          }
        } catch {}
        return null;
      }
    },
    deepseek: {
      name: 'DeepSeek',
      endpoint: 'https://api.deepseek.com/chat/completions',
      model: 'deepseek-chat',
      headers: (key) => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      }),
      body: (sysPrompt, msgs) => ({
        model: 'deepseek-chat',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: sysPrompt },
          ...msgs
        ],
        stream: true
      }),
      parseStream(line) {
        if (!line.startsWith('data: ')) return null;
        const data = line.slice(6).trim();
        if (!data || data === '[DONE]') return null;
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          return content || null;
        } catch {}
        return null;
      }
    },
    openai: {
      name: 'OpenAI',
      endpoint: 'https://api.openai.com/v1/chat/completions',
      model: 'gpt-4o-mini',
      headers: (key) => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      }),
      body: (sysPrompt, msgs) => ({
        model: 'gpt-4o-mini',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: sysPrompt },
          ...msgs
        ],
        stream: true
      }),
      parseStream(line) {
        if (!line.startsWith('data: ')) return null;
        const data = line.slice(6).trim();
        if (!data || data === '[DONE]') return null;
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          return content || null;
        } catch {}
        return null;
      }
    }
  },

  SYSTEM_PROMPT: `你是一位专业的吉他乐理导师。请用中文回答。规则：
1. 专注于吉他乐理、和弦、音阶、指板知识、摇滚技巧。
2. 回答要清晰有条理，对初学者友好。
3. 适当引用经典歌曲和音乐家作为例子。
4. 回答保持简洁但信息丰富（控制在200字以内）。
5. 如果学生问非音乐问题，礼貌地引导回音乐话题。
6. 鼓励学生，保持积极友好的态度。`,

  init() {
    this.apiKey = Storage.get('ai_api_key') || null;
    this.provider = Storage.get('ai_provider') || 'anthropic';
    this.injectHTML();
    this.bindEvents();
  },

  injectHTML() {
    const existing = document.getElementById('ai-chat-container');
    if (existing) existing.remove();

    const providerName = this.PROVIDERS[this.provider]?.name || 'AI';

    const div = document.createElement('div');
    div.id = 'ai-chat-container';
    div.innerHTML = `
      <button class="chat-bubble" id="chat-bubble-btn" title="问AI助手">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

      <div class="chat-panel" id="chat-panel">
        <div class="chat-header">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:18px">🎸</span>
            <h3>吉他AI助手</h3>
            <span style="font-size:10px;background:var(--bg-surface);padding:2px 6px;border-radius:4px;color:var(--text-muted)">${providerName}</span>
          </div>
          <div style="display:flex;gap:8px">
            <button id="chat-settings-btn" class="chat-icon-btn" title="设置">⚙️</button>
            <button id="chat-close-btn" class="chat-icon-btn" title="关闭">✕</button>
          </div>
        </div>

        <div class="chat-messages" id="chat-messages">
          ${!this.apiKey ? `
            <div class="message assistant">
              你好！我是你的吉他乐理助手 🎸<br><br>
              请先点击右上角 ⚙️ 设置 API 密钥和提供商，然后就可以开始聊天了！
            </div>
          ` : `
            <div class="message assistant">你好！我是你的吉他乐理助手 🎸 有什么关于吉他、和弦、音阶的问题尽管问！</div>
          `}
        </div>

        <div class="chat-input-area">
          <textarea id="chat-input" placeholder="输入你的问题..." rows="1" ${!this.apiKey ? 'disabled' : ''}></textarea>
          <button id="chat-send-btn" ${!this.apiKey ? 'disabled' : ''}>发送</button>
        </div>
      </div>
    `;

    document.body.appendChild(div);
  },

  bindEvents() {
    document.getElementById('chat-bubble-btn')?.addEventListener('click', () => this.toggle());
    document.getElementById('chat-close-btn')?.addEventListener('click', () => this.close());
    document.getElementById('chat-settings-btn')?.addEventListener('click', () => this.showSettings());

    const sendBtn = document.getElementById('chat-send-btn');
    const input = document.getElementById('chat-input');

    sendBtn?.addEventListener('click', () => this.sendMessage());
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
      setTimeout(() => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';
      }, 0);
    });
  },

  toggle() { this.isOpen ? this.close() : this.open(); },

  open() {
    this.isOpen = true;
    const panel = document.getElementById('chat-panel');
    const bubble = document.getElementById('chat-bubble-btn');
    if (panel) panel.classList.add('open');
    if (bubble) bubble.style.display = 'none';
    this.updateContext();
    setTimeout(() => {
      const msgs = document.getElementById('chat-messages');
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
      document.getElementById('chat-input')?.focus();
    }, 100);
  },

  close() {
    this.isOpen = false;
    const panel = document.getElementById('chat-panel');
    const bubble = document.getElementById('chat-bubble-btn');
    if (panel) panel.classList.remove('open');
    if (bubble) bubble.style.display = 'flex';
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  },

  showSettings() {
    const currentKey = this.apiKey || '';
    const currentProvider = this.provider;

    const modal = document.createElement('div');
    modal.style.cssText = `
      position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);z-index:2000;
      display:flex;align-items:center;justify-content:center;
    `;
    modal.innerHTML = `
      <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;width:380px;max-width:90vw">
        <h3 style="margin-bottom:16px">🔑 API 设置</h3>

        <label style="font-size:13px;color:var(--text-secondary);display:block;margin-bottom:4px">API 提供商</label>
        <select id="api-provider-select" style="width:100%;padding:10px;background:var(--bg-primary);border:1px solid var(--border);border-radius:var(--radius);color:var(--text-primary);font-size:14px;margin-bottom:12px">
          ${Object.entries(this.PROVIDERS).map(([id, p]) => `
            <option value="${id}" ${id === currentProvider ? 'selected' : ''}>${p.name}</option>
          `).join('')}
        </select>

        <label style="font-size:13px;color:var(--text-secondary);display:block;margin-bottom:4px">API 密钥</label>
        <input id="api-key-input" type="password" value="${currentKey}" placeholder="输入你的 API 密钥"
          style="width:100%;padding:10px;background:var(--bg-primary);border:1px solid var(--border);border-radius:var(--radius);color:var(--text-primary);font-size:14px;margin-bottom:16px">

        <div style="display:flex;gap:8px">
          <button id="api-key-save" style="flex:1;padding:10px;background:var(--accent);color:#000;border:none;border-radius:var(--radius);font-weight:600;cursor:pointer">保存</button>
          <button id="api-key-clear" style="flex:1;padding:10px;background:var(--bg-surface);color:var(--text-secondary);border:1px solid var(--border);border-radius:var(--radius);cursor:pointer">清除</button>
          <button id="api-key-cancel" style="flex:1;padding:10px;background:var(--bg-surface);color:var(--text-secondary);border:1px solid var(--border);border-radius:var(--radius);cursor:pointer">取消</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#api-key-save')?.addEventListener('click', () => {
      const key = modal.querySelector('#api-key-input').value.trim();
      const prov = modal.querySelector('#api-provider-select').value;
      if (key) {
        this.apiKey = key;
        this.provider = prov;
        Storage.set('ai_api_key', key);
        Storage.set('ai_provider', prov);
        this.resetChat();
      }
      modal.remove();
    });

    modal.querySelector('#api-key-clear')?.addEventListener('click', () => {
      this.apiKey = null;
      this.provider = 'anthropic';
      Storage.set('ai_api_key', '');
      Storage.set('ai_provider', 'anthropic');
      this.resetChat();
      modal.remove();
    });

    modal.querySelector('#api-key-cancel')?.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
  },

  resetChat() {
    this.messages = [];
    const panel = document.getElementById('chat-panel');
    if (panel) {
      panel.remove();
      this.injectHTML();
      this.bindEvents();
      if (this.isOpen) {
        const p = document.getElementById('chat-panel');
        if (p) p.classList.add('open');
      }
    }
  },

  updateContext() {
    const view = App.currentView || 'unknown';
    const contextParts = [`用户当前在「${view}」页面。`];
    if (view === 'lesson' && typeof LessonView !== 'undefined' && LessonView.currentDay) {
      contextParts.push(`正在学习第 ${LessonView.currentDay} 天的课程。`);
    }
    if (view === 'chords') {
      contextParts.push('正在浏览和弦库。');
    }
    if (view === 'riffs') {
      contextParts.push('正在浏览摇滚Riff库。');
    }
    if (view === 'progressions') {
      contextParts.push('正在使用和弦进行生成器。');
    }
    this.contextInfo = contextParts.join(' ');
  },

  get provider() {
    return this._provider || 'anthropic';
  },

  set provider(val) {
    this._provider = val;
  },

  async sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input?.value.trim();
    if (!text || !this.apiKey) return;

    input.value = '';
    input.style.height = 'auto';
    this.addMessage('user', text);
    this.showTyping();

    this.updateContext();
    const providerCfg = this.PROVIDERS[this.provider] || this.PROVIDERS.anthropic;
    const systemPrompt = this.SYSTEM_PROMPT + '\n\n当前上下文: ' + this.contextInfo;

    this.abortController = new AbortController();

    try {
      const msgs = this.messages.map(m => ({ role: m.role, content: m.content }));
      const response = await fetch(providerCfg.endpoint, {
        method: 'POST',
        headers: providerCfg.headers(this.apiKey),
        body: JSON.stringify(providerCfg.body(systemPrompt, msgs)),
        signal: this.abortController.signal
      });

      if (!response.ok) {
        const errText = await response.text();
        this.removeTyping();
        this.addMessage('assistant', `⚠️ 请求失败 (${response.status})：${errText}`);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let replyText = '';

      const msgContainer = document.getElementById('chat-messages');
      const typingMsg = msgContainer?.querySelector('.message.assistant:last-child');
      let replyElement = typingMsg;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const textDelta = providerCfg.parseStream(line);
          if (textDelta) {
            replyText += textDelta;
            if (replyElement) {
              replyElement.innerHTML = this.renderMarkdown(replyText);
              msgContainer.scrollTop = msgContainer.scrollHeight;
            }
          }
        }
      }

      if (replyElement) {
        replyElement.innerHTML = this.renderMarkdown(replyText);
      }
      this.messages.push({ role: 'assistant', content: replyText });

    } catch (err) {
      if (err.name === 'AbortError') return;
      this.removeTyping();
      this.addMessage('assistant', `⚠️ 错误：${err.message}`);
    } finally {
      this.abortController = null;
    }
  },

  showTyping() {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'message assistant typing';
    div.textContent = '思考中...';
    div.id = 'typing-indicator';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  },

  removeTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
  },

  addMessage(role, text) {
    const container = document.getElementById('chat-messages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = `message ${role}`;
    div.innerHTML = this.renderMarkdown(text);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    this.messages.push({ role, content: text });
  },

  renderMarkdown(text) {
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code style="background:rgba(79,195,247,0.15);padding:1px 4px;border-radius:3px;font-size:12px;color:var(--accent)">$1</code>')
      .replace(/\n/g, '<br>');
    return html;
  }
};
