// src/app/[locale]/informacoes-juridicas/artigos/page.tsx
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ArticlesGrid from "@/components/legal/ArticlesGrid";

import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function ArtigosPage() {

  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />

      <PageHero
        ns="legalArticles"
        titleKey="heroTitle"
        subtitleKey="heroSubtitle"
        image="/banners/competencias.png"
        heightClass="h-[50vh] md:h-[56vh]"
      />

      <ArticlesGrid />
      <Footer />
    </>
  );
}
