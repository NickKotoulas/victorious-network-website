import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeSections } from "@/sections/HomeSections";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <HomeSections />
      <SiteFooter />
    </LanguageProvider>
  );
}
