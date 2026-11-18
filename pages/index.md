<!--
.. title: Aarush Bhat — Systems, AI & Accessibility Engineer
.. slug: index
.. hidetitle: True
.. type: text
-->

<div id="a11y-announcer" class="sr-only" aria-live="polite" aria-atomic="true"></div>

<section aria-labelledby="hero-heading" class="mb-5">
  <h2 id="hero-heading">Systems, AI Agent, &amp; Accessibility Engineer</h2>
  <p class="lead">
    Computing Science student at the University of Alberta (4.0 GPA). I build low-level developer tools in Rust, real-time audio and AI systems, and software where non-visual accessibility is part of the core architecture rather than an afterthought.
  </p>
  <p>
    <a id="link-github" href="https://github.com/Aarushb" rel="noopener">GitHub</a> &middot;
    <a id="link-linkedin" href="https://linkedin.com/in/aarushdev" rel="noopener">LinkedIn</a> &middot;
    <a id="link-resume" href="/assets/Aarush_Bhat_Resume.pdf">Resume (PDF)</a> &middot;
    <a href="mailto:aarush.bhat04@gmail.com">aarush.bhat04@gmail.com</a>
  </p>
  <div role="group" aria-label="Accessibility and keyboard controls" class="mt-3">
    <button id="audio-toggle-btn" type="button" class="btn btn-sm btn-outline-primary" aria-pressed="false">
      Audio Cues: Off
    </button>
    <button id="shortcuts-open-btn" type="button" class="btn btn-sm btn-outline-secondary ml-2">
      Keyboard Shortcuts (?)
    </button>
  </div>
</section>

<section id="experience" aria-labelledby="heading-experience" class="mb-5">
  <h2 id="heading-experience">Experience &amp; Funded R&amp;D</h2>

  <article class="card mb-3 portfolio-item" data-section="Experience" tabindex="-1">
    <div class="card-body">
      <h3>Lead Software Engineering Intern &mdash; Kerr Interior Systems</h3>
      <p class="text-muted">Sep 2026 &ndash; Present &middot; Edmonton, AB</p>
      <p>
        Leading a five-person student engineering team automating cross-platform construction operations and payroll workflows across legacy systems (Procore, WinBid, Plexxis) that lack modern webhook APIs.
      </p>
      <ul>
        <li>Architected self-hosted Computer-Use Agent execution loops on dedicated local hardware to bridge multi-step ERP job setups without per-seat cloud VM overhead.</li>
        <li>Built automated payroll and data reconciliation pipelines linking field estimating records to accounting exports.</li>
      </ul>
    </div>
  </article>

  <article class="card mb-3 portfolio-item" data-section="Experience" tabindex="-1">
    <div class="card-body">
      <h3>Principal Investigator &mdash; UAlberta Undergraduate Research Initiative (URI)</h3>
      <p class="text-muted">May 2026 &ndash; Present &middot; $7,500 Max-Tier Research Grant &middot; TUG 2026 Speaker</p>
      <p>
        Spearheading funded research to make upper-level university STEM courses navigable without sight, validated by a conference talk at the 2026 TeX Users Group (TUG) meeting in Calgary.
      </p>
      <ul>
        <li>Engineered a cross-platform LuaTeX PDF reader with stable MathML rendering and a Wolfram API equation editor to eliminate raw LaTeX syntax cognitive load.</li>
        <li>Built programmatic Python bridges for inaccessible coursework GUIs (including Entity-Relationship Diagram generation replacing draw.io) and evaluated 3D-printed haptics versus 2D swell paper.</li>
      </ul>
    </div>
  </article>

  <article class="card mb-3 portfolio-item" data-section="Experience" tabindex="-1">
    <div class="card-body">
      <h3>Co-Founder &amp; Lead Developer &mdash; VedAI</h3>
      <p class="text-muted">Oct 2023 &ndash; Sep 2026 &middot; Python, FastAPI, React, PostgreSQL</p>
      <p>
        Built an automated STEM document restructuring platform that converted over 50,000 pages of inaccessible academic material at 95%+ structural accuracy.
      </p>
      <ul>
        <li>Deployed custom-trained vision models for inline diagram descriptions alongside a grid-based spatial explorer allowing screen-reader users to inspect visual layouts by coordinate.</li>
      </ul>
    </div>
  </article>

  <article class="card mb-3 portfolio-item" data-section="Experience" tabindex="-1">
    <div class="card-body">
      <h3>Vice President of Technology &mdash; U of A AI Society (UAIS)</h3>
      <p class="text-muted">Oct 2023 &ndash; May 2026 &middot; Edmonton, AB</p>
      <p>
        Directed technical strategy and agile student engineering teams for a 700+ member AI organization, organizing joint workshops with Amii and AltaML and shipping deployed community tools.
      </p>
    </div>
  </article>
