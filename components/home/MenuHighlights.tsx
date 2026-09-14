import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/images";

const categories = [
  {
    number: "01",
    title: "Breakfast",
    description: "Start slowly. Eat well.",
    image: images.menu.breakfast,
  },
  {
    number: "02",
    title: "Pastas",
    description: "Italian-inspired comfort, made to order.",
    image: images.menu.pasta,
  },
  {
    number: "03",
    title: "Burgers",
    description: "Generous, familiar and full of flavour.",
    image: images.menu.burgers,
  },
  {
    number: "04",
    title: "Mains",
    description: "Something substantial for every appetite.",
    image: images.menu.mains,
  },
];

export default function MenuHighlights() {
  return (
    <section className="bg-kokkos-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-green">
                From our kitchen
              </p>

              <h2 className="font-serif text-6xl leading-none sm:text-7xl md:text-8xl">
                Food for
                <br />
                every mood.
              </h2>
            </div>

            <Link
              href="/menu"
              className="group flex w-fit items-center gap-4 border-b border-kokkos-charcoal pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-charcoal transition-colors duration-300 hover:border-kokkos-green hover:text-kokkos-green"
            >
              <span>View full menu</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-kokkos-line md:grid-cols-2">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <Link
                href="/menu"
                className="group relative block min-h-[300px] overflow-hidden bg-kokkos-paper p-7 sm:min-h-[340px] sm:p-10"
              >
                <Image
                  src={category.image}
                  alt={`${category.title} at Kokkos Cafe Bistro`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-100 transition-all duration-700 md:opacity-50 md:group-hover:scale-105 md:group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-kokkos-charcoal/65 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

                <div className="relative z-10 flex h-full min-h-[246px] flex-col justify-between sm:min-h-[286px]">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-kokkos-cream/70 transition-colors duration-300 md:text-kokkos-green md:group-hover:text-kokkos-cream/70">
                    {category.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-4xl text-kokkos-charcoal group-hover:text-kokkos-cream transition-colors duration-300 sm:text-5xl">
                      {category.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm text-kokkos-charcoal group-hover:text-kokkos-cream/70 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
