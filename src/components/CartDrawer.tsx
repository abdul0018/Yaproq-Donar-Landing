"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useCart } from "@/lib/cart";
import { contacts, formatPrice, telHref } from "@/data/site";
import { featuredIds, getDish } from "@/data/menu";
import DishVisual from "./DishVisual";
import { IconArrowUpRight, IconBag, IconCheck, IconClose, IconCopy, IconMinus, IconPhone, IconPlus } from "./icons";

/**
 * Order builder. This site has no ordering backend, so the cart never pretends to place an order:
 * it hands the finished list to YAPROQ's real channels (phone, the official website, the app).
 */
export default function CartDrawer() {
  const { lines, count, subtotal, open, setOpen, setQty, add } = useCart();
  const [copied, setCopied] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const uid = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    if (open) setTimeout(() => panel.current?.focus(), 50);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const summary = [
    "YAPROQ buyurtma:",
    ...lines.map((l) => `• ${l.name}${l.variant.portion ? ` (${l.variant.portion})` : ""} × ${l.qty} — ${formatPrice(l.variant.price * l.qty)}`),
    `Jami: ${formatPrice(subtotal)}`,
  ].join("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const suggestions = featuredIds.map((id) => getDish(id)!);

  return (
    <div className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-green-950/55 backdrop-blur-[2px] transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
      <div
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${uid}-title`}
        className={`on-light absolute bottom-0 right-0 top-0 flex w-full max-w-[460px] flex-col bg-paper shadow-2xl outline-none transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-green-800/10 px-5 py-4 sm:px-6">
          <h2 id={`${uid}-title`} className="font-display text-[28px] leading-none text-green-900">
            Savat {count > 0 && <span className="tabular font-sans text-[16px] font-bold text-ink-500">· {count} ta mahsulot</span>}
          </h2>
          <button type="button" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-green-800/5" aria-label="Savatni yopish">
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col overflow-y-auto px-5 py-8 sm:px-6">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-yellow text-green-900"><IconBag className="h-7 w-7" /></span>
            <p className="mt-5 text-center font-display text-[26px] text-green-900">Savatingiz hozircha bo‘sh</p>
            <p className="mt-2 text-center text-ink-600">Yaproq’ning asosiy taomlaridan tanlashni boshlang:</p>
            <ul className="mt-8 grid gap-3">
              {suggestions.map((d) => {
                const v = d.variants[0];
                return (
                  <li key={d.id} className="flex items-center gap-4 rounded-2xl bg-white p-3">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl screen-tile"><DishVisual dish={d} onTile /></div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-green-900">{d.name}</p>
                      <p className="tabular text-[14px] text-ink-600">{formatPrice(v.price)}{d.variants.length > 1 ? " dan" : ""}</p>
                    </div>
                    <button type="button" onClick={() => add(v.id)} className="grid h-11 w-11 place-items-center rounded-full bg-green-800 text-white hover:bg-green-700" aria-label={`${d.name}ni savatga qo‘shish`}>
                      <IconPlus className="h-5 w-5" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <a href="#menyu" onClick={() => setOpen(false)} className="btn-outline mt-6">To‘liq menyu</a>
          </div>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <ul className="grid gap-3">
                {lines.map((l) => (
                  <li key={l.id} className="flex items-center gap-3 rounded-2xl bg-white p-3">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl screen-tile"><DishVisual dish={l.dish} onTile /></div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold leading-snug text-green-900">{l.name}</p>
                      <p className="tabular text-[14px] text-ink-600">{formatPrice(l.variant.price * l.qty)}</p>
                    </div>
                    <div className="flex items-center rounded-full border-2 border-green-800/10">
                      <button type="button" onClick={() => setQty(l.id, l.qty - 1)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-green-800/5" aria-label={`${l.name}: bittaga kamaytirish`}><IconMinus className="h-4 w-4" /></button>
                      <span className="tabular w-6 text-center text-[15px] font-bold">{l.qty}</span>
                      <button type="button" onClick={() => setQty(l.id, l.qty + 1)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-green-800/5" aria-label={`${l.name}: bittaga ko‘paytirish`}><IconPlus className="h-4 w-4" /></button>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl bg-green-800/[0.06] p-4 text-[14px] leading-relaxed text-ink-700">
                Asosiy taomga salat va souslar sovg‘a tariqasida beriladi. Yetkazib berish narxi manzilingizga qarab belgilanadi, birinchi yetkazib berish esa mutlaqo bepul.
              </p>
            </div>

            <div className="border-t border-green-800/10 bg-white px-5 pb-5 pt-4 sm:px-6">
              <div className="flex items-baseline justify-between font-display text-[24px] text-green-900">
                <span>Jami</span>
                <span className="tabular">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-[13.5px] text-ink-600">Buyurtmangizni YAPROQ operatori yoki rasmiy saytimiz orqali rasmiylashtirishingiz mumkin.</p>
              <div className="mt-4 grid gap-2">
                <a href={telHref(contacts.phone)} className="btn-primary tabular h-14 text-base">
                  <IconPhone className="h-5 w-5" /> Qo‘ng‘iroq orqali buyurtma berish
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a href={contacts.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-green text-[14px]">
                    Rasmiy sayt <IconArrowUpRight className="h-4 w-4" />
                  </a>
                  <button type="button" onClick={copy} className="btn-outline text-[14px]">
                    {copied ? <><IconCheck className="h-4 w-4" /> Nusxalandi</> : <><IconCopy className="h-4 w-4" /> Buyurtma ro‘yxatini nusxalash</>}
                  </button>
                </div>
              </div>
              <p className="sr-only" aria-live="polite">{copied ? "Buyurtma ro‘yxati nusxalandi" : ""}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
