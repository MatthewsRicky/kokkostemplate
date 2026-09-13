import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Our Story | Kokkos Cafe Bistro",
  description:
    "Discover the story behind Kokkos Cafe Bistro in Diani Beach, Kenya. Serving fresh, hearty food and flavours inspired by travel since 2000.",
};

export default function StoryPage() {
  return (
    <main className="bg-kokkos-cream text-kokkos-charcoal">
      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-kokkos-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(154,112,74,0.28),transparent_45%),linear-gradient(120deg,#11110f,#3f4938)]" />

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
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
                25+ years in Diani
              </p>

              <h2 className="font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">
                Since
                <br />
                2000.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-l border-kokkos-cream/15 pl-8 lg:pl-12">
              <p className="font-serif text-3xl leading-tight text-kokkos-cream sm:text-4xl">
                “A place to enjoy, eat, drink and travel through food.”
              </p>

              <p className="mt-8 max-w-xl text-sm leading-7 text-kokkos-cream/55">
                From a morning coffee to a long dinner with friends, Kokkos is
                designed around the simple pleasure of spending time together.
              </p>
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

          <div className="mt-16 grid gap-px overflow-hidden border border-kokkos-line bg-kokkos-line md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Fresh",
                text: "Market-fresh ingredients and produce are at the heart of what we serve.",
              },
              {
                number: "02",
                title: "Homemade",
                text: "From sauces to dishes made with care, we believe in honest, generous cooking.",
              },
              {
                number: "03",
                title: "Inspired",
                text: "Our menu travels across cultures, bringing different flavours together in Diani.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <article className="h-full bg-kokkos-paper p-8 sm:p-10 lg:p-12">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-kokkos-green">
                    {item.number}
                  </span>

                  <h3 className="mt-16 font-serif text-4xl">{item.title}</h3>

                  <p className="mt-5 text-sm leading-7 text-kokkos-charcoal/55">
                    {item.text}
                  </p>
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
