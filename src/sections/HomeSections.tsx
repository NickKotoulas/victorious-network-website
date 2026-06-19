"use client";

import { about, closing, hero, pillars } from "@/content/home";
import { aboutEl, closingEl, heroEl, pillarsEl } from "@/content/home-el";
import { UnifiedBackground } from "@/components/visuals/UnifiedBackground";
import { HeroCinematicVisual } from "@/components/visuals/HeroCinematicVisual";
import { HeroMarquee } from "@/components/visuals/HeroMarquee";
import { PillarExperienceSection } from "@/components/sections/PillarExperienceSection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SafeAssetImage } from "@/components/ui/SafeAssetImage";
import type { ReactNode } from "react";

export function HomeSections() {
  const { language } = useLanguage();
  const content = language === "el"
    ? { hero: heroEl, about: aboutEl, pillars: pillarsEl, closing: closingEl }
    : { hero, about, pillars, closing };

  return (
    <main className="relative isolate overflow-hidden bg-transparent text-paper">
      <UnifiedBackground />
      <HeroSection content={content.hero} />
      <AboutSection content={content.about} />
      {content.pillars.map((pillar, index) => (
        <PillarExperienceSection
          key={pillar.id}
          pillar={pillar}
          index={index}
        />
      ))}
      <ClosingSection content={content.closing} />
    </main>
  );
}

function HeroSection({ content }: { content: typeof hero | typeof heroEl }) {
  const [beforeAi, afterAi] = content.headline.split("AI-driven");

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden border-b border-gold/15 pb-20 pt-32 sm:pt-36"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.98)_0%,rgba(5,5,7,0.9)_42%,rgba(5,5,7,0.2)_72%,rgba(5,5,7,0.75)_100%)]" />
      <div className="absolute left-[7%] top-[18%] h-64 w-64 rounded-full bg-gold/10 blur-[110px]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-13rem)] max-w-7xl items-center gap-4 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <SectionReveal className="relative z-20 py-8 lg:py-14">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-14 bg-gold" />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-champagne/80 sm:text-xs">
              {content.motto}
            </p>
          </div>
          <h1 className="max-w-[54rem] font-serif text-5xl font-medium leading-[0.9] text-paper sm:text-7xl lg:text-[5.4rem] xl:text-[6.4rem]">
            {beforeAi}
            <span className="bg-gradient-to-r from-champagne via-gold to-[#8d6c22] bg-clip-text italic text-transparent">
              AI-driven
            </span>
            {afterAi}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-platinum/72 sm:text-lg sm:leading-8">
            {content.subline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={content.primaryCta.href} className="group inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 text-sm font-semibold text-ink shadow-[0_0_2.5rem_rgba(212,175,55,0.24)] transition hover:bg-champagne">
              {content.primaryCta.label}
              <span className="h-px w-7 bg-ink transition group-hover:w-10" />
            </a>
            <a href={content.secondaryCta.href} className="inline-flex items-center justify-center border border-gold/30 bg-ink/35 px-7 py-4 text-sm font-semibold text-paper backdrop-blur transition hover:border-gold hover:bg-gold/10">
              {content.secondaryCta.label}
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12} className="relative z-10 -mt-8 min-h-[30rem] lg:-ml-24 lg:mt-0 lg:min-h-0">
          <HeroCinematicVisual />
        </SectionReveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30">
        <HeroMarquee />
      </div>
    </section>
  );
}

function AboutSection({ content }: { content: typeof about | typeof aboutEl }) {
  return (
    <SectionShell id="about">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_0.78fr] lg:items-center lg:justify-between">
        <SectionReveal>
          <SectionKicker>{content.kicker}</SectionKicker>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-paper sm:text-6xl">
            <span className="bg-gradient-to-r from-gold via-champagne to-paper bg-clip-text text-transparent">
              {content.title}
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-platinum/70">
            {content.text}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <article className="overflow-hidden rounded-[2rem] border border-gold/20 bg-white/[0.045] p-4 shadow-2xl shadow-gold/10 backdrop-blur">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold/20 bg-midnight">
              <SafeAssetImage
                src={content.ceo.photo}
                alt={content.ceo.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-2 pb-3 pt-6">
              <h3 className="text-2xl font-semibold text-paper">
                {content.ceo.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase text-gold">
                {content.ceo.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-platinum/68">
                {content.ceo.bio}
              </p>
            </div>
          </article>
        </SectionReveal>
      </div>
    </SectionShell>
  );
}

function ClosingSection({ content }: { content: typeof closing | typeof closingEl }) {
  return (
    <section id="contact" className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_30rem),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-6 py-16 text-center shadow-2xl shadow-gold/20 sm:px-10">
        <p className="text-sm font-medium uppercase text-gold">
          {content.kicker}
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-tight text-paper sm:text-7xl">
          <span className="bg-gradient-to-r from-gold via-champagne to-paper bg-clip-text text-transparent">
            {content.headline}
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-platinum/70">
          {content.text}
        </p>
        <a
          href={content.cta.href}
          className="mt-9 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-champagne"
        >
          {content.cta.label}
        </a>
      </SectionReveal>
    </section>
  );
}

function SectionShell({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      {children}
    </section>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase text-gold">{children}</p>
  );
}
