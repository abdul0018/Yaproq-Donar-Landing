"use client";

import { contacts } from "@/data/site";
import Reveal from "./Reveal";
import { IconArrow, IconPin } from "./icons";
import { useCart } from "@/lib/cart";
import Perde from "./Perde";

export default function FinalCta() {
  const { setOpen } = useCart();
  return (
    <section aria-labelledby="cta-title" className="bg-paper pb-24 sm:pb-32">
      <div className="container">
        <Reveal className="on-dark relative grid items-center gap-10 overflow-hidden rounded-[36px] bg-green-950 px-6 py-14 text-paper sm:px-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:px-16">
          <div className="relative max-w-xl">
            <h2 id="cta-title" className="font-display text-display-lg text-paper">
              Issiq donar sizni kutyapti.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-green-100">
              Buyurtma bering — eng yaqin filialdan 1 soat ichida yetkazamiz. Yoki Kukcha, Nurafshon va Yunusobod filiallarimizga keling.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => setOpen(true)} className="btn-primary h-14 px-8 text-base">
                Buyurtma berish <IconArrow className="h-5 w-5" />
              </button>
              <a href="#filiallar" className="btn-outline-light h-14 px-7 text-base">
                <IconPin className="h-5 w-5" /> Filialni tanlash
              </a>
            </div>
            <p className="tabular mt-6 text-[14.5px] font-semibold text-green-100">Yoki qo‘ng‘iroq qiling: {contacts.phone}</p>
          </div>
          <Perde id="cta" scene="delivery" className="mx-auto block h-auto w-full max-w-[560px]" />
        </Reveal>
      </div>
    </section>
  );
}
