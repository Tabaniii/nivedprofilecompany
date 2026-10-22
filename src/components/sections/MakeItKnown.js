"use client";

import { useEffect, useRef, useState } from "react";

const TONES = ["#2A53E7", "#243b8f", "#243b8f", "#1b2140"];
const EDGE_ODDS = [0.75, 0.58, 0.4, 0.22, 0.1];

function rng(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getCols(w) {
  if (w < 640) return 12;
  if (w < 1024) return 16;
  return 22;
}

const HEADING_WORDS = [
  {
    word: "MAKE",
    letters: [
      { char: "M", highlight: false },
      { char: "A", highlight: true },
      { char: "K", highlight: false },
      { char: "E", highlight: false },
    ],
  },
  {
    word: "IT",
    letters: [
      { char: "I", highlight: false },
      { char: "T", highlight: true },
    ],
  },
  {
    word: "KNOWN",
    letters: [
      { char: "K", highlight: false },
      { char: "N", highlight: false },
      { char: "O", highlight: true },
      { char: "W", highlight: false },
      { char: "N", highlight: false },
    ],
  },
];

function BlockField() {
  const fieldRef = useRef(null);
  const gridRef = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const field = fieldRef.current;
    const grid = gridRef.current;
    let cells = [];
    let u = 0;
    let cols = 22;
    let rows = 0;
    let lastW = 0;
    let last = -1;

    const build = () => {
      const w = field.clientWidth;
      lastW = w;
      cols = getCols(w);
      u = w / cols;
      rows = Math.ceil(field.clientHeight / u);
      grid.style.setProperty("--u", `${u}px`);
      grid.style.gridTemplateColumns = `repeat(${cols}, ${u}px)`;
      grid.style.gridAutoRows = `${u}px`;
      grid.replaceChildren();
      cells = [];

      const r = rng(7);
      const frag = document.createDocumentFragment();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const el = document.createElement("i");
          el.className = "mik-cell";
          const depthY = Math.min(y, rows - 1 - y);
          const depthX = Math.min(x, cols - 1 - x);
          const depth = Math.min(depthY, depthX + 1);
          if (depth < EDGE_ODDS.length && r() < EDGE_ODDS[depth]) {
            el.classList.add("mik-on");
            el.style.setProperty("--c", TONES[Math.floor(r() * TONES.length)]);
            el.style.setProperty(
              "--d",
              `${(depth * 0.1 + x * 0.025 + r() * 0.35).toFixed(2)}s`
            );
          }
          cells.push(el);
          frag.appendChild(el);
        }
      }
      grid.appendChild(frag);
    };

    const mark = (e) => {
      const b = field.getBoundingClientRect();
      const x = Math.floor((e.clientX - b.left) / u);
      const y = Math.floor((e.clientY - b.top) / u);
      if (x < 0 || x >= cols || y < 0 || y >= rows) return;
      const i = y * cols + x;
      if (i === last) return;
      last = i;
      const el = cells[i];
      if (!el) return;
      el.classList.add("is-lit");
      setTimeout(() => el.classList.remove("is-lit"), 70);
    };

    const onResize = () => {
      if (Math.abs(field.clientWidth - lastW) > 1) build();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
        } else if (entry.boundingClientRect.top > window.innerHeight * 0.7) {
          // If scrolled back up into Hero, reset so the entrance animation can replay
          setLive(false);
        }
      },
      { threshold: [0.15, 0.4] }
    );

    build();
    observer.observe(field);
    field.addEventListener("pointermove", mark);
    field.addEventListener("pointerdown", mark);
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      field.removeEventListener("pointermove", mark);
      field.removeEventListener("pointerdown", mark);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={fieldRef}
      className={`relative h-full w-full cursor-crosshair overflow-hidden ${
        live ? "is-live" : ""
      }`}
    >
      <div
        ref={gridRef}
        aria-hidden="true"
        className="absolute inset-0 grid content-start"
      />

      <h2
        id="make-it-known-heading"
        className="pointer-events-none absolute inset-0 m-0 flex items-center justify-center text-center font-bricolage text-[clamp(2.2rem,7.6vw,7.6rem)] font-extrabold uppercase tracking-[-0.03em] select-none px-4"
        style={{ fontFamily: "var(--font-bricolage-grotesque), sans-serif" }}
      >
        <span className="inline-flex items-center gap-[0.38em] whitespace-nowrap">
          {HEADING_WORDS.map((w, i) => (
            <span key={w.word} className="inline-block overflow-hidden pb-[0.06em]">
              <span
                className="mik-line inline-flex transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: live ? "none" : "translateY(110%)",
                  transitionDelay: `${0.2 + i * 0.1}s`,
                }}
              >
                {w.letters.map((l, letterIndex) => (
                  <span
                    key={`${w.word}-${letterIndex}`}
                    className={l.highlight ? "text-[#2A53E7]" : "text-[#F3F2EE]"}
                  >
                    {l.char}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </span>
      </h2>

    </div>
  );
}

export function MakeItKnown() {
  const sectionRef = useRef(null);
  const revealRef = useRef(null);
  const lineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reveal = revealRef.current;
    const line = lineRef.current;
    const glow = glowRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;

    const update = () => {
      frame = 0;

      if (reduce.matches) {
        reveal.style.transform = "";
        reveal.style.opacity = "";
        line.style.opacity = "0";
        glow.style.opacity = "0";
        return;
      }

      const vh = window.innerHeight;
      const rect = section.getBoundingClientRect();
      // p goes 0→1 as the section enters the viewport from below
      const p = Math.min(1, Math.max(0, (vh - rect.top) / vh));

      // Eased progress for dramatic feel
      const eased = p < 0.5
        ? 4 * p * p * p
        : 1 - Math.pow(-2 * p + 2, 3) / 2;

      /* ─── Parallax lift + scale of content ─── */
      const contentY = (1 - eased) * 50;
      const contentScale = 0.96 + eased * 0.04;
      reveal.style.transform = `translateY(${contentY.toFixed(1)}px) scale(${contentScale.toFixed(3)})`;
      reveal.style.opacity = Math.min(1, 0.15 + eased * 0.85).toFixed(3);

      /* ─── Luminous laser beam along leading top edge ─── */
      const lineOpacity = p <= 0.08
        ? p / 0.08
        : p >= 0.95
        ? (1 - p) / 0.05
        : 1;
      line.style.opacity = (lineOpacity * 0.95).toFixed(3);
      line.style.transform = `scaleX(${0.35 + eased * 0.65})`;

      /* ─── Background glow pulse ─── */
      const glowOpacity = Math.sin(p * Math.PI);
      glow.style.opacity = (glowOpacity * 0.55).toFixed(3);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduce.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduce.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="make-it-known"
      aria-labelledby="make-it-known-heading"
      className="relative z-10 w-full h-[100dvh] overflow-hidden bg-[#0e0e12] text-[#F3F2EE] shadow-[0_-30px_70px_rgba(0,0,0,0.8),0_-1px_0_rgba(255,255,255,0.12)] border-b border-white/10"
    >
      {/* Horizontal light-line that sweeps across during reveal */}
      <div
        ref={lineRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-[2px] opacity-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(42,83,231,0.6) 20%, rgba(255,255,255,0.9) 50%, rgba(42,83,231,0.6) 80%, transparent 95%)",
          boxShadow:
            "0 0 25px 8px rgba(42,83,231,0.4), 0 0 70px 25px rgba(42,83,231,0.2)",
          transformOrigin: "center",
        }}
      />

      {/* Background glow that pulses during transition */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(42,83,231,0.3) 0%, transparent 75%)",
        }}
      />

      {/* Content container with parallax entry */}
      <div
        ref={revealRef}
        className="relative z-10 h-full w-full will-change-[transform,opacity]"
      >
        <BlockField />
      </div>
    </section>
  );
}

