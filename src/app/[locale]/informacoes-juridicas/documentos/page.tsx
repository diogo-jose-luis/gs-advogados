import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import DocumentsGrid from "@/components/legal/DocumentsGrid";

import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function DocumentosPage() {
 
  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />

      <PageHero
        ns="documentos"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/competencias.png"
        heightClass="h-[50vh] md:h-[56vh]"
      />

      <DocumentsGrid />
      <Footer />
    </>
  );
}
