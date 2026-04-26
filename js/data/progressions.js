const ProgressionGenerator = {
  // Note name to MIDI mapping for root notes
  NOTE_TO_MIDI: { C:0, 'C#':1, Db:1, D:2, 'D#':3, Eb:3, E:4, F:5, 'F#':6, Gb:6, G:7, 'G#':8, Ab:8, A:9, 'A#':10, Bb:10, B:11 },

  // Major key diatonic triads
  MAJOR_DIATONIC: {
    degrees: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
    types: ['major', 'minor', 'minor', 'major', 'major', 'minor', 'dim']
  },

  // Natural minor diatonic triads
  MINOR_DIATONIC: {
    degrees: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'],
    types: ['minor', 'dim', 'major', 'minor', 'minor', 'major', 'major']
  },

  // Chord names in each major key
  CHORDS_IN_KEY: {
    'C':  { I:'C', ii:'Dm', iii:'Em', IV:'F', V:'G', vi:'Am', vii°:'Bdim' },
    'G':  { I:'G', ii:'Am', iii:'Bm', IV:'C', V:'D', vi:'Em', vii°:'F#dim' },
    'D':  { I:'D', ii:'Em', iii:'F#m', IV:'G', V:'A', vi:'Bm', vii°:'C#dim' },
    'A':  { I:'A', ii:'Bm', iii:'C#m', IV:'D', V:'E', vi:'F#m', vii°:'G#dim' },
    'E':  { I:'E', ii:'F#m', iii:'G#m', IV:'A', V:'B', vi:'C#m', vii°:'D#dim' },
    'F':  { I:'F', ii:'Gm', iii:'Am', IV:'Bb', V:'C', vi:'Dm', vii°:'Edim' },
    'Bb': { I:'Bb', ii:'Cm', iii:'Dm', IV:'Eb', V:'F', vi:'Gm', vii°:'Adim' },
  },

  // Minor key chords
  CHORDS_IN_MINOR_KEY: {
    'Am': { i:'Am', ii°:'Bdim', III:'C', iv:'Dm', v:'Em', VI:'F', VII:'G' },
    'Em': { i:'Em', ii°:'F#dim', III:'G', iv:'Am', v:'Bm', VI:'C', VII:'D' },
    'Bm': { i:'Bm', ii°:'C#dim', III:'D', iv:'Em', v:'F#m', VI:'G', VII:'A' },
    'F#m':{ i:'F#m', ii°:'G#dim', III:'A', iv:'Bm', v:'C#m', VI:'D', VII:'E' },
    'Dm': { i:'Dm', ii°:'Edim', III:'F', iv:'Gm', v:'Am', VI:'Bb', VII:'C' }
  },

  // Style templates (roman numerals)
  STYLES: {
    rock: {
      name: '摇滚',
      description: '经典摇滚风格，以I-IV-V为基础',
      useMinor: false,
      templates: [
        { progression: ['I', 'IV', 'V', 'IV'], weight: 3 },
        { progression: ['I', 'V', 'vi', 'IV'], weight: 3 },
        { progression: ['I', 'vi', 'IV', 'V'], weight: 2 },
        { progression: ['I', 'IV', 'V'], weight: 3 },
        { progression: ['ii', 'V', 'I'], weight: 1 },
        { progression: ['I', 'IV', 'I', 'V'], weight: 2 },
        { progression: ['I', 'iii', 'IV', 'V'], weight: 1 },
        { progression: ['I', 'V', 'IV', 'I'], weight: 2 }
      ]
    },
    punk: {
      name: '朋克',
      description: '快速简单的强力和弦进行',
      useMinor: false,
      templates: [
        { progression: ['I', 'IV', 'V', 'IV'], weight: 4 },
        { progression: ['I', 'V', 'IV', 'V'], weight: 3 },
        { progression: ['I', 'IV', 'V'], weight: 3 },
        { progression: ['I', 'V', 'vi', 'IV'], weight: 2 },
        { progression: ['I', 'bVII', 'IV', 'I'], weight: 2 },
        { progression: ['I', 'bVII', 'IV', 'V'], weight: 1 }
      ]
    },
    blues: {
      name: '布鲁斯',
      description: '12小节布鲁斯风格，以属七和弦为主',
      useMinor: false,
      templates: [
        { progression: ['I', 'I', 'I', 'I', 'IV', 'IV', 'I', 'I', 'V', 'IV', 'I', 'I'], weight: 5 },
        { progression: ['I', 'IV', 'I', 'V', 'IV', 'I'], weight: 3 },
        { progression: ['I', 'IV', 'V', 'IV'], weight: 2 }
      ]
    },
    metal: {
      name: '金属',
      description: '重型风格，小调为主，使用bII等黑暗色彩',
      useMinor: true,
      templates: [
        { progression: ['i', 'VI', 'VII', 'i'], weight: 3 },
        { progression: ['i', 'iv', 'VII', 'i'], weight: 2 },
        { progression: ['i', 'VII', 'VI', 'VII'], weight: 2 },
        { progression: ['i', 'iv', 'v', 'VI'], weight: 1 },
        { progression: ['i', 'bII', 'VII', 'i'], weight: 1 },
        { progression: ['i', 'VI', 'iv', 'v'], weight: 1 },
        { progression: ['i', 'iii', 'VI', 'VII'], weight: 1 }
      ]
    }
  },

  // Chord diagrams for common chords
  CHORD_DIAGRAMS: {
    'C':  { frets: [-1, 3, 2, 0, 1, 0], rootString: 1, rootFret: 3, startFret: 1 },
    'Dm': { frets: [-1, -1, 0, 2, 3, 1], rootString: 2, rootFret: 0, startFret: 1 },
    'Em': { frets: [0, 2, 2, 0, 0, 0], rootString: 0, rootFret: 0, startFret: 1 },
    'F':  { frets: [1, 1, 2, 3, 3, 1], rootString: 0, rootFret: 1, startFret: 1 },
    'G':  { frets: [3, 2, 0, 0, 0, 3], rootString: 0, rootFret: 3, startFret: 1 },
    'Am': { frets: [-1, 0, 2, 2, 1, 0], rootString: 1, rootFret: 0, startFret: 1 },
    'Bdim': { frets: [-1, 2, 3, 4, -1, -1], rootString: 1, rootFret: 2, startFret: 1 },
    'D':  { frets: [-1, -1, 0, 2, 3, 2], rootString: 2, rootFret: 0, startFret: 1 },
    'A':  { frets: [-1, 0, 2, 2, 2, 0], rootString: 1, rootFret: 0, startFret: 1 },
    'E':  { frets: [0, 2, 2, 1, 0, 0], rootString: 0, rootFret: 0, startFret: 1 },
    'Bm': { frets: [-1, 2, 2, 4, 4, -1], rootString: 1, rootFret: 2, startFret: 1 },
    'F#m':{ frets: [-1, 4, 4, 6, 5, -1], rootString: 1, rootFret: 4, startFret: 4 },
    'C#m':{ frets: [-1, 4, 5, 6, 6, -1], rootString: 1, rootFret: 4, startFret: 4 },
    'G#m':{ frets: [-1, 6, 6, 8, 8, -1], rootString: 1, rootFret: 6, startFret: 6 },
    'Bb': { frets: [-1, 1, 1, 3, 3, 1], rootString: 1, rootFret: 1, startFret: 1 },
    'Eb': { frets: [-1, -1, 1, 3, 4, 1], rootString: 2, rootFret: 1, startFret: 1 },
    'F#dim':{ frets: [-1, 2, 3, 5, -1, -1], rootString: 1, rootFret: 2, startFret: 1 },
    'Edim':{ frets: [-1, 1, 2, 3, -1, -1], rootString: 1, rootFret: 1, startFret: 1 },
    'Gm': { frets: [-1, 3, 3, 5, 5, 3], rootString: 1, rootFret: 3, startFret: 3 },
    'C#': { frets: [-1, 4, 3, 1, 2, 1], rootString: 1, rootFret: 4, startFret: 1 },
    'G#': { frets: [-1, 6, 5, 4, 6, 4], rootString: 1, rootFret: 4, startFret: 4 },
    'D#': { frets: [-1, -1, 3, 5, 5, 3], rootString: 2, rootFret: 3, startFret: 3 },
    'A#': { frets: [-1, 1, 1, 3, 3, 1], rootString: 1, rootFret: 1, startFret: 1 }
  },

  // Minor key chord diagrams
  MINOR_CHORD_DIAGRAMS: {
    'Am': { frets: [-1, 0, 2, 2, 1, 0], rootString: 1, rootFret: 0, startFret: 1 },
    'Em': { frets: [0, 2, 2, 0, 0, 0], rootString: 0, rootFret: 0, startFret: 1 },
    'Bm': { frets: [-1, 2, 2, 4, 4, -1], rootString: 1, rootFret: 2, startFret: 1 },
    'C':  { frets: [-1, 3, 2, 0, 1, 0], rootString: 1, rootFret: 3, startFret: 1 },
    'D':  { frets: [-1, -1, 0, 2, 3, 2], rootString: 2, rootFret: 0, startFret: 1 },
    'F':  { frets: [1, 1, 2, 3, 3, 1], rootString: 0, rootFret: 1, startFret: 1 },
    'G':  { frets: [3, 2, 0, 0, 0, 3], rootString: 0, rootFret: 3, startFret: 1 },
    'A':  { frets: [-1, 0, 2, 2, 2, 0], rootString: 1, rootFret: 0, startFret: 1 },
    'Dm': { frets: [-1, -1, 0, 2, 3, 1], rootString: 2, rootFret: 0, startFret: 1 },
    'F#m':{ frets: [-1, 4, 4, 6, 5, -1], rootString: 1, rootFret: 4, startFret: 4 },
    'Gm': { frets: [-1, 3, 3, 5, 5, 3], rootString: 1, rootFret: 3, startFret: 3 },
    'Bb': { frets: [-1, 1, 1, 3, 3, 1], rootString: 1, rootFret: 1, startFret: 1 },
    'C#m':{ frets: [-1, 4, 5, 6, 6, -1], rootString: 1, rootFret: 4, startFret: 4 },
    'G#dim':{ frets: [-1, 3, 4, 6, -1, -1], rootString: 1, rootFret: 3, startFret: 3 },
    'Edim':{ frets: [-1, 1, 2, 3, -1, -1], rootString: 1, rootFret: 1, startFret: 1 },
    'Bdim':{ frets: [-1, 2, 3, 4, -1, -1], rootString: 1, rootFret: 2, startFret: 1 }
  },

  // Pick a weighted random item from array
  _weightedRandom(items) {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    let rand = Math.random() * totalWeight;
    for (const item of items) {
      rand -= item.weight;
      if (rand <= 0) return item;
    }
    return items[items.length - 1];
  },

  // Map roman numeral to actual chord name in given key
  _romanToChord(roman, key, useMinor) {
    const keyMap = useMinor
      ? (this.CHORDS_IN_MINOR_KEY[key] || this.CHORDS_IN_MINOR_KEY['Am'])
      : (this.CHORDS_IN_KEY[key] || this.CHORDS_IN_KEY['C']);

    // Handle borrowed chords (bIII, bVI, bVII, bII etc.)
    const match = roman.match(/^([b#]?)([ivIV]+)([°]?)$/);
    if (!match) return { name: 'C', roman: roman };

    const accidental = match[1];
    const degree = match[2];
    const suffix = match[3] || '';

    // Try direct lookup first
    if (keyMap[roman]) {
      return { name: keyMap[roman], roman: roman };
    }

    // For borrowed chords, determine the note offset
    const degreeMap = { 'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,
                        'i':1,'ii':2,'iii':3,'iv':4,'v':5,'vi':6,'vii':7 };
    const baseDegree = degreeMap[degree] || 1;

    // Get root note of the key
    const noteOrder = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    let keyIndex = noteOrder.indexOf(key.replace(/m$/,''));
    if (keyIndex === -1) keyIndex = 0;

    // Major scale intervals from root
    const majorIntervals = [0, 2, 4, 5, 7, 9, 11];
    let noteIndex = (keyIndex + majorIntervals[baseDegree - 1]) % 12;

    // Apply accidental
    if (accidental === 'b') noteIndex = (noteIndex - 1 + 12) % 12;
    if (accidental === '#') noteIndex = (noteIndex + 1) % 12;

    const rootNote = accidental === 'b'
      ? ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'][noteIndex]
      : noteOrder[noteIndex];

    // Determine chord type based on degree
    const isMajor = ['I','IV','V'].includes(degree);
    const isMinor = ['ii','iii','vi'].includes(degree);
    const isDim = degree === 'vii' || suffix === '°';

    let chordName;
    if (isDim) {
      chordName = rootNote + 'dim';
    } else if (isMinor) {
      chordName = rootNote + 'm';
    } else if (isMajor) {
      chordName = rootNote;
    } else {
      chordName = degree === degree.toLowerCase() ? rootNote + 'm' : rootNote;
    }

    return { name: chordName, roman: roman };
  },

  getDiagram(chordName) {
    return this.CHORD_DIAGRAMS[chordName] || this.MINOR_CHORD_DIAGRAMS[chordName] || null;
  },

  generate(key, styleId) {
    const style = this.STYLES[styleId];
    if (!style) return null;

    const template = this._weightedRandom(style.templates);
    const useMinor = style.useMinor;

    // Normalize key for minor
    let normalizedKey = key;
    if (useMinor) {
      const relativeMinors = { 'C':'Am', 'G':'Em', 'D':'Bm', 'A':'F#m', 'E':'C#m', 'F':'Dm', 'Bb':'Gm' };
      normalizedKey = relativeMinors[key] || key + 'm';
    }

    const chords = template.progression.map(roman => {
      const chordInfo = this._romanToChord(roman, useMinor ? normalizedKey : key, useMinor);
      return {
        roman: chordInfo.roman,
        name: chordInfo.name,
        diagram: this.getDiagram(chordInfo.name)
      };
    });

    // Generate a tempo based on style
    const tempos = { rock: '120', punk: '180', blues: '100', metal: '140' };

    return {
      key: useMinor ? normalizedKey : key,
      style: style.name,
      styleDescription: style.description,
      tempo: tempos[styleId] || '120',
      timeSignature: styleId === 'blues' ? '4/4' : '4/4',
      chords: chords,
      progressionRoman: template.progression,
      length: template.progression.length
    };
  },

  getRandomKey() {
    const keys = ['C', 'G', 'D', 'A', 'E', 'F', 'Bb'];
    return keys[Math.floor(Math.random() * keys.length)];
  },

  getKeys() {
    return ['C', 'G', 'D', 'A', 'E', 'F', 'Bb'];
  },

  getStyles() {
    return Object.entries(this.STYLES).map(([id, style]) => ({
      id,
      name: style.name,
      description: style.description
    }));
  }
};
