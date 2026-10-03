"use client";

import { useCart } from "@/lib/cart";
import { flyToCart } from "@/lib/fly";
import { IconMinus, IconPlus } from "./icons";

/** "Savatga" button for one size of a dish; turns into a quantity stepper once it is in the cart. */
export default function AddToCart({ variantId, name, size = "md", tone = "green" }: { variantId: string; name: string; size?: "md" | "lg"; tone?: "green" | "yellow" }) {
  const { qtyOf, add, setQty } = useCart();
  const qty = qtyOf(variantId);
  const h = size === "lg" ? "h-12" : "h-11";
  const fill = tone === "yellow" ? "bg-yellow text-green-950 hover:bg-yellow-300" : "bg-green-800 text-white hover:bg-green-700";

  if (qty === 0) {
    return (
      <button type="button" onClick={(e) => { add(variantId); flyToCart(e.currentTarget); }} className={`btn ${h} min-h-0 px-5 ${fill}`} aria-label={`${name}ni savatga qo‘shish`}>
        <IconPlus className="h-4 w-4" /> Savatga
      </button>
    );
  }

  return (
    <div className={`inline-flex ${h} items-center rounded-full ${fill}`} role="group" aria-label={`${name}: savatda ${qty} ta`}>
      <button type="button" onClick={() => setQty(variantId, qty - 1)} className="grid h-full w-11 place-items-center rounded-full transition hover:bg-black/10 active:scale-90" aria-label="Bittaga kamaytirish">
        <IconMinus className="h-4 w-4" />
      </button>
      <span className="tabular min-w-6 text-center text-[15px] font-bold" aria-live="polite">{qty}</span>
      <button type="button" onClick={() => add(variantId)} className="grid h-full w-11 place-items-center rounded-full transition hover:bg-black/10 active:scale-90" aria-label="Bittaga ko‘paytirish">
        <IconPlus className="h-4 w-4" />
      </button>
    </div>
  );
}
