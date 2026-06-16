"use client";

import { useState } from "react";
import { navItems } from "@/content/home";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-ink/55 shadow-[0_1rem_4rem_rgba(0,0,0,0.28)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/45 bg-gold/10 text-sm font-semibold text-gold shadow-[0_0_2rem_rgba(212,175,55,0.18)]">
            VN
          </span>
          <span className="text-base font-semibold text-paper">
            Victorious Network
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper/68 transition hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full border border-gold/35 bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_2rem_rgba(212,175,55,0.24)] transition hover:bg-champagne"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-gold/20 bg-white/5 text-paper lg:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-gold/15 bg-ink/95 px-5 py-5 shadow-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm text-paper/75 transition hover:bg-white/5 hover:text-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Contact Us
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
