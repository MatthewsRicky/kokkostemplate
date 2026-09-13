import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Contact & Find Us | Kokkos Cafe Bistro",
  description:
    "Visit Kokkos Cafe Bistro on Diani Beach Road in Diani Beach, Kenya. Find our opening hours, phone number and contact details.",
};

const phone = "+254721565567";
const email = "kokkos.diani@gmail.com";

export default function ContactPage() {
  return (
    <main className="bg-kokkos-cream text-kokkos-charcoal">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-kokkos-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(154,112,74,0.28),transparent_40%),linear-gradient(125deg,#11110f,#59654f)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <Reveal>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
              Diani Beach · Kenya
            </p>

            <h1 className="font-serif text-6xl leading-[0.9] text-kokkos-cream sm:text-7xl lg:text-9xl">
              Come find
              <br />
              us.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Contact details */}
      <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Visit Kokkos"
                title="A table is waiting in Diani."
              />

              <p className="mt-8 max-w-2xl text-base leading-8 text-kokkos-charcoal/60 sm:text-lg">
                Whether you're stopping by for breakfast, meeting friends for
                lunch or settling in for dinner, we'd love to welcome you.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex border border-kokkos-charcoal bg-kokkos-charcoal px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-kokkos-cream transition-colors hover:bg-kokkos-green-dark"
                >
                  Call Kokkos
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex border border-kokkos-charcoal px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-kokkos-charcoal hover:text-kokkos-cream"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-y border-kokkos-line">
              <div className="border-b border-kokkos-line py-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-kokkos-green">
                  Address
                </p>

                <p className="mt-3 font-serif text-2xl">
                  Diani Beach Road
                  <br />
                  Diani Beach, Kenya
                </p>
              </div>

              <div className="border-b border-kokkos-line py-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-kokkos-green">
                  Phone
                </p>

                <a
                  href={`tel:${phone}`}
                  className="mt-3 block font-serif text-2xl transition-opacity hover:opacity-60"
                >
                  +254 (0)721 565 567
                </a>
              </div>

              <div className="py-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-kokkos-green">
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-3 block break-all font-serif text-2xl transition-opacity hover:opacity-60"
                >
                  {email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-kokkos-paper px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionHeading eyebrow="Opening Hours" title="When to visit." />
          </Reveal>

          <div className="mt-16 max-w-3xl border-t border-kokkos-line">
            <div className="flex items-center justify-between border-b border-kokkos-line py-6">
              <span className="font-serif text-2xl">Monday – Saturday</span>
              <span className="text-sm text-kokkos-charcoal/60">
                8:00 AM – 11:00 PM
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-kokkos-line py-6">
              <span className="font-serif text-2xl">Sunday</span>
              <span className="text-sm text-kokkos-charcoal/60">
                9:00 AM – 4:30 PM
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Map / directions */}
      <section className="bg-kokkos-green-dark px-6 py-24 text-kokkos-cream sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
                Diani Beach Road
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
                Find your way to Kokkos.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kokkos+Cafe+Bistro+Diani+Beach"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit border border-kokkos-cream/40 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-cream transition-colors hover:bg-kokkos-cream hover:text-kokkos-charcoal"
            >
              Get Directions
            </a>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-green">
            Hungry?
          </p>

          <h2 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl">
            Start with the menu.
          </h2>

          <Link
            href="/menu"
            className="mt-10 inline-flex border border-kokkos-charcoal px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-kokkos-charcoal hover:text-kokkos-cream"
          >
            View the Menu
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
