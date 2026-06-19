"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect, useState } from "react";

export function MotionFoundation() {
  const reducedMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const scrollVelocity = useVelocity(scrollY);
  const lensScale = useTransform(scrollVelocity, [-1800, 0, 1800], [1.22, 1, 1.22]);
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const cursorX = useSpring(pointerX, { stiffness: 650, damping: 42, mass: 0.2 });
  const cursorY = useSpring(pointerY, { stiffness: 650, damping: 42, mass: 0.2 });
  const [lensVisible, setLensVisible] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateCapability = () => {
      setFinePointer(media.matches);
    };
    updateCapability();
    media.addEventListener("change", updateCapability);

    let magneticTarget: HTMLElement | null = null;

    const resetMagneticTarget = () => {
      if (!magneticTarget) return;
      magneticTarget.style.transform = "translate3d(0, 0, 0)";
      magneticTarget = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setLensVisible(true);

      const target = event.target instanceof Element ? event.target : null;
      const nextMagnetic = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (nextMagnetic !== magneticTarget) resetMagneticTarget();
      magneticTarget = nextMagnetic;

      if (magneticTarget && !reducedMotion) {
        const bounds = magneticTarget.getBoundingClientRect();
        const offsetX = event.clientX - (bounds.left + bounds.width / 2);
        const offsetY = event.clientY - (bounds.top + bounds.height / 2);
        magneticTarget.style.transform = `translate3d(${offsetX * 0.13}px, ${offsetY * 0.13}px, 0)`;
      }
    };

    const handlePointerLeave = () => {
      setLensVisible(false);
      resetMagneticTarget();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      media.removeEventListener("change", updateCapability);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      resetMagneticTarget();
    };
  }, [pointerX, pointerY, reducedMotion]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[80] h-px origin-left bg-gradient-to-r from-gold via-champagne to-gold"
        style={{ scaleX: progress }}
      />

      {finePointer && !reducedMotion ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-40 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,217,183,0.13)_0%,rgba(212,175,55,0.07)_28%,rgba(9,20,38,0.025)_52%,transparent_72%)] mix-blend-screen"
          style={{ x: cursorX, y: cursorY, scale: lensScale }}
          animate={{ opacity: lensVisible ? 0.72 : 0 }}
          transition={{ opacity: { duration: 0.28 } }}
        />
      ) : null}
    </>
  );
}
