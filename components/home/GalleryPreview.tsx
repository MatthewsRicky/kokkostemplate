import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { kokkosImages } from "@/data/images";

export default function GalleryPreview() {
  return (
    <section className="bg-kokkos-paper px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-green">
                The Kokkos atmosphere
              </p>

              <h2 className="font-serif text-6xl leading-none sm:text-7xl md:text-8xl">
                Come as you are.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-kokkos-charcoal/55">
              Breakfast with friends. A slow afternoon coffee. Dinner after a
              day at the beach.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[240px_320px]">
          <Reveal className="md:col-span-7">
            <div className="relative h-[320px] overflow-hidden md:h-full">
              <Image
                src={kokkosImages.interior.src}
                alt={kokkosImages.interior.alt}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-5">
            <div className="relative h-[260px] overflow-hidden md:h-full">
              <Image
                src={kokkosImages.food.src}
                alt={kokkosImages.food.alt}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-12">
            <div className="relative h-[280px] overflow-hidden md:h-full">
              <Image
                src={kokkosImages.atmosphere.src}
                alt={kokkosImages.atmosphere.alt}
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
