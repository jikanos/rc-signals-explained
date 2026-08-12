# rc-signals-explained

Обучающая презентация (Reveal.js + Vite) про сигналы управления в RC/FPV:
аналоговый PWM и цифровой протокол DShot. Слайды — интерактивные SVG-схемы
со слайдерами (ширина импульса, throttle), которые пересчитывают графику
в реальном времени.

## Стек

- Vite (сборка/dev-сервер)
- reveal.js (движок презентации, тема `black`)
- Никакого фреймворка — слайды это чистый HTML/SVG/JS прямо в `index.html`

## Структура

- `index.html` — все слайды (`<section>` внутри `.reveal > .slides`), включая
  инлайновые `<script>` с логикой каждого интерактивного демо
- `src/main.js` — инициализация Reveal.js
- `src/style.css`, `src/assets/` — не используются активно (шаблонные остатки
  от `npm create vite`)
- `vite.config.js` — `base: '/rc-signals-explained/'` (обязателен для GitHub
  Pages, т.к. сайт живёт в подпути, а не в корне домена)
- `.github/workflows/deploy.yml` — автодеплой на GitHub Pages при пуше в `main`

## Команды

```
npm run dev       # локальный сервер (обычно http://localhost:5173/)
npm run build     # сборка в dist/
npm run preview   # предпросмотр собранного dist/
```

## Деплой

Пуш в `main` → GitHub Actions билдит и публикует `dist/` на GitHub Pages.
Источник Pages в настройках репозитория должен быть выставлен на
**GitHub Actions** (Settings → Pages → Source).

Сайт: https://jikanos.github.io/rc-signals-explained/

## Стиль кода

Новые слайды в `index.html` оформлены с явными закрывающими тегами SVG
(`</line>`, `</path>` и т.п. вместо самозакрывающихся `/>`) и многострочными
атрибутами `style` — сохраняй этот стиль при добавлении новых секций.
