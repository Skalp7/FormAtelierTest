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
      className="relative isolate scroll-mt-24 border-t border-line bg-paper px-5 py-20 md:min-h-[560vh] md:px-8 md:py-0"
    >
      <div className="mx-auto max-w-[1500px] md:sticky md:top-24 md:min-h-[calc(100vh-6rem)]">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-caps text-graphite">{eyebrow}</p>
            <h2 className="mt-8 max-w-xl font-display text-4xl font-extrabold leading-[0.95] md:text-6xl">
              {title}
            </h2>
            <ServicePanel
              activeIndex={activeIndex}
              locale={locale}
              progress={progress}
              services={services}
            />
          </motion.div>

          <motion.div
            className="md:col-span-6 md:col-start-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[16/11] overflow-hidden border border-ink bg-mist shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:aspect-[4/5]">
              <CanvasSequence
                basePath={serviceSequenceConfig.basePath}
                extension={serviceSequenceConfig.extension}
                frameCount={serviceSequenceConfig.frameCount}
                height={serviceSequenceConfig.height}
                progress={progress}
                reducedMotion={reducedMotion}
                width={serviceSequenceConfig.width}
                className="absolute inset-0"
              />
              <div className="pointer-events-none absolute inset-0 border border-paper/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
