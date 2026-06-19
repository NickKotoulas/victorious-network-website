"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import type { PillarContent } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";
import type { ReactNode } from "react";

type Pillar = PillarContent;
type VisualType = Pillar["visualType"];

const visualCopy: Record<
  VisualType,
  {
    signal: string;
    metric: string;
    emphasis: string;
  }
> = {
  experiences: {
    signal: "Live audience signal",
    metric: "Hologram stage",
    emphasis: "Event energy",
  },
  media: {
    signal: "Studio production flow",
    metric: "Media timeline",
    emphasis: "Multilingual reach",
  },
  innovation: {
    signal: "Research network",
    metric: "Robotics pathway",
    emphasis: "Market bridge",
  },
  commercial: {
    signal: "Market expansion map",
    metric: "Growth layers",
    emphasis: "Proposal engine",
  },
};

const visualCopyEl: typeof visualCopy = {
  experiences: { signal: "Σήμα ζωντανού κοινού", metric: "Hologram σκηνή", emphasis: "Ενέργεια event" },
  media: { signal: "Ροή studio παραγωγής", metric: "Media timeline", emphasis: "Πολυγλωσσική απήχηση" },
  innovation: { signal: "Ερευνητικό δίκτυο", metric: "Διαδρομή ρομποτικής", emphasis: "Γέφυρα προς την αγορά" },
  commercial: { signal: "Χάρτης επέκτασης αγοράς", metric: "Επίπεδα ανάπτυξης", emphasis: "Proposal engine" },
};

const visualTone: Record<VisualType, string> = {
  experiences:
    "from-gold/20 via-champagne/8 to-transparent shadow-[0_0_6rem_rgba(212,175,55,0.13)]",
  media:
    "from-platinum/14 via-gold/10 to-transparent shadow-[0_0_6rem_rgba(200,205,212,0.08)]",
  innovation:
    "from-gold/18 via-navy/20 to-transparent shadow-[0_0_6rem_rgba(9,20,38,0.34)]",
  commercial:
    "from-champagne/14 via-gold/12 to-transparent shadow-[0_0_6rem_rgba(212,175,55,0.1)]",
};

const visualSkins: Record<
  VisualType,
  {
    accent: string;
    frame: string;
    titleAccent: string;
  }
> = {
  experiences: {
    accent: "from-gold via-champagne to-paper",
    frame:
      "rounded-t-[4rem] border-gold/30 bg-[radial-gradient(circle_at_50%_86%,rgba(212,175,55,0.22),transparent_18rem)]",
    titleAccent: "Experiences & Events",
  },
  media: {
    accent: "from-platinum via-paper to-gold",
    frame:
      "rounded-[1.2rem] border-platinum/20 bg-[linear-gradient(135deg,rgba(200,205,212,0.08),rgba(212,175,55,0.05))]",
    titleAccent: "Media",
  },
  innovation: {
    accent: "from-gold via-paper to-platinum",
    frame:
      "rounded-[2.5rem] border-gold/20 bg-[radial-gradient(circle_at_50%_40%,rgba(9,20,38,0.95),rgba(5,5,7,0.58))]",
    titleAccent: "Robotics",
  },
  commercial: {
    accent: "from-champagne via-gold to-paper",
    frame:
      "rounded-[0.9rem] border-champagne/22 bg-[linear-gradient(135deg,rgba(232,217,183,0.08),rgba(212,175,55,0.06))]",
    titleAccent: "Services",
  },
};

