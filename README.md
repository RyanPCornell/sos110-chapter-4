# SOS 110 — Chapter 4 Web Slideshow

A click-through web version of Chapter 4, **"Life: What Shapes Biodiversity?"**
(27 slides). Live at
<https://ryanpcornell.github.io/sos110-chapter-4/>

## What's in the deck
- **Announcements board** (slide 3) with upcoming assignments and editable due dates
- **Earth's Four Spheres** (slide 6) — hand-drawn cross-section from space to Earth's interior
- **Three live simulations** embedding the interactive **Biodiversity Explorer**:
  natural selection (9), speciation and genetic drift (12), and population growth (23)
- **Richness vs. evenness** — two versions of an interactive evenness explorer
  (13 = colored mosaic, 14 = hand-drawn species)
- **Whittaker climate graph** (16) plotting biomes by mean annual temperature and precipitation
- **"The Cascade by the Numbers"** (19) — Yellowstone wolf, elk, aspen and beaver
  data with sources cited on the slide

This folder is **self-contained** — everything it needs is inside it
(no external files; only Google Fonts and Chart.js from public CDNs).

## Contents
- `index.html` — the slideshow (open this)
- `media/` — slide images and the hand-drawn SVG figures
- `biodiversity-explorer/` — the embedded interactive app
- `.nojekyll` — tells GitHub Pages to serve all files as-is

## Controls
Arrow keys / Space to advance · `O` for the slide menu · `F` for fullscreen ·
`#slide-N` in the URL jumps straight to a slide.

## Notes
- Keep `index.html`, `media/`, and `biodiversity-explorer/` together — the deck
  references the simulator with the relative path
  `biodiversity-explorer/index.html`.
- File and folder names are case-sensitive on GitHub Pages; don't rename pieces
  individually.
- Regenerate this bundle from `_deck-builder/chapter4.py` with:
  `DECK_APP="biodiversity-explorer/index.html" DECK_OUT=".../chapter-4-web/index.html" python3 chapter4.py`
  then re-copy `media/` and the explorer.
