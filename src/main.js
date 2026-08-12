import Reveal from 'reveal.js'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'

import titleSlide from './slides/01-title.html?raw'
import motorProtocolsTitleSlide from './slides/02-motor-protocols-title.html?raw'
import pwmIntroSlide from './slides/03-pwm/intro.html?raw'
import pwmDemoSlide from './slides/03-pwm/demo.html?raw'
import { initPwmDemoSlide } from './slides/03-pwm/demo.js'
import dshotSlide from './slides/04-dshot.html?raw'
import { initDshotSlide } from './slides/04-dshot.js'
import commProtocolsTitleSlide from './slides/05-comm-protocols-title.html?raw'
import ppmSlide from './slides/06-ppm.html?raw'
import { initPpmSlide } from './slides/06-ppm.js'
import sbusSlide from './slides/07-sbus.html?raw'
import { initSbusSlide } from './slides/07-sbus.js'
import crsfSlide from './slides/08-crsf.html?raw'
import { initCrsfSlide } from './slides/08-crsf.js'

// Top-level entries are horizontal slides. An array entry is a vertical
// stack — its raw sections are wrapped together in one outer <section>.
const slides = [
  titleSlide,
  motorProtocolsTitleSlide,
  [pwmIntroSlide, pwmDemoSlide],
  dshotSlide,
  commProtocolsTitleSlide,
  ppmSlide,
  sbusSlide,
  crsfSlide,
]

const renderSlide = (entry) =>
  Array.isArray(entry) ? `<section>\n${entry.join('\n')}\n</section>` : entry

document.querySelector('.slides').innerHTML = slides.map(renderSlide).join('\n')

initPwmDemoSlide()
initDshotSlide()
initPpmSlide()
initSbusSlide()
initCrsfSlide()

const deck = new Reveal()
deck.initialize()
