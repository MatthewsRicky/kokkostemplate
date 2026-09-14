import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-kokkos-soft-black text-kokkos-cream">
      <Image
        src={images.hero}
        alt="Kokkos Cafe Bistro in Diani Beach"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12 lg:pb-20">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="max-w-5xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-cream/75">
              Diani Beach · Kenya · Since 2000
            </p>

            <h1 className="font-serif text-7xl leading-[0.82] tracking-[-0.03em] sm:text-8xl md:text-[9rem] lg:text-[11rem]">
              KOKKOS
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-kokkos-cream/75 sm:text-base">
                Café, bistro and bakery in the heart of Diani Beach. Fresh food,
                good coffee and flavours inspired by the world.
              </p>

              <Link
                href="/menu"
                className="group inline-flex w-fit items-center gap-5 border border-kokkos-cream/50 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-kokkos-cream hover:text-kokkos-charcoal"
              >
                Explore the Menu
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-kokkos-cream/60 sm:flex lg:right-12">
        <span className="h-px w-8 bg-kokkos-cream/40" />
        Scroll to explore
      </div>
    </section>
  );
}
