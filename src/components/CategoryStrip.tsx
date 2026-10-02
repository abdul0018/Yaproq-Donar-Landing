"use client";

import { categories, type CategoryId } from "@/data/menu";
import { IconSprout } from "./icons";

export const selectCategory = (id: CategoryId) => {
  window.dispatchEvent(new CustomEvent<CategoryId>("yaproq:category", { detail: id }));
  document.getElementById("menyu")?.scrollIntoView({ behavior: "smooth" });
};

/** Endless yellow ribbon of categories; each one jumps straight to that part of the menu. */
export default function CategoryStrip() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {categories.map((c) => (
        <li key={c.id} className="flex items-center">
          <button
            type="button"
            tabIndex={hidden ? -1 : 0}
            onClick={() => selectCategory(c.id)}
            className="px-6 py-5 font-display text-[26px] font-black leading-none tracking-tight text-green-900 transition-colors hover:text-green-600 sm:text-[30px]"
          >
            {c.name}
          </button>
          <IconSprout aria-hidden className="h-6 w-6 text-green-800" />
        </li>
      ))}
    </ul>
  );
  return (
    <nav aria-label="Taom turlari" className="group relative overflow-hidden bg-yellow">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </nav>
  );
}
