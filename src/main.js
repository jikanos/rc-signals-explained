import Reveal from 'reveal.js'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'

import titleSlide from './slides/01-title.html?raw'
import motorProtocolsTitleSlide from './slides/02-motor-protocols-title.html?raw'
import pwmSlide from './slides/03-pwm.html?raw'
import { initPwmSlide } from './slides/03-pwm.js'
import dshotSlide from './slides/04-dshot.html?raw'
import { initDshotSlide } from './slides/04-dshot.js'
import commProtocolsTitleSlide from './slides/05-comm-protocols-title.html?raw'
import ppmSlide from './slides/06-ppm.html?raw'
import { initPpmSlide } from './slides/06-ppm.js'
import sbusSlide from './slides/07-sbus.html?raw'
import { initSbusSlide } from './slides/07-sbus.js'
import crsfSlide from './slides/08-crsf.html?raw'
import { initCrsfSlide } from './slides/08-crsf.js'

const slides = [
  titleSlide,
  motorProtocolsTitleSlide,
  pwmSlide,
  dshotSlide,
  commProtocolsTitleSlide,
  ppmSlide,
  sbusSlide,
  crsfSlide,
]

document.querySelector('.slides').innerHTML = slides.join('\n')

initPwmSlide()
initDshotSlide()
initPpmSlide()
initSbusSlide()
initCrsfSlide()

const deck = new Reveal()
deck.initialize()
