import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeSections } from "@/sections/HomeSections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HomeSections />
      <SiteFooter />
    </>
  );
}
