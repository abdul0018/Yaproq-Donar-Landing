"use client";

import Reveal from "./Reveal";
import { IconArrow, IconPin } from "./icons";
import { useCart } from "@/lib/cart";

export default function FinalCta() {
  const { setOpen } = useCart();
  return (
    <section aria-labelledby="cta-title" className="bg-cream pb-20 sm:pb-28">
      <div className="container">
        <Reveal className="grain relative overflow-hidden rounded-[36px] bg-ember px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-28 aspect-square w-[340px] sm:-right-16 sm:w-[440px] lg:-bottom-auto lg:right-12 lg:top-1/2 lg:w-[460px] lg:-translate-y-1/2">
            <div className="h-full w-full overflow-hidden rounded-full bg-studio shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ring-[10px] ring-white/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/lavash-donar.webp" alt="" width={600} height={450} loading="lazy" className="h-full w-full scale-[1.08] object-cover" />
            </div>
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
