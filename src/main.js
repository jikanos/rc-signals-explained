import Reveal from 'reveal.js'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'
import './fonts.css'

import titleSlide from './slides/01-title.html?raw'
import motorProtocolsTitleSlide from './slides/02-motor-protocols-title.html?raw'
import pwmIntroSlide from './slides/03-pwm/intro.html?raw'
import pwmDemoSlide from './slides/03-pwm/demo.html?raw'
import { initPwmDemoSlide } from './slides/03-pwm/demo.js'
import dshotIntroSlide from './slides/04-dshot/intro.html?raw'
import dshotDemoSlide from './slides/04-dshot/demo.html?raw'
import { initDshotDemoSlide } from './slides/04-dshot/demo.js'
import commProtocolsTitleSlide from './slides/05-comm-protocols-title.html?raw'
import ppmIntroSlide from './slides/06-ppm/intro.html?raw'
import ppmDemoSlide from './slides/06-ppm/demo.html?raw'
import { initPpmDemoSlide } from './slides/06-ppm/demo.js'
import sbusIntroSlide from './slides/07-sbus/intro.html?raw'
import sbusDemoSlide from './slides/07-sbus/demo.html?raw'
import { initSbusDemoSlide } from './slides/07-sbus/demo.js'
import crsfIntroSlide from './slides/08-crsf/intro.html?raw'
import crsfDemoSlide from './slides/08-crsf/demo.html?raw'
import { initCrsfDemoSlide } from './slides/08-crsf/demo.js'

// Top-level entries are horizontal slides. An array entry is a vertical
// stack — its raw sections are wrapped together in one outer <section>.
const slides = [
  titleSlide,
  motorProtocolsTitleSlide,
  [pwmIntroSlide, pwmDemoSlide],
  [dshotIntroSlide, dshotDemoSlide],
  commProtocolsTitleSlide,
  [ppmIntroSlide, ppmDemoSlide],
  [sbusIntroSlide, sbusDemoSlide],
  [crsfIntroSlide, crsfDemoSlide],
]

const renderSlide = (entry) =>
  Array.isArray(entry) ? `<section>\n${entry.join('\n')}\n</section>` : entry

document.querySelector('.slides').innerHTML = slides.map(renderSlide).join('\n')

initPwmDemoSlide()
initDshotDemoSlide()
initPpmDemoSlide()
initSbusDemoSlide()
initCrsfDemoSlide()

const deck = new Reveal()
deck.initialize()
