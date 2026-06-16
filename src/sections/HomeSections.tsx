import {
  aiEcosystem,
  events,
  projects,
  robotics,
  services,
  whoWeArePoints,
  whyPoints,
} from "@/content/home";
import { AmbientBackground, HeroVisual } from "@/components/ui/VisualField";
import { SectionReveal } from "@/components/ui/SectionReveal";
import type { ReactNode } from "react";

export function HomeSections() {
  return (
    <main className="relative overflow-hidden bg-ink text-white">
      <AmbientBackground />
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <AIEcosystemSection />
      <RoboticsSection />
      <ProjectsSection />
      <EventsSection />
      <WhySection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pt-28"
    >
      <SectionReveal>
        <p className="mb-5 inline-flex rounded-full border border-signal/25 bg-signal/10 px-4 py-2 text-sm font-medium text-signal">
          AI, robotics and technology communications
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
          The AI-Driven Agency for Technology Storytelling
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
          Victorious Network combines artificial intelligence, public relations,
          marketing and robotics expertise to help technology and
          innovation-driven brands build visibility, authority and market
          presence.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-ink transition hover:bg-signal"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-signal/60 hover:bg-signal/10"
          >
            Explore Services
          </a>
        </div>
      </SectionReveal>
      <SectionReveal delay={0.12}>
        <HeroVisual />
      </SectionReveal>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal>
          <SectionKicker>Who We Are</SectionKicker>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            We connect technology with society, business and global innovation
            ecosystems.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            We are an AI-driven marketing and communications agency connecting
            technology with society, business and global innovation ecosystems.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {whoWeArePoints.map((point, index) => (
              <FeatureCard key={point} label={point} index={index + 1} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </SectionShell>
  );
}

function ServicesSection() {
  return (
    <SectionShell id="services">
      <SectionIntro
        kicker="What We Do"
        title="Strategic communication, digital production, ecosystem access and experiential visibility."
        text="We support technology-driven companies through strategic communication, digital production, ecosystem access, robotics solutions and experiential visibility."
      />
      <CardGrid columns="three">
        {services.map((service, index) => (
          <PremiumCard key={service} title={service} index={index + 1} />
        ))}
      </CardGrid>
      <SectionButton href="#services">View Services</SectionButton>
    </SectionShell>
  );
}

function AIEcosystemSection() {
  return (
    <section
      id="ai-ecosystem"
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.035] px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,215,255,0.2),transparent_34rem)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro
          kicker="AI Ecosystem"
          title="AI is not an add-on. It is part of how we work."
          text="From content production and automation to AI-powered experiences and digital assets, AI is integrated into the way we design, produce and deliver value."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {aiEcosystem.map((item, index) => (
            <GlassCard key={item} title={item} index={index + 1} />
          ))}
        </div>
        <SectionButton href="#ai-ecosystem">Explore AI Ecosystem</SectionButton>
      </div>
    </section>
  );
}

function RoboticsSection() {
  return (
    <SectionShell id="robotics">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionReveal>
          <SectionKicker>Robotics & Humanoid Innovation</SectionKicker>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            Bringing robotics closer to brands, institutions and audiences.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Through selected collaborations with robot manufacturers, Victorious
            Network supports organizations in accessing robotics solutions for
            rental, purchase, demonstrations, events and immersive activations.
            Our exclusive collaboration around Sophia the Robot strengthens our
            role at the intersection of AI, robotics and public engagement.
          </p>
          <div className="mt-8">
            <SectionButton href="#robotics">Explore Robotics Solutions</SectionButton>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {robotics.map((item, index) => (
              <PremiumCard key={item} title={item} index={index + 1} compact />
            ))}
          </div>
        </SectionReveal>
      </div>
    </SectionShell>
  );
}

function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <SectionIntro
        kicker="Selected Projects"
        title="Selected work across AI, robotics, education and strategic communication."
        text="Explore selected projects that reflect our work across AI, robotics, education, innovation and strategic communication."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <SectionReveal key={project.title}>
            <article className="group h-full rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-signal/40 hover:bg-white/[0.07]">
              <p className="text-sm font-medium text-signal">{project.category}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-4 leading-7 text-white/60">{project.description}</p>
            </article>
          </SectionReveal>
        ))}
      </div>
      <SectionButton href="#projects">View Projects</SectionButton>
    </SectionShell>
  );
}

