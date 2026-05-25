"use client";

import type { Project } from "contentlayer/generated";
import { ProjectCard } from "@/components/project/project-card";
import { useLocale } from "@/components/sections/language-switcher";
import { projectsPageCopy } from "@/lib/i18n";

export function ProjectsIndex({ projects }: { projects: Project[] }) {
  const { locale } = useLocale();
  const copy = projectsPageCopy[locale];

  return (
    <div className="mx-auto max-w-[1500px]">
      <p className="text-xs font-semibold uppercase tracking-caps text-graphite">{copy.eyebrow}</p>
      <h1 className="mt-8 max-w-5xl font-display text-7xl font-extrabold leading-[0.9] md:text-9xl">
        {copy.title}
      </h1>
      <div className="mt-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
