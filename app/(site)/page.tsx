import {
  About,
  Contact,
  Hero,
  Manifesto,
  Process,
  SelectedWorks,
  Services,
  Technology,
  Trust
} from "@/components/sections/home-sections";
import { HomeIntro } from "@/components/sections/home-intro";
import { ScrollMascot } from "@/components/sections/scroll-mascot";
import { getProjects } from "@/lib/content";

export default function HomePage() {
  const projects = getProjects();

  return (
    <main>
      <div className="grain" />
      <HomeIntro />
      <ScrollMascot />
      <Hero />
      <SelectedWorks projects={projects} />
      <Manifesto />
      <Services />
      <Process />
      <Contact />
      <About />
      <Technology />
      <Trust />
    </main>
  );
}
