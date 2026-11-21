<!--
.. title: Aarush Bhat | Systems, AI & Accessibility Engineer
.. slug: index
.. hidetitle: True
.. type: text
-->

<style>
  mark {
    background-color: rgba(85, 64, 214, 0.14);
    color: inherit;
    padding: 0.08em 0.35em;
    border-radius: 0.25rem;
    border-bottom: 2px solid #5540d6;
  }
  @media (prefers-color-scheme: dark) {
    mark {
      background-color: rgba(180, 165, 251, 0.2);
      border-bottom-color: #b4a5fb;
    }
  }
</style>

<div id="a11y-announcer" class="sr-only" aria-live="polite" aria-atomic="true"></div>

<section class="mb-5" aria-labelledby="hero-heading">
  <h1 id="hero-heading">Software is built for <mark>people</mark>.</h1>
  <p class="lead">
    I'm a Computing Science student at the University of Alberta (4.0 GPA) working across low-level systems in Rust, real-time audio and AI pipelines, and assistive tooling. Most of what I build starts from a simple frustration: running into software that locks people out, and deciding to fix the architecture from the ground up rather than taping a workaround on top.
  </p>
  <p>
    <a id="link-github" href="https://github.com/Aarushb" rel="noopener" accesskey="g"><svg class="hero-link-icon" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>GitHub</a> &middot;
    <a id="link-linkedin" href="https://linkedin.com/in/aarushdev" rel="noopener" accesskey="l"><svg class="hero-link-icon" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>LinkedIn</a> &middot;
    <a id="link-resume" href="/assets/Aarush_Bhat_Resume.pdf" accesskey="r"><svg class="hero-link-icon" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/></svg>Resume (PDF)</a> &middot;
    <a href="mailto:aarush.bhat04@gmail.com"><svg class="hero-link-icon" aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/></svg>aarush.bhat04@gmail.com</a>
  </p>
  <div role="group" aria-label="Accessibility audio controls" class="mt-3">
    <button id="toggle-audio-btn" type="button" class="btn btn-sm btn-outline-primary" aria-pressed="false" accesskey="m">
      Audio Cues: Off
    </button>
  </div>
</section>

<section id="experience" class="mb-5" aria-labelledby="heading-experience">
  <h2 id="heading-experience">Experience &amp; Funded R&amp;D</h2>

  <div class="card mb-3">
    <div class="card-body">
      <h3>Lead Software Engineering Intern, Kerr Interior Systems</h3>
      <p class="text-muted">Sep 2026 - Present &middot; Edmonton, AB &middot; Python, Computer-Use Agents, ERP Automation</p>
      <p>
        Leading a five-person student engineering team to automate construction operations and payroll workflows across legacy tools (Procore, WinBid, Plexxis) that don't expose modern APIs.
      </p>
      <ul>
        <li>Built self-hosted Computer-Use Agent execution loops on dedicated office hardware to handle multi-step ERP job setups without paying per-seat cloud VM fees.</li>
        <li>Automated payroll and data reconciliation pipelines connecting field estimating records to accounting exports.</li>
      </ul>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h3>Principal Investigator, UAlberta Undergraduate Research Initiative (URI)</h3>
      <p class="text-muted">May 2026 - Present &middot; $7,500 Max-Tier Research Grant &middot; Python, LuaTeX, MathML, Wolfram API</p>
      <p>
        Funded research focused on making upper-level university STEM courses navigable without sight, published in TUGboat and presented at the 2026 TeX Users Group (TUG) conference in Calgary.
      </p>
      <ul>
        <li>Built a cross-platform LuaTeX PDF reader with stable MathML rendering and a Wolfram API equation editor so students don't have to parse raw LaTeX syntax in their heads.</li>
        <li>Created Python CLI bridges to bypass inaccessible coursework GUIs (including programmatic Entity-Relationship Diagrams instead of draw.io) and tested 3D-printed haptics against 2D swell paper.</li>
      </ul>
      <p>
        <a href="https://tug.org/TUGboat/tb47-2/tb146bhat-visualmath.pdf" rel="noopener">TUGboat Paper (PDF)</a> &middot;
        <a href="https://www.youtube.com/watch?v=k0VdJCfZiso" rel="noopener">Conference Talk (YouTube)</a> &middot;
        <a href="https://tug.org/tug2026/abstracts/erickson-accessibility.txt" rel="noopener">Abstract</a>
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h3>Co-Founder &amp; Lead Developer, VedAI</h3>
      <p class="text-muted">Oct 2023 - Sep 2026 &middot; Python, FastAPI, React, PostgreSQL, Custom Vision Models</p>
      <p>
        Built a STEM document conversion platform that restructured inaccessible academic textbooks and problem sets for screen-reader users.
      </p>
      <ul>
        <li>Architected an OCR and document restructuring pipeline that processed over 50,000 pages of technical material at 95%+ structural accuracy.</li>
        <li>Trained custom vision models for inline diagram descriptions paired with a grid-based spatial explorer that lets screen-reader users navigate visual layouts by coordinate.</li>
      </ul>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h3>Vice President of Technology, U of A AI Society (UAIS)</h3>
      <p class="text-muted">Oct 2023 - May 2026 &middot; Edmonton, AB &middot; Python, Astro, MediaPipe, Agile</p>
      <p>
        Led technical direction and agile student project teams for a 700+ member AI society, bridging industry workshops with Amii and AltaML.
      </p>
      <ul>
        <li>Directed student engineering teams building deployed community tools including <a href="https://github.com/UndergraduateArtificialIntelligenceClub/palm-pilot2.0" rel="noopener">PalmPilot 2.0</a> (real-time MediaPipe hand-gesture automation) and a club RAG assistant.</li>
        <li>Maintained the society's web infrastructure (<a href="https://uais.dev" rel="noopener">uais.dev</a>) and co-organized campus hackathons and technical workshops.</li>
      </ul>
      <p>
        <a href="https://github.com/UndergraduateArtificialIntelligenceClub" rel="noopener">UAIS GitHub Organization</a>
      </p>
    </div>
  </div>
