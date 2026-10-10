"use client";

import { useEffect, useRef, useState } from "react";

/**
 * NivedBrandBanner
 * 
 * Signature bottom visual brand showcase banner inspired by TRAE.
 * Features:
 * - Full-width electric/neon green background (#30E391)
 * - Massive bold geometric display typography ("nived") in pitch black
 * - Interactive HTML5 Canvas pixel dissolution, glitch tearing, and cursor-trail fragmentation
 * - Click shockwave burst with scattering pixel blocks
 * - Click or tap to toggle between lowercase "nived" and uppercase "NIVED"
 * - Responsive auto-scaling typography
 * - Full accessibility with screen reader fallback
 */
export function NivedBrandBanner() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [brandStyle, setBrandStyle] = useState("nived");

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

    const GREEN = "#30E391";
    const BLACK = "#050505";
    const WHITE = "#FFFFFF";

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
            color: Math.random() < 0.5 ? BLACK : GREEN,
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
        ctx.fillStyle = WHITE;
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

        ctx.strokeStyle = BLACK;
        ctx.lineWidth = Math.max(2, 6 * wave.life);
        ctx.globalAlpha = wave.life * 0.75;
        ctx.strokeRect(
          wave.x - wave.radius,
          wave.y - wave.radius,
          wave.radius * 2,
          wave.radius * 2
        );

        // Pixel corners on shockwave
        ctx.fillStyle = WHITE;
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
          renderColor = Math.random() < 0.5 ? WHITE : GREEN;
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
                ctx.fillStyle = Math.random() < 0.6 ? BLACK : WHITE;
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
    const GREEN = "#30E391";
    const BLACK = "#050505";
    const WHITE = "#FFFFFF";

    const sizes = width < 640 ? [8, 12] : [10, 14, 18, 24];

    for (let i = 0; i < count; i++) {
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 4 + 2) * speedMult;
      const colorRand = Math.random();
      const color = colorRand < 0.45 ? BLACK : colorRand < 0.8 ? GREEN : WHITE;

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

    // Shockwave burst
    shockwaves.push({
      x: cx,
      y: cy,
      radius: 15,
      maxRadius: Math.max(width, height) * 0.8,
      speed: 18,
      life: 1.0,
    });

    // Burst of dissolving blocks
    spawnBlocks(cx, cy, 40, 2.8);

    // Sudden glitch slice
    slices.push({
      y: Math.random() * height,
      h: Math.random() * 32 + 10,
      offset: (Math.random() - 0.5) * 48,
      life: 1.0,
      color: "#050505",
    });

    // Toggle casing for interactive fun
    setBrandStyle((prev) => (prev === "nived" ? "NIVED" : "nived"));
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
      className="relative w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[400px] xl:h-[460px] bg-[#30E391] overflow-hidden select-none cursor-crosshair touch-none group"
      role="img"
      aria-label="nived brand logo showcase with interactive pixel glitch effect"
    >
      {/* 1. Underlying Massive Bold Geometric Brand Typography Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-3 sm:px-6 md:px-8">
        <h2
          className={`w-full text-center font-black leading-none text-[#050505] tracking-[-0.04em] transition-transform duration-300 ${
            isHovered ? "scale-[1.01]" : "scale-100"
          }`}
          style={{
            fontFamily:
              'var(--font-geist-sans), "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: "clamp(4.5rem, 20vw, 28rem)",
            letterSpacing: "-0.045em",
            fontWeight: 900,
          }}
        >
          {brandStyle}
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

      {/* 4. Interactive Micro Badge / Affordance Tag */}
      <div
        className={`absolute bottom-3 right-4 sm:bottom-4 sm:right-6 pointer-events-none transition-all duration-300 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/10 backdrop-blur-sm text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-black ${
          isHovered ? "opacity-90 translate-y-0" : "opacity-45 translate-y-0.5"
        }`}
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
        <span>Pixel Matrix • Hover to Dissolve</span>
      </div>

      {/* 5. Accessible Screen Reader Fallback */}
      <span className="sr-only">nived - Digital Innovation & Studio Brand</span>
    </div>
  );
}

export default NivedBrandBanner;
