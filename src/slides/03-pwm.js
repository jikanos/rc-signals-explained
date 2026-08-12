export function initPwmSlide() {
  const pw = document.getElementById('pw3');
  const pwOut = document.getElementById('pw3-out');
  const path = document.getElementById('pwm-path3');
  const pmark0a = document.getElementById('pmark0a');
  const pmark0b = document.getElementById('pmark0b');
  const pwLabel0 = document.getElementById('pw-label3');
  const periodA = document.getElementById('period-a');
  const periodLabel = document.getElementById('period-label');
  const angleOut = document.getElementById('angle-out3');
  const servoArm = document.getElementById('servo-arm3');
  const servoTip = document.getElementById('servo-tip3');

  const x0 = 20;
  const x1 = 660;
  const yHigh = 50;
  const yLow = 160;
  const periods = 3;
  const periodUs = 20000;
  const totalUs = periodUs * periods;
  const pxPerUs = (x1 - x0) / totalUs;
  const periodWidthPx = (x1 - x0) / periods;

  function render() {
    const v = parseInt(pw.value, 10);
    pwOut.textContent = `${v} мкс`;

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
    pmark0a.setAttribute('x1', p0Start);
    pmark0a.setAttribute('x2', p0Start);
    pmark0b.setAttribute('x1', p0End);
    pmark0b.setAttribute('x2', p0End);
    pwLabel0.setAttribute('x', (p0Start + p0End) / 2);
    pwLabel0.textContent = `${v} мкс`;

    periodA.setAttribute('x1', x0);
    periodA.setAttribute('x2', x0 + periodWidthPx);
    periodLabel.setAttribute('x', x0 + periodWidthPx / 2);

    const angle = Math.round(((v - 1000) / 1000) * 180 - 90);
    angleOut.textContent = `${angle}°`;

    const rad = (angle * Math.PI) / 180;
    const armLen = 50;
    const tipX = 80 + armLen * Math.sin(rad);
    const tipY = 70 - armLen * Math.cos(rad);

    servoArm.setAttribute('x2', tipX);
    servoArm.setAttribute('y2', tipY);
    servoTip.setAttribute('cx', tipX);
    servoTip.setAttribute('cy', tipY);
  }

  pw.addEventListener('input', render);
  render();
}
