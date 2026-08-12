import QRCode from 'qrcode'

const PRESENTATION_URL = 'https://jikanos.github.io/rc-signals-explained/'

export async function initThanksSlide() {
  const container = document.getElementById('thanks-qr')

  const canvas = document.createElement('canvas')
  await QRCode.toCanvas(canvas, PRESENTATION_URL, {
    width: 220,
    margin: 2,
    color: { dark: '#111111', light: '#ffffff' },
  })
  canvas.style.borderRadius = '8px'
  container.appendChild(canvas)
}
