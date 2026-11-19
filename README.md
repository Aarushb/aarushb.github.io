# Aarush Bhat — Portfolio

Personal accessible portfolio website for **Aarush Bhat**, Systems, AI Agent, & Accessibility Engineer at the University of Alberta.

Live site: [https://aarushb.github.io/](https://aarushb.github.io/)

---

## Architecture & Features

- **Static Site Generator**: [Nikola](https://getnikola.com/) (v8.3+) configured with pure Markdown sources.
- **Theme**: [`lazykola-a11y`](https://github.com/Aarushb/lazykola-a11y) using the `portfolio` design preset:
  - Accessible violet accent colors (`#5540d6` light / `#b4a5fb` dark) passing WCAG AA contrast.
  - Automatic OS dark mode support (`prefers-color-scheme`).
  - Semantic heading normalization and landmark navigation.
- **Procedural 2D HRTF Spatial Audio Earcons**:
  - Zero external MP3/WAV assets; 100% synthesized in-browser via the Web Audio API (`PannerNode` with `HRTF`, falling back to `StereoPannerNode`).
  - Maps every focused element's 2D viewport/page coordinates (`focusin`) to horizontal left/right space, vertical elevation, and C-major pentatonic pitch (high at the top of the page, low at the bottom) — giving screen-reader users a mental map of the visual layout as they `Tab` through the page.
  - Distinct timbres for links vs. buttons, plus a two-note fifth interval on section anchor jumps (`hashchange`).
  - `Audio Cues: Off/On` toggle button (`accesskey="m"`) with polite live announcement.
- **Native HTML `accesskey` Navigation**:
  - Standard browser/screen-reader `accesskey` bindings without overriding Browse Mode:
    - `w` — Experience & Funded R&D (`#experience`)
    - `p` — Selected Systems & Engineering (`#projects`)
    - `o` — Upstream Open-Source Contributions (`#open-source`)
    - `s` — Technical Stack & Honors (`#skills`)
    - `g` / `l` / `r` — GitHub, LinkedIn, or Resume (PDF)
    - `m` — Toggle spatial audio cues On / Off
- **Package Management**: Scoped locally with [Astral `uv`](https://docs.astral.sh/uv/) (zero global pollution).
- **CI/CD**: Automated GitHub Actions pipeline (`.github/workflows/deploy.yml`) building the site with `uv` and deploying directly to GitHub Pages.

---

## Local Development

All dependencies are scoped locally in a virtual environment:

```bash
# Create local virtual environment and install dependencies
uv venv
uv pip install "Nikola[extras]"

# Build the site locally into output/
uv run nikola build

# Or run live-reloading preview server (opens at http://127.0.0.1:8000)
uv run nikola auto
```

---

## Content Pipeline

All portfolio content is maintained in `pages/index.md`.

To add, edit, or remove an item, simply edit the corresponding section in `pages/index.md`:

```html
<div class="card mb-3">
  <div class="card-body">
    <h3>Project Name</h3>
    <p class="text-muted">Tech Stack · Description</p>
    <p>Project details and architecture description.</p>
    <ul>
      <li>Key metric or highlight 1</li>
      <li>Key metric or highlight 2</li>
    </ul>
    <p><a href="https://github.com/...">Source Code & Architecture (GitHub)</a></p>
  </div>
</div>
```

---

## Expansion Roadmap (Multi-Page / Blog)

When ready to expand beyond a single-page portfolio into a full personal website (`aarushbhat.com`, `/portfolio`, `/blog`, comments):

1. **Move Single-Page Portfolio**:
   Move `pages/index.md` to `pages/portfolio.md` (`.. slug: portfolio`).
2. **Create General Landing Page**:
   Create a new lightweight landing page at `pages/index.md` linking to `/portfolio/`, `/blog/`, etc.
3. **Enable Blog Posts**:
   Place blog posts inside `posts/` as standard Markdown files.
4. **Update Navigation Links**:
   Update `NAVIGATION_LINKS` in `conf.py` to point to `("/portfolio/", "Portfolio")`, `("/blog/", "Blog")`.
5. **Enable Serverless Comments**:
   Configure `COMMENT_SYSTEM = "lazykola"` in `conf.py`.
