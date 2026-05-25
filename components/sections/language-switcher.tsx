"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import {
  defaultLocale,
  isLocale,
  languages,
  localeChangeEvent,
  localeStorageKey,
  navLabels,
  type Locale
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

export { navLabels };
export type { Locale };

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);

    if (isLocale(storedLocale)) {
      setLocale(storedLocale);
      document.documentElement.lang = storedLocale;
      return;
    }

    document.documentElement.lang = defaultLocale;
  }, []);

  useEffect(() => {
    function syncLocale(event: Event) {
      const nextLocale = (event as CustomEvent<Locale>).detail;

      if (isLocale(nextLocale)) {
        setLocale(nextLocale);
      }
    }

    window.addEventListener(localeChangeEvent, syncLocale);
    return () => window.removeEventListener(localeChangeEvent, syncLocale);
  }, []);

  function updateLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem(localeStorageKey, nextLocale);
    window.dispatchEvent(new CustomEvent(localeChangeEvent, { detail: nextLocale }));
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
