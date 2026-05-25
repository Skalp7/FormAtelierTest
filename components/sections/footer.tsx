"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { useLocale } from "@/components/sections/language-switcher";
import { footerCopy, navLabels } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  const copy = footerCopy[locale];
  const nav = navLabels[locale];

  return (
    <footer className="relative overflow-hidden bg-graphite px-5 py-14 text-paper md:px-8 md:py-20">
      <div className="pointer-events-none absolute bottom-[-5vw] left-4 font-display text-[24vw] font-extrabold leading-none text-paper/[0.08]">
        2026
      </div>
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-12">
        <div className="relative md:col-span-5">
          <div className="flex items-center gap-4">
            <Image src="/form-atelier-logo-blue.png" alt="" width={56} height={56} className="h-14 w-14 object-contain" />
            <p className="text-4xl font-semibold lowercase leading-none">form <span className="font-extralight">atelier</span></p>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-6 text-paper/70">
            {copy.body}
          </p>
        </div>
        <div className="relative grid gap-3 text-sm font-semibold uppercase tracking-caps text-paper/70 md:col-span-3">
          <Link href="/projects">{nav.Work}</Link>
          <Link href="/#services">{nav.Services}</Link>
          <Link href="/#process">{nav.Process}</Link>
          <Link href="/#contact">{nav.Contact}</Link>
        </div>
        <div className="relative text-sm text-paper/70 md:col-span-4 md:text-right">
          <p className="text-xs font-semibold uppercase tracking-caps">{copy.location}</p>
          <p>{site.email}</p>
          <p className="mt-8">{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
