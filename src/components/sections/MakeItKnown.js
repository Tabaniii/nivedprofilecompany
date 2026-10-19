"use client";

import { useEffect, useRef, useState } from "react";
import {
  ScrollSlideUp,
  StaggerGroup,
  StaggerItem,
} from "@/components/layout/MotionPrimitives";

const COLS = 11;
const TONES = ["#2A53E7", "#243b8f", "#243b8f", "#1b2140"];
const EDGE_ODDS = [0.7, 0.5, 0.28];

const STATEMENT =
  "Good work rarely speaks for itself. We design it, build it and test it, then make sure the right people find out.";

const DISCIPLINES = [
  {
    title: "Design",
    body: "Identities, interfaces and systems that look like one decision, not many.",
  },
  {
    title: "Create",
    body: "Campaigns, content and visual worlds that give the work something to say.",
  },
  {
    title: "Develop",
    body: "Sites and products built to ship, hold up and keep changing.",
  },
  {
    title: "Research",
    body: "Talking to people and testing early, so we know what is worth making known.",
  },
];

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

function BlockField() {
  const fieldRef = useRef(null);
  const gridRef = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const field = fieldRef.current;
    const grid = gridRef.current;
    let cells = [];
    let u = 0;
    let rows = 0;
    let lastW = 0;
    let last = -1;

    const build = () => {
      const w = field.clientWidth;
      lastW = w;
      u = w / COLS;
      rows = Math.ceil(field.clientHeight / u);
      grid.style.setProperty("--u", `${u}px`);
      grid.style.gridTemplateColumns = `repeat(${COLS}, ${u}px)`;
      grid.style.gridAutoRows = `${u}px`;
      grid.replaceChildren();
      cells = [];

      const r = rng(7);
      const frag = document.createDocumentFragment();
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < COLS; x++) {
          const el = document.createElement("i");
          el.className = "mik-cell";
          const depth = Math.min(y, rows - 1 - y);
          if (depth < 3 && r() < EDGE_ODDS[depth]) {
            el.classList.add("mik-on");
            el.style.setProperty("--c", TONES[Math.floor(r() * TONES.length)]);
            el.style.setProperty(
              "--d",
              `${(depth * 0.12 + x * 0.035 + r() * 0.35).toFixed(2)}s`
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
      if (x < 0 || x >= COLS || y < 0 || y >= rows) return;
      const i = y * COLS + x;
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
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
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
      className={`relative h-[max(540px,92vh)] cursor-crosshair overflow-hidden ${
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
        className="pointer-events-none absolute inset-0 m-0 grid place-content-center text-center font-bricolage text-[clamp(3rem,10.5vw,8.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em]"
      >
        {["Make it", "known"].map((line, i) => (
          <span key={line} className="block overflow-hidden pb-[0.06em]">
            <span
              className="mik-line block transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: live ? "none" : "translateY(110%)",
                transitionDelay: `${0.2 + i * 0.12}s`,
              }}
            >
              {line}
            </span>
          </span>
        ))}
      </h2>

      <p
        className="pointer-events-none absolute inset-x-0 bottom-[calc(var(--u,0px)*3+14px)] m-0 text-center font-bricolage text-sm text-[#8d909b] transition-opacity duration-700"
        style={{ opacity: live ? 1 : 0, transitionDelay: "0.9s" }}
      >
        Move through the blocks to leave a mark
      </p>
    </div>
  );
}

function Statement() {
  const ref = useRef(null);
  const words = STATEMENT.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, (vh * 0.9 - top) / (vh * 0.55)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="border-t border-white/10 px-[6%] pb-[72px] pt-24 max-md:pb-14 max-md:pt-16">
      <p
        ref={ref}
        aria-label={STATEMENT}
        className="m-0 max-w-[24em] font-newsreader text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1.25] tracking-[-0.01em]"
        style={{ "--n": words.length }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="mik-word"
            style={{ "--i": i }}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  );
}

export function MakeItKnown() {
  return (
    <section
      id="make-it-known"
      aria-labelledby="make-it-known-heading"
      className="relative z-10 w-full bg-[#0e0e12] text-[#F3F2EE] shadow-[0_-40px_80px_rgba(0,0,0,0.55)]"
    >
      <div className="border-y border-white/10">
        <div className="mx-auto max-w-6xl border-x border-white/10">
          <BlockField />
          <Statement />

          <StaggerGroup
            as="ul"
            stagger={0.1}
            amount={0.2}
            className="m-0 list-none border-t border-white/10 p-0"
          >
            {DISCIPLINES.map(({ title, body }, i) => (
              <StaggerItem
                as="li"
                key={title}
                index={i}
                className="group relative overflow-hidden border-b border-white/10"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-[#2A53E7] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                <div className="relative grid grid-cols-1 gap-1.5 px-[6%] py-7 md:grid-cols-[minmax(120px,1fr)_2fr] md:gap-6">
                  <h3 className="m-0 flex items-baseline gap-3 font-bricolage text-2xl font-semibold tracking-[-0.015em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs font-normal text-[#8d909b] transition-colors duration-300 group-hover:text-white/70"
                    >
                      {`0${i + 1}`}
                    </span>
                    {title}
                  </h3>
                  <p className="m-0 max-w-[34em] font-newsreader text-[1.15rem] leading-normal text-[#8d909b] transition-colors duration-300 group-hover:text-white">
                    {body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <ScrollSlideUp className="flex flex-wrap items-center justify-between gap-7 px-[6%] py-24 max-md:pb-14 max-md:pt-16">
            <h3 className="m-0 max-w-[14em] font-bricolage text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Have something people should know about?
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center bg-[#2A53E7] px-[26px] py-4 font-bricolage text-base font-semibold text-white transition hover:bg-[#243b8f] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#F3F2EE] active:scale-[0.98]"
            >
              Start a conversation
            </a>
          </ScrollSlideUp>
        </div>
      </div>
    </section>
  );
}
