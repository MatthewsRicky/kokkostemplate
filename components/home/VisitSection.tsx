import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "../contact/WhatsAppButton";
import Button from "../ui/Button";

export default function VisitSection() {
  return (
    <section className="bg-kokkos-wood px-6 py-24 text-kokkos-cream sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-sand">
                Find us in Diani
              </p>

              <h2 className="font-serif text-7xl leading-[0.85] sm:text-8xl md:text-9xl">
                Come
                <br />
                find us.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row h-fit sm:items-center sm:justify-center">
              <Button href="/contact">Find Kokkos</Button>

              <WhatsAppButton message="Hello Kokkos Café & Bistro, I would like to make an enquiry.">
                WhatsApp Us
              </WhatsAppButton>
            </div>

            <div className="flex flex-col justify-end">
              <address className="not-italic text-sm leading-8 text-kokkos-cream/75">
                Diani Beach Road
                <br />
                Diani Beach, Kenya
              </address>

              <div className="mt-8 border-t border-kokkos-cream/20 pt-8 text-sm leading-8 text-kokkos-cream/75">
                <p>Monday – Saturday</p>
                <p>8:00 AM – 11:00 PM</p>

                <p className="mt-3">Sunday</p>
                <p>9:00 AM – 4:30 PM</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+254721565567"
                  className="border border-kokkos-cream/50 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-kokkos-cream hover:text-kokkos-green"
                >
                  Call us
                </a>

                <Link
                  href="/contact"
                  className="border border-kokkos-cream/50 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-kokkos-cream hover:text-kokkos-green"
                >
                  Get directions
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
