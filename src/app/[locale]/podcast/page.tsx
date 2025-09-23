import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import HeaderTop from "@/components/HeaderTop";
import PodcastList from "@/components/podcast/PodcastList";
import { getTranslations } from "next-intl/server";

export default async function PodcastPage() {
  const t = await getTranslations("podcastPage");

  return (
    <>
      <StickyMenu />
      <HeaderTop />

      <PageHero
        image="/banners/banner_youtube.jpg"
        title=""
        subtitle=""
        heightClass="h-[30vh] md:h-[36vh]"
      />

      <PodcastList channelUrl="https://www.youtube.com/@SEU_CANAL" />
      <Footer />
    </>
  );
}
