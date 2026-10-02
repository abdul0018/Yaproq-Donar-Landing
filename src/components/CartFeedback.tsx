"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { getDish } from "@/data/menu";
import { formatPrice } from "@/data/site";
import { IconArrow, IconCheck } from "./icons";

/** Toast after adding an item + sticky checkout bar on small screens. */
export default function CartFeedback() {
  const { pulse, count, subtotal, setOpen, open } = useCart();
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!pulse) return;
    setToast(getDish(pulse.id)?.name ?? null);
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [pulse]);

  return (
    <>
      <div aria-live="polite" className={`pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4 transition-all duration-500 lg:bottom-8 ${toast && !open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        {toast && (
          <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-2 text-cream shadow-2xl">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-leaf text-forest-900"><IconCheck className="h-4 w-4" /></span>
            <span className="text-[14px]"><b>{toast}</b> savatga qo‘shildi</span>
            <button type="button" onClick={() => setOpen(true)} className="rounded-full bg-cream/10 px-4 py-2 text-[13px] font-semibold hover:bg-cream/20">Ochish</button>
          </div>
        )}
      </div>

      <div className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-500 ease-out lg:hidden ${count > 0 && !open ? "visible translate-y-0" : "invisible translate-y-full"}`}>
        <button type="button" onClick={() => setOpen(true)} className="flex h-16 w-full items-center justify-between rounded-2xl bg-forest px-5 text-cream shadow-[0_20px_40px_-15px_rgba(15,43,31,0.7)]" tabIndex={count > 0 ? 0 : -1}>
          <span className="flex items-center gap-3">
            <span className="grid h-8 min-w-8 place-items-center rounded-full bg-ember px-2 text-[14px] font-bold">{count}</span>
            <span className="text-[15px] font-semibold">Savatni ko‘rish</span>
          </span>
          <span className="flex items-center gap-2 font-display text-[18px]">{formatPrice(subtotal)} <IconArrow className="h-5 w-5" /></span>
        </button>
      </div>
    </>
  );
}
