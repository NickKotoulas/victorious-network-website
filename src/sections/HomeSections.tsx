import { about, closing, hero, pillars } from "@/content/home";
import {
  HeroSignalVisual,
  UnifiedBackground,
} from "@/components/visuals/UnifiedBackground";
import { SectionReveal } from "@/components/ui/SectionReveal";
import type { ReactNode } from "react";

export function HomeSections() {
  return (
    <main className="relative isolate overflow-hidden bg-transparent text-paper">
      <UnifiedBackground />
      <HeroSection />
      <AboutSection />
      {pillars.map((pillar, index) => (
        <PillarSection key={pillar.id} pillar={pillar} index={index} />
      ))}
      <ClosingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-24 pt-36 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pt-32"
    >
      <div className="absolute left-5 top-28 h-px w-28 bg-gradient-to-r from-gold to-transparent sm:left-6 lg:left-8" />
      <SectionReveal className="relative z-10">
        <p className="mb-6 inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-medium text-champagne shadow-[0_0_2rem_rgba(212,175,55,0.12)]">
          {hero.motto}
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-paper sm:text-7xl lg:text-8xl">
          The AI-driven agency for technology, innovation and{" "}
          <span className="text-gold">impact.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-platinum/78 sm:text-xl">
          {hero.subline}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-gold px-7 py-4 text-center text-sm font-semibold text-ink shadow-[0_0_2.5rem_rgba(212,175,55,0.28)] transition hover:bg-champagne"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-gold/25 bg-white/[0.03] px-7 py-4 text-center text-sm font-semibold text-paper transition hover:border-gold/60 hover:bg-gold/10"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </SectionReveal>
      <SectionReveal delay={0.12} className="relative z-10">
        <HeroSignalVisual />
      </SectionReveal>
    </section>
  );
}

function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_0.78fr] lg:items-center lg:justify-between">
        <SectionReveal>
          <SectionKicker>{about.kicker}</SectionKicker>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-paper sm:text-5xl">
            {about.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-platinum/70">
            {about.text}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <article className="overflow-hidden rounded-[2rem] border border-gold/20 bg-white/[0.045] p-4 shadow-2xl shadow-gold/10 backdrop-blur">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold/20 bg-midnight">
              <img
                src={about.ceo.photo}
                alt={about.ceo.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-2 pb-3 pt-6">
              <h3 className="text-2xl font-semibold text-paper">
                {about.ceo.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase text-gold">
                {about.ceo.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-platinum/68">
                {about.ceo.bio}
              </p>
            </div>
          </article>
        </SectionReveal>
      </div>
    </SectionShell>
  );
}

function PillarSection({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const isReversed = index % 2 === 1;
  const introAlignment = isReversed ? "lg:ml-auto lg:text-right" : "";
  const columns = pillar.items.length >= 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section
      id={pillar.id}
      className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8"
    >
      <SectionReveal className={`max-w-3xl ${introAlignment}`}>
        <SectionKicker>{pillar.kicker}</SectionKicker>
        <h2 className="mt-4 text-4xl font-semibold text-paper sm:text-6xl">
          {pillar.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-platinum/70">
          {pillar.intro}
        </p>
      </SectionReveal>

      <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${columns}`}>
        {pillar.items.map((item, itemIndex) => (
          <SectionReveal
            key={item.title}
            delay={Math.min(itemIndex * 0.05, 0.25)}
          >
            <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.07]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="text-sm text-white/40">0{itemIndex + 1}</p>
              <h3 className="mt-7 text-xl font-semibold leading-7 text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                {item.description}
              </p>
            </article>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal className="mt-10 border-t border-gold/15 pt-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-base text-platinum/75">{pillar.cta.prompt}</p>
          <a
            href={pillar.cta.href}
            className="inline-flex w-fit rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-paper transition hover:bg-gold/10"
          >
            {pillar.cta.label}
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}

function ClosingSection() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_30rem),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-6 py-16 text-center shadow-2xl shadow-gold/20 sm:px-10">
        <p className="text-sm font-medium uppercase text-gold">
          {closing.kicker}
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold text-paper sm:text-6xl">
          {closing.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-platinum/70">
          {closing.text}
        </p>
        <a
          href={closing.cta.href}
          className="mt-9 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-champagne"
        >
          {closing.cta.label}
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
