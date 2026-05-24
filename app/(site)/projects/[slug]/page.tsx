import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Mdx } from "@/components/mdx/mdx-components";
import { Button } from "@/components/ui/button";
import { getNextProject, getProject, getProjects } from "@/lib/content";

type ProjectStat = {
  value: string;
  label: string;
};

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
      <article className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-caps text-graphite">
              {project.client} · {project.year} · {project.sector}
            </p>
            <h1 className="mt-8 font-display text-7xl font-extrabold leading-[0.86] md:text-[9rem]">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-3 md:col-start-10 md:pt-16">
            <p className="text-lg leading-8 text-graphite">{project.excerpt}</p>
          </div>
        </div>

        <div className="relative mt-16 aspect-[16/10] overflow-hidden bg-mist">
          <Image
            src={project.cover}
            alt={`${project.title} hero image`}
            fill
            priority
            className="object-cover grayscale"
            sizes="100vw"
          />
        </div>

        <dl className="mt-10 grid gap-6 border-y border-ink py-8 md:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-caps text-graphite">Services</dt>
            <dd className="mt-4 text-sm leading-6">{project.services.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-caps text-graphite">Technologies</dt>
            <dd className="mt-4 text-sm leading-6">{project.technologies.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-caps text-graphite">Results</dt>
            <dd className="mt-4 flex flex-wrap gap-4 text-sm">
              {(project.stats as ProjectStat[]).map((stat) => (
                <span key={stat.label}>{stat.value} {stat.label}</span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="prose-project mx-auto mt-20 max-w-5xl">
          <Mdx code={project.body.code} />
        </div>

        <section className="mt-28 border-t border-line pt-10">
          <p className="text-xs font-semibold uppercase tracking-caps text-graphite">Next Project</p>
          <a href={nextProject.url} className="group mt-6 flex items-end justify-between gap-6">
            <span className="font-display text-5xl font-extrabold leading-none md:text-8xl">{nextProject.title}</span>
            <ArrowRight className="h-8 w-8 shrink-0 transition group-hover:translate-x-2" />
          </a>
          <div className="mt-12">
            <Button href="/#contact">Discuss a project</Button>
          </div>
        </section>
      </article>
    </main>
  );
}
