"use client";

import { useEffect, useRef } from "react";
import DishArt, { Chili, Lemon, Leaf, Tomato } from "./DishArt";
import { IconArrow, IconPin, IconPlus, IconStar } from "./icons";
import { branches, formatPrice } from "@/data/site";
import { getDish } from "@/data/menu";
import { useCart } from "@/lib/cart";

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const { add } = useCart();
  const hero = getDish("donar-klassik")!;

  // Gentle pointer parallax on the scattered ingredients (desktop only).
  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const float = (depth: number) => ({
    transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
    transition: "transform .6s cubic-bezier(.22,1,.36,1)",
  });

  return (
    <section id="asosiy" className="grain relative overflow-hidden bg-forest-900 text-cream">
      {/* soft light */}
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[720px] w-[720px] rounded-full bg-forest-600/40 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-ember/10 blur-[120px]" />

      <div className="container relative grid min-h-[100svh] items-center gap-6 pb-14 pt-28 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-32">
        <div className="relative z-10 lg:col-span-6 xl:col-span-6">
          <p className="eyebrow animate-fade-up text-leaf">Toshkent · 2016 yildan beri</p>
          <h1 className="mt-6 animate-fade-up font-display text-display-xl font-medium [animation-delay:80ms]">
            Olovda pishgan,{" "}
            <span className="italic text-leaf [font-variation-settings:'SOFT'_100]">yaproqdek</span> yangi.
          </h1>
          <p className="mt-6 max-w-[34rem] animate-fade-up text-[17px] leading-relaxed text-cream/75 [animation-delay:160ms] sm:text-lg">
            Har tong marinadlanadigan go‘sht, buyurtmadan keyin isitiladigan lavash va o‘zimiz tayyorlaydigan souslar. Toshkentdagi uchta filialimizga keling yoki uyga buyurtma bering.
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <a href="#menyu" className="btn-primary h-14 px-8 text-base">
              Menyuni ko‘rish <IconArrow className="h-5 w-5" />
            </a>
            <a href="#filiallar" className="btn-ghost-light h-14 px-7 text-base">
              <IconPin className="h-5 w-5" /> Eng yaqin filial
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg animate-fade-up grid-cols-3 gap-4 border-t border-cream/15 pt-6 [animation-delay:320ms]">
            <div>
              <dt className="text-[13px] text-cream/60">Reyting</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-display text-2xl">
                4,8 <IconStar className="h-4 w-4 text-saffron" />
              </dd>
            </div>
            <div>
              <dt className="text-[13px] text-cream/60">Filiallar</dt>
              <dd className="mt-1 font-display text-2xl">{branches.length} ta</dd>
            </div>
            <div>
              <dt className="text-[13px] text-cream/60">Tayyorlanish</dt>
              <dd className="mt-1 font-display text-2xl">~12 daq</dd>
            </div>
          </dl>
        </div>

        {/* Visual stage */}
        <div ref={stage} className="relative mx-auto aspect-square w-full max-w-[640px] lg:col-span-6 lg:max-w-none xl:-mr-10">
          <div aria-hidden className="absolute inset-[4%] rounded-full border border-cream/10" />
          <div aria-hidden className="absolute inset-[-4%] hidden rounded-full border border-dashed border-cream/10 lg:block" />
          <div className="absolute inset-[8%] animate-fade-up [animation-delay:200ms] [animation-duration:1.4s]">
            <div className="h-full w-full animate-spin-slow">
              <DishArt kind="plate" seed="hero-donar-tarelka" plate="dark" className="h-full w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]" title="Donar tarelka: go‘sht, guruch, fri va sabzavotlar" />
            </div>
          </div>

          {/* scattered ingredients */}
          <svg aria-hidden viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            <g style={float(30)}><Chili x={330} y={36} r={30} s={0.9} /></g>
            <g style={float(-24)}><Leaf x={18} y={70} r={-30} s={0.9} c="#8DBF6A" /></g>
            <g style={float(18)}><Lemon x={30} y={330} r={-60} s={1} /></g>
            <g style={float(-30)}><Tomato x={372} y={300} s={0.9} /></g>
            <g style={float(40)}><Leaf x={330} y={372} r={140} s={0.7} c="#3F8560" /></g>
            {[[60, 20], [74, 30], [356, 150], [366, 162], [20, 210], [100, 388], [250, 6]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.6" fill="#E2622B" style={float(i % 2 ? 20 : -20)} />
            ))}
          </svg>

          {/* product tag */}
          <div className="absolute bottom-[4%] left-0 z-10 flex animate-fade-up items-center gap-3 rounded-2xl bg-cream p-2.5 pr-3 text-ink shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] [animation-delay:600ms] sm:left-[2%] sm:gap-4 sm:p-3 sm:pr-4">
            <div className="h-14 w-14 shrink-0 rounded-xl bg-cream-200 sm:h-16 sm:w-16">
              <DishArt kind="wrap" seed="donar-klassik" plate="none" className="h-full w-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-ember">Xit</p>
              <p className="font-display text-lg leading-tight">{hero.name}</p>
              <p className="text-[14px] text-ink-500">{formatPrice(hero.price)}</p>
            </div>
            <button
              type="button"
              onClick={() => add(hero.id)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-cream transition hover:bg-ember active:scale-90"
              aria-label={`${hero.name}ni savatga qo‘shish`}
            >
              <IconPlus className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute right-[2%] top-[6%] hidden animate-fade-up rounded-full bg-ember px-4 py-2 text-[13px] font-bold text-white [animation-delay:700ms] sm:block">
            −20% tushlikda
          </div>
        </div>
      </div>
    </section>
  );
}
