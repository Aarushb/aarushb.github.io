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
- **Procedural Web Audio Earcons**:
  - Zero external MP3/WAV assets; 100% synthesized in-browser via the Web Audio API.
  - Stereo-panned navigation cues sweeping across stereo channels as you traverse portfolio cards.
  - Musical fifth intervals on section boundaries, boundary thuds, and modal open/close cues.
  - Audio cues toggle button with state persistence in UI.
- **Vim-Style & Single-Key Keyboard Navigation**:
  - `J` / `K` — Move forward / backward across portfolio cards with synchronized focus, smooth scrolling, and spatial earcons.
  - `1`, `2`, `3`, `4` — Direct jumps to Experience, Projects, Open Source, and Skills sections.
  - `M` — Toggle spatial audio cues on / off.
  - `G` / `L` / `R` — Direct focus to GitHub, LinkedIn, or Resume links.
  - `?` or `Esc` — Open and close the keyboard shortcuts help dialog.
  - Screen reader feedback announced live via `#a11y-announcer`.
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

To add, edit, or remove an item, simply edit the corresponding section in `pages/index.md`. The procedural audio synthesizer and keyboard shortcut router dynamically index every `.portfolio-item` in the DOM on load:

```html
<article class="card mb-3 portfolio-item" data-section="Projects" tabindex="-1">
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
</article>
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
