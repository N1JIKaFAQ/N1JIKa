const MusicTheory = {
  // Note names (12-tone equal temperament)
  NOTES: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  NOTES_CN: ['C', '升C', 'D', '升D', 'E', 'F', '升F', 'G', '升G', 'A', '升A', 'B'],
  NATURAL_NOTES: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],

  // Standard tuning: E2 A2 D3 G3 B3 E4
  STANDARD_TUNING: [40, 45, 50, 55, 59, 64], // MIDI note numbers

  // Get note name from MIDI number (e.g., 60 -> 'C4')
  midiToName(midi) {
    const octave = Math.floor(midi / 12) - 1;
    const note = this.NOTES[midi % 12];
    return `${note}${octave}`;
  },

  // Get note name in Chinese-friendly format
  midiToNameCN(midi) {
    const octave = Math.floor(midi / 12) - 1;
    const note = this.NOTES_CN[midi % 12];
    const octaveCN = ['低', '中', '高'][Math.min(octave - 2, 2)] || '';
    return `${note}${octaveCN}`;
  },

  // Get note without octave from MIDI
  midiToNote(midi) {
    return this.NOTES[midi % 12];
  },

  // Get MIDI number for string+fret (standard tuning)
  getMidiNote(stringIdx, fret, tuning) {
    const t = tuning || this.STANDARD_TUNING;
    return t[stringIdx] + fret;
  },

  // Get note name for string+fret
  getNoteAt(stringIdx, fret, tuning) {
    return this.midiToName(this.getMidiNote(stringIdx, fret, tuning));
  },

  // Interval in semitones between two notes
  interval(note1, note2) {
    return (note2 - note1 + 12) % 12;
  },

  // Interval name
  getIntervalName(semitones) {
    const names = {
      0: '纯一度', 1: '小二度', 2: '大二度',
      3: '小三度', 4: '大三度', 5: '纯四度',
      6: '增四度/减五度', 7: '纯五度', 8: '小六度',
      9: '大六度', 10: '小七度', 11: '大七度'
    };
    return names[semitones] || `${semitones}半音`;
  },

  // Major scale pattern: W-W-H-W-W-W-H
  MAJOR_SCALE: [0, 2, 4, 5, 7, 9, 11],

  // Minor scale pattern: W-H-W-W-H-W-W
  MINOR_SCALE: [0, 2, 3, 5, 7, 8, 10],

  // Pentatonic major: 1-2-3-5-6
  PENTATONIC_MAJOR: [0, 2, 4, 7, 9],

  // Pentatonic minor: 1-b3-4-5-b7
  PENTATONIC_MINOR: [0, 3, 5, 7, 10],

  // Get notes in a scale starting from a root
  getScale(rootMidi, pattern) {
    return pattern.map(interval => rootMidi + interval);
  },

  // Get all notes on the fretboard as grid [string][fret]
  getFretboardGrid(fretCount, tuning) {
    const t = tuning || this.STANDARD_TUNING;
    const grid = [];
    for (let s = 0; s < 6; s++) {
      const row = [];
      for (let f = 0; f <= fretCount; f++) {
        row.push(this.getNoteAt(s, f, t));
      }
      grid.push(row);
    }
    return grid;
  },

  // Chromatic scale notes
  CHROMATIC: ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'],

  // Circle of fifths
  CIRCLE_OF_FIFTHS: ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'Ab', 'Eb', 'Bb', 'F'],

  // Key signatures (major)
  KEY_SIGNATURES: {
    'C': [], 'G': ['F#'], 'D': ['F#', 'C#'],
    'A': ['F#', 'C#', 'G#'], 'E': ['F#', 'C#', 'G#', 'D#'],
    'B': ['F#', 'C#', 'G#', 'D#', 'A#'],
    'F#': ['F#', 'C#', 'G#', 'D#', 'A#', 'E#'],
    'C#': ['F#', 'C#', 'G#', 'D#', 'A#', 'E#', 'B#'],
    'F': ['Bb'], 'Bb': ['Bb', 'Eb'],
    'Eb': ['Bb', 'Eb', 'Ab'], 'Ab': ['Bb', 'Eb', 'Ab', 'Db'],
    'Db': ['Bb', 'Eb', 'Ab', 'Db', 'Gb'],
    'Gb': ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'],
    'Cb': ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb']
  },

  // Triad chord types
  TRIAD_TYPES: {
    'major': [0, 4, 7],
    'minor': [0, 3, 7],
    'dim': [0, 3, 6],
    'aug': [0, 4, 8]
  },

  // Seventh chord types
  SEVENTH_TYPES: {
    'maj7': [0, 4, 7, 11],
    'min7': [0, 3, 7, 10],
    'dom7': [0, 4, 7, 10],
    'dim7': [0, 3, 6, 9],
    'm7b5': [0, 3, 6, 10],
    'minMaj7': [0, 3, 7, 11],
    'aug7': [0, 4, 8, 10]
  }
};
