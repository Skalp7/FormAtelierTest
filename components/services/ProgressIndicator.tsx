"use client";

import { motion } from "framer-motion";
import type { ServiceSequenceItem } from "@/data/services";

export function ProgressIndicator({
  activeIndex,
  progress,
  services
}: {
  activeIndex: number;
  progress: number;
  services: ServiceSequenceItem[];
}) {
  return (
    <div className="mt-10" aria-label="Services progress">
      <div className="h-px w-full bg-line">
        <motion.div
          className="h-px bg-ink"
          animate={{ scaleX: progress }}
          initial={false}
          style={{ originX: 0 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2">
        {services.map((service, index) => (
          <span
            key={service.id}
            className={index === activeIndex ? "h-1 bg-ink" : "h-1 bg-line"}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
