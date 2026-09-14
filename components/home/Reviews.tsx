
import Reveal from "@/components/ui/Reveal";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="bg-kokkos-charcoal px-6 py-24 text-kokkos-cream sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-sand">
              From our guests
            </p>

            <h2 className="font-serif text-6xl sm:text-7xl">
              Good food.
              <br />
              Good company.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-kokkos-cream/10 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal
              key={`${review.source}-${index}`}
              delay={index * 0.08}
            >
              <article className="h-full bg-kokkos-charcoal p-8 sm:p-10">
                <div
                  aria-label="5 out of 5 stars"
                  className="mb-10 text-sm tracking-[0.25em] text-kokkos-sand"
                >
                  ★★★★★
                </div>

                <blockquote className="font-serif text-2xl leading-tight text-kokkos-cream/90">
                  “{review.quote}”
                </blockquote>

                <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-kokkos-cream/40">
                  {review.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


