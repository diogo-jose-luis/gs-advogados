
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import MapBlock from "@/components/contact/MapBlock";
import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";
import ContactHighlights from "@/components/contact/ContactHighlights";
import ContactFormFull from "@/components/contact/ContactFormFull";

export default async function ContactosPage() {
  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />
      <PageHero
        ns="contactPage"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/general.png"
        heightClass="h-[50vh] md:h-[56vh]" // se quiser ainda maior só nesta página
      />
      {/* 🔹 nova secção abaixo do hero */}
      <ContactHighlights />
      <ContactFormFull />
      <MapBlock /> {/* bloco de mapa (mesmo conteúdo da home) */}
      <Footer />
    </>
  );
}
