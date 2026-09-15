import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import MenuHighlights from "@/components/home/MenuHighlights";
import StoryPreview from "@/components/home/StoryPreview";
import WorldSection from "@/components/home/WorldSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import CakesSection from "@/components/home/CakesSection";
import Reviews from "@/components/home/Reviews";
import VisitSection from "@/components/home/VisitSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kokkos Café & Bistro | Diani Beach",
  description:
    "Visit Kokkos Café & Bistro in Diani Beach, Kenya for fresh food, breakfast, coffee, homemade dishes and flavours inspired by travel.",
  alternates: {
    canonical: "/",
  },
};

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
