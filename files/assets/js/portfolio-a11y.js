(() => {
  "use strict";

  // --- 1. Procedural 2D HRTF Web Audio Synthesizer (Zero External Assets) ---
  class EarconSynth {
    constructor() {
      this.ctx = null;
      this.enabled = false;
      // C Major Pentatonic from high (top of page) to low (bottom of page)
      this.scaleDesc = [523.25, 440.0, 392.0, 329.63, 293.66, 261.63];
    }

    initContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    }

    toggle() {
      this.initContext();
      this.enabled = !this.enabled;
      if (this.enabled) {
        this.playToggleOn();
      } else {
        this.playToggleOff();
      }
      return this.enabled;
    }

    createSpatialNode(x, y, now) {
      if (typeof this.ctx.createPanner === "function") {
        const panner = this.ctx.createPanner();
        panner.panningModel = "HRTF";
        panner.distanceModel = "inverse";
        panner.refDistance = 1;
        panner.maxDistance = 10;
        panner.rolloffFactor = 0.35;

        const px = Math.max(-1.2, Math.min(1.2, x));
        const py = Math.max(-0.8, Math.min(0.8, y));
        if (panner.positionX) {
          panner.positionX.setValueAtTime(px, now);
          panner.positionY.setValueAtTime(py, now);
          panner.positionZ.setValueAtTime(-1.0, now);
        } else {
          panner.setPosition(px, py, -1.0);
        }
        return panner;
      }

      const stereo = this.ctx.createStereoPanner();
      stereo.pan.setValueAtTime(Math.max(-0.75, Math.min(0.75, x * 0.65)), now);
      return stereo;
    }

    playTone(
      freq,
      { duration = 0.11, x = 0, y = 0, type = "triangle", cutoff = 1500, gain = 0.16, delay = 0 } = {},
      force = false
    ) {
      if ((!this.enabled && !force) || !this.ctx) return;

      const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const spatial = this.createSpatialNode(x, y, now);
      const amp = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(cutoff, now);

      // Smooth 10ms attack and exponential decay to eliminate audio clicks
      amp.gain.setValueAtTime(0.0001, now);
      amp.gain.linearRampToValueAtTime(gain, now + 0.01);
      amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(spatial);
      spatial.connect(amp);
      amp.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.02);
    }

    getSpatialCoords(el) {
      if (!el || typeof el.getBoundingClientRect !== "function") {
        return { x: 0, y: 0, docRatio: 0.5 };
      }

      const rects = typeof el.getClientRects === "function" ? el.getClientRects() : null;
      const rect = rects && rects.length > 0 ? rects[0] : el.getBoundingClientRect();
      const vw = Math.max(1, window.innerWidth || document.documentElement.clientWidth);
      const vh = Math.max(1, window.innerHeight || document.documentElement.clientHeight);
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(1, document.documentElement.scrollHeight);

      // Horizontal viewport position: 0 (left edge) -> 1 (right edge)
      const centerX = rect.left + rect.width / 2;
      const xNorm = Math.max(0, Math.min(1, centerX / vw));
      const x = (xNorm - 0.5) * 2.2; // Maps to [-1.1, +1.1] for clear left/right HRTF separation

      // Vertical viewport position: +0.7 (top) -> -0.7 (bottom)
      const centerY = rect.top + rect.height / 2;
      const yNorm = Math.max(0, Math.min(1, centerY / vh));
      const y = (0.5 - yNorm) * 1.4;

      // Full-document vertical progress: 0 (top of page) -> 1 (bottom of page)
      const docRatio = Math.max(0, Math.min(1, (rect.top + scrollY) / docHeight));

      return { x, y, docRatio };
    }

    // 2D spatial earcon when naturally focusing interactive elements
    cueFocus(el) {
      if (!this.enabled) return;
      this.initContext();

      const { x, y, docRatio } = this.getSpatialCoords(el);
      const scaleIndex = Math.min(
        this.scaleDesc.length - 1,
        Math.floor(docRatio * this.scaleDesc.length)
      );
      const freq = this.scaleDesc[scaleIndex];
      const tag = el.tagName ? el.tagName.toLowerCase() : "";

      if (tag === "button" || el.getAttribute("role") === "button") {
        this.playTone(freq, { duration: 0.1, x, y, type: "sine", cutoff: 1400, gain: 0.17 });
        this.playTone(freq * 1.5, { duration: 0.07, x, y, type: "triangle", cutoff: 1800, gain: 0.075, delay: 0.015 });
      } else if (tag === "a") {
        this.playTone(freq, { duration: 0.11, x, y, type: "triangle", cutoff: 1450, gain: 0.16 });
      } else {
        this.playTone(freq, { duration: 0.1, x, y, type: "sine", cutoff: 1300, gain: 0.15 });
      }
    }

    // Two-note fifth interval when jumping to a section anchor (#experience, etc.)
    cueSectionJump(el) {
      if (!this.enabled) return;
      this.initContext();

      const { x, y } = this.getSpatialCoords(el);
      this.playTone(293.66, { duration: 0.1, x, y, type: "sine", cutoff: 1500, gain: 0.15, delay: 0 });
      this.playTone(440.0, { duration: 0.15, x, y, type: "triangle", cutoff: 1650, gain: 0.17, delay: 0.055 });
    }

    playToggleOn() {
      this.playTone(261.63, { duration: 0.09, x: -0.35, y: 0, gain: 0.15, delay: 0 }, true);
      this.playTone(329.63, { duration: 0.09, x: 0.0, y: 0.1, gain: 0.15, delay: 0.05 }, true);
      this.playTone(392.0, { duration: 0.14, x: 0.35, y: 0.2, gain: 0.17, delay: 0.1 }, true);
    }

    playToggleOff() {
      this.playTone(392.0, { duration: 0.09, x: 0.35, y: 0.2, gain: 0.14, delay: 0 }, true);
      this.playTone(261.63, { duration: 0.13, x: -0.35, y: 0, gain: 0.14, delay: 0.05 }, true);
    }
  }

  // --- 2. Heading Normalization, Native Accesskeys & Event-Driven Audio ---
  document.addEventListener("DOMContentLoaded", () => {
    // When a page hides its title (.. hidetitle: True) and navbar brand is not an <h1>,
    // keep the shallowest content heading (#hero-heading) at <h1>,
    // with sections at <h2> and card items at <h3>.
    document.querySelectorAll(".entry-content").forEach((container) => {
      const article = container.closest("article");
      const hasHeaderTitle = article && article.querySelector("header h1, header h2, header .entry-title");
      if (hasHeaderTitle) return;

      const headings = Array.from(container.querySelectorAll("h1, h2, h3, h4, h5, h6"));
      if (headings.length === 0) return;

      const minLevel = Math.min(...headings.map((h) => parseInt(h.tagName.charAt(1), 10)));
      const offset = 1 - minLevel;
      if (offset === 0) return;

      headings.forEach((h) => {
        const currentLevel = parseInt(h.tagName.charAt(1), 10);
        const newLevel = Math.min(6, Math.max(1, currentLevel + offset));
        if (newLevel === currentLevel) return;

        const replacement = document.createElement("h" + newLevel);
        Array.from(h.attributes).forEach((attr) => {
          replacement.setAttribute(attr.name, attr.value);
        });
        while (h.firstChild) {
          replacement.appendChild(h.firstChild);
        }
        h.parentNode.replaceChild(replacement, h);
      });
    });

    // Attach native HTML accesskey bindings to Nikola's generated navbar links
    const navAccessKeys = {
      "#experience": "w",
      "#projects": "p",
      "#open-source": "o",
      "#skills": "s"
    };
    Object.entries(navAccessKeys).forEach(([href, key]) => {
      const link = document.querySelector(`nav a[href="${href}"]`);
      if (link) link.setAttribute("accesskey", key);
    });

    const synth = new EarconSynth();
    const announcer = document.getElementById("a11y-announcer");
    const toggleBtn = document.getElementById("audio-toggle-btn");
    let announceClearTimer = null;
    let suppressNextToggleFocusCue = false;

    function announce(text) {
      if (!announcer) return;
      if (announceClearTimer) clearTimeout(announceClearTimer);
      announcer.textContent = "";
      requestAnimationFrame(() => {
        announcer.textContent = text;
        announceClearTimer = setTimeout(() => {
          announcer.textContent = "";
        }, 1500);
      });
    }

    function updateToggleUI(isOn) {
      if (!toggleBtn) return;
      toggleBtn.setAttribute("aria-pressed", String(isOn));
      toggleBtn.textContent = isOn ? "Audio Cues: On" : "Audio Cues: Off";
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        suppressNextToggleFocusCue = true;
        const state = synth.toggle();
        updateToggleUI(state);
        announce(state ? "Spatial audio cues enabled" : "Audio cues muted");
        setTimeout(() => {
          suppressNextToggleFocusCue = false;
        }, 100);
      });
    }

    // Play 2D spatial earcon when naturally tabbing or jumping via accesskey
    document.addEventListener("focusin", (e) => {
      const target = e.target;
      if (!target || typeof target.matches !== "function") return;
      if (!target.matches('a, button, summary, [tabindex="0"]')) return;
      if (target === toggleBtn && suppressNextToggleFocusCue) return;

      requestAnimationFrame(() => {
        synth.cueFocus(target);
      });
    });

    // Play section-jump fifth interval when navigating to an anchor (#experience, etc.)
    window.addEventListener("hashchange", () => {
      const id = window.location.hash ? window.location.hash.slice(1) : "";
      if (!id) return;
      const sectionEl = document.getElementById(id);
      if (!sectionEl) return;

      const heading = sectionEl.querySelector("h2, h3, h4") || sectionEl;
      synth.cueSectionJump(heading);
    });
  });
})();
