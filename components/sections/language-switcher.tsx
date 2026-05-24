"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export type Locale = "fr" | "en" | "de";

const languages: { code: Locale; short: string; label: string }[] = [
  { code: "fr", short: "FR", label: "Français" },
  { code: "en", short: "EN", label: "English" },
  { code: "de", short: "DE", label: "Deutsch" }
];

const storageKey = "form-atelier-locale";

export const navLabels: Record<Locale, Record<string, string>> = {
  fr: {
    Work: "Projets",
    Services: "Services",
    Process: "Méthode",
    About: "Atelier",
    Contact: "Contact"
  },
  en: {
    Work: "Work",
    Services: "Services",
    Process: "Process",
    About: "About",
    Contact: "Contact"
  },
  de: {
    Work: "Arbeiten",
    Services: "Leistungen",
    Process: "Prozess",
    About: "Atelier",
    Contact: "Kontakt"
  }
};

function isLocale(value: string | null): value is Locale {
  return value === "fr" || value === "en" || value === "de";
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(storageKey);

    if (isLocale(storedLocale)) {
      setLocale(storedLocale);
      document.documentElement.lang = storedLocale;
      return;
    }

    document.documentElement.lang = "fr";
  }, []);

  function updateLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem(storageKey, nextLocale);
  }

  return { locale, setLocale: updateLocale };
}

export function LanguageSwitcher({
  locale,
  onChange,
  className
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
  className?: string;
}) {
  return (
    <div
      className={cn("inline-flex items-center border border-ink bg-paper text-ink", className)}
      aria-label="Language selector"
    >
      <Languages className="ml-3 h-4 w-4 text-graphite" aria-hidden="true" />
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          aria-pressed={locale === language.code}
          title={language.label}
          onClick={() => onChange(language.code)}
          className={cn(
            "h-10 px-3 text-xs font-semibold uppercase tracking-caps transition",
            locale === language.code ? "bg-ink text-paper" : "text-graphite hover:text-ink"
          )}
        >
          {language.short}
        </button>
      ))}
    </div>
  );
}
