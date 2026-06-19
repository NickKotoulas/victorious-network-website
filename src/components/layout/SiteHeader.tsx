"use client";

import { useState } from "react";
import { navItems } from "@/content/home";
import { navItemsEl } from "@/content/home-el";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const currentNav = language === "el" ? navItemsEl : navItems;
  const contactLabel = language === "el" ? "Επικοινωνία" : "Contact Us";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl overflow-hidden border border-gold/18 bg-ink/78 shadow-[0_1.2rem_5rem_rgba(0,0,0,0.42)] backdrop-blur-2xl">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
        <nav className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-6">
          <a href="#home" className="group flex min-w-0 items-center gap-3">
            <span className="relative grid h-12 w-20 shrink-0 place-items-center overflow-hidden border-r border-gold/30 pr-3 sm:h-14 sm:w-24">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(212,175,55,0.18),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
              <img
                src="/assets/vn-emblem-gold.png"
                alt="Victorious Network"
                className="relative h-10 w-auto sm:h-12"
                width={360}
                height={140}
              />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-paper sm:text-base">
                Victorious Network
              </span>
              <span className="hidden text-[0.62rem] uppercase tracking-[0.28em] text-gold/75 sm:block">
                AI Communications Network
              </span>
            </span>
        </a>

          <div className="hidden items-center gap-1 xl:flex">
            {currentNav.filter((item) => item.href !== "#home").map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-paper/68 transition hover:text-paper xl:px-4"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gold transition group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="flex items-center border border-white/10 bg-white/[0.025] p-1" aria-label="Language">
              {(["en", "el"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLanguage(value)}
                  className={`px-2.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] transition ${language === value ? "bg-gold text-ink" : "text-platinum/55 hover:text-paper"}`}
                >
                  {value === "el" ? "GR" : "EN"}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="rounded-full border border-gold/50 bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_2rem_rgba(212,175,55,0.28)] transition hover:bg-champagne hover:shadow-[0_0_3rem_rgba(212,175,55,0.38)]"
            >
              {contactLabel}
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 text-paper shadow-[0_0_2rem_rgba(212,175,55,0.12)] xl:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-gold/15 bg-ink/95 px-4 py-4 shadow-2xl xl:hidden">
            <div className="grid gap-2">
            <div className="mb-3 flex w-fit items-center border border-white/10 p-1">
              {(["en", "el"] as const).map((value) => (
                <button key={value} type="button" onClick={() => setLanguage(value)} className={`px-4 py-2 text-xs font-semibold ${language === value ? "bg-gold text-ink" : "text-platinum/60"}`}>
                  {value === "el" ? "GR" : "EN"}
                </button>
              ))}
            </div>
            {currentNav.filter((item) => item.href !== "#home").map((item) => (
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
              className="mt-3 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              {contactLabel}
            </a>
          </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
