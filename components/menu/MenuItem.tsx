import type { MenuItem as MenuItemType } from "@/data/menu";

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <article className="group border-b border-kokkos-line py-6">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-serif text-2xl text-kokkos-charcoal sm:text-3xl">
              {item.name}
            </h3>

            {item.vegetarian && (
              <span className="rounded-full border border-kokkos-green/30 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-kokkos-green">
                Vegetarian
              </span>
            )}
          </div>

          {item.description && (
            <p className="mt-2 max-w-2xl text-sm leading-6 text-kokkos-charcoal/55">
              {item.description}
            </p>
          )}
        </div>

        <div className="shrink-0 text-right">
          {item.price && (
            <span className="font-sans text-sm font-semibold text-kokkos-green">
              KSh {item.price.toLocaleString()}
            </span>
          )}

          {item.priceLabel && !item.price && (
            <span className="max-w-[180px] text-xs font-semibold leading-5 text-kokkos-green sm:max-w-none">
              {item.priceLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
