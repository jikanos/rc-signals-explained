export function initSbusDemoSlide() {
  const ch1 = document.getElementById('sbus-ch1');
  const ch1Out = document.getElementById('sbus-ch1-out');
  const packetBytes = document.getElementById('sbus-packet-bytes');
  const ch1Arrow = document.getElementById('sbus-ch1-arrow');
  const ch1Bin = document.getElementById('sbus-ch1-bin');

  const x0 = 20;
  const byteW = 30;
  const byteH = 36;
  const y = 50;
  const groupGap = 8;

  function build() {
    const groups = [
      { count: 1, fill: '#4a4a4a', label: 'Start' },
      { count: 16, fill: '#3a5a3a', label: 'Ch data — 16 каналов × 11 бит' },
      { count: 1, fill: '#6e5a2a', label: 'Flags' },
      { count: 1, fill: '#6e2a2a', label: 'End' },
    ];

    let x = x0;
    let svg = '';
    let ch1CenterX = 0;
    let ch1BottomY = 0;

    groups.forEach((g) => {
      const gw = byteW * g.count;
      svg += `<text x="${x + gw / 2}" y="${y - 12}" text-anchor="middle" fill="#aaa" font-size="12">${g.label}</text>`;

      for (let i = 0; i < g.count; i++) {
        const isCh1 = g.label.startsWith('Ch data') && i === 0;
        const stroke = isCh1 ? '#D85A30' : '#888';
        const strokeWidth = isCh1 ? '1.5' : '0.5';

        svg += `<rect x="${x}" y="${y}" width="${byteW - 4}" height="${byteH}" rx="4" fill="${g.fill}" stroke="${stroke}" stroke-width="${strokeWidth}"></rect>`;

        if (g.label.startsWith('Ch data')) {
          svg += `<text x="${x + (byteW - 4) / 2}" y="${y + byteH / 2}" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="9">${i + 1}</text>`;
        }

        if (isCh1) {
          ch1CenterX = x + (byteW - 4) / 2;
          ch1BottomY = y + byteH;
        }

        x += byteW;
      }

      x += groupGap;
    });

    packetBytes.innerHTML = svg;

    const arrowStartY = ch1BottomY + 36;
    const arrowEndY = ch1BottomY + 4;
    ch1Arrow.setAttribute('x1', ch1CenterX);
    ch1Arrow.setAttribute('y1', arrowStartY);
    ch1Arrow.setAttribute('x2', ch1CenterX);
    ch1Arrow.setAttribute('y2', arrowEndY);
    ch1Bin.setAttribute('x', ch1CenterX);
    ch1Bin.setAttribute('y', arrowStartY + 16);
  }
  build();

  function render() {
    const v = parseInt(ch1.value, 10);
    ch1Out.textContent = v;
    ch1Bin.textContent = v.toString(2).padStart(11, '0');
  }

  ch1.addEventListener('input', render);
  render();
}
