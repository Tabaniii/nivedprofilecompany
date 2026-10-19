"use client";

import { useEffect, useRef } from "react";

export function HeroCurtain({ children }) {
  const ref = useRef(null);
  const innerRef = useRef(null);
  const shadeRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    const shade = shadeRef.current;
    const next = el.nextElementSibling;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      // Pin a hero taller than the viewport by its bottom edge so none of it is skipped.
      el.style.top = `${Math.min(0, vh - el.offsetHeight)}px`;

      if (!next || reduce.matches) {
        inner.style.transform = "";
        inner.style.borderRadius = "";
        shade.style.opacity = "0";
        return;
      }

      const top = next.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, 1 - top / vh));
      inner.style.transform = `scale(${1 - p * 0.08}) translateY(${p * -3}%)`;
      inner.style.borderRadius = `${p * 28}px`;
      shade.style.opacity = (p * 0.8).toFixed(3);
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
    <div ref={ref} className="sticky top-0 z-0">
      <div
        ref={innerRef}
        className="origin-[50%_70%] overflow-hidden will-change-transform"
      >
        {children}
      </div>
      <div
        ref={shadeRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black opacity-0"
      />
    </div>
  );
}
