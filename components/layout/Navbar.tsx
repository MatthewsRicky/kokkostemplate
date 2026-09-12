"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="relative z-20 font-serif text-3xl font-semibold tracking-[0.08em]"
          onClick={() => setMenuOpen(false)}
        >
          KOKKOS
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="border border-current px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-kokkos-charcoal hover:text-kokkos-cream"
          >
            Visit Us
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="relative z-20 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-6 bg-current transition-transform ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {menuOpen && (
          <div className="fixed inset-0 flex min-h-screen flex-col bg-kokkos-cream px-6 pb-10 pt-32 lg:hidden">
            <div className="flex flex-col">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-kokkos-line py-5 font-serif text-4xl"
                >
                  <span className="mr-4 text-xs font-sans tracking-widest text-kokkos-green">
                    0{index + 1}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-kokkos-charcoal/50">
                Diani Beach · Kenya
              </p>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex border border-kokkos-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em]"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
