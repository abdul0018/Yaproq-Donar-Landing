"use client";

import DishArt from "./DishArt";
import Reveal from "./Reveal";
import { IconArrow, IconPin } from "./icons";
import { useCart } from "@/lib/cart";

export default function FinalCta() {
  const { setOpen } = useCart();
  return (
    <section aria-labelledby="cta-title" className="bg-cream pb-20 sm:pb-28">
      <div className="container">
        <Reveal className="grain relative overflow-hidden rounded-[36px] bg-ember px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 w-[420px] opacity-95 sm:-right-10 sm:w-[520px] lg:right-0 lg:top-1/2 lg:w-[560px] lg:-translate-y-1/2">
            <div className="animate-spin-slow"><DishArt kind="wrap" seed="cta-donar" plate="dark" /></div>
          </div>
          <div className="relative max-w-xl">
            <p className="eyebrow text-white/80">Och qoldingizmi?</p>
            <h2 id="cta-title" className="mt-5 font-display text-display-lg font-medium">
              Issiq donar sizni <span className="italic">kutyapti.</span>
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/85">
              Uyga buyurtma bering — 45 daqiqada yetkazamiz. Yoki eng yaqin filialga keling: navbatsiz, issiq va yangi.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setOpen(true)} className="btn h-14 bg-ink px-8 text-base text-cream hover:bg-forest-900">
                Buyurtma berish <IconArrow className="h-5 w-5" />
              </button>
              <a href="#filiallar" className="btn h-14 border border-white/40 px-7 text-base text-white hover:bg-white/10">
                <IconPin className="h-5 w-5" /> Filialni tanlash
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
