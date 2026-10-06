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
- `src/sk-sky.js` – hero sky shader (static still + live animation; respects reduced motion)
- `src/sk2-*.jsx` – page and section components
- `src/app.jsx` – router
