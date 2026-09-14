"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-kokkos-line bg-kokkos-cream/95 shadow-sm backdrop-blur-xl"
          : "border-kokkos-line/70 bg-kokkos-cream/90 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Kokkos Cafe Bistro home"
          onClick={() => setMenuOpen(false)}
          className="relative z-10 flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Kokkos Cafe Bistro"
            width={100}
            height={48}
            priority
            className="h-auto w-[82px] object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-charcoal transition-colors duration-300 hover:text-kokkos-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden border border-kokkos-charcoal/30 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 text-kokkos-charcoal hover:text-kokkos-cream hover:border-kokkos-charcoal hover:bg-kokkos-charcoal md:block"
          >
            Find Us
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-10 flex h-10 w-10 items-center justify-center text-kokkos-charcoal md:hidden"
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

      {/* Mobile navigation */}
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="overflow-hidden border-t border-kokkos-line bg-kokkos-cream/98 backdrop-blur-xl md:hidden"
      >
        <nav className="flex flex-col px-6 py-5" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-kokkos-line py-4 font-serif text-2xl text-kokkos-charcoal transition-colors hover:text-kokkos-green"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-between bg-kokkos-charcoal px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-kokkos-cream transition-colors hover:bg-kokkos-green-dark"
          >
            Find Us
            <span>→</span>
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}
