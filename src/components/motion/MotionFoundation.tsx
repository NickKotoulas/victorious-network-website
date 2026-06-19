"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export function MotionFoundation() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const cursorX = useSpring(pointerX, { stiffness: 650, damping: 42, mass: 0.2 });
  const cursorY = useSpring(pointerY, { stiffness: 650, damping: 42, mass: 0.2 });
  const [cursorLabel, setCursorLabel] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateCapability = () => {
      setFinePointer(media.matches);
      document.documentElement.classList.toggle(
        "vn-cursor-enabled",
        media.matches && !reducedMotion,
      );
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
      setCursorVisible(true);

      const target = event.target instanceof Element ? event.target : null;
      const cursorTarget = target?.closest<HTMLElement>("[data-cursor]");
      setCursorLabel(cursorTarget?.dataset.cursor ?? "");

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
      setCursorVisible(false);
      resetMagneticTarget();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      media.removeEventListener("change", updateCapability);
      document.documentElement.classList.remove("vn-cursor-enabled");
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
          className="pointer-events-none fixed left-0 top-0 z-[90] grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/45 bg-ink/10 mix-blend-difference backdrop-blur-[2px]"
          style={{ x: cursorX, y: cursorY, opacity: cursorVisible ? 1 : 0 }}
          animate={{ scale: cursorLabel ? 1.42 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="h-1 w-1 rounded-full bg-champagne" />
          <AnimatePresence>
            {cursorLabel ? (
              <motion.span
                key={cursorLabel}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute text-[0.42rem] font-semibold uppercase tracking-[0.14em] text-paper"
              >
                {cursorLabel}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </>
  );
}
