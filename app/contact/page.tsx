import Image from "next/image";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Find Us",
  description:
    "Contact Kokkos Café & Bistro on Diani Beach Road in Diani Beach, Kenya. Call, email or send an enquiry through our website.",
  alternates: {
    canonical: "/contact",
  },
};

const phone = "+254721565567";
const email = "kokkos.diani@gmail.com";

export default function ContactPage() {
  return (
    <main className="bg-kokkos-cream text-kokkos-charcoal">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-kokkos-charcoal">
        <Image
          src={images.contact.hero}
          alt="Kokkos Cafe Bistro in Diani Beach"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-kokkos-soft-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-kokkos-soft-black via-transparent to-transparent" />

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
  
      {/* Keep your existing contact hero here */}

      <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-green">
                Get in touch
              </p>

              <h2 className="font-serif text-6xl leading-[0.9] sm:text-7xl">
                Let&apos;s talk.
              </h2>

              <p className="mt-8 max-w-md text-sm leading-8 text-kokkos-charcoal/60">
                Whether you&apos;re planning a meal, celebrating a special
                occasion or simply have a question, send us a message and
                the Kokkos team will get back to you.
              </p>

              <div className="mt-10 space-y-6 border-t border-kokkos-line pt-8">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-kokkos-charcoal/40">
                    Call
                  </p>

                  <a
                    href="tel:+254721565567"
                    className="mt-2 block w-fit text-sm transition-colors hover:text-kokkos-green"
                  >
                    +254 721 565 567
                  </a>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-kokkos-charcoal/40">
                    Email
                  </p>

                  <a
                    href="mailto:kokkos.diani@gmail.com"
                    className="mt-2 block w-fit text-sm transition-colors hover:text-kokkos-green"
                  >
                    kokkos.diani@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
  
    </main>
  );
}
