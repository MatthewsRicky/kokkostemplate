import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kokkos Café & Bistro | Diani Beach",
  description:
    "Visit Kokkos Café & Bistro in Diani Beach, Kenya for fresh food, breakfast, coffee, homemade dishes and flavours inspired by travel.",
  alternates: {
    canonical: "/",
  },
};


export default function StoryPage() {
  return (
    <main className="bg-kokkos-cream text-kokkos-charcoal">
      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-kokkos-charcoal">
        <Image
          src={images.story.hero}
          alt="Kokkos Cafe Bistro in Diani Beach"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-kokkos-charcoal/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-kokkos-soft-black via-kokkos-soft-black/20 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <Reveal>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
              Since 2000 · Diani Beach
            </p>

            <h1 className="max-w-4xl font-serif text-6xl leading-[0.9] text-kokkos-cream sm:text-7xl lg:text-9xl">
              A little piece
              <br />
              of the world.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Good food. Good people. A love of travel."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-8 text-kokkos-charcoal/65 sm:text-lg">
              <p>
                Kokkos Cafe Bistro has been part of the Diani experience since
                2000 — a place where locals, travellers and friends can sit
                down, slow down and enjoy something made with care.
              </p>

              <p>
                Our food reflects the same curiosity that comes with travelling.
                Italian favourites meet Indian curries, Mediterranean flavours,
                Kenyan staples and familiar comfort food.
              </p>

              <p>
                We believe good cooking does not need to be complicated. It
                starts with fresh ingredients, honest preparation and the
                pleasure of sharing a table.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Since 2000 */}
      <section className="bg-kokkos-soft-black px-6 py-24 text-kokkos-cream sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.story.origin}
                  alt="Kokkos Cafe Bistro atmosphere in Diani Beach"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
                25+ years in Diani
              </p>

              <h2 className="font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">
                Since
                <br />
                2000.
              </h2>

              <div className="mt-10 border-l border-kokkos-cream/15 pl-8 lg:pl-12">
                <p className="font-serif text-3xl leading-tight text-kokkos-cream sm:text-4xl">
                  “A place to enjoy, eat, drink and travel through food.”
                </p>

                <p className="mt-8 max-w-xl text-sm leading-7 text-kokkos-cream/55">
                  From a morning coffee to a long dinner with friends, Kokkos is
                  designed around the simple pleasure of spending time together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Philosophy */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionHeading
              eyebrow="The Kokkos Way"
              title="Fresh ingredients. Honest cooking. A world of flavour."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Fresh",
                text: "Market-fresh ingredients and produce are at the heart of what we serve.",
                image: images.story.food,
                alt: "Fresh food served at Kokkos Cafe Bistro",
              },
              {
                number: "02",
                title: "Homemade",
                text: "From sauces to dishes made with care, we believe in honest, generous cooking.",
                image: images.story.atmosphere,
                alt: "Kokkos Cafe Bistro interior",
              },
              {
                number: "03",
                title: "Inspired",
                text: "Our menu travels across cultures, bringing different flavours together in Diani.",
                image: images.story.people,
                alt: "People enjoying the Kokkos Cafe Bistro experience",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <article className="group overflow-hidden bg-kokkos-paper">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>

                  <div className="p-8 sm:p-10">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-kokkos-green">
                      {item.number}
                    </span>

                    <h3 className="mt-8 font-serif text-4xl">{item.title}</h3>

                    <p className="mt-5 text-sm leading-7 text-kokkos-charcoal/55">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-kokkos-line bg-kokkos-paper px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px] text-center">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-green">
              Come hungry
            </p>

            <h2 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl">
              There is always
              <br />
              something waiting.
            </h2>

            <Link
              href="/menu"
              className="mt-10 inline-flex border border-kokkos-charcoal px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-kokkos-charcoal hover:text-kokkos-cream"
            >
              Explore the Menu
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
