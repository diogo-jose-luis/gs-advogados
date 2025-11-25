import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import OrientacoesGrid from "@/components/legal/OrientacoesGrid";

import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function OrientacoesPraticasPage() {
  

  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />

      <PageHero
        ns="orientacoesPraticas"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/competencias.png"
        heightClass="h-[50vh] md:h-[56vh]"
      />

      <OrientacoesGrid />
      <Footer />
    </>
  );
}
