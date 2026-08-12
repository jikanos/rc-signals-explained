export function initMultishotDemoSlide() {
  const pw = document.getElementById('ms-pw');
  const pwOut = document.getElementById('ms-pw-out');
  const path = document.getElementById('ms-path');
  const markA = document.getElementById('ms-mark-a');
  const markB = document.getElementById('ms-mark-b');
  const pwLabel = document.getElementById('ms-pw-label');
  const periodA = document.getElementById('ms-period-a');
  const periodLabel = document.getElementById('ms-period-label');
  const throttleOut = document.getElementById('ms-throttle-out');

  const x0 = 20;
  const x1 = 660;
  const yHigh = 50;
  const yLow = 160;
  const periods = 3;
  const periodUs = 100;
  const minPw = 5;
  const maxPw = 25;
  const totalUs = periodUs * periods;
  const pxPerUs = (x1 - x0) / totalUs;
  const periodWidthPx = (x1 - x0) / periods;

  function render() {
    const v = parseInt(pw.value, 10);
    pwOut.textContent = `${v} мкс`;
    throttleOut.textContent = `${Math.round(((v - minPw) / (maxPw - minPw)) * 100)}%`;

    const d = [`M ${x0} ${yLow}`];

    for (let i = 0; i < periods; i++) {
      const pStart = x0 + i * periodWidthPx;
      const pEnd = pStart + v * pxPerUs;

      d.push(`L ${pStart} ${yHigh}`);
      d.push(`L ${pEnd} ${yHigh}`);
      d.push(`L ${pEnd} ${yLow}`);
      d.push(`L ${pStart + periodWidthPx} ${yLow}`);
    }

    path.setAttribute('d', d.join(' '));

    const p0Start = x0;
    const p0End = x0 + v * pxPerUs;
    markA.setAttribute('x1', p0Start);
    markA.setAttribute('x2', p0Start);
    markB.setAttribute('x1', p0End);
    markB.setAttribute('x2', p0End);
    pwLabel.setAttribute('x', (p0Start + p0End) / 2);
    pwLabel.textContent = `${v} мкс`;

    periodA.setAttribute('x1', x0);
    periodA.setAttribute('x2', x0 + periodWidthPx);
    periodLabel.setAttribute('x', x0 + periodWidthPx / 2);
  }

  pw.addEventListener('input', render);
  render();
}
