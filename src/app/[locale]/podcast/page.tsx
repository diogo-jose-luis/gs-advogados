import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import PodcastList from "@/components/podcast/PodcastList";
import StickyMenuGeral from "@/components/StickyMenuGeral";
import HeaderTopGeral from "@/components/HeaderTopGeral";

export default async function PodcastPage() {
 

  return (
    <>
      <StickyMenuGeral />
          <HeaderTopGeral />
    
          <PageHero
            ns=""
            titleKey=""
            subtitleKey=""
            image="/hero/podcastHero.png"
            heightClass="h-[50vh] md:h-[56vh]"
          />

      <PodcastList channelUrl="https://www.youtube.com/@SEU_CANAL" />
      <Footer />
    </>
  );
}
