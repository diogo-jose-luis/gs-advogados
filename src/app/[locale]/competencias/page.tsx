import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

import AreasPracticesAll from "@/components/practices/AreasPracticesAll";
import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function CompetenciasPage() {
  

  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />
      <PageHero
        ns="competenciasPage"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/general.png"
        heightClass="h-[50vh] md:h-[56vh]" // se quiser ainda maior só nesta página
      />

      <AreasPracticesAll />

      <Footer />
    </>
  );
}
