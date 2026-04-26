const FretboardRenderer = {
  canvas: null,
  ctx: null,
  svg: null,

  // Colors
  colors: {
    bg: '#f0e8d8',        // fingerboard light wood
    fret: '#999',          // fret wire
    string: {
      0: '#c8a96e', // 6th (E) - thick, wound
      1: '#c8a96e', // 5th (A)
      2: '#c8a96e', // 4th (D)
      3: '#b8943c', // 3rd (G)
      4: '#888',    // 2nd (B)
      5: '#aaa'     // 1st (high E) - thin
    },
    note: '#74b9cf',
    noteActive: '#e17055',
    noteHighlight: '#fdcb6e',
    text: '#444',
    root: '#e17055',
    scaleNote: '#74b9cf',
    fretMarker: '#999'
  },

  // Layout params
  layout: {
    paddingX: 30,
    paddingY: 40,
    stringSpacing: 0,
    fretStartX: 0,
    nutWidth: 4,
    dotRadius: 4,
    stringRadius: [1.8, 1.6, 1.4, 1.2, 0.9, 0.7],
    fretCount: 22
  },

  // Create SVG fretboard
  render(container, options = {}) {
    const fretCount = options.fretCount || 22;
    const width = options.width || 800;
    const height = options.height || 220;
    const highlight = options.highlight || null;
    const tuning = options.tuning || MusicTheory.STANDARD_TUNING;
    const showNotes = options.showNotes !== false;

    const padX = this.layout.paddingX;
    const padY = this.layout.paddingY;
    const usableW = width - padX * 2;
    const usableH = height - padY * 2;
    const stringSpacing = usableH / 5;
    const fretStartX = padX;

    // Scale length for fret positioning
    const scaleLength = usableW * 1.1;
    const fretOffsetX = padX;

    // Build SVG
    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8dcc8"/>
          <stop offset="50%" stop-color="#d4c4a8"/>
          <stop offset="100%" stop-color="#e8dcc8"/>
        </linearGradient>
        <filter id="fb-shadow"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.3"/></filter>
      </defs>
      <rect x="0" y="0" width="${width}" height="${height}" rx="8" fill="#ffffff"/>
      <rect x="${fretOffsetX - 2}" y="${padY - 5}" width="${usableW + 4}" height="${usableH + 10}" rx="3" fill="url(#fb-bg)"/>
`;

    // Fret positions (logarithmic spacing)
    const fretPos = [fretOffsetX];
    for (let f = 1; f <= fretCount; f++) {
      const pos = fretOffsetX + scaleLength * (1 - Math.pow(2, -f / 12));
      if (pos < padX + usableW) fretPos.push(pos);
    }
    this.layout.fretStartX = fretOffsetX;

    // Fret markers (dots on 3rd, 5th, 7th, 9th, 12th, 15th, 17th, 19th, 21st)
    const markerFrets = [3, 5, 7, 9, 12, 15, 17, 19, 21];
    for (const mf of markerFrets) {
      if (mf < fretPos.length) {
        const mx = (fretPos[mf - 1] + fretPos[mf]) / 2;
        if (mf === 12) {
          // Double dot
          svg += `<circle cx="${mx}" cy="${padY + usableH * 0.33}" r="4" fill="#bbb"/>`;
          svg += `<circle cx="${mx}" cy="${padY + usableH * 0.67}" r="4" fill="#bbb"/>`;
        } else {
          svg += `<circle cx="${mx}" cy="${padY + usableH / 2}" r="4" fill="#bbb"/>`;
        }
      }
    }

    // Draw fret lines
    for (let f = 0; f < fretPos.length; f++) {
      const opacity = f === 0 ? '0.8' : '0.4';
      svg += `<line x1="${fretPos[f]}" y1="${padY}" x2="${fretPos[f]}" y2="${padY + usableH}" stroke="#888" stroke-opacity="${opacity}" stroke-width="${f === 0 ? 4 : 1.5}"/>`;
    }

    // Draw strings
    for (let s = 0; s < 6; s++) {
      const y = padY + s * stringSpacing;
      const radius = this.layout.stringRadius[s];
      const color = this.colors.string[s];

      for (let f = 0; f < fretPos.length - 1; f++) {
        const x1 = fretPos[f], x2 = fretPos[f + 1];
        svg += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${color}" stroke-width="${radius * 2}" stroke-opacity="0.7" filter="url(#fb-shadow)"/>`;
      }
      // Draw open string area
      svg += `<line x1="${fretPos[0] - 15}" y1="${y}" x2="${fretPos[0]}" y2="${y}" stroke="${color}" stroke-width="${radius * 2}" stroke-opacity="0.7"/>`;
    }

    // Draw note markers
    if (showNotes) {
      for (let s = 0; s < 6; s++) {
        for (let f = 0; f <= Math.min(fretCount, fretPos.length - 1); f++) {
          const midi = tuning[s] + f;
          const noteName = MusicTheory.midiToNote(midi);
          const x = f === 0 ? fretPos[0] - 15 : (fretPos[f - 1] + fretPos[f]) / 2;
          // Use first 5 frets for f>0 or use fret-1 gap
          let displayX;
          if (f === 0) displayX = fretPos[0] - 15;
          else if (f === 1) displayX = (fretPos[0] + fretPos[1]) / 2;
          else displayX = (fretPos[f - 1] + fretPos[f]) / 2;

          const y = padY + s * stringSpacing;
          let fill = '#74b9cf80';
          let textColor = '#fff';
          let r = 9;

          // Highlight logic
          if (highlight) {
            if (highlight.mode === 'note' && highlight.value === noteName) {
              fill = this.colors.noteActive; r = 11; textColor = '#fff';
            } else if (highlight.mode === 'fret' && highlight.value === f) {
              fill = this.colors.noteActive; r = 11; textColor = '#fff';
            } else if (highlight.mode === 'scale' && highlight.notes && highlight.notes.includes(noteName)) {
              if (noteName === highlight.root) { fill = this.colors.root; r = 11; textColor = '#fff'; }
              else { fill = this.colors.scaleNote; r = 10; textColor = '#fff'; }
            } else {
              fill = '#dcdcdc80'; r = 7; textColor = '#666';
            }
          }

          // Only show first 5 frets by default for readability
          if (f <= 5) {
            svg += `<circle cx="${displayX}" cy="${y}" r="${r}" fill="${fill}" stroke="#cccccc50" stroke-width="0.5"/>`;
            svg += `<text x="${displayX}" y="${y + 3}" text-anchor="middle" fill="${textColor}" font-size="8" font-family="sans-serif">${noteName}</text>`;
          }
        }
      }
    }

    // Nut label
    svg += `<text x="${fretOffsetX - 15}" y="${padY + usableH + 18}" text-anchor="middle" fill="#666" font-size="9">0</text>`;
    for (let f = 1; f <= Math.min(5, fretPos.length - 1); f++) {
      const x = (fretPos[f - 1] + fretPos[f]) / 2;
      svg += `<text x="${x}" y="${padY + usableH + 18}" text-anchor="middle" fill="#555" font-size="9">${f}</text>`;
    }

    svg += '</svg>';

    if (typeof container === 'string') container = document.getElementById(container);
    if (container) {
      container.innerHTML = svg;
      this.svg = container.querySelector('svg');
    }
    return svg;
  },

  // Simplified fretboard for embedding in lessons
  renderMini(containerId, highlightNotes = [], rootNote = null) {
    const opts = {
      width: 600,
      height: 160,
      fretCount: 12,
      showNotes: true,
      highlight: highlightNotes.length ? {
        mode: 'scale',
        notes: highlightNotes,
        root: rootNote || highlightNotes[0]
      } : null
    };
    this.render(containerId, opts);
  }
};
