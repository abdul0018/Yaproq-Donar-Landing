"use client";

import { useId } from "react";
import type { Dish, Variant } from "@/data/menu";

/** Segmented control for a dish's official sizes. Renders nothing for single-size dishes. */
export default function SizeSwitch({
  dish,
  value,
  onChange,
  tone = "light",
}: {
  dish: Dish;
  value: Variant;
  onChange: (v: Variant) => void;
  tone?: "light" | "dark";
}) {
  const name = useId();
  if (dish.variants.length < 2) return null;
  const dark = tone === "dark";
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">{dish.name}: o‘lchamni tanlang</legend>
      <div className={`grid w-full auto-cols-fr grid-flow-col gap-1 rounded-2xl p-1 ${dark ? "bg-white/10" : "bg-green-800/[0.07]"}`}>
        {dish.variants.map((v) => {
          const on = v.id === value.id;
          // Lead with the weight; the official size name ("Oddiy", "1,5") is secondary.
          const text = v.portion || v.label || "";
          const sub = v.portion && v.label ? v.label : null;
          return (
            <label
              key={v.id}
              className={`flex min-h-[44px] cursor-pointer flex-col items-center justify-center rounded-xl px-2 py-1 text-center text-[14px] font-extrabold leading-tight transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-green-800 ${
                on ? (dark ? "bg-yellow text-green-950" : "bg-green-800 text-white") : dark ? "text-green-100 hover:bg-white/10" : "text-ink-600 hover:bg-green-800/10"
              }`}
            >
              <input type="radio" name={name} className="sr-only" checked={on} onChange={() => onChange(v)} />
              {text}
              {sub && <span className={`tabular text-[12px] font-semibold ${on ? "opacity-90" : "opacity-70"}`}>{sub}</span>}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
