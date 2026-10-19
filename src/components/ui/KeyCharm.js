"use client";

import { useEffect, useRef } from "react";

const GRAVITY = 2600;
const RAD = Math.PI / 180;

const BODY = { pivot: [714, 116], length: 140, limit: 60, damping: 1.1 };

const PIECES = [
  {
    pivot: [702, 259],
    transform: "translate(702 259) scale(0.78) translate(-196 -11)",
    href: "/keycharm/Group-1.svg",
    width: 212,
    height: 233,
    length: 108,
    limit: 110,
    damping: 1.4,
  },
  {
    pivot: [708, 262],
    transform: "translate(708 262) rotate(25) scale(0.68) translate(-18 0)",
    href: "/keycharm/charm_beads.svg",
    width: 37,
    height: 193,
    length: 66,
    limit: 120,
    damping: 1,
  },
  {
    pivot: [731, 255],
    transform: "translate(731 255) rotate(65) scale(0.66) translate(-11 -37)",
    href: "/keycharm/Group.svg",
    width: 249,
    height: 76,
    length: 75,
    limit: 110,
    damping: 1.2,
  },
];

const ALL = [BODY, ...PIECES];

function normalize(deg) {
  return ((deg + 540) % 360) - 180;
}

function clamp(value, limit) {
  return Math.max(-limit, Math.min(limit, value));
}

export function KeyCharm({ className = "" }) {
  const svgRef = useRef(null);
  const groupRefs = useRef([]);
  // angle and vel are in world space (degrees from the resting pose), so pieces
  // keep hanging under gravity while the carabiner tilts.
  const state = useRef(
    ALL.map(() => ({ angle: 0, vel: 0, dragging: false, grabAngle: 0, startLocal: 0, target: 0, last: null }))
  );
  const activeDrag = useRef(-1);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) state.current[0].vel = 70;

    let frame;
    let prev = performance.now();

    const tick = (now) => {
      const dt = Math.min((now - prev) / 1000, 1 / 30);
      prev = now;
      const [body, ...pieces] = state.current;

      const step = (b, cfg, frame0) => {
        if (b.dragging) {
          const next = b.target + frame0;
          b.vel += ((next - b.angle) / dt - b.vel) * 0.5;
          b.angle = next;
          return;
        }
        const gravity = -(GRAVITY / cfg.length) * Math.sin(b.angle * RAD) / RAD;
        const friction = -cfg.damping * (b.vel - (frame0 === 0 ? 0 : body.vel));
        b.vel += (gravity + friction) * dt;
        b.angle += b.vel * dt;
      };

      const bounce = (b, cfg, frame0, frameVel) => {
        const local = b.angle - frame0;
        if (Math.abs(local) <= cfg.limit) return;
        b.angle = frame0 + Math.sign(local) * cfg.limit;
        b.vel = frameVel - (b.vel - frameVel) * 0.3;
      };

      step(body, BODY, 0);
      bounce(body, BODY, 0, 0);

      pieces.forEach((b, i) => {
        step(b, PIECES[i], body.angle);
        bounce(b, PIECES[i], body.angle, body.vel);
      });

      const [bx, by] = BODY.pivot;
      groupRefs.current[0]?.setAttribute("transform", `rotate(${body.angle} ${bx} ${by})`);
      pieces.forEach((b, i) => {
        const [px, py] = PIECES[i].pivot;
        groupRefs.current[i + 1]?.setAttribute("transform", `rotate(${b.angle - body.angle} ${px} ${py})`);
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const toLocal = (index, event) => {
    const space = index === 0 ? svgRef.current : groupRefs.current[0];
    const point = svgRef.current.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    return point.matrixTransform(space.getScreenCTM().inverse());
  };

  const pointerAngle = (index, event) => {
    const { x, y } = toLocal(index, event);
    const [px, py] = ALL[index].pivot;
    return Math.atan2(y - py, x - px) / RAD;
  };

  const frameAngle = (index) => (index === 0 ? 0 : state.current[0].angle);

  const handlePointerDown = (index) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    const b = state.current[index];
    b.dragging = true;
    b.grabAngle = pointerAngle(index, event);
    b.startLocal = b.angle - frameAngle(index);
    b.target = b.startLocal;
    activeDrag.current = index;
    svgRef.current.style.cursor = "grabbing";
    try {
      svgRef.current.setPointerCapture(event.pointerId);
    } catch {}
  };

  const handlePointerMove = (event) => {
    const index = activeDrag.current;

    if (index >= 0) {
      const b = state.current[index];
      b.target = clamp(
        b.startLocal + normalize(pointerAngle(index, event) - b.grabAngle),
        ALL[index].limit
      );
      return;
    }

    const target = event.target.closest?.("[data-piece]");
    if (!target) return;
    const hovered = Number(target.dataset.piece);
    const b = state.current[hovered];
    const local = toLocal(hovered, event);

    if (b.last) {
      const [px, py] = ALL[hovered].pivot;
      const rx = local.x - px;
      const ry = local.y - py;
      const dx = local.x - b.last.x;
      const dy = local.y - b.last.y;
      b.vel += ((rx * dy - ry * dx) / (rx * rx + ry * ry + 400)) * 900;
    }
    b.last = { x: local.x, y: local.y };
  };

  const handlePointerUp = () => {
    const index = activeDrag.current;
    if (index < 0) return;
    const b = state.current[index];
    b.dragging = false;
    b.vel = clamp(b.vel, 1200);
    activeDrag.current = -1;
    svgRef.current.style.cursor = "";
  };

  const handlePointerLeave = () => {
    state.current.forEach((b) => (b.last = null));
  };

  const pieceProps = (index) => ({
    "data-piece": index,
    onPointerDown: handlePointerDown(index),
    className: "cursor-grab touch-none",
  });

  return (
    <svg
      ref={svgRef}
      viewBox="525 100 300 350"
      className={`relative z-[100] select-none overflow-visible ${className}`}
      role="img"
      aria-label="Gantungan kunci NIVED, bisa ditarik dan dimainkan"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerLeave}
    >
      <g ref={(el) => (groupRefs.current[0] = el)}>
        {PIECES.map((piece, i) => (
          <g key={piece.href} ref={(el) => (groupRefs.current[i + 1] = el)} {...pieceProps(i + 1)}>
            <g transform={piece.transform}>
              <image href={piece.href} width={piece.width} height={piece.height} draggable="false" />
            </g>
          </g>
        ))}
        <g transform="translate(686 113) scale(0.68)" {...pieceProps(0)}>
          <image href="/keycharm/carabiner_body.svg" width="86" height="223" draggable="false" />
        </g>
      </g>
    </svg>
  );
}
