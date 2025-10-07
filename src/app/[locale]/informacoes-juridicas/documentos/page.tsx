import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import DocumentsGrid from "@/components/legal/DocumentsGrid";
import { getTranslations } from "next-intl/server";

export default async function DocumentosPage() {
  const t = await getTranslations("documentos");
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
      <DocumentsGrid />
      <Footer />
    </>
  );
}
