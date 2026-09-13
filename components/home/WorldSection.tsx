import Reveal from "@/components/ui/Reveal";

const influences = [
  "Italian",
  "Mediterranean",
  "Indian",
  "Mexican",
  "Asian",
  "Kenyan",
];

export default function WorldSection() {
  return (
    <section className="relative overflow-hidden bg-kokkos-cream px-6 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-48">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-[80px] border-kokkos-charcoal" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-kokkos-green">
            Inspired by travel
          </p>

          <h2 className="font-serif text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-[9rem]">
            Flavours from
            <br />
            <span className="text-kokkos-green">around the world.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-kokkos-charcoal/60 sm:text-base">
            From Italian pasta to Indian curries, fresh salads and familiar
            Kenyan favourites, our menu brings together the flavours that make
            travelling worth remembering.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {influences.map((influence, index) => (
            <Reveal key={influence} delay={index * 0.05}>
              <span className="font-serif text-2xl text-kokkos-charcoal/65 sm:text-3xl">
                {influence}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
