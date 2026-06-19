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

export function HeroCinematicVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 58, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 58, damping: 22 });
  const imageX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const lightX = useTransform(x, [-0.5, 0.5], [-95, 95]);
  const lightY = useTransform(y, [-0.5, 0.5], [-55, 55]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [30, -46]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative h-full w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_14%,black_100%)]"
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
        className="absolute -inset-[5%] bg-[url('/assets/hero_section_image.jpg')] bg-cover bg-[position:58%_center] will-change-transform"
        style={reducedMotion ? undefined : { x: imageX, y: scrollY, scale: imageScale }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.98)_0%,rgba(5,5,7,0.4)_19%,transparent_48%),linear-gradient(0deg,rgba(5,5,7,0.92)_0%,transparent_28%,rgba(5,5,7,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,217,183,0.035)_1px,transparent_1px)] bg-[size:100%_7px] opacity-25 mix-blend-screen" />

      <motion.div
        className="absolute left-[57%] top-[36%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/12 blur-[48px] mix-blend-screen"
        style={reducedMotion ? undefined : { x: lightX, y: lightY }}
      />

    </div>
  );
}
