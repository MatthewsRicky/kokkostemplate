import Link from "next/link";
import type { ReactNode } from "react";
import { contact } from "@/data/contact";

type WhatsAppButtonProps = {
  children?: ReactNode;
  message?: string;
  className?: string;
  variant?: "dark" | "light" | "green";
};

export default function WhatsAppButton({
  children = "WhatsApp Us",
  message = contact.whatsappMessages.general,
  className = "",
  variant = "green",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;

  const variants = {
    dark: "bg-kokkos-charcoal text-kokkos-cream hover:bg-kokkos-green-dark",
    light: "bg-kokkos-cream text-kokkos-charcoal hover:bg-kokkos-sand",
    green: "bg-kokkos-green text-kokkos-cream hover:bg-kokkos-green-dark",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Kokkos Café & Bistro on WhatsApp"
      className={`inline-flex items-center justify-center gap-3 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      <span aria-hidden="true" className="shrink-0">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.54 0 .24 5.3.24 11.82c0 2.08.54 4.1 1.57 5.89L.14 24l6.43-1.68a11.77 11.77 0 0 0 5.47 1.35h.01c6.51 0 11.81-5.3 11.81-11.82 0-3.15-1.23-6.12-3.34-8.37ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.84 9.84 0 0 1-1.51-5.2C2.13 6.38 6.57 1.94 12.05 1.94a9.8 9.8 0 0 1 6.97 2.89 9.8 9.8 0 0 1 2.88 6.99c0 5.46-4.44 9.88-9.85 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.51-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>

      <span>{children}</span>

      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
