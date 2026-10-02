"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { categories, dishes, type CategoryId, type Dish } from "@/data/menu";
import { formatPrice } from "@/data/site";
import AddToCart from "./AddToCart";
import DishVisual from "./DishVisual";
import SectionHeading from "./SectionHeading";
import SizeSwitch from "./SizeSwitch";
import { IconClose, IconGift, IconSearch } from "./icons";

const tagLabel: Record<NonNullable<Dish["tags"]>[number], { text: string; cls: string }> = {
  yangi: { text: "Yangi", cls: "bg-yellow text-green-950" },
  bepul: { text: "Bepul", cls: "bg-green-800 text-white" },
};

function DishTile({ d, index }: { d: Dish; index: number }) {
  const [v, setV] = useState(d.variants[0]);
  return (
    <li
      className="group grid animate-fade-up grid-cols-[104px_1fr] gap-x-4 gap-y-3 border-b border-green-800/10 pb-5 last:border-0 sm:flex sm:flex-col sm:border-0 sm:pb-0"
      style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
    >
      <div className={`relative aspect-square overflow-hidden rounded-2xl ${index % 2 ? "bg-paper-deep" : "bg-sage"} sm:aspect-[4/3] sm:rounded-[22px]`}>
        <DishVisual dish={d} onTile className="transition-transform duration-700 ease-out group-hover:scale-105" />
        {d.tags && (
          <div className="absolute left-2 top-2 hidden gap-1.5 sm:flex">
            {d.tags.map((t) => (
              <span key={t} className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${tagLabel[t].cls}`}>
                {tagLabel[t].text}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="contents sm:flex sm:min-w-0 sm:flex-1 sm:flex-col sm:gap-3">
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[20px] leading-tight text-green-900 sm:text-[22px]">{d.name}</h3>
            {v.portion && d.variants.length === 1 && <span className="tabular mt-1 shrink-0 text-[13px] text-ink-500">{v.portion}</span>}
          </div>
          {d.tags && (
            <div className="mt-1.5 flex gap-1.5 sm:hidden">
              {d.tags.map((t) => (
                <span key={t} className={`rounded-full px-2 py-0.5 text-[11.5px] font-bold ${tagLabel[t].cls}`}>{tagLabel[t].text}</span>
              ))}
            </div>
          )}
          <p className="mt-1.5 text-[14px] leading-snug text-ink-600">{d.description}</p>
        </div>
        <div className="col-span-2 empty:hidden">
          <SizeSwitch dish={d} value={v} onChange={setV} />
        </div>
        <div className="col-span-2 mt-auto flex flex-wrap items-center justify-between gap-2">
          <p className="tabular text-[16px] font-extrabold text-green-900 sm:text-[17px]">{formatPrice(v.price)}</p>
          {v.price > 0 ? <AddToCart variantId={v.id} name={d.name} /> : <span className="text-[13px] font-semibold text-ink-500">Asosiy taomga qo‘shib beriladi</span>}
        </div>
      </div>
    </li>
  );
}

/** Lower-cases and folds Uzbek apostrophe variants so "go'sht" matches "go‘sht". */
const normalize = (t: string) => t.toLowerCase().replace(/[‘’ʻʼ`´]/g, "'");

export default function Menu() {
  const [active, setActive] = useState<CategoryId>("asosiy");
  const [query, setQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [moreRight, setMoreRight] = useState(false);

  // Show the edge fade only while more tabs are hidden to the right.
  useEffect(() => {
    const row = tabsRef.current;
    if (!row) return;
    const update = () => setMoreRight(row.scrollLeft + row.clientWidth < row.scrollWidth - 4);
    update();
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      row.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
    () => (q ? dishes.filter((d) => normalize(d.name + " " + d.description).includes(normalize(q))) : dishes.filter((d) => d.category === active)),
    [q, active],
  );
  const counts = useMemo(() => Object.fromEntries(categories.map((c) => [c.id, dishes.filter((d) => d.category === c.id).length])), []);

  return (
    <section id="menyu" aria-labelledby="menu-title" className="bg-paper py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          id="menu-title"
          title={<>Bugun nima <span className="text-green-500">yeymiz?</span></>}
          lead="Kategoriyani tanlang yoki taom nomini yozing. Ko‘p taomlar bir necha o‘lchamda: go‘sht miqdorini o‘zingiz tanlaysiz."
        />
      </div>

      {/* Sticky category bar */}
      <div className="sticky top-[72px] z-30 mt-10 border-y border-green-800/10 bg-paper/95 backdrop-blur-md">
        <div className="container flex items-center gap-3 py-3">
          <div ref={tabsRef} role="tablist" aria-label="Menyu kategoriyalari" className={`no-scrollbar relative -mx-1 flex min-w-0 flex-1 snap-x gap-1.5 overflow-x-auto px-1 ${moreRight ? "pr-10 [mask-image:linear-gradient(to_right,#000_calc(100%-48px),transparent)]" : ""}`}>
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
                    on ? "bg-green-800 text-white" : "text-ink-600 hover:bg-green-800/5"
                  }`}
                >
                  {c.name}
                  <span className={`tabular text-[12px] font-bold ${on ? "text-yellow" : "text-ink-500"}`}>{counts[c.id]}</span>
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
              className="h-11 w-48 rounded-full border border-green-800/15 bg-white pl-10 pr-4 text-[15px] outline-none transition placeholder:text-ink-500 focus:w-64 focus:border-green-800"
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
            placeholder="Donar, pide, sho‘rva…"
            className="h-12 w-full rounded-full border border-green-800/15 bg-white pl-11 pr-4 text-base outline-none placeholder:text-ink-500 focus:border-green-800"
          />
        </label>

        <div className="mb-6 flex items-center justify-between gap-4 text-[14px] text-ink-500">
          <p aria-live="polite">
            {q ? (
              <>
                «{query}» bo‘yicha <b className="text-green-900">{list.length}</b> ta natija
              </>
            ) : (
              <>
                <b className="text-green-900">{categories.find((c) => c.id === active)?.name}</b> — {list.length} ta taom
              </>
            )}
          </p>
          <p className="hidden items-center gap-2 font-semibold text-green-800 sm:flex">
            <IconGift className="h-4 w-4" /> Asosiy taomga salat va souslar sovg‘a
          </p>
        </div>

        <div id="menu-panel" role="tabpanel">
          {list.length ? (
            <ul key={q ? `q-${q}` : active} className="grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((d, i) => (
                <DishTile key={d.id} d={d} index={i} />
              ))}
            </ul>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-green-800/15 px-6 py-16 text-center">
              <p className="font-display text-2xl text-green-900">«{query}» topilmadi</p>
              <p className="mt-2 text-ink-600">Boshqacha yozib ko‘ring, masalan «donar» yoki «pide».</p>
              <button type="button" onClick={() => setQuery("")} className="btn-outline mt-6">
                <IconClose className="h-4 w-4" /> Qidiruvni tozalash
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
