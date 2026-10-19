"use client";

import { useEffect, useRef } from "react";

/**
 * HeroCurtain — sticky hero wrapper that creates a cinematic scroll-linked
 * transition between the hero and the next section.
 *
 * Effects (scroll-driven, 0 → 1 progress):
 *  - 3D perspective tilt + scale-down (hero shrinks into the screen)
 *  - Gaussian blur on the hero content (focus pull)
 *  - Content parallax: heading and sub-elements separate at different rates
 *  - Light-sweep flash at the transition threshold
 *  - Border radius morph (rectangle → rounded card)
 *  - Dark overlay for depth
 */
export function HeroCurtain({ children }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const shadeRef = useRef(null);
  const sweepRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const shade = shadeRef.current;
    const sweep = sweepRef.current;
    const next = wrap.nextElementSibling;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;


    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      // Pin a hero taller than the viewport by its bottom edge
      wrap.style.top = `${Math.min(0, vh - wrap.offsetHeight)}px`;

      if (!next || reduce.matches) {
        inner.style.transform = "";
        inner.style.filter = "";
        inner.style.borderRadius = "";
        shade.style.opacity = "0";
        sweep.style.opacity = "0";
        inner.querySelectorAll("[data-hero-parallax]").forEach((el) => {
          el.style.transform = "";
          el.style.opacity = "";
        });
        return;
      }

      const top = next.getBoundingClientRect().top;
      // p goes 0 → 1 as the next section scrolls up
      const p = Math.min(1, Math.max(0, 1 - top / vh));

      // Eased progress for smoother feel
      const eased = p * p * (3 - 2 * p); // smoothstep

      /* ─── 3D perspective tilt + scale ─── */
      const scale = 1 - eased * 0.12;
      const rotateX = eased * 4; // subtle tilt backward
      const translateY = eased * -5; // drift upward %
      const translateZ = eased * -80; // push into screen

      inner.style.transform = [
        `perspective(1200px)`,
        `scale(${scale})`,
        `rotateX(${rotateX}deg)`,
        `translateY(${translateY}%)`,
        `translateZ(${translateZ}px)`,
      ].join(" ");

      /* ─── Focus pull (blur) ─── */
      const blur = eased * 6;
      inner.style.filter = blur > 0.1 ? `blur(${blur.toFixed(1)}px)` : "";

      /* ─── Border radius morph ─── */
      inner.style.borderRadius = `${eased * 32}px`;

      /* ─── Dark overlay ─── */
      shade.style.opacity = (eased * 0.85).toFixed(3);

      /* ─── Light sweep flash ─── */
      const sweepP = Math.max(0, 1 - Math.abs(p - 0.5) * 4);
      sweep.style.opacity = (sweepP * 0.7).toFixed(3);

      /* ─── Content parallax on child elements ─── */
      inner.querySelectorAll("[data-hero-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.heroParallax) || 1;
        const yShift = eased * -40 * speed;
        el.style.transform = `translateY(${yShift}px)`;
        el.style.opacity = Math.max(0, 1 - eased * 1.5).toFixed(3);
      });
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
    <div ref={wrapRef} className="sticky top-0 z-0">
      <div
        ref={innerRef}
        className="origin-[50%_70%] overflow-hidden will-change-[transform,filter]"
      >
        {children}
      </div>

      {/* Dark shade overlay */}
      <div
        ref={shadeRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black opacity-0 transition-opacity duration-75"
      />

      {/* Light sweep flash — horizontal gradient that fades in/out */}
      <div
        ref={sweepRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 30%, rgba(42,83,231,0.15) 48%, rgba(255,255,255,0.25) 50%, rgba(42,83,231,0.15) 52%, transparent 70%)",
        }}
      />
    </div>
  );
}
