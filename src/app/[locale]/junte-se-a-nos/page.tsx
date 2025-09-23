import PageHero from "@/components/PageHero";
import JoinForm from "@/components/JoinForm";
import { getTranslations } from "next-intl/server";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";

export default async function JoinUsPage() {
  const t = await getTranslations("join");

  return (
    <>
      <StickyMenu />
      <HeaderTop />
      <PageHero
        image="/banners/join-hero.jpg" // coloca a imagem em public/banners/
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        heightClass="h-[32vh] md:h-[38vh]" // um pouco mais baixo que o da home
      />

      <JoinForm />
      <Footer />
    </>
  );
}
