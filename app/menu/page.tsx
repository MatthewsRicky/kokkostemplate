import Image from "next/image";
import MenuCategory from "@/components/menu/MenuCategory";
import MenuFilters from "@/components/menu/MenuFilters";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { menuCategories } from "@/data/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore breakfast, sandwiches, pastas, snacks, salads, burgers, mains and Indian curries at Kokkos Café & Bistro in Diani Beach.",
  alternates: {
    canonical: "/menu",
  },
};
export default function MenuPage() {
  return (
    <main className="bg-kokkos-cream">
      <section className="px-6 pb-20 pt-36 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <Reveal>
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-green">
                  Kokkos Café & Bistro
                </p>

                <h1 className="max-w-4xl font-serif text-7xl leading-[0.85] sm:text-8xl md:text-9xl">
                  Good food.
                  <br />
                  No fuss.
                </h1>

                <p className="mt-8 max-w-xl text-sm leading-8 text-kokkos-charcoal/60 sm:text-base">
                  From slow breakfasts and good coffee to generous lunches,
                  international flavours and something sweet at the end.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.menu.breakfast}
                  alt="Food at Kokkos Cafe Bistro"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <MenuFilters categories={menuCategories} />

      <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1200px]">
          <div className="space-y-24 sm:space-y-32">
            {menuCategories.map((category, index) => (
              <Reveal key={category.slug} delay={index % 2 === 0 ? 0 : 0.05}>
                <MenuCategory category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kokkos-green px-6 py-20 text-kokkos-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-sand">
            Diani Beach · Since 2000
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-none sm:text-6xl md:text-7xl">
            Come hungry.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-kokkos-cream/70">
            Menus and prices may change. Please contact Kokkos for the latest
            availability and daily specials.
          </p>
        </div>
      </section>
    </main>
  );
}
