"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const headerNav = {
  en: [
    { label: "AI Experiences & Events", href: "#experiences" },
    { label: "AI Media", href: "#media" },
    { label: "Innovation & Robotics", href: "#innovation" },
    { label: "Commercial Services", href: "#services" },
  ],
  el: [
    { label: "AI Εμπειρίες & Εκδηλώσεις", href: "#experiences" },
    { label: "AI Media", href: "#media" },
    { label: "Καινοτομία & Ρομποτική", href: "#innovation" },
    { label: "Εμπορικές Υπηρεσίες", href: "#services" },
  ],
} as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const currentNav = headerNav[language];
  const contactLabel = language === "el" ? "Επικοινωνία" : "Contact Us";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-[linear-gradient(180deg,rgba(5,5,7,0.88),rgba(5,5,7,0.58))] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <a href="#home" aria-label="Victorious Network" className="group flex min-w-0 items-center">
            <span className="relative grid h-12 w-20 shrink-0 place-items-center overflow-hidden sm:h-14 sm:w-24">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(212,175,55,0.18),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
              <img
                src="/assets/vn-emblem-gold.png"
                alt="Victorious Network"
                className="relative h-10 w-auto sm:h-12"
                width={360}
                height={140}
              />
            </span>
        </a>

          <div className="hidden items-center gap-2 xl:flex">
            {currentNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor="Explore"
                data-magnetic
                className="group relative px-3 py-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-paper/62 transition hover:text-champagne xl:px-4"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gold transition group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="flex items-center border-l border-gold/20 pl-3" aria-label="Language">
              {(["en", "el"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLanguage(value)}
                  className={`px-2 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition ${language === value ? "text-gold" : "text-platinum/38 hover:text-paper"}`}
                >
                  {value === "el" ? "GR" : "EN"}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              data-cursor="Connect"
              data-magnetic
              className="border border-gold/60 bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink shadow-[0_0_2rem_rgba(212,175,55,0.2)] transition hover:bg-champagne"
            >
              {contactLabel}
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center border border-gold/30 bg-gold/5 text-paper xl:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-gold/15 bg-ink/95 px-5 py-5 shadow-2xl xl:hidden">
            <div className="grid gap-2">
            <div className="mb-3 flex w-fit items-center border border-white/10 p-1">
              {(["en", "el"] as const).map((value) => (
                <button key={value} type="button" onClick={() => setLanguage(value)} className={`px-4 py-2 text-xs font-semibold ${language === value ? "bg-gold text-ink" : "text-platinum/60"}`}>
                  {value === "el" ? "GR" : "EN"}
                </button>
              ))}
            </div>
            {currentNav.map((item) => (
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
