import { about, closing, hero, pillars } from "@/content/home";
import { UnifiedBackground } from "@/components/visuals/UnifiedBackground";
import { HeroOrbitRibbon } from "@/components/visuals/HeroOrbitRibbon";
import { PillarExperienceSection } from "@/components/sections/PillarExperienceSection";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SafeAssetImage } from "@/components/ui/SafeAssetImage";
import type { ReactNode } from "react";

export function HomeSections() {
  return (
    <main className="relative isolate overflow-hidden bg-transparent text-paper">
      <UnifiedBackground />
      <HeroSection />
      <AboutSection />
      {pillars.map((pillar, index) => (
        <PillarExperienceSection
          key={pillar.id}
          pillar={pillar}
          index={index}
        />
      ))}
      <ClosingSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-24 pt-36 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pt-32"
    >
      <div className="absolute left-5 top-28 h-px w-28 bg-gradient-to-r from-gold to-transparent sm:left-6 lg:left-8" />
      <SectionReveal className="relative z-10">
        <p className="mb-6 inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-medium text-champagne shadow-[0_0_2rem_rgba(212,175,55,0.12)]">
          {hero.motto}
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-normal text-paper sm:text-7xl lg:text-8xl">
          The AI-driven agency for{" "}
          <span className="bg-gradient-to-r from-paper via-champagne to-gold bg-clip-text text-transparent">
            technology
          </span>
          , innovation and <span className="text-gold">impact.</span>
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
      <SectionReveal
        delay={0.12}
        className="relative z-10 mx-auto w-full max-w-[39rem] max-lg:max-w-[32rem]"
      >
        <HeroOrbitRibbon />
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
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-paper sm:text-6xl">
            We connect technology with{" "}
            <span className="bg-gradient-to-r from-gold via-champagne to-paper bg-clip-text text-transparent">
              society, business and global innovation ecosystems.
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-platinum/70">
            {about.text}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <article className="overflow-hidden rounded-[2rem] border border-gold/20 bg-white/[0.045] p-4 shadow-2xl shadow-gold/10 backdrop-blur">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-gold/20 bg-midnight">
              <SafeAssetImage
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

function ClosingSection() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-gold/20 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_30rem),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-6 py-16 text-center shadow-2xl shadow-gold/20 sm:px-10">
        <p className="text-sm font-medium uppercase text-gold">
          {closing.kicker}
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-tight text-paper sm:text-7xl">
          Let&apos;s build your{" "}
          <span className="bg-gradient-to-r from-gold via-champagne to-paper bg-clip-text text-transparent">
            next visible move.
          </span>
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
