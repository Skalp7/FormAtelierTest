"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import type { ServiceSequenceItem } from "@/data/services";
import { ProgressIndicator } from "@/components/services/ProgressIndicator";

export function ServicePanel({
  activeIndex,
  locale,
  progress,
  services
}: {
  activeIndex: number;
  locale: Locale;
  progress: number;
  services: ServiceSequenceItem[];
}) {
  const service = services[activeIndex] ?? services[0];

  return (
    <div className="mt-10 flex min-h-[20rem] flex-col justify-center border-t border-ink py-8 md:min-h-[24rem] md:py-10">
      <p className="text-xs font-semibold uppercase tracking-caps text-graphite">
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
          <h3 className="mt-8 max-w-2xl font-display text-5xl font-extrabold leading-[0.9] text-ink md:text-7xl">
            {service.title[locale]}
          </h3>
          <p className="mt-8 max-w-lg text-lg leading-8 text-graphite">
            {service.description[locale]}
          </p>
        </motion.div>
      </AnimatePresence>
      <ProgressIndicator activeIndex={activeIndex} progress={progress} services={services} />
    </div>
  );
}
