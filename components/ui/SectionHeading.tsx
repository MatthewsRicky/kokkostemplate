type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-kokkos-green">
          {eyebrow}
        </span>
      )}

      <h2 className="font-serif text-4xl leading-[0.95] text-kokkos-charcoal sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-xl text-sm leading-7 text-kokkos-charcoal/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
