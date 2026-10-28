"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

export function Keyring() {
  const containerRef = useRef(null);
  const keychainRef = useRef(null);

  // Physics state
  const stateRef = useRef({
    angle: 0,
    angularVelocity: 0,
    offsetX: 0,
    offsetY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    lastMouseX: 0,
    lastMouseY: 0,
    lastTime: 0,
    mouseVelocityX: 0,
  });

  const [cursorStyle, setCursorStyle] = useState("grab");
  const [, setFrameTick] = useState(0);

  // Main physics loop
  useEffect(() => {
    let animId;
    const k = 0.035; // Spring restoring stiffness
    const damping = 0.955; // Friction / decay
    const posK = 0.08;
    const posDamping = 0.92;

    const tick = () => {
      const state = stateRef.current;
      const el = keychainRef.current;

      if (!state.isDragging) {
        // Rotational spring pendulum
        const accel = -state.angle * k;
        state.angularVelocity = (state.angularVelocity + accel) * damping;
        state.angle += state.angularVelocity;

        // Positional spring return
        state.offsetX = state.offsetX * posDamping;
        state.offsetY = state.offsetY * posDamping;

        if (Math.abs(state.angle) < 0.005 && Math.abs(state.angularVelocity) < 0.005) {
          state.angle = 0;
          state.angularVelocity = 0;
        }
      }

      if (el) {
        // Perspective 3D rotation and deflection
        const rotY = state.angle * 0.35;
        el.style.transform = `translate3d(${state.offsetX.toFixed(2)}px, ${state.offsetY.toFixed(2)}px, 0) rotate(${state.angle.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Wave cursor through effect
  const handlePointerMove = useCallback((e) => {
    const state = stateRef.current;
    const now = performance.now();
    const dt = Math.max(1, now - (state.lastTime || now));

    const vx = (e.clientX - state.lastMouseX) / dt;
    state.lastTime = now;
    state.lastMouseX = e.clientX;
    state.lastMouseY = e.clientY;

    if (state.isDragging) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const anchorX = rect.left + rect.width / 2;
      const anchorY = rect.top + rect.height * 0.22;

      const dx = e.clientX - anchorX;
      const dy = e.clientY - anchorY;

      // Calculate angle from anchor
      const rad = Math.atan2(dx, Math.max(20, dy));
      const targetDeg = (rad * 180) / Math.PI;

      // Clamp angle
      const clampedAngle = Math.max(-42, Math.min(42, targetDeg));
      state.angle = clampedAngle;
      state.offsetX = Math.max(-40, Math.min(40, (e.clientX - state.dragStartX) * 0.35));
      state.offsetY = Math.max(-20, Math.min(40, (e.clientY - state.dragStartY) * 0.3));
      state.angularVelocity = vx * 1.5;
    } else {
      // Wave interaction: proximity impulse
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      if (dist < 260 && Math.abs(vx) > 0.08) {
        const influence = Math.max(0, 1 - dist / 260);
        state.angularVelocity += vx * influence * 0.28;
      }
    }
  }, []);

  const handlePointerDown = useCallback((e) => {
    const state = stateRef.current;
    state.isDragging = true;
    state.dragStartX = e.clientX;
    state.dragStartY = e.clientY;
    state.lastMouseX = e.clientX;
    state.lastMouseY = e.clientY;
    state.lastTime = performance.now();
    setCursorStyle("grabbing");
    if (e.target.setPointerCapture) {
      try {
        e.target.setPointerCapture(e.pointerId);
      } catch {}
    }
  }, []);

  const handlePointerUp = useCallback((e) => {
    const state = stateRef.current;
    if (state.isDragging) {
      state.isDragging = false;
      setCursorStyle("grab");
      if (e.target.releasePointerCapture) {
        try {
          e.target.releasePointerCapture(e.pointerId);
        } catch {}
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative w-full h-full flex items-center justify-center select-none touch-none overflow-hidden"
      style={{ perspective: "1000px" }}
      aria-label="Interactive NIVED keychain charm"
      role="img"
    >
      <div
        ref={keychainRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          transformOrigin: "50% 12%",
          cursor: cursorStyle,
          willChange: "transform",
        }}
        className="relative flex items-center justify-center p-4 transition-shadow"
      >
        <Image
          src="/images/keychain.png"
          alt="Nived Keyring with wave charm and tag"
          width={240}
          height={340}
          priority
          draggable={false}
          className="select-none pointer-events-none drop-shadow-2xl"
          style={{
            maxWidth: "min(280px, 75vw)",
            height: "auto",
            filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.5))",
          }}
        />
      </div>
    </div>
  );
}
