import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import { getTranslations } from "next-intl/server";

export default async function SetoresPage() {
  const t = await getTranslations("nav.practices"); // usa só o label por enquanto

  return (
    <>
      <StickyMenu />
      <HeaderTop />
      <PageHero
        image="/banners/setores.jpg"
        title={t("sectors")}
        subtitle=""
        heightClass="h-[28vh] md:h-[34vh]"
      />
      {/* TODO: conteúdo dos setores de jurisdição */}
      <Footer />
    </>
  );
}
