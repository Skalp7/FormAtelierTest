"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function HomeIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 4200);

    return () => window.clearTimeout(timer);
  }, []);

  function closeIntro() {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[80] cursor-pointer bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          onClick={closeIntro}
          aria-label="Skip intro animation"
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              closeIntro();
            }
          }}
        >
          <video
            className="h-full w-full object-cover"
            src="/motion-homepage.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={closeIntro}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
