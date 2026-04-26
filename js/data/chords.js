const CHORD_LIBRARY = {
  categories: [
    {
      id: 'power',
      name: '强力和弦 (Power Chords)',
      icon: '🎸',
      chords: [
        {
          id: 'power-e5',
          name: 'E5',
          positions: [
            { frets: [0, 2, 2, -1, -1, -1], fingers: [0, 1, 3, 0, 0, 0], rootString: 0, rootFret: 0, startFret: 1, label: 'E5 (开放)' },
            { frets: [-1, -1, -1, 2, 0, -1], fingers: [0, 0, 0, 1, 0, 0], rootString: 3, rootFret: 2, startFret: 1, label: 'E5 (A弦指型)' }
          ],
          intervals: ['1', '5'],
          notes: ['E', 'B'],
          description: '只有根音和五音，没有三音。中性、有力，摇滚的基石。',
          difficulty: 1
        },
        {
          id: 'power-a5',
          name: 'A5',
          positions: [
            { frets: [-1, 0, 2, 2, -1, -1], fingers: [0, 0, 1, 3, 0, 0], rootString: 1, rootFret: 0, startFret: 1, label: 'A5 (开放)' },
            { frets: [5, 5, 7, -1, -1, -1], fingers: [1, 1, 3, 0, 0, 0], rootString: 0, rootFret: 5, startFret: 5, label: 'A5 (6弦)' }
          ],
          intervals: ['1', '5'],
          notes: ['A', 'E'],
          description: 'A5 开放和 6弦5品两种按法，硬摇滚必备。',
          difficulty: 1
        },
        {
          id: 'power-d5',
          name: 'D5',
          positions: [
            { frets: [-1, -1, 0, 2, 3, -1], fingers: [0, 0, 0, 1, 3, 0], rootString: 2, rootFret: 0, startFret: 1, label: 'D5 (开放)' },
            { frets: [10, 10, 12, -1, -1, -1], fingers: [1, 1, 3, 0, 0, 0], rootString: 0, rootFret: 10, startFret: 10, label: 'D5 (6弦)' }
          ],
          intervals: ['1', '5'],
          notes: ['D', 'A'],
          description: 'D5 常用于降调歌曲，浑厚有力。',
          difficulty: 1
        },
        {
          id: 'power-g5',
          name: 'G5',
          positions: [
            { frets: [3, 5, 5, -1, -1, -1], fingers: [1, 3, 3, 0, 0, 0], rootString: 0, rootFret: 3, startFret: 3, label: 'G5 (6弦3品)' },
            { frets: [-1, 10, 10, 12, -1, -1], fingers: [0, 1, 1, 3, 0, 0], rootString: 1, rootFret: 10, startFret: 10, label: 'G5 (5弦)' }
          ],
          intervals: ['1', '5'],
          notes: ['G', 'D'],
          description: 'G5 在硬摇滚中很常见，适合与 D5、A5 搭配。',
          difficulty: 1
        },
        {
          id: 'power-c5',
          name: 'C5',
          positions: [
            { frets: [8, 10, 10, -1, -1, -1], fingers: [1, 3, 3, 0, 0, 0], rootString: 0, rootFret: 8, startFret: 8, label: 'C5 (6弦8品)' },
            { frets: [-1, 3, 5, 5, -1, -1], fingers: [0, 1, 3, 3, 0, 0], rootString: 1, rootFret: 3, startFret: 3, label: 'C5 (5弦3品)' }
          ],
          intervals: ['1', '5'],
          notes: ['C', 'G'],
          description: 'C5 从5弦3品开始，是经典的摇滚Riff把位。',
          difficulty: 1
        }
      ]
    },
    {
      id: 'barre',
      name: '横按和弦 (Barre Chords)',
      icon: '🔨',
      chords: [
        {
          id: 'barre-e-form',
          name: 'E指型横按 (大横按)',
          positions: [
            { frets: [1, 1, 2, 3, 3, 1], fingers: [1, 1, 2, 3, 4, 1], rootString: 0, rootFret: 1, startFret: 1, barre: { string: 0, fret: 1, finger: 1 }, label: 'F (E型 · 1品)' },
            { frets: [3, 3, 4, 5, 5, 3], fingers: [1, 1, 2, 3, 4, 1], rootString: 0, rootFret: 3, startFret: 3, barre: { string: 0, fret: 3, finger: 1 }, label: 'G (E型 · 3品)' },
            { frets: [5, 5, 6, 7, 7, 5], fingers: [1, 1, 2, 3, 4, 1], rootString: 0, rootFret: 5, startFret: 5, barre: { string: 0, fret: 5, finger: 1 }, label: 'A (E型 · 5品)' }
          ],
          intervals: ['1', '3', '5'],
          notes: ['F', 'A', 'C'],
          chordType: 'major',
          description: '食指横按6根弦，其余手指形成E和弦的形状。移动把位可得到任意大和弦。',
          difficulty: 3
        },
        {
          id: 'barre-em-form',
          name: 'Em指型横按 (小调大横按)',
          positions: [
            { frets: [1, 1, 2, 3, 3, 1], fingers: [1, 1, 2, 3, 4, 1], rootString: 0, rootFret: 1, startFret: 1, barre: { string: 0, fret: 1, finger: 1 }, label: 'F (Em型 · 1品)' },
            { frets: [3, 3, 4, 5, 5, 3], fingers: [1, 1, 2, 3, 4, 1], rootString: 0, rootFret: 3, startFret: 3, barre: { string: 0, fret: 3, finger: 1 }, label: 'Gm (Em型 · 3品)' },
            { frets: [5, 5, 6, 7, 7, 5], fingers: [1, 1, 2, 3, 4, 1], rootString: 0, rootFret: 5, startFret: 5, barre: { string: 0, fret: 5, finger: 1 }, label: 'Am (Em型 · 5品)' }
          ],
          intervals: ['1', 'b3', '5'],
          notes: ['F', 'Ab', 'C'],
          chordType: 'minor',
          description: '食指横按，其余手指按Em形状。轻轻抬起中指就是小调和弦。',
          difficulty: 3
        },
        {
          id: 'barre-a-form',
          name: 'A指型横按',
          positions: [
            { frets: [-1, 1, 1, 3, 3, 1], fingers: [0, 1, 1, 2, 3, 1], rootString: 1, rootFret: 1, startFret: 1, barre: { string: 1, fret: 1, finger: 1 }, label: 'Bb (A型 · 1品)' },
            { frets: [-1, 3, 3, 5, 5, 3], fingers: [0, 1, 1, 2, 3, 1], rootString: 1, rootFret: 3, startFret: 3, barre: { string: 1, fret: 3, finger: 1 }, label: 'C (A型 · 3品)' },
            { frets: [-1, 5, 5, 7, 7, 5], fingers: [0, 1, 1, 2, 3, 1], rootString: 1, rootFret: 5, startFret: 5, barre: { string: 1, fret: 5, finger: 1 }, label: 'D (A型 · 5品)' }
          ],
          intervals: ['1', '3', '5'],
          notes: ['Bb', 'D', 'F'],
          chordType: 'major',
          description: '食指横按5根弦，其余手指形成A和弦形状。比E指型少按6弦。',
          difficulty: 3
        }
      ]
    },
    {
      id: 'sus',
      name: '挂留和弦 (Sus Chords)',
      icon: '🎵',
      chords: [
        {
          id: 'sus-dsus2',
          name: 'Dsus2',
          positions: [
            { frets: [-1, -1, 0, 2, 3, 0], fingers: [0, 0, 0, 1, 2, 0], rootString: 2, rootFret: 0, startFret: 1, label: 'Dsus2 (开放)' }
          ],
          intervals: ['1', '2', '5'],
          notes: ['D', 'E', 'A'],
          description: '用2度音代替3音，产生开放、悬空的声音。',
          difficulty: 1
        },
        {
          id: 'sus-asus4',
          name: 'Asus4',
          positions: [
            { frets: [-1, 0, 2, 2, 3, 0], fingers: [0, 0, 1, 1, 2, 0], rootString: 1, rootFret: 0, startFret: 1, label: 'Asus4 (开放)' }
          ],
          intervals: ['1', '4', '5'],
          notes: ['A', 'D', 'E'],
          description: '用4度音代替3音。通常解决到A和弦，制造"悬空→解决"的听感。',
          difficulty: 1
        },
        {
          id: 'sus-esus4',
          name: 'Esus4',
          positions: [
            { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0], rootString: 0, rootFret: 0, startFret: 1, label: 'Esus4 (开放)' }
          ],
          intervals: ['1', '4', '5'],
          notes: ['E', 'A', 'B'],
          description: 'E和弦抬起中指就是Esus4！在摇滚歌曲中常用于前奏营造期待感。',
          difficulty: 1
        }
      ]
    },
    {
      id: 'dominant7',
      name: '属七和弦 (Dominant 7th)',
      icon: '🎶',
      chords: [
        {
          id: 'dom7-e7',
          name: 'E7',
          positions: [
            { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0], rootString: 0, rootFret: 0, startFret: 1, label: 'E7 (开放)' },
            { frets: [7, 7, 6, 7, 7, 7], fingers: [1, 1, 2, 3, 4, 1], rootString: 0, rootFret: 7, startFret: 7, barre: { string: 0, fret: 7, finger: 1 }, label: 'E7 (横按)' }
          ],
          intervals: ['1', '3', '5', 'b7'],
          notes: ['E', 'G#', 'B', 'D'],
          description: 'Rock\'n\'Roll 的核心和弦！E7 在蓝调和早期摇滚中无处不在。',
          difficulty: 1
        },
        {
          id: 'dom7-a7',
          name: 'A7',
          positions: [
            { frets: [-1, 0, 2, 0, 2, 0], fingers: [0, 0, 1, 0, 2, 0], rootString: 1, rootFret: 0, startFret: 1, label: 'A7 (开放)' }
          ],
          intervals: ['1', '3', '5', 'b7'],
          notes: ['A', 'C#', 'E', 'G'],
          description: 'A7 是12小节蓝调中的 IV7 和弦，是非常常用的蓝调和弦。',
          difficulty: 1
        },
        {
          id: 'dom7-d7',
          name: 'D7',
          positions: [
            { frets: [-1, -1, 0, 2, 1, 2], fingers: [0, 0, 0, 2, 1, 3], rootString: 2, rootFret: 0, startFret: 1, label: 'D7 (开放)' }
          ],
          intervals: ['1', '3', '5', 'b7'],
          notes: ['D', 'F#', 'A', 'C'],
          description: 'D7 在蓝调进行中作为 V7 和弦，制造强烈的解决导向。',
          difficulty: 1
        },
        {
          id: 'dom7-g7',
          name: 'G7',
          positions: [
            { frets: [3, 2, 0, 0, 0, 1], fingers: [2, 1, 0, 0, 0, 3], rootString: 0, rootFret: 3, startFret: 1, label: 'G7 (开放)' }
          ],
          intervals: ['1', '3', '5', 'b7'],
          notes: ['G', 'B', 'D', 'F'],
          description: 'G7 是C调中的V7和弦，从C→G7→F是经典的蓝调进行。',
          difficulty: 1
        }
      ]
    },
    {
      id: 'rock-open',
      name: '经典摇滚开放和弦',
      icon: '🤘',
      chords: [
        {
          id: 'rock-e',
          name: 'E 和弦',
          positions: [
            { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0], rootString: 0, rootFret: 0, startFret: 1, label: 'E (开放)' }
          ],
          intervals: ['1', '3', '5'],
          notes: ['E', 'G#', 'B'],
          description: 'E和弦是摇滚的"主场"和弦——6弦空弦就是根音，饱满有力。',
          difficulty: 1
        },
        {
          id: 'rock-a',
          name: 'A 和弦',
          positions: [
            { frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0], rootString: 1, rootFret: 0, startFret: 1, label: 'A (开放)' }
          ],
          intervals: ['1', '3', '5'],
          notes: ['A', 'C#', 'E'],
          description: 'A和弦有三种按法，最常用的是食指+中指+无名指按2、3、4弦2品。',
          difficulty: 1
        },
        {
          id: 'rock-d',
          name: 'D 和弦',
          positions: [
            { frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 2, 3, 1], rootString: 2, rootFret: 0, startFret: 1, label: 'D (开放)' }
          ],
          intervals: ['1', '3', '5'],
          notes: ['D', 'F#', 'A'],
          description: 'D和弦明亮开放，在民谣摇滚和流行朋克中大量使用。',
          difficulty: 1
        },
        {
          id: 'rock-c',
          name: 'C 和弦',
          positions: [
            { frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0], rootString: 1, rootFret: 3, startFret: 1, label: 'C (开放)' }
          ],
          intervals: ['1', '3', '5'],
          notes: ['C', 'E', 'G'],
          description: 'C和弦是音乐的中心——C大调的主和弦。按好它需要无名指和小指的配合。',
          difficulty: 2
        },
        {
          id: 'rock-g',
          name: 'G 和弦',
          positions: [
            { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3], rootString: 0, rootFret: 3, startFret: 1, label: 'G (开放)' },
            { frets: [3, 2, 0, 0, 3, 3], fingers: [2, 1, 0, 0, 3, 4], rootString: 0, rootFret: 3, startFret: 1, label: 'G (四指版)' }
          ],
          intervals: ['1', '3', '5'],
          notes: ['G', 'B', 'D'],
          description: 'G和弦饱满宽广，是许多摇滚歌曲的基础和弦。',
          difficulty: 2
        }
      ]
    }
  ]
};
