# SOS 110 — Chapter 4 Web Slideshow

A click-through web version of Chapter 4, **"Life: What Shapes Biodiversity?"**
(28 slides). Live at
<https://ryanpcornell.github.io/sos110-chapter-4/>

## What's in the deck
- **Announcements board** (slide 3) with upcoming assignments and editable due dates
- **How to take the Module 2: Biomimicry Quiz** (slide 4) — a clicker-stepped
  walkthrough of where the reading and the quiz live in Canvas
- **Earth's Four Spheres** (slide 7) — hand-drawn line-art cross-section from space
  to Earth's interior
- **Evolve: Build an Organism** (slide 15) — a live multiplayer game. Every student
  founds a population of 26, before anyone knows what the world looks like; then a
  random ecosystem is drawn and the class population runs for 8–12 generations, a
  barrier drops, and the two halves are compared. Needs `firebase-config.js`.
- **Four live simulations** embedding the interactive **Biodiversity Explorer**:
  natural selection (10), speciation (13), genetic drift (14) and population
  growth (25). Each shows one interactive only, with no scrolling.
- **Richness vs. evenness** — two versions of an interactive evenness explorer
  (16 = colored mosaic, 17 = hand-drawn species)
- **Whittaker climate graph** (19) plotting biomes by mean annual temperature and precipitation
- **"The Cascade by the Numbers"** (22) — Yellowstone wolf, elk, aspen and beaver
  data with sources cited on the slide

This folder is **self-contained** — everything it needs is inside it
(no external files; only Google Fonts and Chart.js from public CDNs).

## Contents
- `index.html` — the slideshow (open this)
- `media/` — slide images and the hand-drawn SVG figures
- `biodiversity-explorer/` — the embedded interactive app
- `firebase-config.js` — Firebase project for the live games (not secret; the
  Firestore rules are what control access)
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
