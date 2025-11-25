
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";
import RecentCases from "@/components/RecentCases";

export default async function CasosPage() {
  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />
      <PageHero
        ns="casosPage"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/about.png"
        heightClass="h-[50vh] md:h-[56vh]" // se quiser ainda maior só nesta página
      />

      <RecentCases />

      <Footer />
    </>
  );
}
