import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import ArticlesGrid from "@/components/legal/ArticlesGrid";
import { getTranslations } from "next-intl/server";

export default async function ArtigosPage() {
  const t = await getTranslations("legalArticles");

  return (
    <>
      <StickyMenu />
      <HeaderTop />
      <PageHero
        image="/banners/competencias.png"      // adicione em public/banners/
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        heightClass="h-[30vh] md:h-[36vh]"
      />
      <ArticlesGrid />
      <Footer />
    </>
  );
}
