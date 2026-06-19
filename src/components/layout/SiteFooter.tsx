"use client";

import { navItems } from "@/content/home";
import { navItemsEl } from "@/content/home-el";
import { useLanguage } from "@/components/providers/LanguageProvider";

const footerSignals = [
  "AI storytelling",
  "Robotics visibility",
  "Market authority",
  "Innovation networks",
] as const;

export function SiteFooter() {
  const { language } = useLanguage();
  const greek = language === "el";
  const currentNav = greek ? navItemsEl : navItems;
  const signals = greek
    ? ["AI storytelling", "Ορατότητα στη ρομποτική", "Κύρος στην αγορά", "Δίκτυα καινοτομίας"]
    : footerSignals;

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-ink px-5 py-16 text-paper sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.14),transparent_24rem),radial-gradient(circle_at_86%_12%,rgba(232,217,183,0.08),transparent_22rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.8fr_0.7fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-4">
            <span className="grid h-16 w-28 place-items-center border-r border-gold/30 pr-4">
              <img
                src="/assets/vn-emblem-gold.png"
                alt="Victorious Network"
                className="h-14 w-auto"
                width={360}
                height={140}
              />
            </span>
            <span>
              <span className="block text-xl font-semibold">
                Victorious Network
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.28em] text-gold/80">
                {greek ? "Premium AI agency καινοτομίας" : "Premium AI innovation agency"}
              </span>
            </span>
          </a>

          <p className="mt-8 max-w-xl text-3xl font-semibold leading-tight text-paper sm:text-5xl">
            {greek ? "Η τεχνολογία αξίζει μία " : "Technology deserves a "}
            <span className="bg-gradient-to-r from-gold via-champagne to-paper bg-clip-text text-transparent">
              {greek ? "ιστορία που φαίνεται." : "visible story."}
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-gold/20 bg-white/[0.035] px-4 py-2 text-sm text-platinum/72"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              {greek ? "Πλοήγηση" : "Navigate"}
            </p>
            <div className="mt-5 grid gap-3">
              {currentNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-platinum/68 transition hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              {greek ? "Πυλώνες" : "Pillars"}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-platinum/68">
              <span>{greek ? "AI Εμπειρίες" : "AI Experiences"}</span>
              <span>AI Media</span>
              <span>{greek ? "Καινοτομία & Ρομποτική" : "Innovation & Robotics"}</span>
              <span>{greek ? "Εμπορικές Υπηρεσίες" : "Commercial Services"}</span>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              {greek ? "Επικοινωνία" : "Contact"}
            </p>
            <p className="mt-5 text-sm leading-7 text-platinum/68">
              {greek
                ? "Χτίστε ορατότητα, κύρος και ισχυρή παρουσία στην αγορά για το technology brand σας."
                : "Build visibility, authority and market presence for your technology brand."}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-champagne"
            >
              {greek ? "Ας μιλήσουμε" : "Start a conversation"}
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-platinum/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Victorious Network. {greek ? "Με την επιφύλαξη παντός δικαιώματος." : "All rights reserved."}</p>
        <p>{greek ? "AI · Επικοινωνία · Ρομποτική · Παρουσία στην αγορά" : "AI · Communications · Robotics · Market presence"}</p>
      </div>
    </footer>
  );
}
