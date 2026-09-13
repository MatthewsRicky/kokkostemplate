import Reveal from "@/components/ui/Reveal";

export default function Intro() {
  return (
    <section className="bg-kokkos-cream px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-kokkos-green" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-green">
              Welcome to Kokkos
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="max-w-5xl font-serif text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              A little piece of the world,{" "}
              <span className="text-kokkos-green">in Diani.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-kokkos-charcoal/65 sm:text-base">
              Inspired by travel and a passion for different cultures, Kokkos
              brings fresh ingredients, honest cooking and homemade dishes
              together under one roof.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