export function PillarExperienceSection({
  pillar,
  index,
}: {
  pillar: Pillar;
  index: number;
}) {
  const { language } = useLanguage();
  const copy = language === "el" ? visualCopyEl : visualCopy;
  const reversed = index % 2 === 1;

  return (
    <section
      id={pillar.id}
      className="relative overflow-hidden border-y border-white/[0.035] bg-transparent px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.055),transparent_18%,transparent_82%,rgba(232,217,183,0.04))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(72rem,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <div
        className={`relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center ${
          reversed ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        <SectionReveal
          className={`relative z-10 ${reversed ? "lg:col-start-2" : ""}`}
        >
          <PillarHeading pillar={pillar} />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-platinum/72">
            {pillar.intro}
          </p>
          <MicroCTA
            prompt={pillar.cta.prompt}
            label={pillar.cta.label}
            visualType={pillar.visualType}
          />
        </SectionReveal>

        <SectionReveal
          delay={0.1}
          className={reversed ? "lg:col-start-1 lg:row-start-1" : ""}
        >
          <SectionVisualFrame
            visualType={pillar.visualType}
            label={copy[pillar.visualType].metric}
          >
            <PillarVisual visualType={pillar.visualType} />
          </SectionVisualFrame>
        </SectionReveal>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl">
        <div className="grid gap-4 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <SectionReveal>
            <div className="sticky top-28 hidden rounded-[1.5rem] border border-gold/15 bg-ink/35 p-5 backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-[0.24em] text-platinum/45">
                {copy[pillar.visualType].signal}
              </p>
              <p className="mt-5 text-3xl font-semibold text-paper">
                {copy[pillar.visualType].metric}
              </p>
              <p className="mt-4 text-sm leading-6 text-platinum/62">
                {copy[pillar.visualType].emphasis}
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-4">
            {pillar.items.map((item, itemIndex) => (
              <ServiceNarrativeItem
                key={item.title}
                index={itemIndex}
                title={item.title}
                description={item.description}
                visualType={pillar.visualType}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarHeading({ pillar }: { pillar: Pillar }) {
  const splitAt = pillar.title.indexOf(" ");
  const before = splitAt > -1 ? `${pillar.title.slice(0, splitAt)} ` : "";
  const accent = splitAt > -1 ? pillar.title.slice(splitAt + 1) : pillar.title;

  return (
    <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] text-paper sm:text-6xl">
      {before}
      <span className={`bg-gradient-to-r ${visualSkins[pillar.visualType].accent} bg-clip-text text-transparent`}>
        {accent}
      </span>
    </h2>
  );
}

function MicroCTA({
  prompt,
  label,
  visualType,
}: {
  prompt: string;
  label: string;
  visualType: VisualType;
}) {
  return (
    <div className="mt-9 flex flex-col gap-4 border-t border-gold/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-md text-sm leading-6 text-platinum/68">{prompt}</p>
      <a
        href="#contact"
        className={`inline-flex w-fit items-center gap-3 rounded-full border border-gold/45 bg-gradient-to-r ${visualSkins[visualType].accent} px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_2.5rem_rgba(212,175,55,0.18)] transition hover:scale-[1.02]`}
      >
        {label}
        <span aria-hidden="true" className="h-px w-7 bg-current" />
      </a>
    </div>
  );
}

function ServiceNarrativeItem({
  index,
  title,
  description,
  visualType,
}: {
  index: number;
  title: string;
  description: string;
  visualType: VisualType;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.24) }}
      className="group grid gap-5 overflow-hidden border-l border-gold/20 bg-white/[0.032] px-5 py-6 backdrop-blur transition duration-300 hover:border-gold/70 hover:bg-white/[0.055] md:grid-cols-[6rem_1fr]"
    >
      <div className="flex items-center gap-4 md:block">
        <p className="text-sm text-platinum/38">0{index + 1}</p>
        <div className="mt-0 h-px w-12 bg-gold/55 md:mt-5" />
        <div
          className={`mt-0 h-8 w-8 rounded-full bg-gradient-to-br ${visualTone[visualType]} md:mt-6`}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold leading-7 text-paper">{title}</h3>
        <p className="mt-3 max-w-3xl text-base leading-7 text-platinum/64">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

function SectionVisualFrame({
  children,
  visualType,
  label,
}: {
  children: ReactNode;
  visualType: VisualType;
  label: string;
}) {
  return (
    <div className={`relative overflow-hidden border bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-3 shadow-2xl shadow-black/35 ${visualSkins[visualType].frame}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${visualTone[visualType]}`} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,217,183,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(232,217,183,0.026)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <div className="relative min-h-[26rem] overflow-hidden rounded-[1.65rem] border border-white/10 bg-ink/68">
        <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-champagne/70 backdrop-blur">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

function PillarVisual({ visualType }: { visualType: VisualType }) {
  if (visualType === "media") {
    return <MediaVisual />;
  }

  if (visualType === "innovation") {
    return <InnovationVisual />;
  }

  if (visualType === "commercial") {
    return <CommercialVisual />;
  }

  return <ExperiencesVisual />;
}

function ExperiencesVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-x-12 bottom-12 h-24 rounded-[50%] bg-gold/12 blur-xl" />
      <div className="absolute bottom-14 left-1/2 h-2 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="absolute bottom-20 left-1/2 h-64 w-40 -translate-x-1/2 rounded-t-full border border-gold/24 bg-[linear-gradient(180deg,rgba(232,217,183,0.08),rgba(212,175,55,0.018))] shadow-[0_0_5rem_rgba(212,175,55,0.16)]" />
      <div className="absolute bottom-44 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-gold/40 bg-ink/70" />
      <div className="absolute bottom-24 left-1/2 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-gold/70 to-transparent" />
      <motion.div
        animate={{ opacity: [0.22, 0.55, 0.22], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-28 h-72 bg-[conic-gradient(from_180deg_at_50%_100%,transparent,rgba(212,175,55,0.18),transparent_34%)]"
      />
      <div className="absolute left-10 top-12 h-44 w-px -rotate-12 bg-gradient-to-b from-gold/70 to-transparent" />
      <div className="absolute right-10 top-12 h-44 w-px rotate-12 bg-gradient-to-b from-gold/70 to-transparent" />
      <AudienceDots />
    </div>
  );
}

function MediaVisual() {
  return (
    <div className="absolute inset-0 p-8">
      <div className="absolute inset-8 rounded-[1.5rem] border border-champagne/18" />
      <div className="absolute left-8 top-8 h-14 w-14 border-l border-t border-gold/60" />
      <div className="absolute right-8 top-8 h-14 w-14 border-r border-t border-gold/60" />
      <div className="absolute bottom-8 left-8 h-14 w-14 border-b border-l border-gold/60" />
      <div className="absolute bottom-8 right-8 h-14 w-14 border-b border-r border-gold/60" />
      <div className="absolute left-12 right-12 top-24 flex items-end gap-2">
        {Array.from({ length: 34 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{ height: [`${18 + (index % 7) * 4}px`, `${42 + (index % 5) * 7}px`, `${18 + (index % 7) * 4}px`] }}
            transition={{ duration: 2.8 + (index % 5) * 0.16, repeat: Infinity, ease: "easeInOut" }}
            className="w-full rounded-full bg-gradient-to-t from-gold/20 to-champagne/70"
          />
        ))}
      </div>
      <div className="absolute bottom-24 left-12 right-12 space-y-4">
        {["Capture", "Localize", "Publish"].map((label, index) => (
          <div key={label} className="grid grid-cols-[6rem_1fr] items-center gap-4">
            <span className="text-xs uppercase text-platinum/45">{label}</span>
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
              <motion.div
                animate={{ x: ["-45%", "105%"] }}
                transition={{ duration: 4 + index * 0.6, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InnovationVisual() {
  const nodes = [
    ["22%", "64%"],
    ["40%", "35%"],
    ["58%", "58%"],
    ["74%", "30%"],
    ["78%", "76%"],
  ];

  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 640 460" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="innovationPath" x1="0" x2="1">
            <stop offset="0%" stopColor="#E8D9B7" stopOpacity="0.15" />
            <stop offset="52%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E8D9B7" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path d="M110 300C190 130 294 245 378 170S520 118 555 210" fill="none" stroke="url(#innovationPath)" strokeWidth="1.5" />
        <path d="M155 298 260 185 370 266 482 140 505 345" fill="none" stroke="#E8D9B7" strokeOpacity="0.12" />
        <path d="M320 132c42 0 74 35 74 82 0 56-36 98-74 130-38-32-74-74-74-130 0-47 32-82 74-82Z" fill="rgba(212,175,55,0.04)" stroke="#D4AF37" strokeOpacity="0.24" />
        <path d="M320 178v126M278 222h84M286 266h68" stroke="#D4AF37" strokeOpacity="0.36" />
      </svg>
      {nodes.map(([left, top], index) => (
        <motion.div
          key={`${left}-${top}`}
          animate={{ scale: [1, 1.14, 1], opacity: [0.62, 1, 0.62] }}
          transition={{ duration: 3.2 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute grid h-14 w-14 place-items-center rounded-full border border-gold/35 bg-ink/70 text-xs text-champagne shadow-[0_0_2.5rem_rgba(212,175,55,0.13)]"
          style={{ left, top }}
        >
          0{index + 1}
        </motion.div>
      ))}
    </div>
  );
}

function CommercialVisual() {
  return (
    <div className="absolute inset-0 p-9">
      <div className="absolute inset-10 rounded-[1.5rem] border border-gold/15 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.13),transparent_16rem)]" />
      <svg viewBox="0 0 640 460" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M118 326C180 296 188 220 252 210s92 54 148 25 66-98 142-102" fill="none" stroke="#D4AF37" strokeOpacity="0.52" strokeWidth="1.5" />
        <path d="M132 118h376M132 194h376M132 270h376M132 346h376M178 86v292M292 86v292M406 86v292" stroke="#E8D9B7" strokeOpacity="0.08" />
        <circle cx="118" cy="326" r="6" fill="#D4AF37" opacity="0.85" />
        <circle cx="252" cy="210" r="6" fill="#D4AF37" opacity="0.85" />
        <circle cx="400" cy="235" r="6" fill="#D4AF37" opacity="0.85" />
        <circle cx="542" cy="133" r="6" fill="#D4AF37" opacity="0.85" />
      </svg>
      <div className="absolute left-10 top-10 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs uppercase text-champagne/75">
        Strategy
      </div>
      <div className="absolute bottom-12 right-10 rounded-full border border-gold/25 bg-ink/70 px-4 py-2 text-xs uppercase text-champagne/75">
        Growth
      </div>
      <motion.div
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-3 w-3 rounded-full bg-champagne shadow-[0_0_1.5rem_rgba(232,217,183,0.7)] [offset-path:path('M_118_326_C_180_296_188_220_252_210s_92_54_148_25_66-98_142-102')]"
      />
    </div>
  );
}

function AudienceDots() {
  return (
    <div className="absolute bottom-8 left-8 right-8 grid grid-cols-12 gap-2 opacity-70">
      {Array.from({ length: 36 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{ opacity: [0.25, 0.78, 0.25] }}
          transition={{ duration: 2.4 + (index % 6) * 0.25, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 rounded-full bg-champagne/55"
        />
      ))}
    </div>
  );
}
