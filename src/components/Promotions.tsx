"use client";

import { useEffect, useState } from "react";
import DishArt from "./DishArt";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrow } from "./icons";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/site";
import { getDish } from "@/data/menu";
import { selectCategory } from "./CategoryStrip";

/** Milliseconds until Sunday 23:59:59 in Tashkent (UTC+5, no DST). */
function msToWeekEnd(now = Date.now()) {
  const offset = 5 * 3600 * 1000;
  const local = new Date(now + offset);
  const day = local.getUTCDay(); // 0 = Sunday
  const end = new Date(local);
  end.setUTCDate(local.getUTCDate() + ((7 - day) % 7));
  end.setUTCHours(23, 59, 59, 999);
  return end.getTime() - local.getTime();
}

function Countdown() {
  const [ms, setMs] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setMs(msToWeekEnd());
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const parts =
    ms === null
      ? ["--", "--", "--", "--"]
      : [86400000, 3600000, 60000, 1000].map((u, i, a) => String(Math.floor((i ? ms % a[i - 1] : ms) / u)).padStart(2, "0"));
  const labels = ["kun", "soat", "daqiqa", "soniya"];
  return (
    <div className="flex gap-2 sm:gap-3" role="timer" aria-label="Aksiya tugashiga qolgan vaqt">
      {parts.map((p, i) => (
        <div key={labels[i]} className="min-w-[60px] rounded-xl bg-cream/10 px-2 py-2.5 text-center sm:min-w-[68px]">
          <span className="block font-display text-[28px] leading-none tabular-nums">{p}</span>
          <span className="mt-1 block text-[11px] uppercase tracking-wider text-cream/60">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

const stories = [
  {
    tag: "Har kuni 11:00 – 16:00",
    title: "Tushlik seti",
    big: "−20%",
    text: "Donar, fri, choban salati va ayron. Ish kunlari tushlikda arzonroq.",
    art: "plate" as const,
    seed: "promo-tushlik",
    bg: "bg-ember text-white",
    action: { label: "Savatga qo‘shish", dish: "set-tushlik" },
  },
  {
    tag: "Yangi · achchiq",
    title: "Olovli donar",
    big: "41 000",
    text: "Jalapeño va dudlangan paprika. Achchiqni yaxshi ko‘rganlar uchun.",
    art: "wrap" as const,
    seed: "donar-achchiq",
    bg: "bg-leaf text-forest-900",
    action: { label: "Sinab ko‘rish", dish: "donar-achchiq" },
  },
  {
    tag: "Kuz mavsumi",
    title: "Kunefe + bepul choy",
    big: "34 000",
    text: "Issiq kunefe buyurtma qilsangiz, turk choyi bizdan. Salqin kechalar uchun.",
    art: "dessert" as const,
    seed: "promo-kunefe",
    bg: "bg-saffron text-ink",
    action: { label: "Desertlarni ko‘rish", category: "desertlar" as const },
  },
];

export default function Promotions() {
  const { add, setOpen } = useCart();
  const family = getDish("set-oilaviy")!;
  const oldPrice = 252000;

  return (
    <section id="aksiyalar" aria-labelledby="promo-title" className="grain relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <div className="container">
        <SectionHeading
          id="promo-title"
          tone="light"
          eyebrow="Aksiyalar"
          title={<>Ko‘proq ta’m, <span className="italic text-leaf">kamroq</span> narx</>}
          lead="Har hafta yangilanadi. Aksiyalar barcha filiallarda va yetkazib berishda amal qiladi."
        />

        {/* Feature promo */}
        <Reveal className="relative mt-12 overflow-hidden rounded-3xl bg-forest lg:mt-16">
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative z-10 p-7 sm:p-10 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5 text-[13px] font-semibold text-leaf">
                <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping-soft rounded-full bg-leaf" /><span className="relative h-2 w-2 rounded-full bg-leaf" /></span>
                Faqat shu hafta
              </span>
              <h3 className="mt-6 font-display text-display-lg font-medium">
                Oilaviy set — <span className="whitespace-nowrap italic text-saffron">25% arzon</span>
              </h3>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-cream/70">
                To‘rt donar, katta fri, ikkita salat va bir litr ayron. Butun oila uchun bitta stol — {family.portion}.
              </p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-4xl">{formatPrice(family.price)}</span>
                <s className="text-cream/50">{formatPrice(oldPrice)}</s>
              </div>
              <div className="mt-8"><Countdown /></div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => { add(family.id); setOpen(true); }} className="btn-primary h-14 px-8">
                  Setni buyurtma qilish <IconArrow className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => selectCategory("setlar")} className="btn-ghost-light h-14">
                  Barcha setlar
                </button>
              </div>
            </div>
            <div className="relative -mb-10 -mr-10 flex items-center justify-center p-6 lg:-my-6 lg:mb-0">
              <span aria-hidden className="pointer-events-none absolute right-4 top-0 select-none font-display text-[180px] font-semibold italic leading-none text-cream/[0.06] sm:text-[260px]">25%</span>
              <DishArt kind="set" seed="promo-oilaviy" className="relative w-full max-w-[560px] rotate-[-8deg] drop-shadow-[0_40px_50px_rgba(0,0,0,0.4)] transition-transform duration-1000 ease-out hover:rotate-0" title="Oilaviy set" />
            </div>
          </div>
        </Reveal>

        {/* Story posters */}
        <div className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:gap-6">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} as="article" className={`group relative flex min-h-[440px] w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-3xl p-6 sm:w-auto lg:p-8 ${s.bg}`}>
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] opacity-80">{s.tag}</p>
              <p className="mt-3 font-display text-[56px] font-semibold leading-none tracking-tight lg:text-[64px]">{s.big}</p>
              <h3 className="mt-3 font-display text-[26px] leading-tight">{s.title}</h3>
              <p className="mt-2 max-w-[26ch] text-[15px] leading-snug opacity-80">{s.text}</p>
              <div className="pointer-events-none absolute -bottom-20 -right-16 w-[66%] transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:rotate-12">
                <DishArt kind={s.art} seed={s.seed} />
              </div>
              <button
                type="button"
                onClick={() => ("dish" in s.action && s.action.dish ? add(s.action.dish) : selectCategory(s.action.category!))}
                className={`relative mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-ink/90 px-5 py-3 text-[14px] font-semibold text-cream transition hover:bg-ink`}
              >
                {s.action.label} <IconArrow className="h-4 w-4" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
