import PageHero from "@/components/PageHero";
import TeamGrid from "@/components/TeamGrid";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import {getTranslations} from "next-intl/server";

export default async function TeamPage() {
  const t = await getTranslations("team");

  return (
    <>
      <StickyMenu />
      <HeaderTop />

      <PageHero
        image="/banners/about.png"    // coloca em public/banners/
        title={t("heading")}
        subtitle={t("lede")}
        heightClass="h-[30vh] md:h-[38vh]" // ligeiramente baixo
      />


      <TeamGrid />
      <Footer />
    </>
  );
}
