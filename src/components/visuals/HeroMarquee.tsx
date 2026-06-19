"use client";

import { motion, useReducedMotion } from "framer-motion";

const labels = [
  "AI Innovation",
  "Sophia the Robot",
  "Holograms",
  "Media Production",
  "Robotics",
  "Culture",
  "Impact",
  "Strategy",
  "Events",
  "Visibility",
] as const;

function MarqueeSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {labels.map((label) => (
        <span key={label} className="flex items-center">
          <span className="whitespace-nowrap px-5 font-serif text-sm uppercase tracking-[0.2em] text-champagne/80 sm:px-8 sm:text-base">
            {label}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 border border-gold/75 bg-gold/15" />
        </span>
      ))}
    </div>
  );
}

export function HeroMarquee() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-y border-gold/20 bg-ink/72 py-4 backdrop-blur-xl [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 44, ease: "linear", repeat: Infinity }}
      >
        <MarqueeSet />
        <MarqueeSet hidden />
      </motion.div>
    </div>
  );
}
