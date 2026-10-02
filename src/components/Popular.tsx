import { featuredCopy, featuredIds, getDish } from "@/data/menu";
import { formatPrice } from "@/data/site";
import AddToCart from "./AddToCart";
import DishVisual from "./DishVisual";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrow } from "./icons";

export default function Popular() {
  const [lead, ...rest] = featuredIds.map((id) => getDish(id)!);
  const leadCopy = featuredCopy[lead.id];

  return (
    <section aria-labelledby="popular-title" className="bg-cream pb-16 pt-20 sm:pb-20 sm:pt-28">
      <div className="container">
        <SectionHeading
          id="popular-title"
          eyebrow="Mehmonlar tanlovi"
          title={<>Bu hafta eng ko‘p <span className="italic text-forest">buyurtma qilingan</span></>}
          action={
            <a href="#menyu" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-forest">
              <span className="link-underline">To‘liq menyu</span>
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          }
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Lead dish */}
          <Reveal as="article" className="group relative overflow-hidden rounded-3xl bg-forest text-cream lg:col-span-7">
            <div className="grid h-full sm:grid-cols-[1.15fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.15fr_1fr]">
              <div className="relative p-3 sm:p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-studio sm:aspect-auto sm:h-full sm:min-h-[280px] lg:aspect-[16/10] lg:h-auto xl:aspect-auto xl:h-full">
                  <DishVisual dish={lead} plate="dark" photoClassName="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]" />
                </div>
                <span className="absolute left-7 top-7 rounded-full bg-ember px-3 py-1.5 text-[12px] font-bold uppercase tracking-wider text-white sm:left-8 sm:top-8">№ 1</span>
              </div>
              <div className="flex flex-col justify-end p-6 pt-3 sm:p-8 sm:pl-4 lg:pl-8 lg:pt-4 xl:pl-4 xl:pt-8">
                <p className="eyebrow text-leaf">{leadCopy.kicker}</p>
                <h3 className="mt-3 font-display text-display-md">{lead.name}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-cream/70">{leadCopy.story}</p>
                <p className="mt-3 text-[14px] text-cream/50">{lead.description}</p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-6">
                  <div>
                    <p className="font-display text-3xl">{formatPrice(lead.price)}</p>
                    <p className="text-[13px] text-cream/50">{lead.portion}</p>
                  </div>
                  <AddToCart id={lead.id} name={lead.name} size="lg" tone="ember" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Supporting dishes */}
          <ul className="grid gap-4 lg:col-span-5 lg:gap-0 lg:divide-y lg:divide-ink/10">
            {rest.map((d, i) => (
              <Reveal as="li" key={d.id} delay={i * 90} className="group grid grid-cols-[120px_1fr] items-center gap-5 rounded-3xl bg-cream-50 p-4 sm:grid-cols-[190px_1fr] lg:rounded-none lg:bg-transparent lg:px-0 lg:py-6 lg:first:pt-0 lg:last:pb-0">
                <div className="aspect-square overflow-hidden rounded-2xl bg-studio sm:aspect-[4/3]">
                  <DishVisual dish={d} photoClassName="transition-transform duration-700 ease-out group-hover:scale-110" artClassName="p-2 transition-transform duration-700 ease-out group-hover:rotate-[14deg]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-ember">{featuredCopy[d.id]?.kicker}</p>
                  <h3 className="mt-1.5 font-display text-[24px] leading-tight sm:text-[28px]">{d.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-[14.5px] leading-snug text-ink-500">{featuredCopy[d.id]?.story ?? d.description}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[17px] font-bold">{formatPrice(d.price)}</p>
                    <AddToCart id={d.id} name={d.name} />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
