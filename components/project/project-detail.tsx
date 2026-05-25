"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/sections/language-switcher";
import { commonCopy, projectText } from "@/lib/i18n";

type ProjectStat = {
  value: string;
  label: string;
};

export function ProjectDetail({ project, nextProject }: { project: Project; nextProject: Project }) {
  const { locale } = useLocale();
  const copy = commonCopy[locale];
  const current = projectText(project, locale);
  const next = projectText(nextProject, locale);

  return (
    <article className="mx-auto max-w-[1500px]">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-caps text-graphite">
            {current.client} · {current.year} · {current.sector}
          </p>
          <h1 className="mt-8 font-display text-7xl font-extrabold leading-[0.86] md:text-[9rem]">
            {current.title}
          </h1>
        </div>
        <div className="md:col-span-3 md:col-start-10 md:pt-16">
          <p className="text-lg leading-8 text-graphite">{current.excerpt}</p>
        </div>
      </div>

      <div className="relative mt-16 aspect-[16/10] overflow-hidden bg-mist">
        <Image
          src={project.cover}
          alt={`${current.title} hero image`}
          fill
          priority
          className="object-cover grayscale"
          sizes="100vw"
        />
      </div>

      <dl className="mt-10 grid gap-6 border-y border-ink py-8 md:grid-cols-3">
        <div>
          <dt className="text-xs uppercase tracking-caps text-graphite">{copy.services}</dt>
          <dd className="mt-4 text-sm leading-6">{current.services.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-caps text-graphite">{copy.technologies}</dt>
          <dd className="mt-4 text-sm leading-6">{current.technologies.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-caps text-graphite">{copy.results}</dt>
          <dd className="mt-4 flex flex-wrap gap-4 text-sm">
            {(current.stats as readonly ProjectStat[]).map((stat) => (
              <span key={stat.label}>{stat.value} {stat.label}</span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mx-auto mt-20 max-w-5xl">
        {current.sections.map((section) => (
          <section key={section.title} className="border-t border-line py-10">
            <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">{section.title}</h2>
            <p className="mt-6 text-lg leading-8 text-graphite">{section.body}</p>
          </section>
        ))}
        <div className="my-14 overflow-hidden bg-mist">
          <Image src={project.cover} alt={`${current.title} case presentation`} width={1600} height={1000} className="w-full object-cover grayscale" />
        </div>
      </div>

      <section className="mt-28 border-t border-line pt-10">
        <p className="text-xs font-semibold uppercase tracking-caps text-graphite">{copy.nextProject}</p>
        <a href={nextProject.url} className="group mt-6 flex items-end justify-between gap-6">
          <span className="font-display text-5xl font-extrabold leading-none md:text-8xl">{next.title}</span>
          <ArrowRight className="h-8 w-8 shrink-0 transition group-hover:translate-x-2" />
        </a>
        <div className="mt-12">
          <Button href="/#contact">{copy.discuss}</Button>
        </div>
      </section>
    </article>
  );
}
