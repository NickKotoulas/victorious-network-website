// Navigation — single landing page, anchor links
export type PillarContent = {
  readonly id: string;
  readonly visualType: "experiences" | "media" | "innovation" | "commercial";
  readonly kicker: string;
  readonly title: string;
  readonly intro: string;
  readonly items: readonly { readonly title: string; readonly description: string }[];
  readonly cta: { readonly prompt: string; readonly label: string; readonly href: string };
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Media", href: "#media" },
  { label: "Innovation", href: "#innovation" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

// HERO
export const hero = {
  headline: "The AI-driven agency for technology, innovation and impact.",
  subline:
    "We combine AI, robotics, media and strategic communication to give technology brands visibility, authority and market presence.",
  motto: "AI Innovation · Culture · Impact",
  primaryCta: { label: "Contact Us", href: "#contact" },
  secondaryCta: { label: "See What We Do", href: "#experiences" },
} as const;

// ABOUT — company + CEO
export const about = {
  kicker: "Who We Are",
  title:
    "We connect technology with society, business and global innovation ecosystems.",
  text:
    "We are an AI-driven agency connecting technology with society, business and global innovation ecosystems. We turn complex technologies into clear strategic communication, visibility and experiences — combining AI, robotics, media and public relations under one roof.",
  ceo: {
    name: "Andriana Manetta",
    title: "Founder & CEO",
    bio:
      "Communication & marketing strategist with extensive experience in strategic communications, marketing innovation and technology branding. As founder and CEO of Victorious Network — and Head of Marketing for Sophia the Robot — she works at the intersection of communication, artificial intelligence and next-generation technology. A TEDx and international conference speaker.",
    // Replace with an official headshot you own the rights to.
    photo: "/assets/ceo-andriana-manetta.jpg",
  },
} as const;

// PILLAR 1 — AI Experiences & Events
export const pillarExperiences = {
  id: "experiences",
  visualType: "experiences",
  kicker: "Pillar 01",
  title: "AI Experiences & Events",
  intro:
    "We design experiences and events that place your brand at the center of technology. From humanoid robots and holograms to expos and AI masterclasses, we create moments that attract audiences, sponsors and media attention.",
  items: [
    {
      title: "Sophia the Robot",
      description:
        "Through an exclusive collaboration with one of the world's most recognizable humanoid robots, we bring Sophia to events, campaigns and interviews. A unique presence that instantly draws attention, media coverage and audiences.",
    },
    {
      title: "Hologram & AI Installations",
      description:
        "Holographic displays and AI installations that turn any space into an experience. With technologies such as Hypervsn and immersive installations, we give your brand a presence that impresses at exhibitions, presentations and public spaces.",
    },
    {
      title: "Expos & Hackathons",
      description:
        "We design and support your presence at major expos and hackathons, including events like TIF (Thessaloniki International Fair), Food Agro and robotics competitions. We connect your brand with audiences, partners and the innovation ecosystem.",
    },
  ],
  cta: { prompt: "Want an experience that makes your brand stand out?", label: "Book an event", href: "#contact" },
} as const;

// PILLAR 2 — AI Media
export const pillarMedia = {
  id: "media",
  visualType: "media",
  kicker: "Pillar 02",
  title: "AI Media",
  intro:
    "We produce content that creates continuous visibility for your brand. With a full production studio and AI-assisted workflows, we turn technology and innovation into stories that audiences watch, share and remember.",
  items: [
    {
      title: "AI Filming Studio",
      description:
        "A complete studio for videocasts, podcasts and shootings. From concept to final production, we create professional audiovisual content that gives your brand a consistent, high-quality presence.",
    },
    {
      title: "Interviews",
      description:
        "Interviews with leaders in technology, innovation and business. We give a platform to ideas and the people behind them, building authority and recognition around your brand and its people.",
    },
    {
      title: "Multilingual AI Video & Voice",
      description:
        "AI voiceovers, multilingual video, localization and accessible content. We give your brand the ability to speak to multiple languages and audiences with consistency, speed and quality.",
    },
    {
      title: "Interactive AI Experiences",
      description:
        "QR experiences, persona AI, immersive installations and AI activations across physical or digital spaces. We create interactive experiences that engage audiences and make your brand memorable.",
    },
  ],
  cta: { prompt: "Ready to create content that gets noticed?", label: "Let's produce together", href: "#contact" },
} as const;

// PILLAR 3 — Innovation & Robotics
export const pillarInnovation = {
  id: "innovation",
  visualType: "innovation",
  kicker: "Pillar 03",
  title: "Innovation & Robotics",
  intro:
    "We connect companies and organizations with the cutting edge of robotics and innovation. From robotics solutions to collaborations with startups, universities and research centers, we build connections that generate strategic value.",
  items: [
    {
      title: "Robotics Solutions",
      description:
        "Access to leading robotics solutions for rental, purchase, demonstrations and activations. Through collaborations with top manufacturers, we bring the right robots to the needs of each project and event.",
    },
    {
      title: "Startups",
      description:
        "We support technology and innovation startups in connecting with the market, the right partners and the wider ecosystem. We help innovative ideas find their path to growth.",
    },
    {
      title: "Research Collaborations & Universities",
      description:
        "Collaborations with universities, research centers and academic institutions. We connect research with the market, opening pathways for joint projects, knowledge transfer and access to funding and grants.",
    },
  ],
  cta: { prompt: "Looking for robotics or innovation partnerships?", label: "Tell us about your project", href: "#contact" },
} as const;

// PILLAR 4 — Commercial Services
export const pillarServices = {
  id: "services",
  visualType: "commercial",
  kicker: "Pillar 04",
  title: "Commercial Services",
  intro:
    "All our capabilities are available as complete commercial services. From market entry strategy to robotics and experiential visibility, we deliver your project end to end.",
  items: [
    {
      title: "Market Entry & International Growth",
      description:
        "We support technology companies entering and expanding across Greece, Cyprus and Europe through market strategy, positioning and access to the right networks.",
    },
    {
      title: "PR, Branding & Technology Storytelling",
      description:
        "We build strong public presence for technology brands through PR strategy, media outreach, brand narrative and storytelling that turns innovation into clear market value.",
    },
    {
      title: "Ecosystem Integration & Funding Access",
      description:
        "We connect companies and startups with the innovation ecosystem: institutions, universities, research centers, incubators, strategic partners and investors. We also support access to funding and growth programs, opening the path to the next step.",
    },
    {
      title: "360° Digital Solutions",
      description:
        "We deliver integrated digital solutions including content creation, AI copywriting, video production, social media, websites, localization and digital campaigns.",
    },
    {
      title: "Campaigns",
      description:
        "We design and run integrated campaigns that connect technology and innovation with audiences and the market. Strategy, content and end-to-end execution.",
    },
  ],
  cta: { prompt: "Need a tailored strategy for your brand?", label: "Request a proposal", href: "#contact" },
} as const;

// Ordered list of pillars for easy mapping in sections
export const pillars = [
  pillarExperiences,
  pillarMedia,
  pillarInnovation,
  pillarServices,
] as const;

// CLOSING CTA / CONTACT
export const closing = {
  kicker: "Contact Victorious Network",
  headline: "Let's build your next step together.",
  text:
    "Whether you're planning an event, an innovation project or a communication strategy, Victorious Network is here to make it visible and understood.",
  cta: { label: "Contact Us", href: "mailto:info@victoriousnetwork.com" },
} as const;
