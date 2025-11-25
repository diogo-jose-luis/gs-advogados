import PageHero from "@/components/PageHero";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";

import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function JoinUsPage() {
 

  return (
    <>
      <StickyMenuGeral />
      <HeaderTopGeral />

       <PageHero
              ns="join"
              titleKey="heroTitle"
              subtitleKey="heroSubtitle"
              image="/banners/join-hero.jpg"
              heightClass="h-[50vh] md:h-[56vh]"
            />
      

      <JoinForm />
      <Footer />
    </>
  );
}
