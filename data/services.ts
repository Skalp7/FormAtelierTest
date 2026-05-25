import type { Locale } from "@/lib/i18n";

export type ServiceSequenceItem = {
  id: string;
  number: string;
  frameStart: number;
  frameEnd: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const servicesSequence: ServiceSequenceItem[] = [
  {
    id: "bespoke-websites",
    number: "01",
    frameStart: 1,
    frameEnd: 17,
    title: {
      fr: "Sites web sur mesure",
      en: "Bespoke Websites",
      de: "Maßgeschneiderte Websites"
    },
    description: {
      fr: "Des sites conçus pour exprimer l’identité, la crédibilité et la performance.",
      en: "Custom websites designed to express identity, credibility and performance.",
      de: "Individuelle Websites, die Identität, Glaubwürdigkeit und Leistung ausdrücken."
    }
  },
  {
    id: "website-redesign",
    number: "02",
    frameStart: 18,
    frameEnd: 34,
    title: {
      fr: "Refonte de site",
      en: "Website Redesign",
      de: "Website-Redesign"
    },
    description: {
      fr: "Transformer l’existant en expériences digitales plus claires, plus fortes et plus efficaces.",
      en: "Refining existing websites into clearer, stronger and more efficient digital experiences.",
      de: "Bestehende Websites in klarere, stärkere und effizientere digitale Erlebnisse verwandeln."
    }
  },
  {
    id: "brand-identity",
    number: "03",
    frameStart: 35,
    frameEnd: 51,
    title: {
      fr: "Identité de marque",
      en: "Brand Identity",
      de: "Markenidentität"
    },
    description: {
      fr: "Des systèmes visuels qui apportent cohérence, reconnaissance et structure à la marque.",
      en: "Visual systems that give consistency, recognition and structure to a brand.",
      de: "Visuelle Systeme, die einer Marke Konsistenz, Wiedererkennung und Struktur geben."
    }
  },
  {
    id: "digital-art-direction",
    number: "04",
    frameStart: 52,
    frameEnd: 68,
    title: {
      fr: "Direction artistique digitale",
      en: "Digital Art Direction",
      de: "Digitale Art Direction"
    },
    description: {
      fr: "Une direction créative pour des expériences digitales cohérentes, premium et mémorables.",
      en: "Creative direction for coherent, premium and memorable digital experiences.",
      de: "Kreative Führung für kohärente, hochwertige und einprägsame digitale Erlebnisse."
    }
  },
  {
    id: "digital-consulting",
    number: "05",
    frameStart: 69,
    frameEnd: 85,
    title: {
      fr: "Conseil digital",
      en: "Digital Consulting",
      de: "Digitale Beratung"
    },
    description: {
      fr: "Un accompagnement stratégique pour clarifier les priorités, les outils et les opportunités de croissance.",
      en: "Strategic guidance to clarify digital priorities, tools and growth opportunities.",
      de: "Strategische Begleitung zur Klärung digitaler Prioritäten, Tools und Wachstumschancen."
    }
  },
  {
    id: "business-tool-integration",
    number: "06",
    frameStart: 86,
    frameEnd: 102,
    title: {
      fr: "Intégration d’outils métier",
      en: "Business Tool Integration",
      de: "Integration von Business-Tools"
    },
    description: {
      fr: "Des outils utiles connectés aux sites, réservations, calendriers et workflows clients.",
      en: "Useful digital tools connected to websites, bookings, calendars and client workflows.",
      de: "Nützliche digitale Tools verbunden mit Websites, Buchungen, Kalendern und Kunden-Workflows."
    }
  },
  {
    id: "maintenance-evolution",
    number: "07",
    frameStart: 103,
    frameEnd: 120,
    title: {
      fr: "Maintenance & évolution",
      en: "Maintenance & Evolution",
      de: "Wartung & Weiterentwicklung"
    },
    description: {
      fr: "Des affinages continus, mises à jour et supports pour garder la présence fiable et évolutive.",
      en: "Continuous refinement, updates and support to keep digital presence reliable and evolving.",
      de: "Kontinuierliche Verfeinerung, Updates und Support, damit die digitale Präsenz zuverlässig bleibt."
    }
  }
];

export const serviceSequenceConfig = {
  basePath: "/sequences/services",
  extension: "png",
  frameCount: 120,
  height: 900,
  width: 1280
};
