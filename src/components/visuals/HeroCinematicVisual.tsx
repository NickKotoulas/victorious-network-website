"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { HeroOrbitRibbon } from "@/components/visuals/HeroOrbitRibbon";

export function HeroCinematicVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 70, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 70, damping: 24 });
  const faceX = useTransform(x, [-0.5, 0.5], [-18, 18]);
  const faceY = useTransform(y, [-0.5, 0.5], [-10, 10]);
  const haloX = useTransform(x, [-0.5, 0.5], [12, -12]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [36, -42]);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-4, 5]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative mx-auto aspect-[4/5] w-full max-w-[43rem] overflow-visible lg:aspect-[5/6]"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.div
        className="absolute -inset-[10%] opacity-45 sm:-inset-[16%]"
        style={reducedMotion ? undefined : { x: haloX, y: scrollY, rotate: scrollRotate }}
      >
        <HeroOrbitRibbon />
      </motion.div>

      <div className="absolute inset-[8%] rounded-[48%] bg-[radial-gradient(ellipse_at_55%_42%,rgba(232,217,183,0.18),rgba(212,175,55,0.07)_26%,rgba(9,20,38,0.5)_52%,transparent_72%)] blur-2xl" />

      <motion.div
        className="absolute inset-x-[4%] bottom-0 top-[2%]"
        style={reducedMotion ? undefined : { x: faceX, y: faceY }}
      >
        <svg viewBox="0 0 560 700" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="faceMetal" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#121824" />
              <stop offset="35%" stopColor="#E8D9B7" stopOpacity="0.24" />
              <stop offset="61%" stopColor="#D4AF37" stopOpacity="0.17" />
              <stop offset="100%" stopColor="#050507" />
            </linearGradient>
            <linearGradient id="faceEdge" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#F7F2E8" stopOpacity="0.08" />
              <stop offset="48%" stopColor="#E8D9B7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.14" />
            </linearGradient>
            <radialGradient id="eyeGlow">
              <stop offset="0%" stopColor="#F7F2E8" />
              <stop offset="20%" stopColor="#E8D9B7" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
            <filter id="softFaceGlow">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          <path d="M286 55c-94 4-169 64-190 161-17 78-1 180 28 263 18 53 50 105 102 145 26 20 57 31 86 22 64-20 112-101 137-190 27-95 32-210-13-294C404 102 351 52 286 55Z" fill="url(#faceMetal)" stroke="url(#faceEdge)" strokeWidth="1.5" />
          <path d="M287 67c-45 68-64 143-60 225 3 77 27 158 66 244" fill="none" stroke="#E8D9B7" strokeOpacity="0.18" />
          <path d="M284 68c52 52 83 117 88 192 6 86-21 183-78 276" fill="none" stroke="#D4AF37" strokeOpacity="0.1" />
          <path d="M136 253c43-27 91-31 139-7M299 245c45-21 91-15 128 16" fill="none" stroke="#E8D9B7" strokeOpacity="0.5" strokeWidth="3" />
          <path d="M151 274c30-22 76-24 108 0-28 25-79 28-108 0ZM317 270c31-19 73-15 96 9-30 19-70 17-96-9Z" fill="#030711" stroke="#D4AF37" strokeOpacity="0.42" />
          <ellipse cx="207" cy="272" rx="34" ry="21" fill="url(#eyeGlow)" opacity="0.23" filter="url(#softFaceGlow)" />
          <ellipse cx="364" cy="274" rx="31" ry="20" fill="url(#eyeGlow)" opacity="0.2" filter="url(#softFaceGlow)" />
          <circle cx="207" cy="273" r="5" fill="#F1DEAD" />
          <circle cx="365" cy="275" r="5" fill="#D4AF37" />
          <path d="M282 254c-11 65-20 120-6 143 13 11 33 10 48-2" fill="none" stroke="#E8D9B7" strokeOpacity="0.38" strokeWidth="2" />
          <path d="M224 450c36 18 85 20 126-2M240 467c31 21 69 20 95-2" fill="none" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="2" />
          <path d="M110 328 46 351M448 329l69 27M130 409 60 451M432 411l71 44" fill="none" stroke="#D4AF37" strokeDasharray="2 9" strokeOpacity="0.45" />
          {[92, 128, 431, 469].map((cx, index) => (
            <circle key={cx} cx={cx} cy={[335, 417, 420, 343][index]} r="4" fill="#D4AF37" opacity="0.62" />
          ))}
        </svg>
      </motion.div>

      <div className="absolute right-[2%] top-[16%] h-[46%] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      <div className="absolute right-[4%] top-[31%] text-[0.52rem] uppercase tracking-[0.26em] text-champagne/45 [writing-mode:vertical-rl]">
        Human intelligence · machine precision
      </div>
      <motion.div
        className="absolute left-[8%] top-[22%] h-1.5 w-1.5 rounded-full bg-champagne shadow-[0_0_1.4rem_0.45rem_rgba(232,217,183,0.45)]"
        animate={reducedMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.8, 1.25, 0.8] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
