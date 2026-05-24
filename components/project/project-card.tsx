"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "contentlayer/generated";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-line py-8"
    >
      <Link href={project.url as any} className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-5 lg:aspect-[16/10]">
          <Image
            src={project.cover}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-caps text-graphite">
            {project.year} · {project.sector}
          </p>
          <h3 className="mt-4 font-display text-5xl font-medium leading-none md:text-7xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-graphite">{project.excerpt}</p>
        </div>
        <div className="flex items-end justify-between gap-6 text-sm text-graphite md:col-span-2 md:block md:text-right">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="mt-20 block text-ink">View case</span>
        </div>
      </Link>
    </motion.article>
  );
}
