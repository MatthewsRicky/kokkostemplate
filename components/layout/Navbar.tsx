"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navigationItems } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-kokkos-line bg-kokkos-cream/95 text-kokkos-charcoal shadow-sm backdrop-blur-md"
          : "bg-transparent text-kokkos-cream"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="relative z-10 font-serif text-3xl tracking-[0.08em]"
          onClick={() => setMenuOpen(false)}
        >
          KOKKOS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden border border-current px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all hover:bg-current hover:text-kokkos-cream md:block"
          >
            Find Us
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-1/2 block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 block h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        className="overflow-hidden border-t border-current/10 bg-kokkos-cream text-kokkos-charcoal md:hidden"
      >
        <nav className="flex flex-col px-6 py-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-kokkos-line py-4 font-serif text-2xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
