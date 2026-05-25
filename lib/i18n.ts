import type { Project } from "contentlayer/generated";

export type Locale = "fr" | "en" | "de";

export const defaultLocale: Locale = "fr";
export const localeStorageKey = "form-atelier-locale";
export const localeChangeEvent = "form-atelier-locale-change";

export const languages: { code: Locale; short: string; label: string }[] = [
  { code: "fr", short: "FR", label: "Français" },
  { code: "en", short: "EN", label: "English" },
  { code: "de", short: "DE", label: "Deutsch" }
];

export function isLocale(value: string | null): value is Locale {
  return value === "fr" || value === "en" || value === "de";
}

export const navLabels: Record<Locale, Record<string, string>> = {
  fr: {
    Work: "Projets",
    Services: "Services",
    Process: "Méthode",
    About: "Atelier",
    Contact: "Contact"
  },
  en: {
    Work: "Work",
    Services: "Services",
    Process: "Process",
    About: "About",
    Contact: "Contact"
  },
  de: {
    Work: "Arbeiten",
    Services: "Leistungen",
    Process: "Prozess",
    About: "Atelier",
    Contact: "Kontakt"
  }
};

export const homeCopy = {
  fr: {
    hero: {
      eyebrow: "France - Suisse - International / Atelier digital pour sites sur mesure et présence stratégique",
      title: "Une forme digitale. Construite avec clarté.",
      intro:
        "Un atelier digital qui conçoit des sites sur mesure et développe l’image de votre entreprise avec précision, structure et intention.",
      primaryCta: "Lancer un projet",
      secondaryCta: "Voir les projets",
      scroll: "Défiler",
      ribbon: "Identité corporate et présence digitale"
    },
    selectedWorks: {
      eyebrow: "01 Projets sélectionnés",
      title: "Des identités digitales structurées, pensées comme des systèmes."
    },
    manifesto: {
      eyebrow: "02 Vision de marque",
      title: "Retenue premium, sophistication digitale contemporaine.",
      body:
        "Form Atelier équilibre minimalisme suisse, identité visuelle et structure fonctionnelle. Chaque projet devient un système digital cohérent : assez clair pour être compris, assez singulier pour être mémorisé, assez solide pour évoluer.",
      principles: ["Clarté", "Précision", "Design intentionnel", "Image structurée", "Identités digitales durables"]
    },
    services: {
      eyebrow: "03 Services",
      title: "Sites sur mesure, identité visuelle et présence stratégique.",
      groups: [
        {
          title: "Services essentiels",
          description: "Les fondations visibles d’une présence digitale distinctive.",
          items: ["Sites web sur mesure", "Refonte de site", "Identité de marque", "Direction artistique digitale"]
        },
        {
          title: "Services stratégiques",
          description: "La réflexion qui donne à la forme une direction claire.",
          items: ["Conseil digital", "Stratégie de présence"]
        },
        {
          title: "Services d’évolution",
          description: "Les systèmes qui gardent la présence utile après le lancement.",
          items: ["Intégration d’outils métier", "Maintenance & évolution"]
        }
      ]
    },
    process: {
      eyebrow: "04 Méthode",
      title: "Une grille pour passer de l’idée à une forme digitale précise.",
      steps: ["Découvrir", "Structurer", "Designer", "Construire", "Lancer", "Faire évoluer"]
    },
    about: {
      eyebrow: "05 Atelier",
      title: "Un atelier digital centré sur la forme, l’image et la perception.",
      body:
        "FORM ATELIER est dirigé par Pascal Maraval et construit autour d’une conviction : une présence digitale prend de la valeur lorsque stratégie, image et exécution sont traitées comme un même geste de création.",
      missionTitle: "Mission",
      mission: "Aider les entreprises indépendantes, studios et sociétés de service à exprimer leur valeur avec une précision calme.",
      visionTitle: "Vision",
      vision: "Un web où chaque entreprise possède une forme digitale évidente, utile et immédiatement reconnaissable."
    },
    technology: {
      eyebrow: "06 Technologie",
      title: "Une production moderne, jamais un raccourci.",
      tools: [
        { title: "Workflows assistés par IA", body: "Explorer, tester et affiner plus profondément tout en conservant le jugement humain." },
        { title: "Codex", body: "Un partenaire de production pour l’implémentation structurée, l’itération et la précision technique." },
        { title: "GitHub", body: "Collaboration versionnée, décisions traçables et base solide pour la croissance future." },
        { title: "Cloudflare", body: "Diffusion globale rapide, déploiements résilients et hébergement efficace pour sites modernes." }
      ]
    },
    trust: {
      eyebrow: "07 Confiance",
      title: "Cohérence, clarté et continuité sur chaque point de contact.",
      metrics: [
        { value: "6", label: "disciplines connectées" },
        { value: "90+", label: "objectif performance" },
        { value: "1", label: "système sur mesure par client" }
      ],
      testimonials: [
        {
          quote: "Le travail a donné à notre présence digitale le même niveau de précision que celui que nous exigeons dans notre propre pratique.",
          name: "Clara V.",
          role: "Fondatrice, agence d’architecture"
        },
        {
          quote: "FORM ATELIER a compris l’entreprise avant de dessiner l’interface. Cela a changé la qualité de chaque décision.",
          name: "Mathieu R.",
          role: "Directeur, groupe hôtelier indépendant"
        }
      ]
    },
    contact: {
      eyebrow: "08 Contact",
      title: "Prendre contact. Commencer par ce qui doit prendre forme.",
      body:
        "La meilleure première conversation est précise, mais encore ouverte. Partagez ce qui doit changer, ce qui doit être préservé et ce que le site doit rendre possible."
    }
  },
  en: {
    hero: {
      eyebrow: "France - Swiss - Worldwide / Digital atelier for bespoke websites and strategic presence",
      title: "Digital form. Built with clarity.",
      intro:
        "A digital atelier designing bespoke websites and developing the image of your business with precision, structure and intent.",
      primaryCta: "Start a project",
      secondaryCta: "Selected works",
      scroll: "Scroll",
      ribbon: "Corporate identity and digital presence"
    },
    selectedWorks: {
      eyebrow: "01 Selected Works",
      title: "Structured digital identities, built as systems."
    },
    manifesto: {
      eyebrow: "02 Brand Overview",
      title: "Premium restraint, modern digital sophistication.",
      body:
        "Form Atelier balances Swiss minimalism, visual identity and functional structure. Each project is shaped as a coherent digital system: clear enough to read, distinctive enough to remember, and strong enough to evolve.",
      principles: ["Clarity", "Precision", "Intentional design", "Structured image", "Enduring digital identities"]
    },
    services: {
      eyebrow: "03 Services",
      title: "Bespoke websites, visual identity and strategic presence.",
      groups: [
        {
          title: "Core Services",
          description: "The visible foundations of a distinctive digital presence.",
          items: ["Bespoke Websites", "Website Redesign", "Brand Identity", "Digital Art Direction"]
        },
        {
          title: "Strategic Services",
          description: "The thinking that gives form a clear business direction.",
          items: ["Digital Consulting", "Presence Strategy"]
        },
        {
          title: "Growth Services",
          description: "The systems that keep the presence useful after launch.",
          items: ["Business Tool Integration", "Maintenance & Evolution"]
        }
      ]
    },
    process: {
      eyebrow: "04 Process",
      title: "A grid for moving from idea to precise digital form.",
      steps: ["Discover", "Structure", "Design", "Build", "Launch", "Evolve"]
    },
    about: {
      eyebrow: "05 About",
      title: "A digital atelier focused on form, image and perception.",
      body:
        "FORM ATELIER is led by Pascal Maraval and built around one belief: digital presence becomes valuable when strategy, image and implementation are treated as one continuous act of craft.",
      missionTitle: "Mission",
      mission: "To help independent businesses, studios and service-led companies express their value with calm precision.",
      visionTitle: "Vision",
      vision: "A web where each business has a digital form that feels inevitable, useful and unmistakably its own."
    },
    technology: {
      eyebrow: "06 Technology",
      title: "Modern production, never as a shortcut.",
      tools: [
        { title: "AI-assisted workflows", body: "Used to explore, test and refine with greater depth while preserving human judgment." },
        { title: "Codex", body: "A production partner for structured implementation, iteration and technical precision." },
        { title: "GitHub", body: "Versioned collaboration, reviewable decisions and a foundation for future growth." },
        { title: "Cloudflare", body: "Fast global delivery, resilient deployment and efficient hosting for modern websites." }
      ]
    },
    trust: {
      eyebrow: "07 Trust",
      title: "Consistency, clarity and cohesion across every touchpoint.",
      metrics: [
        { value: "6", label: "Disciplines connected" },
        { value: "90+", label: "Performance target" },
        { value: "1", label: "Bespoke system per client" }
      ],
      testimonials: [
        {
          quote: "The work gave our digital presence the same level of precision we expect from our own practice.",
          name: "Clara V.",
          role: "Founder, architectural office"
        },
        {
          quote: "FORM ATELIER understood the business before designing the interface. That changed the quality of every decision.",
          name: "Mathieu R.",
          role: "Director, independent hospitality group"
        }
      ]
    },
    contact: {
      eyebrow: "08 Contact",
      title: "Get info. Start with what needs to take form.",
      body:
        "The best first conversation is precise but unfinished. Share what needs to change, what must be protected and what the website should make possible."
    }
  },
  de: {
    hero: {
      eyebrow: "Frankreich - Schweiz - Weltweit / Digitales Atelier für maßgeschneiderte Websites und strategische Präsenz",
      title: "Digitale Form. Mit Klarheit gebaut.",
      intro:
        "Ein digitales Atelier für maßgeschneiderte Websites und die Weiterentwicklung des Erscheinungsbildes Ihres Unternehmens mit Präzision, Struktur und Absicht.",
      primaryCta: "Projekt starten",
      secondaryCta: "Arbeiten ansehen",
      scroll: "Scrollen",
      ribbon: "Corporate Identity und digitale Präsenz"
    },
    selectedWorks: {
      eyebrow: "01 Ausgewählte Arbeiten",
      title: "Strukturierte digitale Identitäten, als Systeme gebaut."
    },
    manifesto: {
      eyebrow: "02 Markenüberblick",
      title: "Premium-Zurückhaltung, moderne digitale Raffinesse.",
      body:
        "Form Atelier verbindet Schweizer Minimalismus, visuelle Identität und funktionale Struktur. Jedes Projekt wird als kohärentes digitales System geformt: klar genug zum Verstehen, eigenständig genug zum Erinnern und robust genug zum Wachsen.",
      principles: ["Klarheit", "Präzision", "Bewusstes Design", "Strukturiertes Bild", "Dauerhafte digitale Identitäten"]
    },
    services: {
      eyebrow: "03 Leistungen",
      title: "Maßgeschneiderte Websites, visuelle Identität und strategische Präsenz.",
      groups: [
        {
          title: "Kernleistungen",
          description: "Die sichtbaren Grundlagen einer unverwechselbaren digitalen Präsenz.",
          items: ["Maßgeschneiderte Websites", "Website-Redesign", "Markenidentität", "Digitale Art Direction"]
        },
        {
          title: "Strategische Leistungen",
          description: "Das Denken, das der Form eine klare geschäftliche Richtung gibt.",
          items: ["Digitale Beratung", "Präsenzstrategie"]
        },
        {
          title: "Wachstumsleistungen",
          description: "Systeme, die die Präsenz nach dem Launch nützlich halten.",
          items: ["Integration von Business-Tools", "Wartung & Weiterentwicklung"]
        }
      ]
    },
    process: {
      eyebrow: "04 Prozess",
      title: "Ein Raster vom Gedanken zur präzisen digitalen Form.",
      steps: ["Entdecken", "Strukturieren", "Gestalten", "Bauen", "Starten", "Weiterentwickeln"]
    },
    about: {
      eyebrow: "05 Atelier",
      title: "Ein digitales Atelier für Form, Bild und Wahrnehmung.",
      body:
        "FORM ATELIER wird von Pascal Maraval geführt und folgt einer Überzeugung: Digitale Präsenz gewinnt an Wert, wenn Strategie, Bild und Umsetzung als ein zusammenhängender handwerklicher Prozess verstanden werden.",
      missionTitle: "Mission",
      mission: "Unabhängigen Unternehmen, Studios und Dienstleistern helfen, ihren Wert mit ruhiger Präzision auszudrücken.",
      visionTitle: "Vision",
      vision: "Ein Web, in dem jedes Unternehmen eine digitale Form besitzt, die selbstverständlich, nützlich und unverwechselbar wirkt."
    },
    technology: {
      eyebrow: "06 Technologie",
      title: "Moderne Produktion, niemals als Abkürzung.",
      tools: [
        { title: "KI-gestützte Workflows", body: "Um tiefer zu erkunden, zu testen und zu verfeinern, während menschliches Urteil im Zentrum bleibt." },
        { title: "Codex", body: "Ein Produktionspartner für strukturierte Umsetzung, Iteration und technische Präzision." },
        { title: "GitHub", body: "Versionierte Zusammenarbeit, nachvollziehbare Entscheidungen und eine Grundlage für zukünftiges Wachstum." },
        { title: "Cloudflare", body: "Schnelle globale Auslieferung, robuste Deployments und effizientes Hosting für moderne Websites." }
      ]
    },
    trust: {
      eyebrow: "07 Vertrauen",
      title: "Konsistenz, Klarheit und Zusammenhalt über jeden Kontaktpunkt hinweg.",
      metrics: [
        { value: "6", label: "verbundene Disziplinen" },
        { value: "90+", label: "Performance-Ziel" },
        { value: "1", label: "maßgeschneidertes System pro Kunde" }
      ],
      testimonials: [
        {
          quote: "Die Arbeit gab unserer digitalen Präsenz die gleiche Präzision, die wir von unserer eigenen Praxis erwarten.",
          name: "Clara V.",
          role: "Gründerin, Architekturbüro"
        },
        {
          quote: "FORM ATELIER verstand das Unternehmen, bevor die Oberfläche gestaltet wurde. Das veränderte die Qualität jeder Entscheidung.",
          name: "Mathieu R.",
          role: "Direktor, unabhängige Hotelgruppe"
        }
      ]
    },
    contact: {
      eyebrow: "08 Kontakt",
      title: "Kontakt aufnehmen. Beginnen mit dem, was Form annehmen soll.",
      body:
        "Das beste erste Gespräch ist präzise, aber noch offen. Teilen Sie, was sich verändern soll, was geschützt bleiben muss und was die Website möglich machen soll."
    }
  }
} as const;

