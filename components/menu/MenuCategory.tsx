import type { MenuCategory as MenuCategoryType } from "@/data/menu";
import MenuItem from "./MenuItem";

type MenuCategoryProps = {
  category: MenuCategoryType;
};

export default function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section id={category.slug} className="scroll-mt-[174px]">
      <div className="mb-6 flex flex-col gap-2 border-b border-kokkos-charcoal pb-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-serif text-4xl sm:text-5xl">{category.name}</h2>

        {category.description && (
          <p className="max-w-xs text-xs leading-5 text-kokkos-charcoal/50 sm:text-right">
            {category.description}
          </p>
        )}
      </div>

      <div>
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
