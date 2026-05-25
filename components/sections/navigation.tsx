"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { navigation } from "@/lib/site";
import { LanguageSwitcher, navLabels, useLocale } from "@/components/sections/language-switcher";

export function Navigation() {
  const { locale, setLocale } = useLocale();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-5 py-4 md:px-8"
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 border-b border-ink bg-paper/90 pb-4 backdrop-blur-md">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/form-atelier-logo-blue.png"
            alt="Form Atelier"
            width={180}
            height={180}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden whitespace-nowrap text-xl font-semibold lowercase tracking-normal sm:inline">
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
              {navLabels[locale][item.label] ?? item.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher locale={locale} onChange={setLocale} className="origin-right scale-90 shrink-0" />
          <Link
            href="#contact"
            aria-label="Open contact section"
            className="inline-flex h-10 w-10 items-center justify-center border border-ink transition hover:bg-ink hover:text-paper"
          >
            <Menu className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
