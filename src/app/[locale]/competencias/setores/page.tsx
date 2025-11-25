import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import SectorsGrid from "@/components/practices/SectorsGrid";

import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function SetoresPage() {
 

  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />

      <PageHero
        ns="competenciasSetores"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/about.png"
        heightClass="h-[50vh] md:h-[56vh]"
      />

      <SectorsGrid />
      <Footer />
    </>
  );
}
