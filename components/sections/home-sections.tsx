"use client";

import { ArrowDown, Cpu, Github, Cloud, Sparkles } from "lucide-react";
import { Project } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";
import { ProjectCard } from "@/components/project/project-card";
import { useLocale } from "@/components/sections/language-switcher";
import { homeCopy } from "@/lib/i18n";

export function Hero() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].hero;

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-paper px-5 pb-12 pt-28 md:px-8 md:pt-36">
      <div className="pointer-events-none absolute bottom-[-8vw] right-[-4vw] z-0 font-display text-[28vw] font-extrabold leading-none text-graphite/[0.08]">
        2026
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <div className="md:col-span-10">
          <Reveal>
            <p className="mb-8 max-w-md text-sm font-medium uppercase leading-6 tracking-caps text-graphite">
              {copy.eyebrow}
            </p>
            <h1 className="font-display text-[18vw] font-extrabold leading-[0.86] tracking-normal text-ink md:text-[10.5vw] lg:text-[9.6rem]">
              {copy.title}
            </h1>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Reveal delay={0.15}>
            <p className="border-l border-ink pl-5 text-lg leading-8 text-graphite">
              {copy.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact">{copy.primaryCta}</Button>
              <Button href="/projects" variant="secondary">{copy.secondaryCta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-16 flex max-w-[1500px] items-center gap-3 text-xs font-semibold uppercase tracking-caps text-graphite">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        {copy.scroll}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-line bg-mist py-5 text-center text-sm font-semibold uppercase tracking-widebrand text-graphite">
        {copy.ribbon}
      </div>
    </section>
  );
}

export function SelectedWorks({ projects }: { projects: Project[] }) {
  const { locale } = useLocale();
  const copy = homeCopy[locale].selectedWorks;

  return (
    <Section id="work" eyebrow={copy.eyebrow} title={copy.title}>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

export function Manifesto() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].manifesto;

  return (
    <Section eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xl leading-9 text-graphite">
            {copy.body}
          </p>
        </Reveal>
        <div className="grid gap-6 md:col-span-6 md:col-start-7">
          {copy.principles.map((item) => (
            <Reveal key={item} className="border-t border-line py-5">
              <p className="font-display text-4xl font-light leading-none">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].services;

  return (
    <Section id="services" eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-6 md:grid-cols-3">
        {copy.groups.map((group) => (
          <Reveal key={group.title} className="border-t border-line pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-caps">{group.title}</h3>
            <p className="mt-5 min-h-20 text-sm leading-6 text-graphite">{group.description}</p>
            <ul className="mt-8 grid gap-4">
              {group.items.map((item) => (
                <li key={item} className="font-display text-3xl font-light leading-none">{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].process;

  return (
    <Section id="process" eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-0 border-y border-line md:grid-cols-6">
        {copy.steps.map((step, index) => (
          <Reveal key={step} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-5 last:md:border-r-0">
            <p className="text-xs uppercase tracking-caps text-graphite">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-8 font-display text-4xl font-light leading-none">{step}</h3>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].about;

  return (
    <Section id="about" eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xl leading-9 text-graphite">
            {copy.body}
          </p>
        </Reveal>
        <div className="grid gap-8 md:col-span-6 md:col-start-7">
          <Reveal className="border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-caps">{copy.missionTitle}</h3>
            <p className="mt-4 text-lg leading-8 text-graphite">{copy.mission}</p>
          </Reveal>
          <Reveal className="border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-caps">{copy.visionTitle}</h3>
            <p className="mt-4 text-lg leading-8 text-graphite">{copy.vision}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Technology() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].technology;
  const icons = [Sparkles, Cpu, Github, Cloud];
  const tools = copy.tools.map((tool, index) => ({ ...tool, icon: icons[index] }));

  return (
    <Section eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-6 md:grid-cols-4">
        {tools.map((tool) => (
          <Reveal key={tool.title} className="border-t border-line pt-6">
            <tool.icon className="h-5 w-5 text-graphite" />
            <h3 className="mt-8 font-display text-3xl font-light leading-none">{tool.title}</h3>
            <p className="mt-5 text-sm leading-6 text-graphite">{tool.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Trust() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].trust;

  return (
    <Section eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-8 md:grid-cols-12">
        <div className="grid gap-4 md:col-span-5">
          {copy.metrics.map((metric) => (
            <Reveal key={metric.label} className="flex items-end justify-between border-t border-line py-5">
              <p className="font-display text-6xl font-extrabold leading-none text-graphite">{metric.value}</p>
              <p className="max-w-40 text-right text-sm text-graphite">{metric.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-6 md:col-span-6 md:col-start-7">
          {copy.testimonials.map((item) => (
            <Reveal key={item.name} className="border-t border-line pt-6">
              <p className="font-display text-3xl font-light leading-tight">“{item.quote}”</p>
              <p className="mt-6 text-sm text-graphite">{item.name} · {item.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const { locale } = useLocale();
  const copy = homeCopy[locale].contact;

  return (
    <Section id="contact" eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg leading-8 text-graphite">
            {copy.body}
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
