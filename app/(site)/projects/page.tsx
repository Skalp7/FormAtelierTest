import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/project/projects-index";
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
      <ProjectsIndex projects={projects} />
    </main>
  );
}