</section>

<section id="projects" aria-labelledby="heading-projects" class="mb-5">
  <h2 id="heading-projects">Selected Systems &amp; Engineering</h2>

  <article class="card mb-3 portfolio-item" data-section="Projects" tabindex="-1">
    <div class="card-body">
      <h3>RISC-Free</h3>
      <p class="text-muted">Rust &middot; Win32 UI Automation &middot; wxDragon &middot; Prism</p>
      <p>
        Native RISC-V (RV32/RV64) assembler, emulator, and desktop IDE written in Rust to replace Java Swing's RARS in computer architecture coursework, evolving from my earlier <a href="https://github.com/Aarushb/rars_access">rars_access</a> CLI wrapper.
      </p>
      <ul>
        <li>Implements integer, M, Zicsr, F/D floating-point, and C extensions alongside a reversible debugger supporting instruction backstepping, memory watchpoints, uninitialized-memory <code>memcheck</code>, and calling-convention verification.</li>
        <li>Exposes a full native Windows UI Automation tree via <code>wxDragon</code>, routes non-focus runtime events to NVDA, JAWS, and SAPI via <code>Prism</code>, and ships a headless CLI emitting JSONL traces verified by 250+ differential tests.</li>
      </ul>
      <p><a href="https://github.com/Aarushb/riscfree">Source Code &amp; Architecture (GitHub)</a></p>
    </div>
  </article>

  <article class="card mb-3 portfolio-item" data-section="Projects" tabindex="-1">
    <div class="card-body">
      <h3>SpeakSync</h3>
      <p class="text-muted">Python 3.11+ &middot; Win32 / IUIAutomation &middot; Linux D-Bus &middot; macOS JXA &middot; Prism</p>
      <p>
        Cross-platform background system-tray monitor that tracks cloud sync clients (Dropbox, OneDrive, Google Drive, Syncthing) without moving the cursor or stealing window focus.
      </p>
      <ul>
        <li>Inspects Windows 11's hidden XAML overflow flyout (<code>TopLevelWindowForOverflowXamlIsland</code>) via cross-process UIA caching, falling back to <code>ToolbarWindow32</code> memory inspection on Windows 10 when uninitialized.</li>
        <li>Deduplicates Windows 11 <code>Shell_NotifyIcon(NIM_MODIFY)</code> tooltip concatenation bugs, enriches missing tray states via local DriveFS logs and Unix sockets, and queries D-Bus on Linux and <code>AXExtrasMenuBar</code> on macOS.</li>
      </ul>
      <p><a href="https://github.com/Aarushb/speak-sync">GitHub Repository &amp; Multi-OS Releases</a></p>
    </div>
  </article>

  <article class="card mb-3 portfolio-item" data-section="Projects" tabindex="-1">
    <div class="card-body">
      <h3>Northstar</h3>
      <p class="text-muted">Python &middot; FastAPI &middot; WebSockets &middot; Gemini Live API &middot; Web Audio (HRTF) &middot; 1st Place, EU Launchpad</p>
      <p>
        Screen-free outdoor navigation system built so blind pedestrians can orient themselves using directional spatial sound and conversational landmark guidance.
      </p>
      <ul>
        <li>Converts live GPS coordinates and compass heading math into sub-100ms 3D-positioned audio beacons via browser Web Audio HRTF nodes.</li>
        <li>Orchestrates Gemini Multimodal Live voice/video streams over FastAPI WebSockets with strict agentic function-calling against Google Places, Directions, and Static Maps APIs to ground instructions in verified geometry.</li>
      </ul>
      <p>
        <a href="https://github.com/Aarushb">HackED Public Prototype</a>
        <span class="text-muted">(Core production repository is private startup IP)</span>
      </p>
    </div>
  </article>

  <article class="card mb-3 portfolio-item" data-section="Projects" tabindex="-1">
    <div class="card-body">
      <h3>UAIS Production Anti-Spam Bot</h3>
      <p class="text-muted">Python &middot; PyTorch &middot; Hugging Face BERT &middot; Asyncio</p>
      <p>
        Real-time moderation pipeline protecting a 700+ member Discord community (1,000+ messages/day) against context-aware social engineering scams.
      </p>
      <ul>
        <li>Pairs zero-latency regex filtering with a fine-tuned BERT Transformer (97.8% accuracy) optimized via async concurrency to sustain sub-100ms inference inside a 2GB RAM / 1 vCPU container at 99.9% uptime.</li>
      </ul>
      <p><a href="https://github.com/UndergraduateArtificialIntelligenceClub/Spam-Detection-Discord-Bot">GitHub Repository</a></p>
    </div>
  </article>
