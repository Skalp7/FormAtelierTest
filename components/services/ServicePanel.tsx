"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import type { ServiceSequenceItem } from "@/data/services";
import { ProgressIndicator } from "@/components/services/ProgressIndicator";

export function ServicePanel({
  activeIndex,
  locale,
  progress,
  services,
  tone = "dark"
}: {
  activeIndex: number;
  locale: Locale;
  progress: number;
  services: ServiceSequenceItem[];
  tone?: "dark" | "light";
}) {
  const service = services[activeIndex] ?? services[0];
  const isLight = tone === "light";

  return (
    <div
      className={`mt-10 flex min-h-[20rem] flex-col justify-center border-t py-8 md:min-h-[24rem] md:py-10 ${
        isLight ? "border-paper/50" : "border-ink"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-caps ${isLight ? "text-paper/75" : "text-graphite"}`}>
        {service.number} / 07
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${locale}-${service.id}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3
            className={`mt-8 max-w-2xl font-display text-5xl font-extrabold leading-[0.9] md:text-7xl ${
              isLight ? "text-paper" : "text-ink"
            }`}
          >
            {service.title[locale]}
          </h3>
          <p className={`mt-8 max-w-lg text-lg leading-8 ${isLight ? "text-paper/78" : "text-graphite"}`}>
            {service.description[locale]}
          </p>
        </motion.div>
      </AnimatePresence>
      <ProgressIndicator activeIndex={activeIndex} progress={progress} services={services} tone={tone} />
    </div>
  );
}
