# sarakolata.com v2

Static site built from the Claude Design project "Sara Kolata" (`Sara Kolata Website v2.html`).
React + in-browser Babel, no build step. Serve the folder and open `index.html`:

```
python3 -m http.server 4317 --directory sara-kolata
```

## Routes (hash-based)

| Route | Page |
|---|---|
| `#/` | Home (sections: `#/about`, `#/work-with-sara`, `#/books`, `#/stories`, `#/start-here`) |
| `#/karmic-recapitulation` | The Method (`/phase-1` to `/phase-4`, `/integration`) |
| `#/retreat-center` | The Peru Residency (`/screening`, `/apply`) |
| `#/speaking-press` | Speaking and press (`/media-kit`, `/booking`) |

## Images

Photos come from the design project export, converted from PNG to JPEG (quality 82) for the web.
The headshots, lineage textile, partner venue and speaker reel are still placeholders; no source images exist yet.

## Source layout

- `_ds/` – Sara Kolata design system (tokens, fonts, component bundle), unchanged from the design project
- `fonts/` – Rengard (headings)
- `illustrations/dark/` – phase illustrations
- `src/sk-sky.js` – hero sky shader: static still, plus a live version where the clouds drift and the sun sets behind the ridge over 45s, then holds at dusk (respects reduced motion)
- `src/sk2-motion.jsx` – scroll reveals, hero entrance, skip link
- `src/sk2-*.jsx` – page and section components
- `src/app.jsx` – router

## Motion and accessibility

Motion follows the craft rules from [OpenDesign](https://github.com/nexu-io/open-design) (`craft/animation-discipline.md`, `accessibility-baseline.md`, `typography.md`, `color.md`), on the brand's own `--ease-settle` curve. Sara's visual design is unchanged.

| What | Timing | Where |
|---|---|---|
| Page change crossfade (View Transitions) | 320ms | `src/app.jsx` |
| Section reveal on scroll, once; lists stagger 70ms, capped at 350ms | 480ms desktop, 360ms mobile | `src/sk2-motion.jsx`, `[data-stagger]` |
| Hero entrance, first visit only | 480ms, 90ms stagger | `useHeroEntrance` |
| Menu and video player entering | 240 to 280ms | `.menu-in`, `.scrim-in`, `.panel-in` |
| Hover: nav underline, video poster zoom, play button | 160 to 200ms | `index.html` |
| Hero sky: sunset over 45s, drifts 15s more, then rests; pause/play button; pauses off screen | | `src/sk-sky.js` |

`prefers-reduced-motion: reduce` removes all movement (no live sky, no entrance, no page transition) and keeps 160ms opacity fades so state changes still read.

Accessibility: `<main>` landmark with a skip link, page footer outside `<main>`, no skipped heading levels on the home page, form-field borders at 3:1, the sage band lifted to `#7B8672` so body text clears 4.5:1, and an obsidian focus ring on sage.
