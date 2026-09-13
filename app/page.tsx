import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import MenuHighlights from "@/components/home/MenuHighlights";
import StoryPreview from "@/components/home/StoryPreview";
import WorldSection from "@/components/home/WorldSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import CakesSection from "@/components/home/CakesSection";
import Reviews from "@/components/home/Reviews";
import VisitSection from "@/components/home/VisitSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <MenuHighlights />
      <StoryPreview />
      <WorldSection />
      <GalleryPreview />
      <CakesSection />
      <Reviews />
      <VisitSection />
    </main>
  );
}
