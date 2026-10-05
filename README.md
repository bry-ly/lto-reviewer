# LTO Reviewer — Non-Pro Code A, A1 (Parts 1 & 2)

Static reviewer app. No build step.

## Run locally

```sh
python3 -m http.server 5500
# open http://127.0.0.1:5500/
```

(`data/*.json` loads via `fetch`, so it needs http — opening `index.html` with `file://` will show a load error.)

## Deploy to Vercel

- Import this folder as a static project (no framework preset, no build command, output = `.`)
- Or: `npx vercel` from this folder.

## Files

- `index.html` — markup only
- `styles.css` — all styles
- `app.js` — quiz logic (loads `data/*.json`)
- `data/part1.json`, `data/part2.json` — 60 + 60 questions with answers and rule notes
- `data/laws.json` — 40 LTO law & regulation questions (RA 4136, 10930, 10586, 10913, 10054, 8750, 10666)
- `assets/signs/` — cropped traffic-sign photos
