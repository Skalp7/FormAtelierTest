import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-line px-5 py-20 md:px-8 md:py-28", className)}>
      <div className="mx-auto max-w-[1500px]">
        {(eyebrow || title) && (
          <div className="mb-12 grid gap-6 md:grid-cols-12">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-caps text-graphite md:col-span-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-5xl font-bold leading-[0.95] text-balance md:col-span-8 md:text-7xl lg:text-8xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
