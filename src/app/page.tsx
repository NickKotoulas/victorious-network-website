import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeSections } from "@/sections/HomeSections";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { MotionFoundation } from "@/components/motion/MotionFoundation";

export default function Home() {
  return (
    <LanguageProvider>
      <MotionFoundation />
      <SiteHeader />
      <HomeSections />
      <SiteFooter />
    </LanguageProvider>
  );
}
