export function initPpmDemoSlide() {
  const sliders = ['ch1', 'ch2', 'ch3', 'ch4'].map((id) => document.getElementById(id));
  const outs = ['ch1-out', 'ch2-out', 'ch3-out', 'ch4-out'].map((id) => document.getElementById(id));
  const path = document.getElementById('ppm-path');
  const chLabels = document.getElementById('ch-labels');
  const syncMarker = document.getElementById('sync-marker');
  const syncLabel = document.getElementById('sync-label');

  const x0 = 20;
  const x1 = 660;
  const yHigh = 50;
  const yLow = 150;
  const frameUs = 20000;
  const pxPerUs = (x1 - x0) / frameUs;
  const syncPulseUs = 300;

  function render() {
    const values = sliders.map((s) => parseInt(s.value, 10));
    values.forEach((v, i) => {
      outs[i].textContent = `${v} мкс`;
    });

    let x = x0;
    const d = [`M ${x0} ${yLow}`];
    chLabels.innerHTML = '';

    values.forEach((v, i) => {
      const pulseW = syncPulseUs * pxPerUs;
      d.push(`L ${x} ${yHigh}`);
      d.push(`L ${x + pulseW} ${yHigh}`);
      d.push(`L ${x + pulseW} ${yLow}`);
      const spaceEnd = x + v * pxPerUs;
      d.push(`L ${spaceEnd} ${yLow}`);

      const midX = x + (v * pxPerUs) / 2;
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('fill', '#aaa');
      label.setAttribute('font-size', '12');
      label.setAttribute('x', midX);
      label.setAttribute('y', 175);
      label.setAttribute('text-anchor', 'middle');
      label.textContent = `CH${i + 1}`;
      chLabels.appendChild(label);

      x = spaceEnd;
    });

    const pulseW = syncPulseUs * pxPerUs;
    d.push(`L ${x} ${yHigh}`);
    d.push(`L ${x + pulseW} ${yHigh}`);
    d.push(`L ${x + pulseW} ${yLow}`);
    x += pulseW;

    d.push(`L ${x1} ${yLow}`);

    path.setAttribute('d', d.join(' '));

    syncMarker.setAttribute('x1', x);
    syncMarker.setAttribute('x2', x);
    syncLabel.setAttribute('x', (x + x1) / 2);
  }

  sliders.forEach((s) => s.addEventListener('input', render));
  render();
}