export const formCopy = {
  fr: {
    name: "Nom",
    email: "Email",
    project: "Projet",
    brief: "Brief",
    submit: "Commencer une conversation",
    options: ["Site sur mesure", "Refonte de site", "Identité de marque", "Stratégie digitale", "Maintenance et évolution"]
  },
  en: {
    name: "Name",
    email: "Email",
    project: "Project",
    brief: "Brief",
    submit: "Begin a conversation",
    options: ["Bespoke website", "Website redesign", "Brand identity", "Digital strategy", "Maintenance and evolution"]
  },
  de: {
    name: "Name",
    email: "E-Mail",
    project: "Projekt",
    brief: "Briefing",
    submit: "Gespräch beginnen",
    options: ["Maßgeschneiderte Website", "Website-Redesign", "Markenidentität", "Digitale Strategie", "Wartung und Weiterentwicklung"]
  }
} as const;

export const commonCopy = {
  fr: { viewCase: "Voir le cas", services: "Services", technologies: "Technologies", results: "Résultats", nextProject: "Projet suivant", discuss: "Discuter d’un projet", before: "Avant", after: "Après" },
  en: { viewCase: "View case", services: "Services", technologies: "Technologies", results: "Results", nextProject: "Next Project", discuss: "Discuss a project", before: "Before", after: "After" },
  de: { viewCase: "Case ansehen", services: "Leistungen", technologies: "Technologien", results: "Ergebnisse", nextProject: "Nächstes Projekt", discuss: "Projekt besprechen", before: "Vorher", after: "Nachher" }
} as const;

