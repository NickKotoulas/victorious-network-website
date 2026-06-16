"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cobalt/20 backdrop-blur">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/30"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/20 blur-xl"
      />
      <svg
        viewBox="0 0 420 420"
        className="relative z-10 mx-auto h-full min-h-80 w-full max-w-md text-signal"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#4FD7FF" />
            <stop offset="100%" stopColor="#396DFF" />
          </linearGradient>
        </defs>
        <path
          d="M210 48 324 114v132L210 312 96 246V114L210 48Z"
          fill="none"
          stroke="url(#nodeGradient)"
          strokeWidth="2"
          opacity="0.75"
        />
        <path
          d="M138 160h144M138 210h144M138 260h88M166 122v178M254 122v138"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.45"
        />
        {[96, 138, 166, 210, 254, 282, 324].map((x, index) => (
          <motion.circle
            key={x}
            cx={x}
            cy={[114, 160, 260, 48, 260, 160, 246][index]}
            r="5"
            fill="currentColor"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      <div className="absolute bottom-5 left-5 right-5 z-20 grid grid-cols-3 gap-3 text-xs text-white/70">
        <div className="rounded-2xl border border-white/10 bg-ink/60 px-3 py-3 backdrop-blur">
          AI Signal
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink/60 px-3 py-3 backdrop-blur">
          Robotics
        </div>
        <div className="rounded-2xl border border-white/10 bg-ink/60 px-3 py-3 backdrop-blur">
          Visibility
        </div>
      </div>
    </div>
  );
}

export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_30%_20%,rgba(79,215,255,0.22),transparent_34rem),radial-gradient(circle_at_75%_10%,rgba(57,109,255,0.22),transparent_30rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
    </div>
  );
}
