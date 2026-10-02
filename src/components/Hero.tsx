"use client";

import { getDish } from "@/data/menu";
import { branches, facts, formatPrice } from "@/data/site";
import { useCart } from "@/lib/cart";
import { IconArrow, IconClock, IconGift, IconPin, IconPlus, IconTruck } from "./icons";

// The brand's own campaign pairing: "Ta’mga yangicha yondashuv" with the chicken Yaproq donar.
const HERO_DISH = "tovuq-yaproq-donar";

export default function Hero() {
  const { add } = useCart();
  const dish = getDish(HERO_DISH)!;
  const base = dish.variants[0];

  return (
    <section id="asosiy" className="relative overflow-hidden bg-green-900 text-paper">
      <div aria-hidden className="pointer-events-none absolute -right-48 -top-40 hidden h-[760px] w-[760px] rounded-full bg-green-800 blur-[2px] lg:block" />

      <div className="container relative grid min-h-[100svh] items-center gap-10 pb-12 pt-28 lg:grid-cols-12 lg:gap-6 lg:pb-16 lg:pt-28">
        <div className="relative z-10 lg:col-span-6">
          <h1 className="animate-fade-up font-display text-display-xl">
            Ta’mga <span className="text-yellow">yangicha</span> yondashuv.
          </h1>
          <p className="mt-6 max-w-[34rem] animate-fade-up text-[17px] leading-relaxed text-green-100 [animation-delay:100ms] sm:text-lg">
            Turk taomlari va desertlari. Donarimiz 100% mahalliy mol go‘shtidan tayyorlanadi. Toshkentdagi uchta filialimizga keling yoki eng yaqin filialdan uyingizga buyurtma bering.
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:180ms] sm:flex-row">
            <a href="#menyu" className="btn-primary h-14 px-8 text-base">
              Menyuni ko‘rish <IconArrow className="h-5 w-5" />
            </a>
            <a href="#filiallar" className="btn-outline-light h-14 px-7 text-base">
              <IconPin className="h-5 w-5" /> Eng yaqin filial
            </a>
          </div>
          <p className="mt-6 flex animate-fade-up items-center gap-2.5 font-hand text-[24px] font-bold leading-tight text-yellow [animation-delay:240ms]">
            <IconGift className="h-5 w-5 shrink-0" /> Har bir asosiy taomga salat va souslar — sovg‘a
          </p>
        </div>

        {/* Photo in the brand's drop shape, over a yellow drop */}
        <div className="relative mx-auto w-full max-w-[600px] lg:col-span-6 lg:max-w-none">
          <div className="relative aspect-square">
            <div aria-hidden className="absolute inset-[3%] animate-leaf-in rounded-[50%_0_50%_50%] bg-yellow" />
            <div className="absolute inset-[9%] animate-leaf-in overflow-hidden rounded-[50%_0_50%_50%] bg-studio shadow-[0_40px_70px_-30px_rgba(0,0,0,0.6)] [animation-delay:150ms]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dish.image}
                alt={`${dish.name}: tovuq go‘shti, kartoshka fri va lavash`}
                width={1000}
                height={746}
                fetchPriority="high"
                className="h-full w-full scale-[1.12] object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.18]"
              />
            </div>
            <div className="absolute bottom-[4%] left-0 z-10 flex animate-fade-up items-center gap-4 rounded-2xl bg-white p-3 pl-4 text-ink shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)] [animation-delay:500ms] sm:left-[2%]">
              <div className="min-w-0">
                <p className="font-display text-[19px] leading-tight text-green-900">{dish.name}</p>
                <p className="tabular text-[14px] text-ink-600">{formatPrice(base.price)} dan</p>
              </div>
              <button
                type="button"
                onClick={() => add(base.id)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-green-800 text-white transition hover:bg-green-700 active:scale-90"
                aria-label={`${dish.name}, ${base.portion} — savatga qo‘shish`}
              >
                <IconPlus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <ul className="relative z-10 grid gap-3 border-t border-white/15 pt-6 text-[14.5px] text-green-100 sm:grid-cols-3 lg:col-span-12">
          <li className="flex items-center gap-2.5">
            <IconTruck className="h-5 w-5 shrink-0 text-yellow" /> Eng yaqin filialdan 1 soat ichida yetkazamiz
          </li>
          <li className="flex items-center gap-2.5">
            <IconPin className="h-5 w-5 shrink-0 text-yellow" /> {branches.map((b) => b.name).join(" · ")}
          </li>
          <li className="flex items-center gap-2.5">
            <IconClock className="h-5 w-5 shrink-0 text-yellow" /> Har kuni {facts.hours}
          </li>
        </ul>
      </div>
    </section>
  );
}
