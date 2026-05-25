import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project/project-detail";
import { getNextProject, getProject, getProjects } from "@/lib/content";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: [{ url: project.cover }]
    }
  };
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  return (
    <main className="px-5 pb-24 pt-32 md:px-8 md:pt-44">
      <div className="grain" />
      <ProjectDetail project={project} nextProject={nextProject} />
    </main>
  );
}
