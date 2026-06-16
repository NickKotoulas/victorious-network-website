"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase text-gold">
          Victorious Network
        </p>
        <h1 className="text-4xl font-semibold tracking-normal text-ink sm:text-6xl">
          Project foundation is running.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-graphite sm:text-lg">
          The clean Next.js, TypeScript, Tailwind CSS, and Framer Motion setup is
          ready for the future bilingual EN/GR premium agency website.
        </p>
      </motion.section>
    </main>
  );
}
