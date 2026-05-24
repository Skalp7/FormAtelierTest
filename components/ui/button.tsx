import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-3 border px-5 py-3 text-sm font-semibold uppercase tracking-caps transition",
    variant === "primary" && "border-ink bg-ink text-paper hover:bg-graphite",
    variant === "secondary" && "border-ink text-ink hover:bg-ink hover:text-paper",
    variant === "ghost" && "border-transparent px-0 text-ink hover:text-graphite",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </>
  );

  if (href) {
    return (
      <Link href={href as any} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
