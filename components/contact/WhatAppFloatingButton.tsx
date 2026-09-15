import Link from "next/link";
import { contact } from "@/data/contact";

export default function WhatsAppFloatingButton() {
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    contact.whatsappMessages.general,
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kokkos Café & Bistro on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-kokkos-green text-kokkos-cream shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-kokkos-green-dark md:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.54 0 .24 5.3.24 11.82c0 2.08.54 4.1 1.57 5.89L.14 24l6.43-1.68a11.77 11.77 0 0 0 5.47 1.35h.01c6.51 0 11.81-5.3 11.81-11.82 0-3.15-1.23-6.12-3.34-8.37ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.84 9.84 0 0 1-1.51-5.2C2.13 6.38 6.57 1.94 12.05 1.94a9.8 9.8 0 0 1 6.97 2.89 9.8 9.8 0 0 1 2.88 6.99c0 5.46-4.44 9.88-9.85 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.51-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </Link>
  );
}
