"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { navigation } from "@/lib/site";

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-5 py-4 md:px-8"
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between border-b border-ink bg-paper/90 pb-4 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/form-atelier-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full bg-ink"
          />
          <span className="text-xl font-semibold lowercase tracking-normal">
            form <span className="font-extralight">atelier</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="text-xs font-semibold uppercase tracking-caps text-graphite transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          aria-label="Open contact section"
          className="inline-flex h-10 w-10 items-center justify-center border border-ink transition hover:bg-ink hover:text-paper md:hidden"
        >
          <Menu className="h-4 w-4" />
        </Link>
      </nav>
    </motion.header>
  );
}
