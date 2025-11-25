import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";
import Footer from "@/components/Footer";

import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function TeamPage() {
 

  return (
    <>

      <StickyMenuGeral />
      <HeaderTopGeral />
      <PageHero
        ns="team"
        titleKey="heading"
        subtitleKey="lede"
        image="/banners/about.png"
        heightClass="h-[50vh] md:h-[56vh]" // se quiser ainda maior só nesta página
      />

      <TeamGrid />
      <Footer />
    </>
  );
}
