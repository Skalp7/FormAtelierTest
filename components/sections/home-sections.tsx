import Image from "next/image";
import { ArrowDown, Cpu, Github, Cloud, Sparkles } from "lucide-react";
import { Project } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";
import { ProjectCard } from "@/components/project/project-card";
import { metrics, processSteps, serviceGroups, testimonials } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pt-36">
      <div className="absolute inset-x-0 top-0 z-0 h-[72vh] opacity-90">
        <Image
          src="/images/atelier-hero.png"
          alt="Editorial studio table with architectural digital layouts"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/20 via-paper/50 to-paper" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <div className="md:col-span-9">
          <Reveal>
            <p className="mb-7 text-xs font-medium uppercase tracking-caps text-graphite">
              Digital atelier for crafted presence
            </p>
            <h1 className="font-display text-[16vw] font-medium leading-[0.86] tracking-normal text-ink md:text-[8.6vw] lg:text-[7.6rem] xl:text-[8.4rem]">
              We give digital presence a precise and lasting form.
            </h1>
          </Reveal>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:pt-12">
          <Reveal delay={0.15}>
            <p className="text-lg leading-8 text-graphite">
              FORM ATELIER designs bespoke websites, visual systems and digital structures for businesses that need to be understood before they are noticed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact">Start a project</Button>
              <Button href="/projects" variant="secondary">View work</Button>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-16 flex max-w-[1500px] items-center gap-3 text-xs uppercase tracking-caps text-graphite">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Scroll
      </div>
    </section>
  );
}

export function SelectedWorks({ projects }: { projects: Project[] }) {
  return (
    <Section id="work" eyebrow="01 Selected Works" title="Case studies with a point of view, not decoration.">
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

export function Manifesto() {
  return (
    <Section eyebrow="02 Manifesto" title="Digital form is the meeting point between clarity, structure and feeling.">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xl leading-9 text-graphite">
            A website should not behave like a brochure stretched across a screen. It should carry the logic of the business, the tone of the people behind it and the precision of a system built to evolve.
          </p>
        </Reveal>
        <div className="grid gap-6 md:col-span-6 md:col-start-7">
          {["Crafting digital form", "Intentional hierarchy", "Clarity over noise", "Structure that holds", "Long-term digital craftsmanship"].map((item) => (
            <Reveal key={item} className="border-t border-line py-5">
              <p className="font-display text-4xl leading-none">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" eyebrow="03 Services" title="A focused practice for image, presence and utility.">
      <div className="grid gap-6 md:grid-cols-3">
        {serviceGroups.map((group) => (
          <Reveal key={group.title} className="border-t border-line pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-caps">{group.title}</h3>
            <p className="mt-5 min-h-20 text-sm leading-6 text-graphite">{group.description}</p>
            <ul className="mt-8 grid gap-4">
              {group.items.map((item) => (
                <li key={item} className="font-display text-3xl leading-none">{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" eyebrow="04 Process" title="A clear methodology for work that needs taste and reliability.">
      <div className="grid gap-0 border-y border-line md:grid-cols-6">
        {processSteps.map((step, index) => (
          <Reveal key={step} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-5 last:md:border-r-0">
            <p className="text-xs uppercase tracking-caps text-graphite">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-8 font-display text-4xl leading-none">{step}</h3>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="05 About" title="A compact atelier for businesses that care how they are perceived.">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xl leading-9 text-graphite">
            FORM ATELIER is led by Pascal Maraval and built around one belief: digital presence becomes valuable when strategy, image and implementation are treated as one continuous act of craft.
          </p>
        </Reveal>
        <div className="grid gap-8 md:col-span-6 md:col-start-7">
          <Reveal className="border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-caps">Mission</h3>
            <p className="mt-4 text-lg leading-8 text-graphite">To help independent businesses, studios and service-led companies express their value with calm precision.</p>
          </Reveal>
          <Reveal className="border-t border-line pt-6">
            <h3 className="text-xs uppercase tracking-caps">Vision</h3>
            <p className="mt-4 text-lg leading-8 text-graphite">A web where each business has a digital form that feels inevitable, useful and unmistakably its own.</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function Technology() {
  const tools = [
    { title: "AI-assisted workflows", icon: Sparkles, body: "Used to explore, test and refine with greater depth while preserving human judgment." },
    { title: "Codex", icon: Cpu, body: "A production partner for structured implementation, iteration and technical precision." },
    { title: "GitHub", icon: Github, body: "Versioned collaboration, reviewable decisions and a foundation for future growth." },
    { title: "Cloudflare", icon: Cloud, body: "Fast global delivery, resilient deployment and efficient hosting for modern websites." }
  ];

  return (
    <Section eyebrow="06 Technology" title="Modern production, guided by taste.">
      <div className="grid gap-6 md:grid-cols-4">
        {tools.map((tool) => (
          <Reveal key={tool.title} className="border-t border-line pt-6">
            <tool.icon className="h-5 w-5 text-moss" />
            <h3 className="mt-8 font-display text-3xl leading-none">{tool.title}</h3>
            <p className="mt-5 text-sm leading-6 text-graphite">{tool.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Trust() {
  return (
    <Section eyebrow="07 Trust" title="Built as a credible foundation before it becomes a larger archive.">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="grid gap-4 md:col-span-5">
          {metrics.map((metric) => (
            <Reveal key={metric.label} className="flex items-end justify-between border-t border-line py-5">
              <p className="font-display text-6xl leading-none">{metric.value}</p>
              <p className="max-w-40 text-right text-sm text-graphite">{metric.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-6 md:col-span-6 md:col-start-7">
          {testimonials.map((item) => (
            <Reveal key={item.name} className="border-t border-line pt-6">
              <p className="font-display text-3xl leading-tight">“{item.quote}”</p>
              <p className="mt-6 text-sm text-graphite">{item.name} · {item.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="08 Contact" title="Begin with a business, a problem or an unfinished thought.">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg leading-8 text-graphite">
            The best first conversation is precise but unfinished. Share what needs to change, what must be protected and what the website should make possible.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
