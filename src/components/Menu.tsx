"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { categories, dishes, type CategoryId, type Dish } from "@/data/menu";
import { formatPrice } from "@/data/site";
import AddToCart from "./AddToCart";
import DishVisual from "./DishVisual";
import SectionHeading from "./SectionHeading";
import { IconClose, IconFlame, IconLeaf, IconSearch } from "./icons";

const tagLabel: Record<NonNullable<Dish["tags"]>[number], { text: string; cls: string }> = {
  top: { text: "Xit", cls: "bg-ember text-white" },
  yangi: { text: "Yangi", cls: "bg-leaf text-forest-900" },
  achchiq: { text: "Achchiq", cls: "bg-[#C8281E]/10 text-[#B0221A]" },
  vegetarian: { text: "Vegetarian", cls: "bg-forest/10 text-forest" },
};

function DishTile({ d, index }: { d: Dish; index: number }) {
  return (
    <li
      className="group grid animate-fade-up grid-cols-[108px_1fr] gap-4 rounded-3xl bg-cream-50 p-3.5 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgba(23,63,46,0.45)] sm:flex sm:flex-col sm:p-4"
      style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream-200/60 sm:rounded-[22px]">
        <DishVisual dish={d} className="h-full w-full p-1.5 transition-transform duration-700 ease-out group-hover:rotate-[10deg] group-hover:scale-105 sm:p-4" />
        {d.tags && (
          <div className="absolute left-2 top-2 hidden flex-wrap gap-1.5 sm:flex">
            {d.tags.map((t) => (
              <span key={t} className={`rounded-full px-2.5 py-1 text-[11.5px] font-bold ${tagLabel[t].cls}`}>
                {tagLabel[t].text}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col sm:px-1 sm:pb-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[20px] leading-tight sm:text-[22px]">{d.name}</h3>
          <span className="mt-1 shrink-0 text-[13px] text-ink-400">{d.portion}</span>
        </div>
        {d.tags && (
          <div className="mt-1.5 flex flex-wrap gap-1.5 sm:hidden">
            {d.tags.map((t) => (
              <span key={t} className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${tagLabel[t].cls}`}>{tagLabel[t].text}</span>
            ))}
          </div>
        )}
        <p className="mt-1.5 line-clamp-3 text-[14px] leading-snug text-ink-500 sm:mt-2">{d.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3 sm:pt-5">
          <p className="text-[16px] font-bold sm:text-[17px]">{formatPrice(d.price)}</p>
          <AddToCart id={d.id} name={d.name} />
        </div>
      </div>
    </li>
  );
}

export default function Menu() {
  const [active, setActive] = useState<CategoryId>("donar");
  const [query, setQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onSelect = (e: Event) => {
      setQuery("");
      setActive((e as CustomEvent<CategoryId>).detail);
    };
    window.addEventListener("yaproq:category", onSelect);
    return () => window.removeEventListener("yaproq:category", onSelect);
  }, []);

  // Keep the active tab visible inside the horizontal scroller.
  useEffect(() => {
    // (Scrolls only the tab row — scrollIntoView would also move the page.)
    const row = tabsRef.current;
    const el = row?.querySelector<HTMLElement>(`[data-cat="${active}"]`);
    if (row && el) row.scrollTo({ left: el.offsetLeft - row.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  const q = query.trim().toLowerCase();
  const list = useMemo(
    () => (q ? dishes.filter((d) => (d.name + " " + d.description).toLowerCase().includes(q)) : dishes.filter((d) => d.category === active)),
    [q, active],
  );
  const counts = useMemo(() => Object.fromEntries(categories.map((c) => [c.id, dishes.filter((d) => d.category === c.id).length])), []);

  return (
    <section id="menyu" aria-labelledby="menu-title" className="bg-cream-100 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          id="menu-title"
          eyebrow="Menyu"
          title={<>Nima yeymiz <span className="italic text-forest">bugun?</span></>}
          lead="Kategoriyani tanlang yoki taom nomini yozing. Narxlar barcha filiallarda bir xil."
        />
      </div>

      {/* Sticky category bar */}
      <div className="sticky top-[72px] z-30 mt-10 border-y border-ink/10 bg-cream-100/95 backdrop-blur-md">
        <div className="container flex items-center gap-3 py-3">
          <div ref={tabsRef} role="tablist" aria-label="Menyu kategoriyalari" className="no-scrollbar relative -mx-1 flex flex-1 snap-x gap-1.5 overflow-x-auto px-1">
            {categories.map((c) => {
              const on = !q && c.id === active;
              return (
                <button
                  key={c.id}
                  data-cat={c.id}
                  role="tab"
                  aria-selected={on}
                  aria-controls="menu-panel"
                  onClick={() => {
                    setQuery("");
                    setActive(c.id);
                  }}
                  className={`flex h-11 shrink-0 snap-start items-center gap-2 rounded-full px-4 text-[15px] font-semibold transition-all duration-300 ${
                    on ? "bg-forest text-cream" : "text-ink-600 hover:bg-ink/5"
                  }`}
                >
                  {c.name}
                  <span className={`text-[12px] font-bold ${on ? "text-leaf" : "text-ink-400"}`}>{counts[c.id]}</span>
                </button>
              );
            })}
          </div>
          <label className="relative hidden shrink-0 md:block">
            <span className="sr-only">Taom qidirish</span>
            <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Qidirish…"
              className="h-11 w-56 rounded-full border border-ink/10 bg-cream-50 pl-10 pr-4 text-[15px] outline-none transition placeholder:text-ink-400 focus:w-72 focus:border-forest/40"
            />
          </label>
        </div>
      </div>

      <div className="container pt-8">
        {/* mobile search */}
        <label className="relative mb-6 block md:hidden">
          <span className="sr-only">Taom qidirish</span>
          <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Donar, pide, ayron…"
            className="h-12 w-full rounded-full border border-ink/10 bg-cream-50 pl-11 pr-4 text-base outline-none focus:border-forest/40"
          />
        </label>

        <div className="mb-6 flex items-center justify-between gap-4 text-[14px] text-ink-500">
          <p aria-live="polite">
            {q ? (
              <>
                «{query}» bo‘yicha <b className="text-ink">{list.length}</b> ta natija
              </>
            ) : (
              <>
                <b className="text-ink">{categories.find((c) => c.id === active)?.name}</b> — {list.length} ta taom
              </>
            )}
          </p>
          <p className="hidden items-center gap-4 sm:flex">
            <span className="inline-flex items-center gap-1.5"><IconFlame className="h-4 w-4 text-ember" /> Ko‘mirda</span>
            <span className="inline-flex items-center gap-1.5"><IconLeaf className="h-4 w-4 text-forest-500" /> Har kuni yangi</span>
          </p>
        </div>

        <div id="menu-panel" role="tabpanel">
          {list.length ? (
            <ul key={q ? `q-${q}` : active} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
              {list.map((d, i) => (
                <DishTile key={d.id} d={d} index={i} />
              ))}
            </ul>
          ) : (
            <div className="rounded-3xl border border-dashed border-ink/15 px-6 py-16 text-center">
              <p className="font-display text-2xl">Hech narsa topilmadi</p>
              <p className="mt-2 text-ink-500">Boshqa so‘z bilan qidirib ko‘ring yoki kategoriyani tanlang.</p>
              <button type="button" onClick={() => setQuery("")} className="btn-ghost mt-6">
                <IconClose className="h-4 w-4" /> Qidiruvni tozalash
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
