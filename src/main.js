import Reveal from 'reveal.js'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/black.css'
import './fonts.css'

import titleSlide from './slides/01-title.html?raw'
import motorProtocolsTitleSlide from './slides/02-motor-protocols-title.html?raw'
import pwmIntroSlide from './slides/03-pwm/intro.html?raw'
import pwmDemoSlide from './slides/03-pwm/demo.html?raw'
import { initPwmDemoSlide } from './slides/03-pwm/demo.js'
import pwmCalibrationSlide from './slides/03-pwm/calibration.html?raw'
import oneshot125IntroSlide from './slides/04-oneshot125/intro.html?raw'
import oneshot125DemoSlide from './slides/04-oneshot125/demo.html?raw'
import { initOneshot125DemoSlide } from './slides/04-oneshot125/demo.js'
import multishotIntroSlide from './slides/05-multishot/intro.html?raw'
import multishotDemoSlide from './slides/05-multishot/demo.html?raw'
import { initMultishotDemoSlide } from './slides/05-multishot/demo.js'
import dshotIntroSlide from './slides/06-dshot/intro.html?raw'
import dshotDemoSlide from './slides/06-dshot/demo.html?raw'
import { initDshotDemoSlide } from './slides/06-dshot/demo.js'
import motorChronologySlide from './slides/07-motor-chronology.html?raw'
import commProtocolsTitleSlide from './slides/08-comm-protocols-title.html?raw'
import ppmIntroSlide from './slides/09-ppm/intro.html?raw'
import ppmDemoSlide from './slides/09-ppm/demo.html?raw'
import { initPpmDemoSlide } from './slides/09-ppm/demo.js'
import sbusIntroSlide from './slides/10-sbus/intro.html?raw'
import sbusDemoSlide from './slides/10-sbus/demo.html?raw'
import { initSbusDemoSlide } from './slides/10-sbus/demo.js'
import crsfIntroSlide from './slides/11-crsf/intro.html?raw'
import crsfDemoSlide from './slides/11-crsf/demo.html?raw'
import { initCrsfDemoSlide } from './slides/11-crsf/demo.js'

// Top-level entries are horizontal slides. An array entry is a vertical
// stack — its raw sections are wrapped together in one outer <section>.
const slides = [
  titleSlide,
  motorProtocolsTitleSlide,
  [pwmIntroSlide, pwmDemoSlide, pwmCalibrationSlide],
  [oneshot125IntroSlide, oneshot125DemoSlide],
  [multishotIntroSlide, multishotDemoSlide],
  [dshotIntroSlide, dshotDemoSlide],
  motorChronologySlide,
  commProtocolsTitleSlide,
  [ppmIntroSlide, ppmDemoSlide],
  [sbusIntroSlide, sbusDemoSlide],
  [crsfIntroSlide, crsfDemoSlide],
]

const renderSlide = (entry) =>
  Array.isArray(entry) ? `<section>\n${entry.join('\n')}\n</section>` : entry

document.querySelector('.slides').innerHTML = slides.map(renderSlide).join('\n')

initPwmDemoSlide()
initOneshot125DemoSlide()
initMultishotDemoSlide()
initDshotDemoSlide()
initPpmDemoSlide()
initSbusDemoSlide()
initCrsfDemoSlide()

const deck = new Reveal()
deck.initialize()
