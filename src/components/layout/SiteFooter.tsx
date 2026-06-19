"use client";

import { navItems } from "@/content/home";
import { navItemsEl } from "@/content/home-el";
import { useLanguage } from "@/components/providers/LanguageProvider";

const signalsEn = ["AI Storytelling", "Robotics", "Media", "Culture", "Market Impact"];
const signalsEl = ["AI Αφήγηση", "Ρομποτική", "Media", "Πολιτισμός", "Αντίκτυπος"];

export function SiteFooter() {
  const { language } = useLanguage();
  const greek = language === "el";
  const currentNav = greek ? navItemsEl : navItems;
  const signals = greek ? signalsEl : signalsEn;

  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-transparent px-5 pb-8 pt-20 text-paper sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_18%_0%,rgba(212,175,55,0.13),transparent_45%),radial-gradient(ellipse_at_82%_0%,rgba(9,20,38,0.75),transparent_48%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold">
              {greek ? "Το επόμενο ορατό σας βήμα" : "Your next visible move"}
            </p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.94] text-paper sm:text-7xl">
              {greek ? "Η τεχνολογία αξίζει " : "Technology deserves "}
              <span className="italic text-gold">
                {greek ? "δημόσια επιρροή." : "public impact."}
              </span>
            </h2>
          </div>
          <a href="#contact" className="group inline-flex w-fit items-center gap-5 border border-gold/45 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-champagne transition hover:bg-gold hover:text-ink">
            {greek ? "Ας μιλήσουμε" : "Start a conversation"}
            <span className="h-px w-10 bg-current transition group-hover:w-14" />
          </a>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-4">
              <img src="/assets/vn-emblem-gold.png" alt="Victorious Network" className="h-14 w-auto" width={360} height={140} />
              <span className="border-l border-gold/25 pl-4">
                <span className="block font-serif text-xl">Victorious Network</span>
                <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.26em] text-gold/70">AI · Robotics · Media · Impact</span>
              </span>
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.62rem] uppercase tracking-[0.18em] text-platinum/42">
              {signals.map((signal, index) => (
                <span key={signal} className="flex items-center gap-4">
                  {signal}
                  {index < signals.length - 1 ? <span className="h-1 w-1 rotate-45 bg-gold/55" /> : null}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">{greek ? "Πλοήγηση" : "Navigate"}</p>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
              {currentNav.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-platinum/58 transition hover:text-gold">{item.label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">{greek ? "Επικοινωνία" : "Contact"}</p>
            <a href="mailto:info@victoriousnetwork.com" className="mt-6 block font-serif text-xl text-paper transition hover:text-gold">info@victoriousnetwork.com</a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-platinum/48">
              {greek ? "AI επικοινωνία, ρομποτική και στρατηγική ορατότητα για technology brands." : "AI communications, robotics and strategic visibility for technology brands."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/8 pt-6 text-[0.62rem] uppercase tracking-[0.14em] text-platinum/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Victorious Network</p>
          <p>{greek ? "AI με ανθρώπινη κατεύθυνση" : "Human-led artificial intelligence"}</p>
        </div>
      </div>
    </footer>
  );
}
