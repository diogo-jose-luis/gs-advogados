import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import OrientacoesGrid from "@/components/legal/OrientacoesGrid";
import { getTranslations } from "next-intl/server";

export default async function OrientacoesPraticasPage() {
  const t = await getTranslations("orientacoesPraticas");

  return (
    <>
      <StickyMenu />
      <HeaderTop />
      <PageHero
        image="/banners/competencias.png"
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        heightClass="h-[30vh] md:h-[36vh]"
      />
      <OrientacoesGrid />
      <Footer />
    </>
  );
}
