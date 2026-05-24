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
    <section className="relative isolate min-h-screen overflow-hidden bg-paper px-5 pb-12 pt-28 md:px-8 md:pt-36">
      <div className="pointer-events-none absolute bottom-[-8vw] right-[-4vw] z-0 font-display text-[28vw] font-extrabold leading-none text-graphite/[0.08]">
        2026
      </div>
      <div className="pointer-events-none absolute right-8 top-28 hidden h-40 w-40 rounded-full bg-ink p-5 md:block">
        <Image src="/form-atelier-mark.svg" alt="" width={128} height={128} className="h-full w-full" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">
        <div className="md:col-span-10">
          <Reveal>
            <p className="mb-8 max-w-md text-sm font-medium uppercase leading-6 tracking-caps text-graphite">
              France - Swiss - Worldwide / Digital atelier for bespoke websites and strategic presence
            </p>
            <h1 className="font-display text-[18vw] font-extrabold leading-[0.86] tracking-normal text-ink md:text-[10.5vw] lg:text-[9.6rem]">
              Digital form. Built with clarity.
            </h1>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Reveal delay={0.15}>
            <p className="border-l border-ink pl-5 text-lg leading-8 text-graphite">
              Un atelier digital qui conçoit des sites sur mesure et développe l’image de votre entreprise avec précision, structure et intention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact">Start a project</Button>
              <Button href="/projects" variant="secondary">Selected works</Button>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-16 flex max-w-[1500px] items-center gap-3 text-xs font-semibold uppercase tracking-caps text-graphite">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Scroll
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-line bg-mist py-5 text-center text-sm font-semibold uppercase tracking-widebrand text-graphite">
        Corporate identity and digital presence
      </div>
    </section>
  );
}

export function SelectedWorks({ projects }: { projects: Project[] }) {
  return (
    <Section id="work" eyebrow="01 Selected Works" title="Structured digital identities, built as systems.">
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
    <Section eyebrow="02 Brand Overview" title="Premium restraint, modern digital sophistication.">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-xl leading-9 text-graphite">
            Form Atelier balances Swiss minimalism, visual identity and functional structure. Each project is shaped as a coherent digital system: clear enough to read, distinctive enough to remember, and strong enough to evolve.
          </p>
        </Reveal>
        <div className="grid gap-6 md:col-span-6 md:col-start-7">
          {["Clarity", "Precision", "Intentional design", "Structured image", "Enduring digital identities"].map((item) => (
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
  return (
    <Section id="services" eyebrow="03 Services" title="Bespoke websites, visual identity and strategic presence.">
      <div className="grid gap-6 md:grid-cols-3">
        {serviceGroups.map((group) => (
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
  return (
    <Section id="process" eyebrow="04 Process" title="A grid for moving from idea to precise digital form.">
      <div className="grid gap-0 border-y border-line md:grid-cols-6">
        {processSteps.map((step, index) => (
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
  return (
    <Section id="about" eyebrow="05 About" title="A digital atelier focused on form, image and perception.">
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
    <Section eyebrow="06 Technology" title="Modern production, never as a shortcut.">
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
  return (
    <Section eyebrow="07 Trust" title="Consistency, clarity and cohesion across every touchpoint.">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="grid gap-4 md:col-span-5">
          {metrics.map((metric) => (
            <Reveal key={metric.label} className="flex items-end justify-between border-t border-line py-5">
              <p className="font-display text-6xl font-extrabold leading-none text-graphite">{metric.value}</p>
              <p className="max-w-40 text-right text-sm text-graphite">{metric.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-6 md:col-span-6 md:col-start-7">
          {testimonials.map((item) => (
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
  return (
    <Section id="contact" eyebrow="08 Contact" title="Get info. Start with what needs to take form.">
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
