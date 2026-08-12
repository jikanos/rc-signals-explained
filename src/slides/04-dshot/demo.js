export function initDshotDemoSlide() {
  const thr = document.getElementById('thr');
  const thrOut = document.getElementById('thr-out');
  const thrBin = document.getElementById('thr-bin');
  const telemBit = document.getElementById('telem-bit');
  const crcOut = document.getElementById('crc-out');
  const packetSvg = document.getElementById('packet-svg');
  const wavePath = document.getElementById('wave-path');

  const x0 = 20;
  const cellW = 38;
  const cellH = 44;
  const cellY = 50;

  function buildPacketBoxes() {
    let svg = '';
    const groups = [
      { start: 0, count: 11, fill: '#2a4d6e', label: 'Throttle (11 бит)' },
      { start: 11, count: 1, fill: '#6e5a2a', label: 'Телем.' },
      { start: 12, count: 4, fill: '#6e2a2a', label: 'CRC (4 бита)' },
    ];

    let x = x0;
    const labelY = cellY - 14;

    groups.forEach((g) => {
      const gw = cellW * g.count;
      svg += `<text x="${x + gw / 2}" y="${labelY}" text-anchor="middle" fill="#aaa" font-size="12">${g.label}</text>`;

      for (let i = 0; i < g.count; i++) {
        svg += `<rect x="${x}" y="${cellY}" width="${cellW - 4}" height="${cellH}" rx="4" fill="${g.fill}" stroke="#888" stroke-width="0.5"></rect>`;
        svg += `<text id="bit-${g.start + i}" x="${x + (cellW - 4) / 2}" y="${cellY + cellH / 2}" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="13">0</text>`;
        x += cellW;
      }

      x += 6;
    });

    packetSvg.innerHTML = svg;
  }

  buildPacketBoxes();

  function crc4(bits11, telemBitVal) {
    const val = (bits11 << 1) | telemBitVal;
    const csum = val ^ (val >> 4) ^ (val >> 8);
    return csum & 0xF;
  }

  function render() {
    const t = parseInt(thr.value, 10);
    thrOut.textContent = t;

    const bits11 = t & 0x7FF;
    const telem = 0;
    const crc = crc4(bits11, telem);

    thrBin.textContent = bits11.toString(2).padStart(11, '0');
    telemBit.textContent = telem;
    crcOut.textContent = crc.toString(2).padStart(4, '0');

    const allBits = [];
    for (let i = 10; i >= 0; i--) {
      allBits.push((bits11 >> i) & 1);
    }
    allBits.push(telem);
    for (let i = 3; i >= 0; i--) {
      allBits.push((crc >> i) & 1);
    }

    allBits.forEach((b, idx) => {
      const el = document.getElementById(`bit-${idx}`);
      if (el) {
        el.textContent = b;
      }
    });

    const n = 16;
    const slotW = 640 / n;
    const yHigh = 30;
    const yLow = 100;
    const d = [`M 20 ${yLow}`];
    let x = 20;

    allBits.forEach((b) => {
      const highLen = b === 1 ? slotW * 0.66 : slotW * 0.33;
      d.push(`L ${x} ${yHigh}`);
      d.push(`L ${x + highLen} ${yHigh}`);
      d.push(`L ${x + highLen} ${yLow}`);
      x += slotW;
      d.push(`L ${x} ${yLow}`);
    });

    wavePath.setAttribute('d', d.join(' '));
  }

  thr.addEventListener('input', render);
  render();
}
