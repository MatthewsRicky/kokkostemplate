import Link from "next/link";

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Story",
    href: "/story",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Cakes",
    href: "/cakes",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-kokkos-charcoal text-kokkos-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-serif text-5xl sm:text-6xl">KOKKOS</p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-kokkos-cream/60">
              Café & Bistro in Diani Beach. Fresh food, good coffee and flavours
              inspired by the world.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-kokkos-cream/40">
              Explore
            </p>

            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-kokkos-cream/40">
              Find Us
            </p>

            <address className="not-italic text-sm leading-7 text-kokkos-cream/70">
              Diani Beach Road
              <br />
              Diani Beach, Kenya
              <br />
              <br />
              <a
                href="tel:+254721565567"
                className="transition-opacity hover:opacity-60"
              >
                +254 721 565 567
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-kokkos-cream/10 pt-6 text-[10px] uppercase tracking-[0.18em] text-kokkos-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kokkos Café & Bistro</p>

          <p>Diani Beach · Kenya</p>
        </div>
      </div>
    </footer>
  );
}
