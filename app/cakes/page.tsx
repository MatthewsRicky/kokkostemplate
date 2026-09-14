import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

export const metadata = {
  title: "Cakes & Special Occasions | Kokkos Cafe Bistro",
  description:
    "Celebrate special occasions with cakes from Kokkos Cafe Bistro in Diani Beach, Kenya. Contact Kokkos to discuss your celebration cake.",
};

export default function CakesPage() {
  return (
    <main className="bg-kokkos-cream text-kokkos-charcoal">
      {/* Hero */}
      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-kokkos-green-dark">
        <Image
          src={images.cakes.hero}
          alt="Celebration cake from Kokkos Cafe Bistro"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-kokkos-soft-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-kokkos-soft-black via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <Reveal>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
              Bakery · Special Occasions
            </p>

            <h1 className="max-w-4xl font-serif text-6xl leading-[0.9] text-kokkos-cream sm:text-7xl lg:text-9xl">
              Make it
              <br />
              memorable.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="Kokkos Bakery"
              title="Something special for the special occasions."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-8 text-kokkos-charcoal/65 sm:text-lg">
              <p>
                Whether you are celebrating a birthday, gathering friends or
                marking a special moment in Diani, Kokkos can help make the
                occasion a little sweeter.
              </p>

              <p>
                Our bakery service creates special-occasion cakes for
                celebrations and gatherings.
              </p>

              <p>
                Tell us what you have in mind and speak with the Kokkos team
                about your requirements, flavours and occasion.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex border border-kokkos-charcoal px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-kokkos-charcoal hover:text-kokkos-cream"
              >
                Make an Enquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Occasion grid */}
      <section className="bg-kokkos-paper px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionHeading
              eyebrow="For Every Occasion"
              title="Bring people together around something worth celebrating."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Birthdays",
                image: images.cakes.gallery[0],
              },
              {
                title: "Celebrations",
                image: images.cakes.gallery[1],
              },
              {
                title: "Special Gatherings",
                image: images.cakes.gallery[2],
              },
              {
                title: "Something Just Because",
                image: images.cakes.gallery[3],
              },
            ].map((occasion, index) => (
              <Reveal key={occasion.title} delay={index * 0.06}>
                <article className="group relative aspect-[4/5] overflow-hidden bg-kokkos-charcoal">
                  <Image
                    src={occasion.image}
                    alt={`${occasion.title} cake from Kokkos Cafe Bistro`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-kokkos-soft-black/80 via-transparent to-transparent" />

                  <div className="relative flex h-full flex-col justify-end p-7">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-kokkos-sand">
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 font-serif text-3xl text-kokkos-cream">
                      {occasion.title}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-kokkos-soft-black px-6 py-24 text-kokkos-cream sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
                Planning something?
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">
                Let's talk cake.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-kokkos-cream/55">
                Contact Kokkos with your celebration date and requirements and
                the team can help you plan your cake.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex w-fit border border-kokkos-cream/40 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-cream transition-colors hover:bg-kokkos-cream hover:text-kokkos-charcoal"
            >
              Contact Kokkos
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
