import HeaderTop from "@/components/HeaderTop";
import StickyMenu from "@/components/StickyMenu";
import HeroSlider from "@/components/HeroSlider";
import PracticeStrip from "@/components/PracticeStrip";
import AboutIntro from "@/components/AboutIntro";
import AreasPractices from "@/components/AreasPractices";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentCases from "@/components/RecentCases";
import FreeConsult from "@/components/FreeConsult";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StickyMenu />
      <HeaderTop />
      <HeroSlider />
      <PracticeStrip />
      <AboutIntro />
      <AreasPractices />
      <WhyChooseUs />
      <RecentCases />
      <MapSection />
      <FreeConsult />
      <Footer />
    </>
  );
}
