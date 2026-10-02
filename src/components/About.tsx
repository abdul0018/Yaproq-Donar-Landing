import { facts } from "@/data/site";
import Reveal from "./Reveal";
import TornEdge from "./TornEdge";

// Facts from the official About page (yaproq-donar.uz/en/pages/about). Nothing here is embellished.
const pillars = [
  {
    title: "Mahalliy mol go‘shti",
    text: "Taomlarimizning aksariyatida 100% mahalliy, sifatli mol go‘shtidan tayyorlangan donar ishlatiladi.",
  },
  {
    title: "Turk oshxonasi",
    text: "Asosan turk taomlari va desertlari: Iskender kabob, beyti, pide, ezogelin sho‘rvasi, San Sebastyan va trileche.",
  },
  {
    title: "Mehmonlar ishonchi",
    text: "Asosiy qadriyatimiz — sifatli taom va mehmonlarimizning ishonchi. Shuning uchun asosiy taomga salat va souslar sovg‘a.",
  },
];

export default function About() {
  return (
    <section id="biz-haqimizda" aria-labelledby="about-title" className="relative bg-paper py-20 sm:py-28">
      <TornEdge className="text-paper" seed={5} />
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 id="about-title" className="font-display text-display-lg text-green-900">
              {facts.founded} yildan beri Toshkentda turkcha donar
            </h2>
            <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-ink-700">
              YAPROQ — «Donar by Beshqozon». {facts.founded} yilda ochilganmiz va bugun Toshkentda uchta filialimiz bor: Kukcha, Nurafshon va Yunusobod. Filialga kelishingiz, olib ketishingiz yoki eng yaqin filialdan yetkazib berishni buyurtma qilishingiz mumkin.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="border-t-2 border-green-800 pt-5">
                <h3 className="font-display text-[24px] leading-tight text-green-900">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="lg:col-span-5">
          <figure className="mx-auto max-w-md lg:max-w-none">
            <div className="relative p-3 sm:p-4">
            <div aria-hidden className="absolute inset-0 rounded-[50%_0_50%_50%] bg-yellow" />
            <div className="relative aspect-square overflow-hidden rounded-[50%_0_50%_50%] bg-studio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/menu/iskender-kabob.webp" alt="Iskender kabob: mol go‘shti, tomat qaylasi va suzma" width={600} height={450} loading="lazy" className="h-full w-full scale-110 object-cover" />
            </div>
            </div>
            <figcaption className="mt-5 text-center font-hand text-[24px] font-bold leading-snug text-green-800">Iskender kabob — mol go‘shti, tomat qaylasi, iskender noni va suzma</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
