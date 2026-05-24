"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { navigation, site } from "@/lib/site";

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-5 py-4 md:px-8"
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-ink/15 bg-paper/80 pb-4 backdrop-blur-md">
        <Link href="/" className="font-display text-2xl font-semibold tracking-[0.02em]">
          {site.name}
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="text-xs font-medium uppercase tracking-caps text-graphite transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          aria-label="Open contact section"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink/15 transition hover:border-ink md:hidden"
        >
          <Menu className="h-4 w-4" />
        </Link>
      </nav>
    </motion.header>
  );
}