</section>

<section id="open-source" aria-labelledby="heading-oss" class="mb-5">
  <h2 id="heading-oss">Upstream Open-Source Contributions</h2>

  <article class="card mb-3 portfolio-item" data-section="Open Source" tabindex="-1">
    <div class="card-body">
      <h3>Ren'Py Visual Novel Engine (Official v8.6.0 Release)</h3>
      <p class="text-muted">Python &middot; Cython &middot; Prism Accessibility Bridge</p>
      <p>
        Integrated the <code>Prism</code> native screen-reader bridge directly into the core Ren'Py engine, adding auto-detected Screen Reader Mode (<code>Shift+V</code>) for NVDA, JAWS, VoiceOver, and Orca alongside declarative sprite <code>alt</code> text properties. Officially credited in the Ren'Py 8.6.0 release notes.
      </p>
      <p>
        <a href="https://www.renpy.org/release/8.6.0" rel="noopener">Ren'Py 8.6.0 Official Release Notes</a>
      </p>
    </div>
  </article>

  <article class="card mb-3 portfolio-item" data-section="Open Source" tabindex="-1">
    <div class="card-body">
      <h3>Streamer LAN Audio Server (Merged PR #3 &mdash; +1,877 Lines)</h3>
      <p class="text-muted">Python &middot; FastAPI &middot; Server-Sent Events &middot; Web Audio API &middot; FFmpeg</p>
      <p>
        Merged a 42-commit overhaul replacing 5-second page polling with a Server-Sent Events (<code>/api/events</code>) real-time state stream, a 150ms raw 44.1kHz stereo PCM Web Audio listener endpoint with frame-aligned buffer writes, <code>ffprobe</code> M4B audiobook chapter extraction, and ARIA live region announcements.
      </p>
      <p>
        <a href="https://github.com/stevo399/streamer/pull/3" rel="noopener">Merged Pull Request #3</a>
      </p>
    </div>
  </article>
</section>

<section id="skills" aria-labelledby="heading-skills" class="mb-5">
  <h2 id="heading-skills">Technical Stack &amp; Honors</h2>
  <article class="card mb-3 portfolio-item" data-section="Skills" tabindex="-1">
    <div class="card-body">
      <h3>Core Competencies &amp; Recognition</h3>
      <ul>
        <li><strong>Languages:</strong> Rust, Python, TypeScript/JavaScript, C++, C, SQL, Bash, LaTeX</li>
        <li><strong>Systems &amp; Accessibility:</strong> Win32 UI Automation (<code>IUIAutomation</code>), wxDragon / wxPython, Prism, Linux D-Bus, WCAG 2.1/2.2 AA, WAI-ARIA, NVDA SDK</li>
        <li><strong>Backend, AI &amp; Cloud:</strong> FastAPI, Next.js, Astro, Node.js, PyTorch, Hugging Face Transformers (BERT), Gemini Live API, Web Audio API (HRTF &amp; Raw PCM), Cloudflare Workers &amp; D1, AWS (Bedrock, ECS Fargate, Transcribe, Polly, RDS), Docker, PostgreSQL</li>
        <li><strong>Honors:</strong> 1st Place EU Launchpad (<em>Northstar</em>), 1st Place AWS DevCon (<em>GuardReady</em>), 2nd Place natIgnite (<em>Rhythm &amp; Hue</em>), 3rd Place UAlberta CHADS CTF, $7,500 URI Research Grant, UAlberta International Entrance Scholarship, NTSE Scholar (Top 0.1% in India)</li>
      </ul>
    </div>
  </article>
</section>
