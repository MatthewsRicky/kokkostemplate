import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { kokkosImages } from "@/data/images";

export default function StoryPreview() {
  return (
    <section className="overflow-hidden bg-kokkos-green-dark text-kokkos-cream">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[700px]">
          <Image
            src={kokkosImages.interior.src}
            alt={kokkosImages.interior.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-sand">
                Our story
              </p>

              <p className="font-serif text-7xl leading-[0.8] sm:text-8xl">
                2000
              </p>

              <h2 className="mt-10 font-serif text-4xl leading-tight sm:text-5xl">
                More than two decades in Diani.
              </h2>

              <p className="mt-7 text-sm leading-8 text-kokkos-cream/65 sm:text-base">
                Kokkos began in 2000 with one goal: to provide an enjoyable
                dining experience to the Diani Beach area. Today, the café
                remains rooted in fresh ingredients, honest cooking and an
                atmosphere where locals and travellers can feel at home.
              </p>

              <Link
                href="/story"
                className="mt-9 inline-flex items-center gap-4 border-b border-kokkos-cream/50 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-kokkos-cream"
              >
                Discover our story
                <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
