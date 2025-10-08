import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import AboutIntro from "@/components/about/AboutIntro";
import { getTranslations } from "next-intl/server";
import AboutValues from "@/components/about/AboutValues";
import AboutRecognitionSustain from "@/components/about/AboutRecognitionSustain";

export default async function QuemSomosPage() {

  const t = await getTranslations("aboutPage");

  const title = t("heroTitle");
  const subtitle = t("heroSubtitle");

  return (
    <>
      <StickyMenu />
      <HeaderTop />

      <PageHero
        image="/banners/quem-somos.png"
        title={title}
        subtitle={subtitle}
        heightClass="h-[32vh] md:h-[38vh]"
      />

      <AboutIntro imageSrc="/images/quem-somos.jpeg" youtubeId="oobt6nWXPac" />

      <AboutRecognitionSustain />

      <AboutValues imageSrc="/images/valores.png" />

      <Footer />
    </>
  );
}
