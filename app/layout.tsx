import type { Metadata } from "next";
import "@/styles/globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Digital Atelier`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Digital Atelier`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/atelier-hero.png", width: 1600, height: 1000 }],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Digital Atelier`,
    description: site.description,
    images: ["/images/atelier-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    founder: site.founder,
    serviceType: ["Bespoke Websites", "Brand Identity", "Digital Art Direction"]
  };

  return (
  <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
