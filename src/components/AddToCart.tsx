"use client";

import { useCart } from "@/lib/cart";
import { IconMinus, IconPlus } from "./icons";

/** "Savatga" button that turns into a quantity stepper once the item is in the cart. */
export default function AddToCart({ id, name, size = "md", tone = "dark" }: { id: string; name: string; size?: "md" | "lg"; tone?: "dark" | "ember" }) {
  const { qtyOf, add, setQty } = useCart();
  const qty = qtyOf(id);
  const h = size === "lg" ? "h-12" : "h-11";

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => add(id)}
        className={`btn ${h} min-h-0 px-5 ${tone === "ember" ? "bg-ember text-white hover:bg-ember-600" : "bg-forest text-cream hover:bg-ember"}`}
        aria-label={`${name}ni savatga qo‘shish`}
      >
        <IconPlus className="h-4 w-4" /> Savatga
      </button>
    );
  }

  return (
    <div className={`inline-flex ${h} items-center rounded-full bg-forest text-cream`} role="group" aria-label={`${name}: ${qty} ta`}>
      <button type="button" onClick={() => setQty(id, qty - 1)} className="grid h-full w-11 place-items-center rounded-full transition hover:bg-white/10 active:scale-90" aria-label="Kamaytirish">
        <IconMinus className="h-4 w-4" />
      </button>
      <span className="min-w-6 text-center text-[15px] font-bold tabular-nums" aria-live="polite">{qty}</span>
      <button type="button" onClick={() => add(id)} className="grid h-full w-11 place-items-center rounded-full transition hover:bg-white/10 active:scale-90" aria-label="Ko‘paytirish">
        <IconPlus className="h-4 w-4" />
      </button>
    </div>
  );
}
