import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl leading-none">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-graphite">
            Bespoke websites, identity systems and digital presence with editorial precision.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-graphite md:col-span-3">
          <Link href="/projects">Selected works</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className="text-sm text-graphite md:col-span-4 md:text-right">
          <p>{site.email}</p>
          <p className="mt-8">© 2026 FORM ATELIER. Crafted for long-term presence.</p>
        </div>
      </div>
    </footer>
  );
}
