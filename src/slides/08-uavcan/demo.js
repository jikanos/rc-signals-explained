export function initUavcanDemoSlide() {
  const slider = document.getElementById('uavcan-n');
  const nOut = document.getElementById('uavcan-n-out');
  const wiresP2p = document.getElementById('uavcan-wires-p2p');
  const p2pGroup = document.getElementById('uavcan-p2p');
  const busGroup = document.getElementById('uavcan-bus');

  function renderP2p(n) {
    const fcX = 90;
    const fcY = 50;
    const escW = 55;
    const escH = 22;
    const escX = 605;
    const top = 32;
    const bottom = 148;
    const step = n > 1 ? (bottom - top - escH) / (n - 1) : 0;

    let svg = '';
    for (let i = 0; i < n; i++) {
      const escY = top + step * i;
      const escCy = escY + escH / 2;
      svg += `<line x1="${fcX}" y1="${fcY}" x2="${escX}" y2="${escCy}" stroke="#378ADD" stroke-width="1.5"></line>`;
      svg += `<rect x="${escX}" y="${escY}" width="${escW}" height="${escH}" rx="4" fill="#2a4d6e" stroke="#888" stroke-width="0.5"></rect>`;
      svg += `<text x="${escX + escW / 2}" y="${escCy}" text-anchor="middle" dominant-baseline="central" fill="#cfe0f2" font-size="10">ESC${i + 1}</text>`;
    }
    p2pGroup.innerHTML = svg;
  }

  function renderBus(n) {
    const fcCx = 90;
    const busY = 217;
    const escW = 50;
    const escH = 22;
    const left = 150;
    const right = 630;
    const step = n > 1 ? (right - left) / (n - 1) : 0;

    let svg = `<line x1="${fcCx}" y1="${busY}" x2="${right}" y2="${busY}" stroke="#378ADD" stroke-width="2"></line>`;
    for (let i = 0; i < n; i++) {
      const cx = left + step * i;
      const escY = busY - 46;
      svg += `<line x1="${cx}" y1="${busY}" x2="${cx}" y2="${escY + escH}" stroke="#378ADD" stroke-width="1.5"></line>`;
      svg += `<rect x="${cx - escW / 2}" y="${escY}" width="${escW}" height="${escH}" rx="4" fill="#2a4d6e" stroke="#888" stroke-width="0.5"></rect>`;
      svg += `<text x="${cx}" y="${escY + escH / 2}" text-anchor="middle" dominant-baseline="central" fill="#cfe0f2" font-size="10">ESC${i + 1}</text>`;
    }
    busGroup.innerHTML = svg;
  }

  function render() {
    const n = parseInt(slider.value, 10);
    nOut.textContent = n;
    wiresP2p.textContent = n;
    renderP2p(n);
    renderBus(n);
  }

  slider.addEventListener('input', render);
  render();
}
