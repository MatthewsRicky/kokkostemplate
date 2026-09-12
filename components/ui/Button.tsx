import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
}: ButtonProps) {
  const variants = {
    dark: "bg-kokkos-charcoal text-kokkos-cream hover:bg-kokkos-green-dark",
    light: "bg-kokkos-cream text-kokkos-charcoal hover:bg-kokkos-paper",
    outline:
      "border border-kokkos-cream/60 text-kokkos-cream hover:bg-kokkos-cream hover:text-kokkos-charcoal",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}

      <span aria-hidden="true">→</span>
    </Link>
  );
}
