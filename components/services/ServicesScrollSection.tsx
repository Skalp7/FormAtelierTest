"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { serviceSequenceConfig, servicesSequence } from "@/data/services";
import { CanvasSequence } from "@/components/services/CanvasSequence";
import { ServicePanel } from "@/components/services/ServicePanel";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ServicesScrollSection({
  eyebrow,
  locale,
  title
}: {
  eyebrow: string;
  locale: Locale;
  title: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const frame = useRef<number>();
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const services = useMemo(() => servicesSequence, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(media.matches);

    updateReducedMotion();
    media.addEventListener("change", updateReducedMotion);
    return () => media.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setProgress(0.58);
      setActiveIndex(0);
      return;
    }

    function update() {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = Math.max(rect.height - viewport, 1);
      const nextProgress = clamp((viewport - rect.top) / scrollable);
      const nextIndex = Math.min(services.length - 1, Math.floor(nextProgress * services.length));

      setProgress(nextProgress);
      setActiveIndex(nextIndex);
    }

    function requestUpdate() {
      if (frame.current) {
        return;
      }

      frame.current = requestAnimationFrame(() => {
        frame.current = undefined;
        update();
      });
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [reducedMotion, services.length]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-40 isolate min-h-[520vh] scroll-mt-24 overflow-clip border-t border-line bg-ink text-paper md:min-h-[620vh]"
    >
      <div className="sticky top-0 h-screen w-full">
        <CanvasSequence
          basePath={serviceSequenceConfig.basePath}
          extension={serviceSequenceConfig.extension}
          frameCount={serviceSequenceConfig.frameCount}
          height={serviceSequenceConfig.height}
          progress={progress}
          reducedMotion={reducedMotion}
          width={serviceSequenceConfig.width}
          className="absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.58)_34%,rgba(0,0,0,0.22)_62%,rgba(0,0,0,0)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,255,255,0.16),rgba(255,255,255,0)_42%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      <div className="relative z-10 -mt-[100vh] min-h-[520vh] px-5 md:min-h-[620vh] md:px-8">
        <div className="mx-auto flex min-h-screen max-w-[1500px] items-center pt-24 md:sticky md:top-0">
          <motion.div
            className="w-full max-w-3xl py-20 md:max-w-[46rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-caps text-paper/75">{eyebrow}</p>
            <h2 className="mt-8 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] text-paper md:text-7xl">
              {title}
            </h2>
            <ServicePanel
              activeIndex={activeIndex}
              locale={locale}
              progress={progress}
              services={services}
              tone="light"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
