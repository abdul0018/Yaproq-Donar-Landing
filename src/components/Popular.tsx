"use client";

import { useState } from "react";
import { featuredIds, getDish, type Dish } from "@/data/menu";
import { formatPrice } from "@/data/site";
import AddToCart from "./AddToCart";
import DishVisual from "./DishVisual";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SizeSwitch from "./SizeSwitch";
import { IconArrow } from "./icons";
import TornEdge from "./TornEdge";

function LeadDish({ dish }: { dish: Dish }) {
  const [v, setV] = useState(dish.variants[0]);
  return (
    <Reveal as="article" className="group relative overflow-hidden rounded-3xl bg-green-800 text-paper lg:col-span-7">
      <div className="grid h-full sm:grid-cols-[1.15fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.15fr_1fr]">
        <div className="p-3 sm:p-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-studio sm:aspect-auto sm:h-full sm:min-h-[300px] lg:aspect-[16/10] lg:h-auto xl:aspect-auto xl:h-full">
            <DishVisual dish={dish} className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]" />
          </div>
        </div>
        <div className="flex flex-col justify-end gap-5 p-6 pt-3 sm:p-8 sm:pl-4 lg:pl-8 lg:pt-4 xl:pl-4 xl:pt-8">
          <div>
            <h3 className="font-display text-display-md">{dish.name}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-green-100">
              Brendimiz nomini olgan taom: lavash ustida yupqa kesilgan mol go‘shti donari va qovurilgan kartoshka. Asosiy taom bilan salat va souslar sovg‘a.
            </p>
          </div>
          <SizeSwitch dish={dish} value={v} onChange={setV} tone="dark" />
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
            <div>
              <p className="tabular font-display text-[32px] leading-none">{formatPrice(v.price)}</p>
              {v.portion && <p className="mt-1 text-[13px] text-green-100">{v.portion} go‘sht</p>}
            </div>
            <AddToCart variantId={v.id} name={dish.name} size="lg" tone="yellow" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function SideDish({ dish, delay }: { dish: Dish; delay: number }) {
  const [v, setV] = useState(dish.variants[0]);
  return (
    <Reveal as="li" delay={delay} className="group grid grid-cols-[112px_1fr] items-start gap-5 rounded-3xl bg-white p-4 sm:grid-cols-[180px_1fr] lg:rounded-none lg:bg-transparent lg:px-0 lg:py-6 lg:first:pt-0 lg:last:pb-0">
      <div className={`aspect-square overflow-hidden rounded-2xl ${delay % 180 ? "bg-paper-deep" : "bg-sage"} sm:aspect-[4/3]`}>
        <DishVisual dish={dish} onTile className="transition-transform duration-700 ease-out group-hover:scale-110" />
      </div>
      <div className="flex min-w-0 flex-col gap-3">
        <div>
          <h3 className="font-display text-[24px] leading-tight text-green-900 sm:text-[26px]">{dish.name}</h3>
          <p className="mt-1 text-[14.5px] leading-snug text-ink-600">{dish.description}</p>
        </div>
        <SizeSwitch dish={dish} value={v} onChange={setV} />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="tabular text-[17px] font-extrabold text-green-900">{formatPrice(v.price)}</p>
          <AddToCart variantId={v.id} name={dish.name} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Popular() {
  const [lead, ...rest] = featuredIds.map((id) => getDish(id)!);
  return (
    <section aria-labelledby="signature-title" className="relative bg-paper pb-16 pt-20 sm:pb-20 sm:pt-28">
      <TornEdge className="text-paper" seed={3} />
      <div className="container">
        <SectionHeading
          id="signature-title"
          title="Yaproq’ning asosiylari"
          lead="Turk oshxonasining to‘rt klassikasi: donar, Iskender kabob, pilav ustu donar va pide."
          action={
            <a href="#menyu" className="group inline-flex items-center gap-2 text-[15px] font-bold text-green-800 underline decoration-2 underline-offset-4 hover:text-green-500">
              To‘liq menyu <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          }
        />
        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          <LeadDish dish={lead} />
          <ul className="grid gap-4 lg:col-span-5 lg:gap-0 lg:divide-y lg:divide-green-800/10">
            {rest.map((d, i) => (
              <SideDish key={d.id} dish={d} delay={i * 90} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
