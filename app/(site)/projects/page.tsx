import type { Metadata } from "next";
import { ProjectCard } from "@/components/project/project-card";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Works",
  description: "Selected FORM ATELIER case studies across bespoke websites, image systems and digital presence."
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="px-5 pb-24 pt-32 md:px-8 md:pt-44">
      <div className="grain" />
      <div className="mx-auto max-w-[1500px]">
        <p className="text-xs uppercase tracking-caps text-graphite">Selected Works</p>
        <h1 className="mt-8 max-w-5xl font-display text-7xl font-medium leading-[0.9] md:text-9xl">
          Digital presence shaped with intention.
        </h1>
        <div className="mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
