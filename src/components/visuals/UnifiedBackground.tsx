"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
};

const GOLD = "212, 175, 55";
const CHAMPAGNE = "232, 217, 183";

export function UnifiedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const pointer = { x: 0.5, y: 0.42, active: false };
    const nodes: NodePoint[] = Array.from({ length: 54 }, (_, index) => ({
      x: ((index * 97) % 1000) / 1000,
      y: ((index * 193) % 1000) / 1000,
      vx: ((((index * 37) % 100) / 100) - 0.5) * 0.00024,
      vy: ((((index * 53) % 100) / 100) - 0.5) * 0.0002,
      depth: 0.35 + (((index * 29) % 100) / 100) * 0.65,
    }));

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const updatePointer = (event: PointerEvent) => {
      pointer.x = event.clientX / Math.max(width, 1);
      pointer.y = event.clientY / Math.max(height, 1);
      pointer.active = true;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const driftX = (pointer.x - 0.5) * 28;
      const driftY = (pointer.y - 0.5) * 20;

      const baseGlow = context.createRadialGradient(
        width * 0.68 + driftX,
        height * 0.28 + driftY,
        0,
        width * 0.68 + driftX,
        height * 0.28 + driftY,
        Math.max(width, height) * 0.72,
      );
      baseGlow.addColorStop(0, `rgba(${GOLD}, 0.12)`);
      baseGlow.addColorStop(0.34, "rgba(18, 34, 58, 0.34)");
      baseGlow.addColorStop(1, "rgba(5, 5, 7, 0)");
      context.fillStyle = baseGlow;
      context.fillRect(0, 0, width, height);

      context.save();
      context.translate(width * 0.64 + driftX, height * 0.42 + driftY);
      context.rotate(time * 0.000035);
      for (let ring = 0; ring < 3; ring += 1) {
        context.beginPath();
        context.ellipse(
          0,
          0,
          width * (0.19 + ring * 0.07),
          height * (0.07 + ring * 0.025),
          ring * 0.35,
          0,
          Math.PI * 2,
        );
        context.strokeStyle = `rgba(${GOLD}, ${0.12 - ring * 0.025})`;
        context.lineWidth = 1;
        context.stroke();
      }
      context.restore();

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -0.05) node.x = 1.05;
        if (node.x > 1.05) node.x = -0.05;
        if (node.y < -0.05) node.y = 1.05;
        if (node.y > 1.05) node.y = -0.05;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        const ax = a.x * width + driftX * a.depth;
        const ay = a.y * height + driftY * a.depth;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const bx = b.x * width + driftX * b.depth;
          const by = b.y * height + driftY * b.depth;
          const distance = Math.hypot(ax - bx, ay - by);

          if (distance < 150) {
            context.beginPath();
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.strokeStyle = `rgba(${CHAMPAGNE}, ${(1 - distance / 150) * 0.08})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        const pulse = 0.55 + Math.sin(time * 0.001 + i) * 0.25;
        context.beginPath();
        context.arc(ax, ay, 1.2 + a.depth * 1.8, 0, Math.PI * 2);
        context.fillStyle = `rgba(${GOLD}, ${0.14 + pulse * 0.18})`;
        context.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updatePointer);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(212,175,55,0.12),transparent_24rem),radial-gradient(circle_at_78%_18%,rgba(16,31,53,0.9),transparent_34rem),linear-gradient(180deg,rgba(5,5,7,0.18),rgba(5,5,7,0.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,217,183,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(232,217,183,0.028)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />
    </div>
  );
}

export function HeroSignalVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-full border border-gold/20 bg-[radial-gradient(circle_at_50%_45%,rgba(212,175,55,0.18),rgba(9,20,38,0.18)_40%,rgba(5,5,7,0)_68%)]">
      <div className="absolute inset-[11%] rounded-full border border-gold/10" />
      <div className="absolute inset-[22%] rounded-full border border-champagne/10" />
      <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20 shadow-[0_0_5rem_rgba(212,175,55,0.16)]" />
      <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-2xl" />
      <svg viewBox="0 0 520 520" className="absolute inset-0 h-full w-full text-gold" aria-hidden="true">
        <defs>
          <linearGradient id="heroGoldLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8D9B7" stopOpacity="0.2" />
            <stop offset="48%" stopColor="#D4AF37" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#E8D9B7" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path d="M260 70 396 148v157L260 384 124 305V148L260 70Z" fill="none" stroke="url(#heroGoldLine)" strokeWidth="1.5" />
        <path d="M170 190h180M170 260h180M208 145v230M312 145v230M124 148l272 157M396 148 124 305" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
        <path d="M260 120c44 18 74 52 74 94 0 50-35 90-74 126-39-36-74-76-74-126 0-42 30-76 74-94Z" fill="rgba(212,175,55,0.055)" stroke="currentColor" strokeOpacity="0.28" />
        {[124, 170, 208, 260, 312, 350, 396].map((x, index) => (
          <circle key={x} cx={x} cy={[148, 190, 375, 70, 375, 260, 305][index]} r="4.5" fill="currentColor" opacity={index === 3 ? "0.95" : "0.58"} />
        ))}
      </svg>
      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-2 text-center text-[0.68rem] uppercase text-champagne/70">
        <span className="rounded-full border border-gold/15 bg-ink/50 px-2 py-2 backdrop-blur">Authority</span>
        <span className="rounded-full border border-gold/15 bg-ink/50 px-2 py-2 backdrop-blur">AI Signal</span>
        <span className="rounded-full border border-gold/15 bg-ink/50 px-2 py-2 backdrop-blur">Market</span>
      </div>
    </div>
  );
}