</section>

<section id="projects" class="mb-5" aria-labelledby="heading-projects">
  <h2 id="heading-projects">Selected Systems &amp; Engineering</h2>

  <div class="card mb-3">
    <div class="card-body">
      <h3>RISC-Free</h3>
      <p class="text-muted">Rust &middot; Win32 UI Automation &middot; wxDragon &middot; Prism</p>
      <p>
        Native RISC-V (RV32/RV64) assembler, emulator, and desktop IDE written in Rust over eight months to replace Java Swing's inaccessible RARS simulator in computer architecture courses, growing out of my earlier <a href="https://github.com/Aarushb/rars_access" rel="noopener">rars_access</a> CLI wrapper.
      </p>
      <ul>
        <li>Supports integer, M, Zicsr, F/D floating-point, and C extensions alongside a reversible debugger with instruction backstepping, memory watchpoints, uninitialized-memory <code>memcheck</code>, and calling-convention checks.</li>
        <li>Exposes every control in the Windows UI Automation tree via <code>wxDragon</code>, announces non-focus runtime events through <code>Prism</code>, and ships a headless CLI emitting JSONL traces verified by 250+ differential tests.</li>
      </ul>
      <p>
        <a href="https://github.com/Aarushb/riscfree" rel="noopener">Source Code &amp; Architecture (GitHub)</a>
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h3>SpeakSync</h3>
      <p class="text-muted">Python 3.11+ &middot; Win32 / IUIAutomation &middot; Linux D-Bus &middot; macOS JXA &middot; Prism</p>
      <p>
        Background system-tray monitor that tracks cloud sync progress across Dropbox, OneDrive, Google Drive, and Syncthing without moving the cursor or stealing window focus.
      </p>
      <ul>
        <li>Queries Windows 11's hidden XAML overflow flyout (<code>TopLevelWindowForOverflowXamlIsland</code>) via cross-process UIA caching, falling back to <code>ToolbarWindow32</code> memory inspection on Windows 10 when uninitialized.</li>
        <li>Cleans up Windows 11 <code>Shell_NotifyIcon(NIM_MODIFY)</code> duplicate tooltip strings, reads local DriveFS logs and Dropbox Unix sockets when tray status is hidden, and supports Linux D-Bus and macOS <code>AXExtrasMenuBar</code> with 3-stage earcons.</li>
      </ul>
      <p>
        <a href="https://github.com/Aarushb/speak-sync" rel="noopener">GitHub Repository &amp; Multi-OS Releases</a>
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h3>Northstar</h3>
      <p class="text-muted">Python &middot; FastAPI &middot; WebSockets &middot; Gemini Live API &middot; Web Audio (HRTF) &middot; 1st Place, EU Launchpad</p>
      <p>
        Screen-free outdoor navigation app built so blind pedestrians can orient by ear instead of staring at a phone screen.
      </p>
      <ul>
        <li>Turns live GPS coordinates and compass heading math into sub-100ms 3D-positioned audio cues using browser Web Audio HRTF nodes.</li>
        <li>Connects Gemini Multimodal Live voice and video streams over FastAPI WebSockets with strict function-calling against Google Places, Directions, and Static Maps APIs so landmark guidance stays grounded in real geometry.</li>
      </ul>
      <p>
        <a href="https://github.com/aarushb/hack_ed_2026" rel="noopener">HackED Prototype (GitHub)</a> &middot;
        <a href="https://www.youtube.com/watch?v=48BnahsBE1Q" rel="noopener">Pitch &amp; Demo (YouTube)</a>
        <span class="text-muted">(Core production repository is private startup IP)</span>
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h3>UAIS Production Anti-Spam Bot</h3>
      <p class="text-muted">Python &middot; PyTorch &middot; Hugging Face BERT &middot; Asyncio</p>
      <p>
        Real-time moderation pipeline protecting a 700+ member Discord community (1,000+ daily messages) from social engineering scams.
      </p>
      <ul>
        <li>Combines fast regex rules for known scam signatures with a fine-tuned BERT classifier (97.8% accuracy) to catch context-aware social engineering attacks.</li>
        <li>Tuned with async concurrency to run under 100ms inside a 2GB RAM / 1 vCPU container at 99.9% uptime, backed by a moderator reaction feedback loop that logs confirmed catches and false alarms into a 13-feature anonymized dataset for retraining.</li>
      </ul>
      <p>
        <a href="https://github.com/UndergraduateArtificialIntelligenceClub/Spam-Detection-Discord-Bot" rel="noopener">GitHub Repository</a>
      </p>
    </div>
  </div>
