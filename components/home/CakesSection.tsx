import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { kokkosImages } from "@/data/images";

export default function CakesSection() {
  return (
    <section className="bg-kokkos-sand">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1fr_1.1fr]">
        <div className="flex items-center px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-green-dark">
                From our bakery
              </p>

              <h2 className="font-serif text-6xl leading-[0.9] sm:text-7xl">
                Something
                <br />
                worth celebrating.
              </h2>

              <p className="mt-8 max-w-md text-sm leading-8 text-kokkos-charcoal/65 sm:text-base">
                Special occasion cakes made to make birthdays, anniversaries,
                weddings and everything in between a little sweeter.
              </p>

              <Link
                href="/cakes"
                className="mt-9 inline-flex items-center gap-4 border-b border-kokkos-charcoal pb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
              >
                Explore our cakes
                <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[500px] lg:min-h-[650px]">
          <Image
            src={kokkosImages.food.src}
            alt="Dessert at Kokkos Cafe Bistro"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
