const RIFF_LIBRARY = [
  {
    id: 'smoke-water',
    title: 'Smoke on the Water',
    artist: 'Deep Purple',
    difficulty: 1,
    tags: ['经典', '硬摇滚', '入门必学'],
    tuning: '标准调弦',
    timeSignature: '4/4',
    tempo: '约 110 BPM',
    key: 'G 小调五声音阶',
    scaleAnalysis: {
      scale: 'G 小调五声音阶',
      notes: ['G', 'Bb', 'C', 'D', 'F']
    },
    chordContext: 'G5 - C5 - G5',
    tabs: [
      { section: '主 Riff', lines: [
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|-------------------------------|',
        'E|--3-5-6-5-3---3-5-6-5-3-------|',
        '  |                           |',
        '   让每个音延音充分'
      ]}
    ],
    structure: '全曲围绕主riff变化重复，间奏有变奏和吉他独奏',
    practiceNotes: '用下-上-下-上-下交替拨弦。注意附点节奏的准确性——这是riff的"味道"所在。'
  },
  {
    id: 'back-in-black',
    title: 'Back in Black',
    artist: 'AC/DC',
    difficulty: 2,
    tags: ['经典', '硬摇滚', '节奏'],
    tuning: '标准调弦 (乐队实际用降半音)',
    timeSignature: '4/4',
    tempo: '约 130 BPM',
    key: 'E 大调 / E 布鲁斯音阶',
    scaleAnalysis: {
      scale: 'E 布鲁斯音阶',
      notes: ['E', 'G', 'A', 'Bb', 'B', 'D']
    },
    chordContext: 'E5 - D5 - A5 强力和弦进行',
    tabs: [
      { section: '前奏 Riff', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|----------2-2-4-4-2-2---------|',
        'E|--0-0-4-4-------------0-0---0-|'
      ]}
    ],
    structure: '前奏riff→主歌→副歌→间奏SOLO→重复→尾奏',
    practiceNotes: '注意反拍的感觉——很多音在第1拍的后半拍开始。右手下拨要有力，用闷音(Palm Muting)制造冲击感。'
  },
  {
    id: 'come-as-you-are',
    title: 'Come As You Are',
    artist: 'Nirvana',
    difficulty: 1,
    tags: ['经典', '垃圾摇滚', '入门'],
    tuning: '标准调弦 (降半音)',
    timeSignature: '4/4',
    tempo: '约 90 BPM',
    key: 'E 小调 / E 多利亚',
    scaleAnalysis: {
      scale: 'E 多利亚调式',
      notes: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D']
    },
    chordContext: 'Em - G - D - A (或 F#m 等变化)',
    tabs: [
      { section: '前奏 Riff', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|--0-0-2-2-3-3-2-0-------------|',
        'E|---------------------3-3-0----|'
      ]}
    ],
    structure: '前奏riff贯穿全曲，主歌和副歌在riff基础上叠加人声',
    practiceNotes: '使用清音(clean)音色加合唱效果器(chorus)。保持拨弦均匀轻柔，不要用力过猛。'
  },
  {
    id: 'seven-nation-army',
    title: 'Seven Nation Army',
    artist: 'The White Stripes',
    difficulty: 1,
    tags: ['经典', '摇滚', '入门必学', '低音riff'],
    tuning: '标准调弦 (降半音)',
    timeSignature: '4/4',
    tempo: '约 120 BPM',
    key: 'E 小调',
    scaleAnalysis: {
      scale: 'E 小调五声音阶',
      notes: ['E', 'G', 'A', 'B', 'D']
    },
    chordContext: '单音低音线，和弦背景为 Em - G - D - A',
    tabs: [
      { section: '主 Riff (低音线)', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|----------2-3-5-3-2-----------|',
        'E|--0-3-5-5-----------5-3-0----|'
      ]}
    ],
    structure: '低音riff贯穿全曲，整首歌建立在这个riff之上',
    practiceNotes: '用全下拨弹奏每个音，保持音量均匀。这个riff的精髓在于"简单但坚定"——每个音都要弹踏实。'
  },
  {
    id: 'enter-sandman',
    title: 'Enter Sandman',
    artist: 'Metallica',
    difficulty: 3,
    tags: ['经典', '金属', '节奏'],
    tuning: '标准调弦 (降半音)',
    timeSignature: '4/4',
    tempo: '约 120 BPM',
    key: 'E 小调',
    scaleAnalysis: {
      scale: 'E 小调 / E 弗里几亚',
      notes: ['E', 'F', 'G', 'A', 'B', 'C', 'D']
    },
    chordContext: 'Em - G - A - C 等 (大量强力和弦)',
    tabs: [
      { section: '前奏 (清音)', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|--0-0-0-0-0-0-0-0-------------|',
        'D|--0-0-0-0-0-0-0-0-------------|',
        'A|--2-2-2-2-1-1-1-1-------------|',
        'E|-------------------------------|'
      ]},
      { section: '主 Riff (失真)', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|----------2-2-4-2-5-4-2-------|',
        'A|--2-2-0-0-0-0-0-0-0-0-0-------|',
        'E|--0-0-------------------------|'
      ]}
    ],
    structure: '清音前奏→失真主riff→主歌→副歌→SOLO→重复→尾奏',
    practiceNotes: '前奏用清音，进入主riff切换失真。注意闷音(Palm Muting)控制——金属节奏的"chug"感来自闷音。'
  },
  {
    id: 'whole-lotta-love',
    title: 'Whole Lotta Love',
    artist: 'Led Zeppelin',
    difficulty: 2,
    tags: ['经典', '硬摇滚', '蓝调'],
    tuning: '标准调弦 (降半音)',
    timeSignature: '4/4',
    tempo: '约 90 BPM',
    key: 'E 多利亚 / E 布鲁斯',
    scaleAnalysis: {
      scale: 'E 布鲁斯音阶',
      notes: ['E', 'G', 'A', 'Bb', 'B', 'D']
    },
    chordContext: 'E5 - D5 - C5 - A5',
    tabs: [
      { section: '主 Riff', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|--2-2-3-2-0-2-0---------------|',
        'E|--0-0-0-0-0-0-0---------------|'
      ]}
    ],
    structure: '标志性riff开场→主歌→副歌→迷幻中段→回归riff→尾奏',
    practiceNotes: 'riff的节奏非常独特——注意反拍的切分感。使用fuzz音色获得那种"厚重"的质感。'
  },
  {
    id: 'satisfaction',
    title: "(I Can't Get No) Satisfaction",
    artist: 'The Rolling Stones',
    difficulty: 1,
    tags: ['经典', '摇滚', '入门'],
    tuning: '标准调弦',
    timeSignature: '4/4',
    tempo: '约 130 BPM',
    key: 'E 多利亚',
    scaleAnalysis: {
      scale: 'E 多利亚调式',
      notes: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D']
    },
    chordContext: 'E - D - A',
    tabs: [
      { section: '前奏 Riff (失真)', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|-------------------------------|',
        'E|--0-2-3-0-2-3-5-3-2-0---------|'
      ]}
    ],
    structure: '前奏riff→主歌→副歌→重复→尾奏',
    practiceNotes: '这款fuzz音色是摇滚史上最著名的音色之一。用下拨弹每个音，注意时值的准确性。'
  },
  {
    id: 'day-tripper',
    title: 'Day Tripper',
    artist: 'The Beatles',
    difficulty: 2,
    tags: ['经典', '摇滚', '节奏'],
    tuning: '标准调弦',
    timeSignature: '4/4',
    tempo: '约 135 BPM',
    key: 'E 大调五声音阶',
    scaleAnalysis: {
      scale: 'E 大调五声音阶',
      notes: ['E', 'F#', 'G#', 'B', 'C#']
    },
    chordContext: 'E - F#m - G#m - A 等',
    tabs: [
      { section: '主 Riff', lines: [
        'e|-------------------------------|',
        'B|--0-2-4-2-0-2-4-2-0-----------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|-------------------------------|',
        'E|-------------------------------|'
      ]}
    ],
    structure: 'riff循环→主歌→副歌→solo→重复→尾奏',
    practiceNotes: '在2弦(B弦)上演奏，注意拨片交替——上上下上。保持轻快、跳跃的感觉。'
  },
  {
    id: 'iron-man',
    title: 'Iron Man',
    artist: 'Black Sabbath',
    difficulty: 2,
    tags: ['经典', '金属', '重型'],
    tuning: '标准调弦 (降半音)',
    timeSignature: '4/4',
    tempo: '约 90 BPM',
    key: 'E 小调五声音阶 / E 布鲁斯',
    scaleAnalysis: {
      scale: 'E 布鲁斯音阶',
      notes: ['E', 'G', 'A', 'Bb', 'B', 'D']
    },
    chordContext: 'E5 - G5 - A5',
    tabs: [
      { section: '主 Riff', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|--7-7-7-8-7-5-3-5-3-0---------|',
        'E|--0-0-0-0-0-0-0-0-0-0---------|'
      ]}
    ],
    structure: '标志性前奏→主riff→主歌→副歌→重复',
    practiceNotes: '用全下拨弹奏所有音。每3个7品音一组，制造沉重的"doom"感。慢而重才是关键！'
  },
  {
    id: 'message-bottle',
    title: 'Message in a Bottle',
    artist: 'The Police',
    difficulty: 3,
    tags: ['经典', '新浪潮', '节奏'],
    tuning: '标准调弦',
    timeSignature: '6/8',
    tempo: '约 140 BPM (六拍感)',
    key: 'C# 小调',
    scaleAnalysis: {
      scale: 'C# 小调五声音阶',
      notes: ['C#', 'E', 'F#', 'G#', 'B']
    },
    chordContext: 'C#m - A - E - B',
    tabs: [
      { section: '主 Riff (节奏吉他)', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|--6-6-6-6-6-6-4-4-4-4-4-4-----|',
        'A|--4-4-4-4-4-4-2-2-2-2-2-2-----|',
        'E|-------------------------------|'
      ]}
    ],
    structure: '前奏(标志性节奏吉他)→主歌→副歌→SOLO→重复',
    practiceNotes: '6/8拍，每小节6拍，每三拍一组。右手保持稳定的上-下-上-下扫弦模式。这是一首节奏吉他的绝佳练习曲。'
  },
  {
    id: 'sunshine-love',
    title: 'Sunshine of Your Love',
    artist: 'Cream',
    difficulty: 2,
    tags: ['经典', '蓝调摇滚', '节奏'],
    tuning: '标准调弦',
    timeSignature: '4/4',
    tempo: '约 110 BPM',
    key: 'D 布鲁斯音阶',
    scaleAnalysis: {
      scale: 'D 布鲁斯音阶',
      notes: ['D', 'F', 'G', 'Ab', 'A', 'C']
    },
    chordContext: 'D5 - C5 - A5 - G5',
    tabs: [
      { section: '主 Riff', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|--5-5-7-5-5-7-5-5-5-----------|',
        'A|--3-3-5-3-3-5-3-3-3-----------|',
        'E|-------------------------------|'
      ]}
    ],
    structure: '标志性riff→主歌→副歌→SOLO→重复→尾奏',
    practiceNotes: '用强力和弦按法。注意节奏——第三拍有一个"等待"的感觉，不要赶拍子。'
  },
  {
    id: 'rock-you',
    title: 'We Will Rock You',
    artist: 'Queen',
    difficulty: 1,
    tags: ['经典', '摇滚', '入门', '节奏'],
    tuning: '标准调弦',
    timeSignature: '4/4',
    tempo: '约 80 BPM',
    key: 'E 小调',
    scaleAnalysis: {
      scale: 'E 小调五声音阶',
      notes: ['E', 'G', 'A', 'B', 'D']
    },
    chordContext: 'E5 - D5 - A5',
    tabs: [
      { section: '吉他节奏 (配合鼓点)', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|--2-2-2-------2-2-2-----------|',
        'A|--2-2-2-------0-0-0-----------|',
        'E|--0-0-0-----------------------|'
      ]}
    ],
    structure: '标志性 stomp-stomp-clap 节奏 → 副歌riff → 重复',
    practiceNotes: '跟随"咚咚-啪"的节奏弹奏。在"咚-咚"时弹奏强力和弦，"啪"时休止。'
  },
  {
    id: 'purple-haze',
    title: 'Purple Haze',
    artist: 'Jimi Hendrix',
    difficulty: 4,
    tags: ['经典', '迷幻摇滚', '进阶'],
    tuning: '标准调弦 (降半音)',
    timeSignature: '4/4',
    tempo: '约 100 BPM',
    key: 'E 大调 / E 布鲁斯',
    scaleAnalysis: {
      scale: 'E 布鲁斯音阶',
      notes: ['E', 'G', 'A', 'Bb', 'B', 'D']
    },
    chordContext: 'E7#9 (标志性的Hendrix和弦) - G - A - D',
    tabs: [
      { section: '前奏 Riff', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|--4-4-4-5-4-4-5-7-5-4---------|',
        'E|--0-0-0-0-0-0-0-0-0-0---------|'
      ]}
    ],
    structure: '标志性前奏→主歌→副歌→迷幻中段→SOLO→尾奏',
    practiceNotes: '使用fuzz音色。前奏riff配合弯音(bend)——在5弦7品推弦到8品的音高。节奏要有"摇晃感"。'
  },
  {
    id: 'highway-hell',
    title: 'Highway to Hell',
    artist: 'AC/DC',
    difficulty: 2,
    tags: ['经典', '硬摇滚', '节奏'],
    tuning: '标准调弦 (降半音)',
    timeSignature: '4/4',
    tempo: '约 120 BPM',
    key: 'A 大调五声音阶',
    scaleAnalysis: {
      scale: 'A 大调五声音阶',
      notes: ['A', 'B', 'C#', 'E', 'F#']
    },
    chordContext: 'A5 - G5 - D5',
    tabs: [
      { section: '节奏 Riff', lines: [
        'e|-------------------------------|',
        'B|-------------------------------|',
        'G|-------------------------------|',
        'D|-------------------------------|',
        'A|--0-0-2-4-4-4-5-4-2-0---------|',
        'E|--0-0-0-0-0-0-0-0-0-0---------|'
      ]}
    ],
    structure: '前奏→主歌→副歌→SOLO→重复→尾奏',
    practiceNotes: '经典的AC/DC节奏——全下拨！每个音都要结实有力。注意反拍上的重音。'
  }
];
