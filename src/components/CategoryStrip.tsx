"use client";

import { categories, type CategoryId } from "@/data/menu";

export const selectCategory = (id: CategoryId) => {
  window.dispatchEvent(new CustomEvent<CategoryId>("yaproq:category", { detail: id }));
  document.getElementById("menyu")?.scrollIntoView({ behavior: "smooth" });
};

/** Endless ribbon of categories; each one jumps straight to that part of the menu. */
export default function CategoryStrip() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {categories.map((c) => (
        <li key={c.id} className="flex items-center">
          <button
            type="button"
            tabIndex={hidden ? -1 : 0}
            onClick={() => selectCategory(c.id)}
            className="px-6 py-5 font-display text-[26px] italic leading-none text-forest transition-colors hover:text-ember sm:text-[32px]"
          >
            {c.name}
          </button>
          <span aria-hidden className="text-ember">✺</span>
        </li>
      ))}
    </ul>
  );
  return (
    <nav aria-label="Taom turlari" className="group relative overflow-hidden border-y border-forest/10 bg-cream-50">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </nav>
  );
}
