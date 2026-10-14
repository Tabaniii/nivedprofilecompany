"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Brand Style Variations
 */
const BRAND_VARIATIONS = [
  {
    id: "geometric-lower",
    text: "nived",
    name: "Geometric Modern",
    fontFamily:
      'var(--font-geist-sans), "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: "clamp(4.5rem, 19vw, 26rem)",
    letterSpacing: "-0.045em",
    fontWeight: 900,
    fontStyle: "normal",
    transform: "none",
    stroke: false,
  },
  {
    id: "brutalist-upper",
    text: "NIVED",
    name: "Brutalist Monolith",
    fontFamily:
      'var(--font-geist-sans), "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: "clamp(4.5rem, 19vw, 26rem)",
    letterSpacing: "-0.05em",
    fontWeight: 900,
    fontStyle: "normal",
    transform: "none",
    stroke: false,
  },
  {
    id: "terminal-mono",
    text: "[ nived ]",
    name: "Terminal Bracket",
    fontFamily:
      'var(--font-geist-mono), "JetBrains Mono", ui-monospace, monospace',
    fontSize: "clamp(3.5rem, 14vw, 19rem)",
    letterSpacing: "-0.02em",
    fontWeight: 800,
    fontStyle: "normal",
    transform: "none",
    stroke: false,
  },
  {
    id: "wireframe-stroke",
    text: "NIVED",
    name: "Hollow Wireframe",
    fontFamily:
      'var(--font-geist-sans), "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: "clamp(4.5rem, 19vw, 26rem)",
    letterSpacing: "-0.03em",
    fontWeight: 900,
    fontStyle: "normal",
    transform: "none",
    stroke: true,
  },
  {
    id: "velocity-italic",
    text: "NIVED //",
    name: "Velocity Speed",
    fontFamily:
      'var(--font-geist-sans), "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: "clamp(4rem, 16vw, 22rem)",
    letterSpacing: "-0.04em",
    fontWeight: 900,
    fontStyle: "italic",
    transform: "skewX(-6deg)",
    stroke: false,
  },
  {
    id: "dev-tag",
    text: "<nived />",
    name: "Component Tag",
    fontFamily:
      'var(--font-geist-mono), "JetBrains Mono", ui-monospace, monospace',
    fontSize: "clamp(3.2rem, 13vw, 17rem)",
    letterSpacing: "-0.03em",
    fontWeight: 800,
    fontStyle: "normal",
    transform: "none",
    stroke: false,
  },
  {
    id: "spaced-monogram",
    text: "N • I • V • E • D",
    name: "Monogram Spaced",
    fontFamily:
      'var(--font-geist-sans), "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: "clamp(2.8rem, 11vw, 14rem)",
    letterSpacing: "0.08em",
    fontWeight: 900,
    fontStyle: "normal",
    transform: "none",
    stroke: false,
  },
  {
    id: "cyber-leet",
    text: "N1V3D",
    name: "Cyber Matrix",
    fontFamily:
      'var(--font-geist-mono), "JetBrains Mono", ui-monospace, monospace',
    fontSize: "clamp(4.2rem, 18vw, 24rem)",
    letterSpacing: "-0.02em",
    fontWeight: 900,
    fontStyle: "normal",
    transform: "none",
    stroke: false,
  },
  {
    id: "terminal-prompt",
    text: "_nived",
    name: "Prompt Terminal",
    fontFamily:
      'var(--font-geist-mono), "JetBrains Mono", ui-monospace, monospace',
    fontSize: "clamp(4.2rem, 17vw, 23rem)",
    letterSpacing: "-0.03em",
    fontWeight: 900,
    fontStyle: "normal",
    transform: "none",
    stroke: false,
  },
  {
    id: "editorial-serif",
    text: "Nived.",
    name: "Editorial Serif",
    fontFamily:
      'Georgia, "Times New Roman", Cambria, serif',
    fontSize: "clamp(4.5rem, 18vw, 24rem)",
    letterSpacing: "-0.02em",
    fontWeight: 800,
    fontStyle: "italic",
    transform: "none",
    stroke: false,
  },
];

/**
 * NivedBrandBanner
 * 
 * Signature bottom visual brand showcase banner inspired by TRAE.
 * Features:
 * - Full-width electric/neon green background (#30E391)
 * - Massive bold display typography with 10 interactive style variations on click
 * - Real-time HTML5 Canvas pixel dissolution, glitch tearing, and cursor-trail fragmentation
 * - Click shockwave burst with scattering pixel blocks & instant style morph
 * - Smooth 60fps/120fps requestAnimationFrame with auto-cleanup
 * - Responsive auto-scaling typography
 * - Full accessibility with screen reader fallback
 */
