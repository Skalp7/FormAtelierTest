import { allProjects } from "contentlayer/generated";

export function getProjects() {
  return allProjects.sort((a, b) => a.order - b.order);
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const projects = getProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export const serviceGroups = [
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
];

export const processSteps = [
  "Discover",
  "Structure",
  "Design",
  "Build",
  "Launch",
  "Evolve"
];

export const testimonials = [
  {
    quote:
      "The work gave our digital presence the same level of precision we expect from our own practice.",
    name: "Clara V.",
    role: "Founder, architectural office"
  },
  {
    quote:
      "FORM ATELIER understood the business before designing the interface. That changed the quality of every decision.",
    name: "Mathieu R.",
    role: "Director, independent hospitality group"
  }
];

export const metrics = [
  { value: "6", label: "Disciplines connected" },
  { value: "90+", label: "Performance target" },
  { value: "1", label: "Bespoke system per client" }
];
