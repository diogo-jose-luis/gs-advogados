import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import { getTranslations } from "next-intl/server";
import AreasPracticesAll from "@/components/practices/AreasPracticesAll";

export default async function CompetenciasPage() {
  const t = await getTranslations("competenciasPage");

  return (
    <>
      <StickyMenu />
      <HeaderTop />
      <PageHero
        image="/banners/competencias.png"
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        heightClass="h-[32vh] md:h-[38vh]"
      />
      
      <AreasPracticesAll />

      <Footer />
    </>
  );
}
