import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import MapBlock from "@/components/contact/MapBlock";
import { getTranslations } from "next-intl/server";

export default async function ContactosPage() {
 
  return (
    <>
      <StickyMenu />
      <HeaderTop />

      <PageHero
        ns="contactPage"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/quem-somos.png"           // coloque em public/banners/
        heightClass="h-[32vh] md:h-[38vh]"
      />

      <section className="container-gs py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <MapBlock />   {/* bloco de mapa (mesmo conteúdo da home) */}

      <Footer />
    </>
  );
}
