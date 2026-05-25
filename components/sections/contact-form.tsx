"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/sections/language-switcher";
import { formCopy } from "@/lib/i18n";

export function ContactForm() {
  const { locale } = useLocale();
  const copy = formCopy[locale];

  return (
    <form
      className="grid gap-4"
      action="mailto:studio@formatelier.fr"
      method="post"
      encType="text/plain"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-graphite">
          {copy.name}
          <input className="border border-line bg-transparent px-4 py-3 text-ink outline-none transition focus:border-ink" name="name" required />
        </label>
        <label className="grid gap-2 text-sm text-graphite">
          {copy.email}
          <input className="border border-line bg-transparent px-4 py-3 text-ink outline-none transition focus:border-ink" type="email" name="email" required />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-graphite">
        {copy.project}
        <select className="border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-ink" name="projectType">
          {copy.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-graphite">
        {copy.brief}
        <textarea className="min-h-40 border border-line bg-transparent px-4 py-3 text-ink outline-none transition focus:border-ink" name="message" required />
      </label>
      <Button type="submit" className="mt-4 w-full md:w-fit">
        {copy.submit}
      </Button>
    </form>
  );
}
