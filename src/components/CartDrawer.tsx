"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { branches, formatPrice, telHref, contacts } from "@/data/site";
import { featuredIds, getDish } from "@/data/menu";
import DishVisual from "./DishVisual";
import { IconBag, IconCheck, IconClose, IconMinus, IconPlus, IconTruck, IconPin } from "./icons";

const FREE_DELIVERY_FROM = 150000;
const DELIVERY_FEE = 15000;

export default function CartDrawer() {
  const { lines, count, subtotal, open, setOpen, setQty, add, clear } = useCart();
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [branch, setBranch] = useState(branches[0].id);
  const [phone, setPhone] = useState("+998 ");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<null | { no: string; total: number; mode: "delivery" | "pickup" }>(null);
  const panel = useRef<HTMLDivElement>(null);
  const uid = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    if (open) setTimeout(() => panel.current?.focus(), 50);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  // "Shu filialdan olib ketish" in the branch dialog preselects pickup at that branch.
  useEffect(() => {
    const onPickup = (e: Event) => {
      setMode("pickup");
      setBranch((e as CustomEvent<string>).detail);
    };
    window.addEventListener("yaproq:pickup", onPickup);
    return () => window.removeEventListener("yaproq:pickup", onPickup);
  }, []);

  const delivery = mode === "delivery" && subtotal > 0 && subtotal < FREE_DELIVERY_FROM ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;
  const toFree = FREE_DELIVERY_FROM - subtotal;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) return setError("Ismingizni kiriting.");
    if (digits.length !== 12 || !digits.startsWith("998")) return setError("Telefon raqamini to‘liq kiriting: +998 XX XXX XX XX");
    if (mode === "delivery" && address.trim().length < 6) return setError("Yetkazib berish manzilini kiriting.");
    setError("");
    // Integration point: send { lines, mode, branch, name, phone, address } to the order API / Telegram bot.
    setDone({ no: String(Math.floor(1000 + Math.random() * 9000)), total, mode });
    clear();
  };

  const close = () => {
    setOpen(false);
    if (done) setTimeout(() => setDone(null), 400);
  };

  const formatPhone = (v: string) => {
    const d = v.replace(/\D/g, "").replace(/^998/, "").slice(0, 9);
    const p = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
    return "+998 " + p.join(" ");
  };

  const suggestions = featuredIds.map((id) => getDish(id)!);

  return (
    <div className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`} onClick={close} />
      <div
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${uid}-title`}
        className={`absolute bottom-0 right-0 top-0 flex w-full max-w-[460px] flex-col bg-cream shadow-2xl outline-none transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4 sm:px-6">
          <h2 id={`${uid}-title`} className="font-display text-[28px] leading-none">
            {done ? "Rahmat!" : "Savat"} {!done && count > 0 && <span className="text-[16px] font-sans font-semibold text-ink-400">· {count} ta</span>}
          </h2>
          <button type="button" onClick={close} className="grid h-11 w-11 place-items-center rounded-full hover:bg-ink/5" aria-label="Savatni yopish">
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {done ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-forest text-cream"><IconCheck className="h-9 w-9" /></span>
            <p className="mt-6 font-display text-[32px] leading-tight">Buyurtma №{done.no} qabul qilindi</p>
            <p className="mt-3 text-ink-500">
              Operatorimiz 5 daqiqa ichida qo‘ng‘iroq qilib, buyurtmani tasdiqlaydi.{" "}
              {done.mode === "delivery" ? "Yetkazib berish taxminan 45 daqiqa." : "Taomingiz ~15 daqiqada tayyor bo‘ladi."}
            </p>
            <p className="mt-6 font-display text-2xl">{formatPrice(done.total)}</p>
            <button type="button" onClick={close} className="btn-dark mt-8 w-full">Saytga qaytish</button>
            <a href={telHref(contacts.callCenter)} className="mt-3 text-[14px] text-ink-500 link-underline">Savol bo‘lsa: {contacts.callCenter}</a>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col overflow-y-auto px-5 py-8 sm:px-6">
            <div className="text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cream-200 text-forest"><IconBag className="h-7 w-7" /></span>
              <p className="mt-5 font-display text-[26px]">Savat hozircha bo‘sh</p>
              <p className="mt-2 text-ink-500">Mehmonlarimiz eng ko‘p tanlaydigan taomlardan boshlang:</p>
            </div>
            <ul className="mt-8 grid gap-3">
              {suggestions.map((d) => (
                <li key={d.id} className="flex items-center gap-4 rounded-2xl bg-cream-50 p-3">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-studio"><DishVisual dish={d} /></div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{d.name}</p>
                    <p className="text-[14px] text-ink-500">{formatPrice(d.price)}</p>
                  </div>
                  <button type="button" onClick={() => add(d.id)} className="grid h-11 w-11 place-items-center rounded-full bg-forest text-cream hover:bg-ember" aria-label={`${d.name}ni qo‘shish`}>
                    <IconPlus className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
            <a href="#menyu" onClick={() => setOpen(false)} className="btn-ghost mt-6">To‘liq menyuni ko‘rish</a>
          </div>
        ) : (
          <form onSubmit={submit} className="flex min-h-0 flex-1 flex-col" noValidate>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              <ul className="grid gap-3">
                {lines.map((l) => (
                  <li key={l.id} className="flex items-center gap-3 rounded-2xl bg-cream-50 p-3">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-studio"><DishVisual dish={l.dish} /></div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{l.dish.name}</p>
                      <p className="text-[14px] text-ink-500">{formatPrice(l.dish.price * l.qty)}</p>
                    </div>
                    <div className="flex items-center rounded-full border border-ink/10">
                      <button type="button" onClick={() => setQty(l.id, l.qty - 1)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5" aria-label={`${l.dish.name}: kamaytirish`}><IconMinus className="h-4 w-4" /></button>
                      <span className="w-6 text-center text-[15px] font-bold tabular-nums">{l.qty}</span>
                      <button type="button" onClick={() => setQty(l.id, l.qty + 1)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-ink/5" aria-label={`${l.dish.name}: ko‘paytirish`}><IconPlus className="h-4 w-4" /></button>
                    </div>
                  </li>
                ))}
              </ul>

              <fieldset className="mt-7">
                <legend className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink-500">Qanday olasiz?</legend>
                <div className="mt-3 grid grid-cols-2 gap-2 rounded-full bg-cream-200/70 p-1">
                  {([["delivery", "Yetkazib berish", IconTruck], ["pickup", "Olib ketish", IconPin]] as const).map(([v, label, Icon]) => (
                    <label key={v} className={`flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full text-[14px] font-semibold transition ${mode === v ? "bg-forest text-cream shadow" : "text-ink-600"}`}>
                      <input type="radio" name="mode" value={v} checked={mode === v} onChange={() => setMode(v)} className="sr-only" />
                      <Icon className="h-4 w-4" /> {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5 grid gap-3">
                <label className="grid gap-1.5">
                  <span className="text-[13px] font-semibold text-ink-600">Ismingiz</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="h-12 rounded-xl border border-ink/15 bg-cream-50 px-4 text-base outline-none focus:border-forest" placeholder="Masalan, Aziz" />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-[13px] font-semibold text-ink-600">Telefon</span>
                  <input value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} inputMode="tel" autoComplete="tel" className="h-12 rounded-xl border border-ink/15 bg-cream-50 px-4 text-base tabular-nums outline-none focus:border-forest" />
                </label>
                {mode === "delivery" ? (
                  <label className="grid gap-1.5">
                    <span className="text-[13px] font-semibold text-ink-600">Manzil</span>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" className="h-12 rounded-xl border border-ink/15 bg-cream-50 px-4 text-base outline-none focus:border-forest" placeholder="Ko‘cha, uy, xonadon" />
                  </label>
                ) : (
                  <label className="grid gap-1.5">
                    <span className="text-[13px] font-semibold text-ink-600">Filial</span>
                    <select value={branch} onChange={(e) => setBranch(e.target.value)} className="h-12 rounded-xl border border-ink/15 bg-cream-50 px-4 text-base outline-none focus:border-forest">
                      {branches.map((b) => (
                        <option key={b.id} value={b.id}>{b.name} — {b.address}</option>
                      ))}
                    </select>
                  </label>
                )}
              </div>
            </div>

            <div className="border-t border-ink/10 bg-cream-50 px-5 pb-5 pt-4 sm:px-6">
              {mode === "delivery" && toFree > 0 && (
                <div className="mb-3">
                  <p className="text-[13px] text-ink-500">Bepul yetkazib berishga yana <b className="text-ink">{formatPrice(toFree)}</b></p>
                  <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-ink/10">
                    <span className="block h-full rounded-full bg-leaf transition-all duration-500" style={{ width: `${Math.min(100, (subtotal / FREE_DELIVERY_FROM) * 100)}%` }} />
                  </span>
                </div>
              )}
              <dl className="grid gap-1 text-[15px]">
                <div className="flex justify-between"><dt className="text-ink-500">Taomlar</dt><dd>{formatPrice(subtotal)}</dd></div>
                {mode === "delivery" && <div className="flex justify-between"><dt className="text-ink-500">Yetkazib berish</dt><dd>{delivery ? formatPrice(delivery) : "Bepul"}</dd></div>}
                <div className="mt-1 flex justify-between font-display text-[22px]"><dt>Jami</dt><dd>{formatPrice(total)}</dd></div>
              </dl>
              {error && <p role="alert" className="mt-3 text-[14px] font-semibold text-ember-600">{error}</p>}
              <button type="submit" className="btn-primary mt-4 h-14 w-full text-base">Buyurtmani tasdiqlash</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
