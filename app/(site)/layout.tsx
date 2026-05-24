import { Footer } from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navigation";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
