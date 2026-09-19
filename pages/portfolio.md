.. title: Portfolio
.. slug: portfolio
.. date: 2026-09-19 00:00:00 UTC
.. type: text

# Featured Work

A selection of major systems, tools, and platforms I've engineered.

## VedAI
*Co-Founder & Lead Developer*

A universal document accessibility platform. I architected the production backend using FastAPI, PostgreSQL, and proprietary OCR pipelines to convert inaccessible PDFs into structured, screen-reader-friendly HTML.

- Processed 50,000+ pages with 95%+ structural accuracy.
- Deployed custom-trained vision models for interactive image exploration.

[Visit VedAI &rarr;](https://vedai.co)

## Syzygy Game Engine
*Lead Engine Architect & Audio Engineer*

An inclusive, custom-built 2D game engine created for a narrative design course. To bypass the inaccessibility of the standard Unity curriculum, I engineered the low-level backend in Python. I had the honor of working alongside an incredibly supportive team of programmers, writers, and artists who concurrently developed a full psychological narrative game on top of this engine within a single academic term.

- Architected a "One Object, Two Manifestations" pipeline rendering Pygame graphics and 3D spatial audio (OpenAL / Web Audio API) simultaneously for deep immersion.
- Implemented cross-platform screen reader support and WebAssembly (WASM) compatibility for seamless browser deployment.

[View Source &rarr;](https://github.com/Aarushb/cmput-250-syzygy)

## PalmPilot 2.0
*Project Lead & Architect*

A cross-platform gesture-controlled laptop automation tool. Uses computer vision to map hand gestures to system commands (window management, media controls) via a webcam.

- Architected a modular pipeline combining Python, MediaPipe, PyAutoGUI, and wxPython.
- Tracked 21 3D hand landmarks in real-time, utilizing custom polling logic to achieve sub-100ms latency at 30+ FPS.

[View Source &rarr;](https://github.com/UndergraduateArtificialIntelligenceClub/palm-pilot2.0)

## Polyglot-LLM
*Open Source Creator*

An NVDA screen reader add-on integrating Google Gemini Flash and Local LLMs to break language barriers for a global community of 250,000+ visually impaired users.

- Achieved sub-500ms latency via an asynchronous clipboard streaming pipeline.
- Implemented multi-tiered caching, reducing API token usage by ~40%.

[View Source &rarr;](https://github.com/Aarushb/polyglot-LLM)

## Anti-Spam Detection Bot
*Project Lead & ML Engineer*

An intelligent Discord bot deployed to protect servers from evolving phishing and scam attacks using a "Swiss Cheese" defense model.

- Architected a hybrid pipeline combining zero-latency Regex with a fine-tuned BERT transformer model.
- Achieved 97.8% detection accuracy on production servers with 700+ active users.
- Built a real-time analytics dashboard and a reaction-based false-positive auto-correction system.

[View Source &rarr;](https://github.com/UndergraduateArtificialIntelligenceClub/Spam-Detection-Discord-Bot)

# Open Source & Additional Projects

The following collection houses smaller initiatives, hackathon submissions, and open-source contributions. While some are short-term sprints, others are passion projects developed intermittently alongside my larger commitments. Should any of these demand more rapid or consistent development, they may graduate to the featured section above. The features listed represent their current state, monitor my GitHub for the latest updates!

## Rhythm & Hue
*Game Developer (NAT Ignite Hackathon, 2nd Place)*

An accessible, gamified Progressive Web App (PWA) designed to encourage physiotherapy adherence. Built in 48 hours using JavaScript, the Web Audio API, and DeviceMotion events.

- Engineered a repetition-detection algorithm utilizing Low-Pass Filters (95% accuracy).
- Developed a dual-feedback system: visual HTML5 Canvas rendering and dynamic audio BPM scaling based on physical movement velocity.

[Play Game &rarr;](https://artur-bertash.github.io/test-natIgnite/)

## RARS Accessibility Wrapper
*Open Source Creator*

A Python bridge for the RISC-V Assembler and Runtime Simulator. I built this to ensure visually impaired students have equal footing in low-level architecture courses, aiming to remove the friction and burnout that often pushes disabled peers out of STEM.

- Bypasses the completely inaccessible Java Swing UI, allowing visually impaired students to interactively debug and step through assembly code via the CLI.
- Filters and translates massive command-line dumps into clean, readable state changes for screen readers.

[View Source &rarr;](https://github.com/Aarushb/rars_access)

## ERDot Compatibility Patch
*Open Source Contributor*

Restored Python 3.12+ functionality for a text-to-Entity-Relationship-diagram tool that had broken due to deprecated core Python libraries.

- Preserved a critical non-visual workflow for database design, allowing blind students to use text formats (JSON) to programmatically generate the visual diagrams required by professors.

[View Open PR &rarr;](https://github.com/ehne/ERDot/pull/17) &nbsp; [View My Fork (Try it yourself!) &rarr;](https://github.com/Aarushb/ERDot)
