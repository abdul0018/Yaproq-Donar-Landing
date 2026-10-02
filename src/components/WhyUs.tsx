"use client";

import { useState } from "react";
import DishArt, { type ArtKind } from "./DishArt";
import SectionHeading from "./SectionHeading";

const reasons: Array<{ title: string; short: string; text: string; stat: string; statLabel: string; art: ArtKind; seed: string }> = [
  {
    title: "Yangi mahsulot",
    short: "Har tong yetkazib beriladi",
    text: "Sabzavot va ko‘katlar har tong bozordan keladi. Go‘sht muzlatilmaydi — shu kuni marinadlanadi, shu kuni sotiladi.",
    stat: "0",
    statLabel: "muzlatilgan go‘sht",
    art: "salad",
    seed: "why-salad",
  },
  {
    title: "Ko‘mir va olov",
    short: "Gaz emas, haqiqiy olov",
    text: "Tovuq va kabobni ko‘mirda pishiramiz. Donar vertikal olovda sekin aylanadi — tashqarisi qarsildoq, ichi suvli.",
    stat: "12",
    statLabel: "soat marinad",
    art: "chicken",
    seed: "why-chicken",
  },
  {
    title: "To‘yimli porsiya",
    short: "Bitta donar — to‘liq ovqat",
    text: "Klassik donarimiz 380 gramm. Katta donar 560 gramm. Och qolmaysiz — bunga kafolat beramiz.",
    stat: "380 g",
    statLabel: "klassik donar",
    art: "wrap",
    seed: "why-wrap",
  },
  {
    title: "Tez xizmat",
    short: "O‘rtacha 12 daqiqa",
    text: "Buyurtma kassada berilgandan keyin o‘rtacha 12 daqiqada tayyor. Olib ketish uchun oldindan buyurtma bering — navbatsiz.",
    stat: "12",
    statLabel: "daqiqada tayyor",
    art: "shawarma",
    seed: "why-shaurma",
  },
  {
    title: "Qulay joylashuv",
    short: "Uch tumanda, metro yonida",
    text: "Chilonzor, Yunusobod va Buyuk Ipak Yo‘li. Ikkitasida avtoturargoh, bittasi 24 soat ishlaydi.",
    stat: "24/7",
    statLabel: "Buyuk Ipak Yo‘li filiali",
    art: "plate",
    seed: "why-plate",
  },
  {
    title: "Yetkazib berish",
    short: "Shahar bo‘ylab 45 daqiqada",
    text: "Eng yaqin filialdan issiq holda yetkazamiz. 150 000 so‘mdan ortiq buyurtmada yetkazib berish bepul.",
    stat: "45",
    statLabel: "daqiqa ichida",
    art: "set",
    seed: "why-set",
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);
  const r = reasons[active];

  return (
    <section aria-labelledby="why-title" className="grain relative overflow-hidden bg-forest py-20 text-cream sm:py-28">
      <div className="container">
        <SectionHeading id="why-title" tone="light" eyebrow="Nega aynan YAPROQ" title={<>Olti sabab, <span className="italic text-leaf">bitta ta’m</span></>} />

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12">
          <ol className="lg:col-span-7">
            {reasons.map((x, i) => {
              const on = i === active;
              return (
                <li key={x.title} className="border-b border-cream/15 first:border-t">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                    aria-expanded={on}
                    className="group flex w-full items-center gap-5 py-5 text-left sm:gap-8 sm:py-6"
                  >
                    <span className={`w-8 shrink-0 font-display text-[15px] italic transition-colors ${on ? "text-ember-400" : "text-cream/40"}`}>0{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className={`block font-display text-[28px] leading-none tracking-tight transition-all duration-500 sm:text-[40px] ${on ? "translate-x-0 text-cream" : "text-cream/55 group-hover:text-cream/80"}`}>
                        {x.title}
                      </span>
                      <span className="mt-2 block text-[14.5px] text-cream/55">{x.short}</span>
                    </span>
                    <span aria-hidden className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${on ? "rotate-45 border-ember bg-ember" : "border-cream/25"}`}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                  {/* mobile detail */}
                  <div className={`grid transition-all duration-500 ease-out lg:hidden ${on ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <p className="overflow-hidden pl-[52px] text-[15.5px] leading-relaxed text-cream/75 sm:pl-16">{x.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32 overflow-hidden rounded-3xl bg-forest-900/60 p-8">
              <div key={active} className="animate-fade-up">
                <div className="mx-auto aspect-square w-[78%]">
                  <DishArt kind={r.art} seed={r.seed} className="h-full w-full animate-float" />
                </div>
                <div className="mt-6 flex items-end gap-4 border-t border-cream/15 pt-6">
                  <p className="font-display text-[64px] leading-none text-leaf">{r.stat}</p>
                  <p className="pb-2 text-[14px] leading-snug text-cream/60">{r.statLabel}</p>
                </div>
                <p className="mt-4 text-[16px] leading-relaxed text-cream/80">{r.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