</section>

<section id="open-source" class="mb-5" aria-labelledby="heading-oss">
  <h2 id="heading-oss">Upstream Open-Source Contributions</h2>

  <div class="card mb-3">
    <div class="card-body">
      <h3>Ren'Py Visual Novel Engine (v8.6.0 Release)</h3>
      <p class="text-muted">Python &middot; ctypes C ABI &middot; HTTP Range Fetcher &middot; Prism</p>
      <p>
        Integrated the <code>Prism</code> native screen-reader bridge directly into the core Ren'Py engine, earning official release credit in Ren'Py 8.6.0.
      </p>
      <ul>
        <li>Loaded <code>Prism</code> directly over its C ABI via standard-library <code>ctypes</code> (eliminating Windows MSVC/MinGW CRT mismatches and supporting macOS <code>.app</code> bundle paths), adding runtime screen-reader availability callbacks (<code>Shift+V</code>), user opt-out persistence, and sprite <code>alt</code> text (<code>config.auto_image_alt</code>).</li>
        <li>Wrote <code>scripts/fetch_prism.py</code> using HTTP <code>Range</code> requests against remote ZIP central directories to download and verify only the 4 platform shared libraries (1.6 MB total instead of the 468 MB full SDK archive).</li>
      </ul>
      <p>
        <a href="https://github.com/renpy/renpy/pull/7400" rel="noopener">Merged Pull Request #7400</a> &middot;
        <a href="https://www.renpy.org/release/8.6.0" rel="noopener">Ren'Py 8.6.0 Release Notes</a>
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h3>Streamer LAN Audio Server (Merged PR #3, +1,877 Lines)</h3>
      <p class="text-muted">Python &middot; FastAPI &middot; Server-Sent Events &middot; Web Audio API &middot; FFmpeg</p>
      <p>
        Shipped a 42-commit real-time playback, low-latency streaming, and accessibility overhaul for an open-source LAN radio server.
      </p>
      <ul>
        <li>Replaced 5-second page-reload polling with an event-driven Server-Sent Events (<code>/api/events</code>) state stream and a frame-aligned 44.1kHz stereo raw PCM Web Audio listener endpoint cutting stream delay to 150ms.</li>
        <li>Added <code>ffprobe</code> <code>.m4b</code> audiobook chapter extraction, sequential Book Mode playback, and consolidated form landmarks with ARIA live announcements.</li>
      </ul>
      <p>
        <a href="https://github.com/stevo399/streamer/pull/3" rel="noopener">Merged Pull Request #3</a>
      </p>
    </div>
  </div>
</section>

<section id="skills" class="mb-5" aria-labelledby="heading-skills">
  <h2 id="heading-skills">Technical Stack &amp; Honors</h2>
  <div class="card mb-3">
    <div class="card-body">
      <h3>Core Competencies &amp; Recognition</h3>
      <ul>
        <li><strong>Languages:</strong> Rust, Python, TypeScript/JavaScript, C++, C, SQL, Bash, LaTeX / LuaTeX</li>
        <li><strong>Systems &amp; Accessibility:</strong> Win32 UI Automation (<code>IUIAutomation</code>), wxDragon / wxPython, Prism, Linux D-Bus, WCAG 2.1/2.2 AA, WAI-ARIA, NVDA SDK</li>
        <li><strong>Backend, AI &amp; Cloud:</strong> FastAPI, Next.js, Astro, Node.js, PyTorch, Hugging Face Transformers (BERT), Gemini Live API, Web Audio API (HRTF &amp; Raw PCM), Cloudflare Workers &amp; D1, AWS (Bedrock, ECS Fargate, Transcribe, Polly, RDS), Docker, PostgreSQL</li>
        <li><strong>Honors:</strong> 1st Place EU Launchpad (<em>Northstar</em>), 1st Place AWS DevCon (<em>GuardReady</em>), 2nd Place natIgnite (<em>Rhythm &amp; Hue</em>), 3rd Place UAlberta CHADS CTF, $7,500 URI Research Grant, UAlberta International Entrance Scholarship, NTSE Scholar (Top 0.1% in India)</li>
      </ul>
    </div>
  </div>
</section>