export const footerCopy = {
  fr: {
    body: "Sites sur mesure, systèmes d’identité et présence digitale avec précision éditoriale.",
    location: "France - Suisse - International",
    copyright: "© 2026 FORM ATELIER. Conçu pour une présence durable."
  },
  en: {
    body: "Bespoke websites, identity systems and digital presence with editorial precision.",
    location: "France - Swiss - Worldwide",
    copyright: "© 2026 FORM ATELIER. Crafted for long-term presence."
  },
  de: {
    body: "Maßgeschneiderte Websites, Identitätssysteme und digitale Präsenz mit redaktioneller Präzision.",
    location: "Frankreich - Schweiz - Weltweit",
    copyright: "© 2026 FORM ATELIER. Gestaltet für langfristige Präsenz."
  }
} as const;

export const projectsPageCopy = {
  fr: {
    eyebrow: "Projets sélectionnés",
    title: "Des présences digitales façonnées avec intention."
  },
  en: {
    eyebrow: "Selected Works",
    title: "Digital presence shaped with intention."
  },
  de: {
    eyebrow: "Ausgewählte Arbeiten",
    title: "Digitale Präsenz, bewusst geformt."
  }
} as const;

const projectCopy = {
  "archival-house": {
    fr: {
      sector: "Architecture",
      excerpt: "Une présence digitale retenue pour une pratique architecturale dont le portfolio devait devenir plus précis, plus calme et plus utile commercialement.",
      services: ["Site web sur mesure", "Direction artistique digitale", "Stratégie de présence"],
      stats: [
        { value: "+42%", label: "demandes qualifiées" },
        { value: "1,1s", label: "premier rendu de contenu" },
        { value: "18", label: "études de cas structurées" }
      ],
      sections: [
        { title: "Vue d’ensemble", body: "Archival House avait besoin d’un site qui fonctionne à la fois comme portfolio discipliné et comme outil commercial. L’ancienne présence montrait de bons projets, mais n’expliquait pas assez la pratique, son point de vue ni le chemin vers une conversation." },
        { title: "Enjeu", body: "La pratique possédait un langage visuel fort hors ligne, mais l’expérience digitale semblait fragmentée. Les pages projet étaient très visuelles, difficiles à parcourir, et les services n’étaient pas reliés clairement à la valeur recherchée par les clients." },
        { title: "Objectifs", body: "Clarifier le positionnement, créer une structure de cas répétable, faciliter les demandes de contact sans rendre le site commercialement agressif, et construire un modèle éditorial maintenable en interne." },
        { title: "Approche", body: "Nous avons traité le site comme une archive dotée d’un système éditorial clair. Les grandes images portent l’atmosphère, tandis que les métadonnées et sections structurées portent la logique métier." },
        { title: "Résultats", body: "La nouvelle plateforme améliore la valeur perçue, réduit le besoin d’explication lors des premiers appels et donne à l’équipe un système durable pour les futurs projets." }
      ]
    },
    en: {
      sector: "Architecture",
      excerpt: "A restrained digital presence for an architectural practice that needed its portfolio to feel precise, quiet and commercially useful.",
      services: ["Bespoke Website", "Digital Art Direction", "Presence Strategy"],
      stats: [
        { value: "+42%", label: "qualified enquiries" },
        { value: "1.1s", label: "first contentful paint" },
        { value: "18", label: "case studies structured" }
      ],
      sections: [
        { title: "Overview", body: "Archival House needed a website that behaved like a disciplined portfolio and a commercial instrument. The previous presence showed good work, but it did not explain the practice, frame its point of view or guide prospective clients toward a conversation." },
        { title: "Challenge", body: "The practice had a strong visual language offline, but online it felt fragmented. Project pages were image-heavy and difficult to scan. Services were present, yet not clearly connected to the value clients were buying." },
        { title: "Objectives", body: "Clarify the studio’s positioning, create a repeatable case study structure, make enquiries easier without making the site feel sales-led, and build a content model the studio could maintain internally." },
        { title: "Approach", body: "We treated the site as an archive with a clear editorial system. Large images carry atmosphere. Tight metadata and structured sections carry the business logic." },
        { title: "Results", body: "The new platform improved perceived value, reduced explanation during first calls and gave the team a durable system for future projects." }
      ]
    },
    de: {
      sector: "Architektur",
      excerpt: "Eine zurückhaltende digitale Präsenz für ein Architekturbüro, dessen Portfolio präzise, ruhig und geschäftlich nützlich wirken musste.",
      services: ["Maßgeschneiderte Website", "Digitale Art Direction", "Präsenzstrategie"],
      stats: [
        { value: "+42%", label: "qualifizierte Anfragen" },
        { value: "1,1s", label: "First Contentful Paint" },
        { value: "18", label: "strukturierte Fallstudien" }
      ],
      sections: [
        { title: "Überblick", body: "Archival House benötigte eine Website, die wie ein diszipliniertes Portfolio und zugleich wie ein geschäftliches Instrument funktioniert. Die vorherige Präsenz zeigte gute Arbeit, erklärte aber die Praxis und ihren Standpunkt nicht ausreichend." },
        { title: "Herausforderung", body: "Offline war die visuelle Sprache stark, online wirkte sie fragmentiert. Projektseiten waren bildlastig und schwer zu scannen, Leistungen waren vorhanden, aber nicht klar mit dem Kundennutzen verbunden." },
        { title: "Ziele", body: "Die Positionierung klären, eine wiederholbare Struktur für Fallstudien schaffen, Anfragen erleichtern und ein intern pflegbares Inhaltsmodell aufbauen." },
        { title: "Ansatz", body: "Wir behandelten die Website als Archiv mit klarem redaktionellem System. Große Bilder tragen Atmosphäre, präzise Metadaten und strukturierte Abschnitte tragen die geschäftliche Logik." },
        { title: "Ergebnisse", body: "Die neue Plattform steigert den wahrgenommenen Wert, reduziert Erklärungsaufwand in Erstgesprächen und schafft ein dauerhaftes System für kommende Projekte." }
      ]
    }
  },
  "hotel-elyme": {
    fr: {
      sector: "Hospitalité",
      excerpt: "Une présence hôtelière élégante, construite autour de l’atmosphère, de la conversion et d’un parcours de réservation calme.",
      services: ["Refonte de site", "Identité de marque", "Direction artistique digitale"],
      stats: [
        { value: "+31%", label: "intention de réservation" },
        { value: "-28%", label: "taux de rebond" },
        { value: "3", label: "moments de marque définis" }
      ],
      sections: [
        { title: "Vue d’ensemble", body: "Hotel Elyme avait besoin d’un site capable de porter l’atmosphère d’un séjour boutique tout en simplifiant les décisions pratiques." },
        { title: "Enjeu", body: "L’ancien site séparait image, information et conversion. Les visiteurs sentaient le lieu, mais devaient trop travailler pour comprendre les chambres, la localisation et la disponibilité." },
        { title: "Objectifs", body: "Construire une première impression plus cinématographique, clarifier la hiérarchie des chambres et garder la réservation visible sans agressivité." },
        { title: "Approche", body: "Le système de design utilise un rythme éditorial, un mouvement retenu et une navigation concise. Chaque transition guide l’attention sans ralentir l’expérience." },
        { title: "Résultats", body: "La présence repensée aide l’hôtel à communiquer sa différence plus tôt dans le parcours et à raccourcir le chemin commercial." }
      ]
    },
    en: {
      sector: "Hospitality",
      excerpt: "An elegant hospitality presence shaped around mood, conversion and a booking path that feels calm rather than transactional.",
      services: ["Website Redesign", "Brand Identity", "Digital Art Direction"],
      stats: [
        { value: "+31%", label: "booking intent" },
        { value: "-28%", label: "bounce rate" },
        { value: "3", label: "brand moments defined" }
      ],
      sections: [
        { title: "Overview", body: "Hotel Elyme needed a website that could carry the atmosphere of a boutique stay while making practical decisions simple." },
        { title: "Challenge", body: "The old site separated image, information and conversion. Visitors could sense the place, but the experience asked them to work too hard to understand rooms, location and availability." },
        { title: "Objectives", body: "Build a more cinematic first impression, clarify the room and experience hierarchy, keep booking visible without aggression and create modular seasonal content blocks." },
        { title: "Approach", body: "The design system uses editorial pacing, restrained motion and concise wayfinding. Every transition is small enough to feel premium and fast." },
        { title: "Results", body: "The redesigned presence helped the hotel communicate its difference earlier in the journey while making the commercial path shorter and more confident." }
      ]
    },
    de: {
      sector: "Hospitality",
      excerpt: "Eine elegante Hotelpräsenz rund um Stimmung, Conversion und einen Buchungsweg, der ruhig statt transaktional wirkt.",
      services: ["Website-Redesign", "Markenidentität", "Digitale Art Direction"],
      stats: [
        { value: "+31%", label: "Buchungsabsicht" },
        { value: "-28%", label: "Absprungrate" },
        { value: "3", label: "definierte Markenmomente" }
      ],
      sections: [
        { title: "Überblick", body: "Hotel Elyme brauchte eine Website, die die Atmosphäre eines Boutique-Aufenthalts trägt und praktische Entscheidungen einfach macht." },
        { title: "Herausforderung", body: "Die alte Website trennte Bild, Information und Conversion. Besucher spürten den Ort, mussten aber zu viel arbeiten, um Zimmer, Lage und Verfügbarkeit zu verstehen." },
        { title: "Ziele", body: "Eine cineastischere erste Wirkung schaffen, Zimmer und Erlebnisse klarer ordnen, Buchung sichtbar halten und saisonale Inhalte modular vorbereiten." },
        { title: "Ansatz", body: "Das Designsystem nutzt redaktionelles Tempo, zurückhaltende Bewegung und klare Orientierung. Jede Transition wirkt hochwertig, ohne die Erfahrung zu verlangsamen." },
        { title: "Ergebnisse", body: "Die überarbeitete Präsenz kommuniziert den Unterschied des Hotels früher und macht den kommerziellen Weg kürzer und sicherer." }
      ]
    }
  },
  "verne-advisory": {
    fr: {
      sector: "Conseil",
      excerpt: "Un site structuré et une couche légère d’opérations digitales pour un cabinet de conseil passant du réseau à une présence publique claire.",
      services: ["Site web sur mesure", "Intégration d’outils métier", "Conseil digital"],
      stats: [
        { value: "4", label: "workflows connectés" },
        { value: "2x", label: "mises à jour plus rapides" },
        { value: "0", label: "pages template" }
      ],
      sections: [
        { title: "Vue d’ensemble", body: "Verne Advisory s’était développé par les relations et la réputation. La nouvelle présence devait traduire cette confiance en un système public clair." },
        { title: "Enjeu", body: "Le cabinet n’avait pas besoin d’une marque bruyante, mais d’une structure qui rende l’expertise plus facile à évaluer." },
        { title: "Objectifs", body: "Définir un positionnement calme et crédible, créer des pages de services évolutives, connecter les demandes aux workflows internes et préparer les futurs contenus." },
        { title: "Approche", body: "Nous avons cartographié l’activité autour des moments de décision : ce qu’un prospect doit comprendre, quelles preuves comptent et quelle action doit suivre." },
        { title: "Résultats", body: "Verne Advisory dispose désormais d’une présence publique établie, légère et prête à évoluer vers des ressources, services approfondis et portail client." }
      ]
    },
    en: {
      sector: "Consulting",
      excerpt: "A structured website and lightweight digital operations layer for a consulting practice moving from referrals to a clearer public presence.",
      services: ["Bespoke Website", "Business Tool Integration", "Digital Consulting"],
      stats: [
        { value: "4", label: "workflows connected" },
        { value: "2x", label: "faster content updates" },
        { value: "0", label: "template pages" }
      ],
      sections: [
        { title: "Overview", body: "Verne Advisory had grown through relationships and reputation. The new presence needed to translate that trust into a public system." },
        { title: "Challenge", body: "The practice did not need a loud brand. It needed a structure that made expertise easier to evaluate." },
        { title: "Objectives", body: "Define a calm, credible positioning system, create scalable service pages, connect enquiries to internal workflows and prepare future resources." },
        { title: "Approach", body: "We mapped the business around decision moments: what a prospect needs to know, what proof matters and what action should follow." },
        { title: "Results", body: "Verne Advisory gained a public presence that feels established without becoming heavy and can now grow into deeper resources." }
      ]
    },
    de: {
      sector: "Beratung",
      excerpt: "Eine strukturierte Website und leichte digitale Operations-Ebene für eine Beratung, die von Empfehlungen zu klarer öffentlicher Präsenz wächst.",
      services: ["Maßgeschneiderte Website", "Integration von Business-Tools", "Digitale Beratung"],
      stats: [
        { value: "4", label: "verbundene Workflows" },
        { value: "2x", label: "schnellere Inhaltsupdates" },
        { value: "0", label: "Template-Seiten" }
      ],
      sections: [
        { title: "Überblick", body: "Verne Advisory war durch Beziehungen und Reputation gewachsen. Die neue Präsenz sollte dieses Vertrauen in ein klares öffentliches System übersetzen." },
        { title: "Herausforderung", body: "Die Beratung brauchte keine laute Marke, sondern eine Struktur, die Expertise leichter bewertbar macht." },
        { title: "Ziele", body: "Eine ruhige, glaubwürdige Positionierung definieren, skalierbare Leistungsseiten schaffen, Anfragen mit internen Workflows verbinden und künftige Inhalte vorbereiten." },
        { title: "Ansatz", body: "Wir kartierten das Unternehmen entlang von Entscheidungsmomenten: was Interessenten wissen müssen, welche Beweise zählen und welche Handlung folgen soll." },
        { title: "Ergebnisse", body: "Verne Advisory erhielt eine öffentliche Präsenz, die etabliert wirkt, ohne schwer zu werden, und nun in tiefere Ressourcen wachsen kann." }
      ]
    }
  }
} as const;

export function projectText(project: Project, locale: Locale) {
  const copy = projectCopy[project.slug as keyof typeof projectCopy]?.[locale];

  return {
    title: project.title,
    client: project.client,
    year: project.year,
    sector: copy?.sector ?? project.sector,
    excerpt: copy?.excerpt ?? project.excerpt,
    services: copy?.services ?? project.services,
    technologies: project.technologies,
    stats: copy?.stats ?? project.stats,
    sections: copy?.sections ?? []
  };
}
