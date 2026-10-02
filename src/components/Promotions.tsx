"use client";

import { getDish } from "@/data/menu";
import { contacts, formatPrice } from "@/data/site";
import AddToCart from "./AddToCart";
import DishVisual from "./DishVisual";
import Reveal from "./Reveal";
import { selectCategory } from "./CategoryStrip";
import { IconArrowUpRight, IconDevice, IconGift, IconTruck } from "./icons";
import TornEdge from "./TornEdge";

// Offers as published on yaproq-donar.uz (homepage slider and About page). Old prices are the
// crossed-out prices from the official set banners.
const setOffers = [
  { id: "pita-set", oldPrice: 75500, badge: "−25%" },
  { id: "durum-set", oldPrice: 73500, badge: "−25%" },
];

export default function Promotions() {
  return (
    <section id="aksiyalar" aria-labelledby="promo-title" className="relative bg-yellow py-20 text-green-950 sm:py-28">
      <TornEdge className="text-yellow" seed={4} />
      <div className="container">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="promo-title" className="font-display text-display-lg text-green-900">
            Aksiyalar
          </h2>
          <p className="max-w-md text-[17px] leading-relaxed text-green-950/80">Yangi tovuqli setlar chegirmada, birinchi yetkazib berish esa bepul.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {setOffers.map((o, i) => {
            const dish = getDish(o.id)!;
            const v = dish.variants[0];
            return (
              <Reveal key={o.id} delay={i * 100} as="article" className="group grid overflow-hidden rounded-3xl bg-green-900 text-white sm:grid-cols-[1fr_1.05fr]">
                <div className="relative aspect-[4/3] overflow-hidden bg-studio sm:aspect-auto">
                  <DishVisual dish={dish} className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" />
                  <span className="tabular absolute left-4 top-4 rounded-full bg-yellow px-3.5 py-1.5 font-display text-[18px] text-green-950">{o.badge}</span>
                </div>
                <div className="flex flex-col gap-4 p-6 sm:p-7">
                  <div>
                    <h3 className="font-display text-[30px] leading-none">{dish.name.replace(" (tovuqli)", "")}</h3>
                    <p className="mt-1 font-hand text-[24px] font-bold leading-none text-yellow">Yangi · tovuqli</p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-green-100">{dish.description}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-4">
                    <div>
                      <s className="tabular text-[14px] text-green-100/80">{formatPrice(o.oldPrice)}</s>
                      <p className="tabular font-display text-[30px] leading-none">{formatPrice(v.price)}</p>
                    </div>
                    <AddToCart variantId={v.id} name={dish.name} size="lg" tone="yellow" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <ul className="mt-14 divide-y-2 divide-green-900/15 border-y-2 border-green-900/15">
          <Reveal as="li" className="grid items-center gap-4 py-7 md:grid-cols-[auto_1fr_auto] md:gap-8">
            <IconTruck className="h-10 w-10 text-green-800" />
            <div>
              <h3 className="font-display text-[28px] leading-tight text-green-900 sm:text-[34px]">Birinchi yetkazib berish — bepul</h3>
              <p className="mt-1 text-[15.5px] text-green-950/80">Buyurtma eng yaqin filialdan 1 soat ichida yetkaziladi. Keyingi buyurtmalarda narx manzilingizga bog‘liq.</p>
            </div>
            <a href={contacts.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-green w-fit">
              Buyurtma berish <IconArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal as="li" className="grid items-center gap-4 py-7 md:grid-cols-[auto_1fr_auto] md:gap-8">
            <IconDevice className="h-10 w-10 text-green-800" />
            <div>
              <h3 className="font-display text-[28px] leading-tight text-green-900 sm:text-[34px]">Har bir buyurtmadan 2% keshbek</h3>
              <p className="mt-1 text-[15.5px] text-green-950/80">YAPROQ ilovasida buyurtma bering: aksiyalar haqida birinchi bo‘lib bilasiz va filialga borishdan oldin buyurtma qila olasiz.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={contacts.appStore} target="_blank" rel="noopener noreferrer" className="btn-green">App Store</a>
              <a href={contacts.googlePlay} target="_blank" rel="noopener noreferrer" className="btn-green">Google Play</a>
            </div>
          </Reveal>
          <Reveal as="li" className="grid items-center gap-4 py-7 md:grid-cols-[auto_1fr_auto] md:gap-8">
            <IconGift className="h-10 w-10 text-green-800" />
            <div>
              <h3 className="font-display text-[28px] leading-tight text-green-900 sm:text-[34px]">Asosiy taomga salat va souslar — sovg‘a</h3>
              <p className="mt-1 text-[15.5px] text-green-950/80">Asosiy taomlardan birini buyurtma qilsangiz, salat va souslarni bonus sifatida qo‘shib beramiz.</p>
            </div>
            <button type="button" onClick={() => selectCategory("asosiy")} className="btn-green w-fit">Asosiy taomlar</button>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
