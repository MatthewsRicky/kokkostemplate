"use client";

import { useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/data/menu";

type MenuFiltersProps = {
  categories: MenuCategory[];
};

export default function MenuFilters({ categories }: MenuFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const containerRef = useRef<HTMLDivElement>(null);

  const categoryRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories
        .map((category) => {
          const element = document.getElementById(category.slug);

          if (!element) return null;

          const rect = element.getBoundingClientRect();

          return {
            slug: category.slug,
            top: rect.top,
          };
        })
        .filter(
          (
            section,
          ): section is {
            slug: string;
            top: number;
          } => section !== null,
        );

      if (!sections.length) return;

      const threshold = 190;

      const visibleSections = sections.filter(
        (section) => section.top <= threshold,
      );

      if (!visibleSections.length) {
        setActiveCategory("all");
        return;
      }

      const current = visibleSections[visibleSections.length - 1];

      setActiveCategory(current.slug);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [categories]);

  useEffect(() => {
    const button = categoryRefs.current[activeCategory];

    const container = containerRef.current;

    if (!button || !container) return;

    const buttonLeft = button.offsetLeft;
    const buttonWidth = button.offsetWidth;

    const containerWidth = container.offsetWidth;

    const targetScroll = buttonLeft - containerWidth / 2 + buttonWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  }, [activeCategory]);

  const scrollToCategory = (slug: string) => {
    if (slug === "all") {
      setActiveCategory("all");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const element = document.getElementById(slug);

    if (!element) return;

    setActiveCategory(slug);

    const navbarHeight = 72;
    const categoryBarHeight = 54;
    const spacing = 24;

    const offset = navbarHeight + categoryBarHeight + spacing;

    const target =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-[72px] z-40 border-y border-kokkos-line bg-kokkos-cream/95 backdrop-blur-md">
      <div
        ref={containerRef}
        className="mx-auto overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="mx-auto flex min-w-max max-w-[1600px] gap-1 px-6 py-2 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => scrollToCategory("all")}
            className={`shrink-0 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors ${
              activeCategory === "all"
                ? "bg-kokkos-charcoal text-kokkos-cream"
                : "text-kokkos-charcoal/55 hover:text-kokkos-charcoal"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.slug}
              ref={(element) => {
                categoryRefs.current[category.slug] = element;
              }}
              type="button"
              onClick={() => scrollToCategory(category.slug)}
              className={`shrink-0 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                activeCategory === category.slug
                  ? "bg-kokkos-charcoal text-kokkos-cream"
                  : "text-kokkos-charcoal/55 hover:text-kokkos-charcoal"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
