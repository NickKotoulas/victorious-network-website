"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const orbitLabels = [
  "AI Innovation",
  "Culture",
  "Impact",
  "Robotics",
  "Media",
  "Events",
  "Sophia",
  "Visibility",
  "Strategy",
] as const;

const labelPositions = [
  [50, 5],
  [78, 14],
  [94, 39],
  [88, 70],
  [65, 91],
  [35, 91],
  [12, 70],
  [6, 39],
  [22, 14],
] as const;

const rotation = {
  duration: 38,
  ease: "linear" as const,
  repeat: Infinity,
};

export function HeroOrbitRibbon() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 75, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 75, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  return (
    <motion.div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[39rem] overflow-visible [perspective:1100px]"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      style={prefersReducedMotion ? undefined : { rotateX, rotateY }}
    >
      <div className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16)_0%,rgba(12,25,45,0.3)_35%,rgba(5,5,7,0)_69%)] blur-xl" />
      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15 shadow-[inset_0_0_5rem_rgba(212,175,55,0.08),0_0_7rem_rgba(212,175,55,0.13)]" />

      <motion.svg
        viewBox="0 0 600 600"
        className="absolute inset-[4%] h-[92%] w-[92%] drop-shadow-[0_0_22px_rgba(212,175,55,0.2)] [transform:rotateX(63deg)_rotateZ(-12deg)]"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ ...rotation, duration: 31 }}
      >
        <defs>
          <linearGradient id="orbitRibbonGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#7F6424" />
            <stop offset="28%" stopColor="#F1DEAD" />
            <stop offset="58%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#6D531B" />
          </linearGradient>
          <filter id="orbitRibbonGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="300" cy="300" r="224" fill="none" stroke="#050507" strokeOpacity="0.94" strokeWidth="54" />
        <circle cx="300" cy="300" r="224" fill="none" stroke="url(#orbitRibbonGold)" strokeOpacity="0.68" strokeWidth="2" />
        <circle cx="300" cy="300" r="197" fill="none" stroke="url(#orbitRibbonGold)" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="300" cy="300" r="251" fill="none" stroke="url(#orbitRibbonGold)" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="300" cy="300" r="240" fill="none" stroke="#E8D9B7" strokeDasharray="3 13" strokeLinecap="round" strokeOpacity="0.72" strokeWidth="8" />
        <circle cx="300" cy="300" r="208" fill="none" stroke="#D4AF37" strokeDasharray="3 13" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="7" />
        <path d="M78 300a222 222 0 0 1 444 0" fill="none" filter="url(#orbitRibbonGlow)" stroke="#F1DEAD" strokeOpacity="0.68" strokeWidth="3" />
      </motion.svg>

      <motion.div
        className="absolute inset-[8%]"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={rotation}
      >
        {orbitLabels.map((label, index) => (
          <motion.span
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-gold/25 bg-ink/80 px-2.5 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-champagne shadow-[0_0_1.5rem_rgba(212,175,55,0.14)] backdrop-blur-md sm:px-3 sm:text-[0.62rem]"
            style={{
              left: `${labelPositions[index][0]}%`,
              top: `${labelPositions[index][1]}%`,
            }}
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={rotation}
          >
            {label}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-[22%] rounded-full border border-champagne/15"
        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
        transition={{ ...rotation, duration: 48 }}
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne shadow-[0_0_1.5rem_rgba(232,217,183,0.9)]" />
        <div className="absolute bottom-[12%] right-[4%] h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_1rem_rgba(212,175,55,0.8)]" />
      </motion.div>

      <div className="absolute left-1/2 top-1/2 flex h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-[radial-gradient(circle_at_42%_34%,rgba(232,217,183,0.18),rgba(9,20,38,0.82)_46%,rgba(5,5,7,0.96))] shadow-[inset_0_0_3rem_rgba(212,175,55,0.14),0_0_4rem_rgba(212,175,55,0.2)] backdrop-blur-xl">
        <div className="absolute inset-[12%] rounded-full border border-gold/15" />
        <div className="text-center">
          <span className="block font-serif text-5xl text-gold sm:text-7xl">V</span>
          <span className="mt-1 block text-[0.48rem] font-semibold uppercase tracking-[0.28em] text-champagne/70 sm:text-[0.58rem]">
            Signal to impact
          </span>
        </div>
      </div>

      <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <div className="absolute bottom-[9%] left-1/2 -translate-x-1/2 text-center text-[0.52rem] font-medium uppercase tracking-[0.32em] text-platinum/45 sm:text-[0.6rem]">
        The Victorious Network Ecosystem
      </div>
    </motion.div>
  );
}
