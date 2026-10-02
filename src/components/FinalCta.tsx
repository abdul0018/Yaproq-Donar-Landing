"use client";

import { contacts } from "@/data/site";
import Reveal from "./Reveal";
import { IconArrow, IconPin } from "./icons";
import { useCart } from "@/lib/cart";

export default function FinalCta() {
  const { setOpen } = useCart();
  return (
    <section aria-labelledby="cta-title" className="bg-paper pb-24 sm:pb-32">
      <div className="container">
        <Reveal className="relative overflow-hidden rounded-[36px] bg-yellow px-6 py-14 text-green-950 sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden className="pointer-events-none absolute -bottom-36 -right-24 aspect-square w-[320px] sm:-bottom-24 sm:-right-12 sm:w-[420px] lg:bottom-auto lg:right-14 lg:top-1/2 lg:w-[420px] lg:-translate-y-1/2">
            <div className="h-full w-full overflow-hidden rounded-[50%_0_50%_50%] bg-studio shadow-[0_40px_70px_-30px_rgba(11,61,31,0.55)] ring-[10px] ring-green-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/menu/pilav-ustu-donar.webp" alt="" width={600} height={450} loading="lazy" className="h-full w-full scale-[1.12] object-cover" />
            </div>
          </div>
          <div className="relative max-w-xl">
            <h2 id="cta-title" className="font-display text-display-lg text-green-900">
              Issiq donar sizni kutyapti.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed">
              Buyurtma bering — eng yaqin filialdan 1 soat ichida yetkazamiz. Yoki Kukcha, Nurafshon va Yunusobod filiallarimizga keling.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setOpen(true)} className="btn-green h-14 px-8 text-base">
                Buyurtma berish <IconArrow className="h-5 w-5" />
              </button>
              <a href="#filiallar" className="btn-outline h-14 border-green-900/30 px-7 text-base">
                <IconPin className="h-5 w-5" /> Filialni tanlash
              </a>
            </div>
            <p className="tabular mt-6 text-[14.5px] font-semibold">Yoki qo‘ng‘iroq qiling: {contacts.phone}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
