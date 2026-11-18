(() => {
  "use strict";

  // --- 1. Procedural Web Audio API Synthesizer (Zero External Assets) ---
  class EarconSynth {
    constructor() {
      this.ctx = null;
      this.enabled = false;
      // C Major Pentatonic frequencies (Hz)
      this.scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];
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

    playTone(freq, { duration = 0.12, pan = 0, type = "triangle", cutoff = 1400, gain = 0.08, delay = 0 } = {}, force = false) {
      if ((!this.enabled && !force) || !this.ctx) return;

      const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const panner = this.ctx.createStereoPanner();
      const amp = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(cutoff, now);

      panner.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), now);

      // Smooth 10ms attack and exponential decay to eliminate audio clicks
      amp.gain.setValueAtTime(0.0001, now);
      amp.gain.linearRampToValueAtTime(gain, now + 0.01);
      amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(panner);
      panner.connect(amp);
      amp.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration + 0.02);
    }

    // Standard item-to-item navigation cue
    cueItem(index, total) {
      const ratio = total > 1 ? index / (total - 1) : 0.5;
      const pan = -0.45 + ratio * 0.9; // Sweeps -0.45 (left) -> +0.45 (right)
      const freq = this.scale[index % this.scale.length];
      this.playTone(freq, { duration: 0.11, pan, type: "triangle", cutoff: 1350, gain: 0.075 });
    }

    // Two-note fifth interval when crossing into a new major section
    cueSectionBoundary(index, total) {
      const ratio = total > 1 ? index / (total - 1) : 0.5;
      const pan = -0.45 + ratio * 0.9;
      this.playTone(293.66, { duration: 0.1, pan, type: "sine", cutoff: 1500, gain: 0.07, delay: 0 });
      this.playTone(440.0, { duration: 0.15, pan, type: "triangle", cutoff: 1600, gain: 0.08, delay: 0.055 });
    }

    // Muted low octave thud at top/bottom boundary
    cueBoundaryThud(isBottom) {
      const pan = isBottom ? 0.45 : -0.45;
      this.playTone(130.81, { duration: 0.14, pan, type: "sine", cutoff: 420, gain: 0.1 });
    }

    playToggleOn() {
      this.playTone(261.63, { duration: 0.09, pan: -0.2, gain: 0.07, delay: 0 }, true);
      this.playTone(329.63, { duration: 0.09, pan: 0.0, gain: 0.07, delay: 0.05 }, true);
      this.playTone(392.0, { duration: 0.14, pan: 0.2, gain: 0.08, delay: 0.1 }, true);
    }

    playToggleOff() {
      this.playTone(392.0, { duration: 0.09, pan: 0.2, gain: 0.06, delay: 0 }, true);
      this.playTone(261.63, { duration: 0.13, pan: -0.2, gain: 0.06, delay: 0.05 }, true);
    }

    playModalCue(opening) {
      if (opening) {
        this.playTone(392.0, { duration: 0.08, gain: 0.06, delay: 0 });
        this.playTone(523.25, { duration: 0.12, gain: 0.07, delay: 0.045 });
      } else {
        this.playTone(392.0, { duration: 0.09, gain: 0.05, delay: 0 });
      }
    }
  }

  // --- 2. Keyboard Shortcut Router & ARIA Live Announcer ---
  document.addEventListener("DOMContentLoaded", () => {
    const synth = new EarconSynth();
    const items = Array.from(document.querySelectorAll(".portfolio-item"));
    const announcer = document.getElementById("a11y-announcer");
    const toggleBtn = document.getElementById("audio-toggle-btn");
    const dialog = document.getElementById("shortcuts-dialog");
    const openHelpBtn = document.getElementById("shortcuts-open-btn");
    const closeHelpBtn = document.getElementById("shortcuts-close-btn");

    // Link each card to its heading for screen reader name resolution
    items.forEach((item, idx) => {
      const title = item.querySelector("h3");
      if (title) {
        const headingId = title.id || `portfolio-item-heading-${idx}`;
        title.id = headingId;
        item.setAttribute("aria-labelledby", headingId);
      }
    });

    const sectionMap = {
      "1": "experience",
      "2": "projects",
      "3": "open-source",
      "4": "skills"
    };

    let currentIndex = -1;
    let lastFocusedBeforeModal = null;

    function announce(text) {
      if (!announcer) return;
      announcer.textContent = "";
      requestAnimationFrame(() => {
        announcer.textContent = text;
      });
    }

    function updateToggleUI(isOn) {
      if (!toggleBtn) return;
      toggleBtn.setAttribute("aria-pressed", String(isOn));
      toggleBtn.textContent = isOn ? "Audio Cues: On" : "Audio Cues: Off";
    }

    function focusItem(nextIndex) {
      if (items.length === 0) return;

      if (nextIndex < 0) {
        synth.cueBoundaryThud(false);
        announce("Top of portfolio items");
        return;
      }
      if (nextIndex >= items.length) {
        synth.cueBoundaryThud(true);
        announce("End of portfolio items");
        return;
      }

      const prevSection = currentIndex >= 0 ? items[currentIndex].dataset.section : null;
      const target = items[nextIndex];
      const nextSection = target.dataset.section || "";
      const titleEl = target.querySelector("h3");
      const titleText = titleEl ? titleEl.textContent.trim() : "Item";

      currentIndex = nextIndex;

      // Focus the heading so screen readers (NVDA/JAWS/VoiceOver) announce the heading
      // and position the virtual reading cursor at the item's content, rather than
      // announcing generic "document" / "article" on the container.
      if (titleEl) {
        titleEl.setAttribute("tabindex", "-1");
        titleEl.focus({ preventScroll: true });
      } else {
        target.focus({ preventScroll: true });
      }
      target.scrollIntoView({ behavior: "smooth", block: "center" });

      if (prevSection !== nextSection) {
        synth.cueSectionBoundary(currentIndex, items.length);
        announce(`${nextSection}`);
      } else {
        synth.cueItem(currentIndex, items.length);
      }
    }

    function jumpToSection(sectionId) {
      const sectionEl = document.getElementById(sectionId);
      if (!sectionEl) return;

      const heading = sectionEl.querySelector("h2");
      const firstItemIndex = items.findIndex((el) => el.closest(`#${sectionId}`));

      if (firstItemIndex !== -1) {
        currentIndex = firstItemIndex;
      }

      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });

      const idxForPan = firstItemIndex !== -1 ? firstItemIndex : 0;
      synth.cueSectionBoundary(idxForPan, items.length || 4);
      announce(`Section: ${heading ? heading.textContent.trim() : sectionId}`);
    }

    function openHelpModal() {
      if (!dialog) return;
      lastFocusedBeforeModal = document.activeElement;
      if (typeof dialog.showModal === "function") {
        try {
          dialog.showModal();
        } catch (e) {
          dialog.setAttribute("open", "");
        }
      } else {
        dialog.setAttribute("open", "");
      }
      synth.playModalCue(true);
      const closeBtn = document.getElementById("shortcuts-close-btn");
      if (closeBtn) closeBtn.focus();
    }

    function closeHelpModal() {
      if (!dialog) return;
      try {
        if (dialog.open) {
          dialog.close();
        }
      } catch (e) {}
      dialog.removeAttribute("open");
      synth.playModalCue(false);
      if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === "function") {
        lastFocusedBeforeModal.focus();
      }
    }

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const state = synth.toggle();
        updateToggleUI(state);
        announce(state ? "Spatial audio cues enabled" : "Audio cues muted");
      });
    }

    if (openHelpBtn) openHelpBtn.addEventListener("click", openHelpModal);
    if (closeHelpBtn) {
      closeHelpBtn.addEventListener("click", (e) => {
        e.preventDefault();
        closeHelpModal();
      });
    }

    if (dialog) {
      dialog.addEventListener("close", () => {
        if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === "function") {
          lastFocusedBeforeModal.focus();
        }
      });
      dialog.addEventListener("click", (e) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX && e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          closeHelpModal();
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
      if (tag === "input" || tag === "textarea" || tag === "select" || e.target.isContentEditable) {
        return;
      }

      if (dialog && dialog.open) {
        if (e.key === "?" || e.key === "Escape") {
          e.preventDefault();
          closeHelpModal();
        }
        return;
      }

      const key = e.key.toLowerCase();

      if (key === "j") {
        e.preventDefault();
        focusItem(currentIndex + 1);
      } else if (key === "k") {
        e.preventDefault();
        focusItem(currentIndex <= 0 ? 0 : currentIndex - 1);
      } else if (sectionMap[e.key]) {
        e.preventDefault();
        jumpToSection(sectionMap[e.key]);
      } else if (key === "m") {
        e.preventDefault();
        const state = synth.toggle();
        updateToggleUI(state);
        announce(state ? "Spatial audio cues enabled" : "Audio cues muted");
      } else if (key === "g") {
        const gh = document.getElementById("link-github");
        if (gh) {
          e.preventDefault();
          gh.focus();
          synth.playTone(440, { duration: 0.08, gain: 0.06 });
        }
      } else if (key === "l") {
        const li = document.getElementById("link-linkedin");
        if (li) {
          e.preventDefault();
          li.focus();
          synth.playTone(440, { duration: 0.08, gain: 0.06 });
        }
      } else if (key === "r") {
        const res = document.getElementById("link-resume");
        if (res) {
          e.preventDefault();
          res.focus();
          synth.playTone(440, { duration: 0.08, gain: 0.06 });
        }
      } else if (e.key === "?") {
        e.preventDefault();
        openHelpModal();
      }
    });
  });
})();
