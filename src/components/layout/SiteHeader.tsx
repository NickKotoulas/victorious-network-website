"use client";

import { useState } from "react";
import { navItems } from "@/content/home";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-signal/40 bg-signal/10 text-sm font-semibold text-signal">
            VN
          </span>
          <span className="text-base font-semibold text-white">
            Victorious Network
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-signal"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Contact Us
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