function EventsSection() {
  return (
    <SectionShell id="events">
      <SectionIntro
        kicker="Events & Experiences"
        title="Technology experiences designed for real audiences."
        text="We design and support events, conferences and immersive experiences that connect technology with real audiences."
      />
      <CardGrid columns="three">
        {events.map((event, index) => (
          <EventCard key={event} title={event} index={index + 1} />
        ))}
      </CardGrid>
      <SectionButton href="#events">Explore Events & Experiences</SectionButton>
    </SectionShell>
  );
}

function WhySection() {
  return (
    <SectionShell id="why">
      <SectionIntro
        kicker="Why Victorious Network"
        title="A focused partner for technology brands that need clarity and impact."
        text="We combine strategic communication, AI-driven production, robotics access and innovation ecosystem knowledge to help technology brands grow with clarity and impact."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyPoints.map((point, index) => (
          <FeatureCard key={point} label={point} index={index + 1} />
        ))}
      </div>
    </SectionShell>
  );
}

function FinalCtaSection() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-6 lg:px-8">
      <SectionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-signal/20 bg-[radial-gradient(circle_at_50%_0%,rgba(79,215,255,0.24),transparent_30rem),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] px-6 py-16 text-center shadow-2xl shadow-cobalt/20 sm:px-10">
        <p className="text-sm font-medium uppercase text-signal">
          Contact Victorious Network
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold text-white sm:text-6xl">
          Ready to build your next stage of visibility?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Let&apos;s discuss how Victorious Network can support your brand,
          project or technology-driven business.
        </p>
        <a
          href="mailto:hello@victorious.network"
          className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink transition hover:bg-signal"
        >
          Contact Us
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

function SectionIntro({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <SectionReveal className="max-w-3xl">
      <SectionKicker>{kicker}</SectionKicker>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-white/70">{text}</p>
    </SectionReveal>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase text-signal">{children}</p>
  );
}

function CardGrid({
  children,
  columns,
}: {
  children: ReactNode;
  columns: "three";
}) {
  const gridClass =
    columns === "three" ? "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" : "";

  return <div className={gridClass}>{children}</div>;
}

function PremiumCard({
  title,
  index,
  compact = false,
}: {
  title: string;
  index: number;
  compact?: boolean;
}) {
  return (
    <SectionReveal delay={Math.min(index * 0.03, 0.18)}>
      <article
        className={`group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-signal/50 hover:bg-white/[0.07] ${
          compact ? "p-5" : "p-6"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-transparent opacity-0 transition group-hover:opacity-100" />
        <p className="text-sm text-white/40">0{index}</p>
        <h3 className="mt-7 text-xl font-semibold leading-7 text-white">{title}</h3>
      </article>
    </SectionReveal>
  );
}

function GlassCard({ title, index }: { title: string; index: number }) {
  return (
    <SectionReveal delay={Math.min(index * 0.04, 0.2)}>
      <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.065] p-5 shadow-xl shadow-cobalt/10 backdrop-blur transition hover:-translate-y-1 hover:border-signal/50">
        <div className="mb-8 h-12 w-12 rounded-2xl bg-gradient-to-br from-signal/30 to-cobalt/30" />
        <h3 className="text-lg font-semibold leading-7 text-white">{title}</h3>
      </article>
    </SectionReveal>
  );
}

function FeatureCard({ label, index }: { label: string; index: number }) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-signal/25 bg-signal/10 text-sm font-semibold text-signal">
        0{index}
      </div>
      <h3 className="text-xl font-semibold text-white">{label}</h3>
    </article>
  );
}

function EventCard({ title, index }: { title: string; index: number }) {
  return (
    <SectionReveal delay={Math.min(index * 0.03, 0.18)}>
      <article className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-signal/40">
        <div className="h-36 bg-[radial-gradient(circle_at_30%_20%,rgba(79,215,255,0.45),transparent_14rem),linear-gradient(135deg,rgba(57,109,255,0.45),rgba(255,255,255,0.04))]" />
        <div className="p-6">
          <p className="text-sm text-white/40">Experience 0{index}</p>
          <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
        </div>
      </article>
    </SectionReveal>
  );
}

function SectionButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <SectionReveal className="mt-10">
      <a
        href={href}
        className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-signal/60 hover:bg-signal/10"
      >
        {children}
      </a>
    </SectionReveal>
  );
}