export function NivedBrandBanner() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [variationIndex, setVariationIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const currentVariation = BRAND_VARIATIONS[variationIndex];

  // Keep references to state for 60fps render loop
  const stateRef = useRef({
    width: 0,
    height: 0,
    dpr: 1,
    mouse: {
      x: -1000,
      y: -1000,
      lastX: -1000,
      lastY: -1000,
      vx: 0,
      vy: 0,
      speed: 0,
      isInside: false,
    },
    blocks: [],
    slices: [],
    shockwaves: [],
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const BRAND_BG = "#0A0A0A";
    const BRAND_TEXT = "#FFFFFF";
    const BRAND_ACCENT = "#A855F7";

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);

      if (w <= 0 || h <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      stateRef.current.width = w;
      stateRef.current.height = h;
      stateRef.current.dpr = dpr;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    let animationId = null;
    let lastTime = performance.now();
    let sliceTimer = 0;

    const render = (time) => {
      animationId = requestAnimationFrame(render);
      const { width, height, dpr, mouse, blocks, slices, shockwaves } = stateRef.current;
      if (width <= 0 || height <= 0) return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. Horizontal Glitch Slice Tearing
      sliceTimer += dt;
      if (mouse.isInside && sliceTimer > 0.2) {
        if (Math.random() < 0.45) {
          slices.push({
            y: mouse.y + (Math.random() - 0.5) * 80,
            h: Math.random() * 28 + 6,
            offset: (Math.random() - 0.5) * 36,
            life: 1.0,
            color: Math.random() < 0.5 ? BRAND_TEXT : BRAND_BG,
          });
        }
        sliceTimer = 0;
      }

      for (let i = slices.length - 1; i >= 0; i--) {
        const slice = slices[i];
        slice.life -= dt * 4.5;
        if (slice.life <= 0) {
          slices.splice(i, 1);
          continue;
        }

        ctx.fillStyle = slice.color;
        ctx.globalAlpha = slice.life * 0.8;
        ctx.fillRect(0, slice.y, width, slice.h);

        // Bright glitch edge line
        ctx.fillStyle = BRAND_TEXT;
        ctx.globalAlpha = slice.life * 0.9;
        ctx.fillRect(slice.offset, slice.y, width, 2);
      }
      ctx.globalAlpha = 1;

      // 2. Shockwave Ripple Rings
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const wave = shockwaves[i];
        wave.radius += wave.speed * dt * 60;
        wave.life = Math.max(0, 1 - wave.radius / wave.maxRadius);

        if (wave.life <= 0 || wave.radius >= wave.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = BRAND_TEXT;
        ctx.lineWidth = Math.max(2, 6 * wave.life);
        ctx.globalAlpha = wave.life * 0.75;
        ctx.strokeRect(
          wave.x - wave.radius,
          wave.y - wave.radius,
          wave.radius * 2,
          wave.radius * 2
        );

        // Pixel corners on shockwave
        ctx.fillStyle = BRAND_TEXT;
        const cornerSize = 8;
        ctx.fillRect(wave.x - wave.radius, wave.y - wave.radius, cornerSize, cornerSize);
        ctx.fillRect(wave.x + wave.radius - cornerSize, wave.y - wave.radius, cornerSize, cornerSize);
        ctx.fillRect(wave.x - wave.radius, wave.y + wave.radius - cornerSize, cornerSize, cornerSize);
        ctx.fillRect(wave.x + wave.radius - cornerSize, wave.y + wave.radius - cornerSize, cornerSize, cornerSize);
      }
      ctx.globalAlpha = 1;

      // 3. Pixel Dissolution Blocks & Trail
      for (let i = blocks.length - 1; i >= 0; i--) {
        const b = blocks[i];
        b.x += b.vx * dt * 60;
        b.y += b.vy * dt * 60;
        b.vx *= 0.92;
        b.vy *= 0.92;
        b.life -= dt * b.decayRate;

        if (b.life <= 0) {
          blocks.splice(i, 1);
          continue;
        }

        let renderColor = b.color;
        if (Math.random() < 0.15) {
          renderColor = Math.random() < 0.5 ? BRAND_ACCENT : BRAND_BG;
        }

        ctx.fillStyle = renderColor;
        ctx.globalAlpha = Math.min(1, b.life * 1.3);

        // Discrete pixel grid snapping for authentic digital aesthetics
        const snap = b.size;
        const drawX = Math.floor(b.x / snap) * snap;
        const drawY = Math.floor(b.y / snap) * snap;

        ctx.fillRect(drawX, drawY, snap, snap);

        if (snap >= 12 && b.life > 0.4) {
          ctx.strokeStyle = "rgba(0, 0, 0, 0.35)";
          ctx.lineWidth = 1;
          ctx.strokeRect(drawX, drawY, snap, snap);
        }
      }
      ctx.globalAlpha = 1;

      // 4. Matrix Pixel Aura around Active Cursor
      if (mouse.isInside) {
        const auraR = Math.min(100, width * 0.14);
        const step = width < 640 ? 10 : 14;
        const startX = Math.floor((mouse.x - auraR) / step) * step;
        const endX = Math.ceil((mouse.x + auraR) / step) * step;
        const startY = Math.floor((mouse.y - auraR) / step) * step;
        const endY = Math.ceil((mouse.y + auraR) / step) * step;

        for (let gx = startX; gx <= endX; gx += step) {
          for (let gy = startY; gy <= endY; gy += step) {
            const dist = Math.hypot(gx + step / 2 - mouse.x, gy + step / 2 - mouse.y);
            if (dist < auraR) {
              const intensity = (1 - dist / auraR);
              if (Math.random() < intensity * 0.55) {
                ctx.fillStyle = Math.random() < 0.6 ? BRAND_TEXT : BRAND_ACCENT;
                ctx.globalAlpha = intensity * 0.75;
                ctx.fillRect(gx, gy, step - 1, step - 1);
              }
            }
          }
        }
        ctx.globalAlpha = 1;
      }

      ctx.restore();
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  const spawnBlocks = (cx, cy, count, speedMult = 1) => {
    const { width, blocks, mouse } = stateRef.current;
    const BRAND_BG = "#0A0A0A";
    const BRAND_TEXT = "#FFFFFF";
    const BRAND_ACCENT = "#A855F7";

    const sizes = width < 640 ? [8, 12] : [10, 14, 18, 24];

    for (let i = 0; i < count; i++) {
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 4 + 2) * speedMult;
      const colorRand = Math.random();
      const color = colorRand < 0.45 ? BRAND_TEXT : colorRand < 0.8 ? BRAND_BG : BRAND_ACCENT;

      blocks.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: cy + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed + mouse.vx * 0.15,
        vy: Math.sin(angle) * speed + mouse.vy * 0.15 - 0.5,
        size,
        life: 1.0,
        decayRate: Math.random() * 1.8 + 1.2,
        color,
      });
    }

    if (blocks.length > 300) {
      blocks.splice(0, blocks.length - 300);
    }
  };

  const handlePointerMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const { mouse } = stateRef.current;
    mouse.vx = cx - mouse.lastX;
    mouse.vy = cy - mouse.lastY;
    mouse.speed = Math.hypot(mouse.vx, mouse.vy);
    mouse.lastX = cx;
    mouse.lastY = cy;
    mouse.x = cx;
    mouse.y = cy;
    mouse.isInside = true;

    const spawnCount = Math.min(Math.floor(mouse.speed * 0.35) + 2, 9);
    spawnBlocks(cx, cy, spawnCount, Math.min(mouse.speed * 0.08 + 1, 2.5));
  };

  const handlePointerDown = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    const { width, height, shockwaves, slices } = stateRef.current;

    // Trigger expanding shockwave burst
    shockwaves.push({
      x: cx,
      y: cy,
      radius: 15,
      maxRadius: Math.max(width, height) * 0.85,
      speed: 20,
      life: 1.0,
    });

    // Burst of dissolving pixel particles
    spawnBlocks(cx, cy, 45, 3.2);

    // Multiple glitch slices on click
    for (let s = 0; s < 3; s++) {
      slices.push({
        y: Math.random() * height,
        h: Math.random() * 32 + 10,
        offset: (Math.random() - 0.5) * 48,
        life: 1.0,
        color: s % 2 === 0 ? "#FFFFFF" : "#0A0A0A",
      });
    }

    // Trigger text glitch morph animation
    setIsGlitching(true);
    setTimeout(() => {
      setIsGlitching(false);
    }, 160);

    // Cycle to next variation
    setVariationIndex((prev) => (prev + 1) % BRAND_VARIATIONS.length);
  };

  const handlePointerEnter = () => {
    stateRef.current.mouse.isInside = true;
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    stateRef.current.mouse.isInside = false;
    stateRef.current.mouse.x = -1000;
    stateRef.current.mouse.y = -1000;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-full flex-grow bg-[#0A0A0A] overflow-hidden select-none cursor-pointer touch-none group"
      role="button"
      tabIndex={0}
      aria-label={`nived brand showcase. Currently style: ${currentVariation.name}. Click to cycle variations.`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setVariationIndex((prev) => (prev + 1) % BRAND_VARIATIONS.length);
        }
      }}
    >
      {/* 1. Underlying Massive Brand Typography Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-3 sm:px-6 md:px-8">
        <h2
          className={`w-full text-center leading-none text-white transition-all duration-200 ${
            isGlitching
              ? "opacity-60 translate-x-1.5 skew-x-3 scale-[1.03]"
              : isHovered
              ? "scale-[1.01]"
              : "scale-100"
          }`}
          style={{
            fontFamily: currentVariation.fontFamily,
            fontSize: currentVariation.fontSize,
            letterSpacing: currentVariation.letterSpacing,
            fontWeight: currentVariation.fontWeight,
            fontStyle: currentVariation.fontStyle,
            transform: currentVariation.transform,
            ...(currentVariation.stroke
              ? {
                  WebkitTextStroke: "clamp(3px, 0.75vw, 7px) #FFFFFF",
                  color: "transparent",
                }
              : {}),
          }}
        >
          {currentVariation.text}
        </h2>
      </div>

      {/* 2. Interactive Canvas Layer (Pixel Glitch, Dissolve, Shockwaves, Trails) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />

      {/* 3. Subtle CRT Scanline Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]"
        aria-hidden="true"
      />


      {/* 6. Accessible Screen Reader Fallback */}
      <span className="sr-only">
        nived brand logo showcase with interactive style variations and pixel glitch
      </span>
    </div>
  );
}

export default NivedBrandBanner;
