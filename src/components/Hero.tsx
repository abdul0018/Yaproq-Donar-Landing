"use client";

import { getDish } from "@/data/menu";
import { formatPrice } from "@/data/site";
import { useCart } from "@/lib/cart";
import { flyToCart } from "@/lib/fly";
import { IconArrow, IconGift, IconPin, IconPlus } from "./icons";
import Perde from "./Perde";

// The brand's own campaign pairing: "Ta’mga yangicha yondashuv" with the chicken Yaproq donar.
const HERO_DISH = "tovuq-yaproq-donar";

export default function Hero() {
  const { add } = useCart();
  const dish = getDish(HERO_DISH)!;
  const base = dish.variants[0];

  return (
    <section id="asosiy" className="relative overflow-hidden bg-green-950 text-paper">
      <div className="container relative grid min-h-[100svh] items-center gap-10 pb-12 pt-28 lg:grid-cols-12 lg:gap-6 lg:pb-16 lg:pt-28">
        <div className="relative z-10 lg:col-span-6">
          {/* Focal entrance: each line rises out of its own mask, in reading order. */}
          <h1 className="font-display text-display-xl">
            <span className="line-mask"><span className="line-rise">Ta’mga</span></span>{" "}
            <span className="line-mask"><span className="line-rise text-yellow [animation-delay:90ms]">yangicha</span></span>{" "}
            <span className="line-mask"><span className="line-rise [animation-delay:180ms]">yondashuv.</span></span>
          </h1>
          <p className="mt-6 max-w-[34rem] animate-fade-up text-[17px] leading-relaxed text-green-100 [animation-delay:320ms] sm:text-lg">
            Turk taomlari va desertlari. Donarimiz 100% mahalliy mol go‘shtidan tayyorlanadi. Toshkentdagi uchta filialimizdan biriga tashrif buyuring yoki eng yaqin filialdan uyingizgacha buyurtma bering.
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:400ms] sm:flex-row">
            <a href="#menyu" className="btn-primary h-14 px-8 text-base">
              Menyuni ko‘rish <IconArrow className="h-5 w-5" />
            </a>
            <a href="#filiallar" className="btn-outline-light h-14 px-7 text-base">
              <IconPin className="h-5 w-5" /> Eng yaqin filial
            </a>
          </div>
          <p className="mt-6 flex animate-fade-up items-center gap-2.5 font-display text-[19px] leading-tight text-yellow [animation-delay:480ms]">
            <IconGift className="h-5 w-5 shrink-0" /> Har bir asosiy taomga salat va souslar — sovg‘a
          </p>
        </div>

        {/* The show: the lamp lights the screen, then the cook, the spit and the plate rise on their rods. */}
        <div className="relative mx-auto w-full max-w-[640px] lg:col-span-6 lg:max-w-none">
          <Perde id="hero" className="block h-auto w-full drop-shadow-[0_40px_50px_rgba(0,0,0,0.45)]" />
          <div className="relative z-10 -mt-8 ml-auto flex w-fit animate-fade-up items-center gap-4 rounded-2xl bg-paper p-3 pl-5 text-ink shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)] [animation-delay:1.5s] sm:-mt-12 sm:mr-8">
            <div className="min-w-0">
              <p className="font-display text-[19px] leading-tight text-green-900">{dish.name}</p>
              <p className="tabular text-[14px] text-ink-600">{formatPrice(base.price)} dan</p>
            </div>
            <button
              type="button"
              onClick={(e) => { add(base.id); flyToCart(e.currentTarget); }}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-green-800 text-white transition hover:bg-green-700 active:scale-90"
              aria-label={`${dish.name}, ${base.portion} — savatga qo‘shish`}
            >
              <IconPlus className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
