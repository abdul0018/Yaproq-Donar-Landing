import { facts } from "@/data/site";
import Reveal from "./Reveal";
import Valance from "./Valance";
import { BASE } from "@/lib/base";

// Facts from the official About page (yaproq-donar.uz/en/pages/about). Nothing here is embellished.
const pillars = [
  {
    title: "100% mahalliy mol go‘shti",
    text: "Taomlarimizning aksariyat qismida 100% mahalliy, yuqori sifatli mol go‘shtidan tayyorlangan donar ishlatiladi.",
  },
  {
    title: "Turk oshxonasi",
    text: "Asosan turk taomlari va desertlari tortiq qilinadi: Iskender kabob, beyti, pide, ezogelin sho‘rvasi, San Sebastyan va trileche shular jumlasidandir.",
  },
  {
    title: "Mehmonlarimiz ishonchi",
    text: "Asosiy qadriyatimiz — taomlar sifati va mehmonlarimizning ishonchini oqlash. Aynan shuning uchun har bir asosiy taomga salat va souslar sovg‘a sifatida beriladi.",
  },
];

export default function About() {
  return (
    <section id="biz-haqimizda" aria-labelledby="about-title" className="relative overflow-x-clip bg-paper py-20 sm:py-28">
      <Valance className="text-paper" seed={5} />
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 id="about-title" className="font-display text-display-lg text-green-900">
              {facts.founded}-yildan beri Toshkentda haqiqiy turkcha donar
            </h2>
            <p className="mt-6 max-w-[62ch] text-[18px] leading-relaxed text-ink-700">
              YAPROQ — «Donar by Beshqozon». Biz {facts.founded}-yilda ochilganmiz va bugungi kunda Toshkentda uchta filialimiz mavjud: Kukcha, Nurafshon va Yunusobod. Filiallarimizda mehmon bo‘lishingiz, o‘zingiz bilan olib ketishingiz yoki eng yaqin filialdan uyingizgacha yetkazib berishni buyurtma qilishingiz mumkin.
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
            <div className="relative mx-auto aspect-square max-w-[460px]">
              {/* A round lamp-lit screen in a punched green frame, the dish set on it. */}
              <div aria-hidden className="screen-tile absolute inset-[4%] rounded-full shadow-[0_30px_50px_-28px_rgba(11,61,31,0.7)] ring-[12px] ring-green-900" />
              <div aria-hidden className="absolute inset-[4%] rounded-full p-[3%]">
                <div className="h-full w-full rounded-full border-[3px] border-dotted border-green-800/50" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BASE}/images/cut/iskender-kabob.webp`} alt="Iskender kabob: mol go‘shti, tomat qaylasi va suzma" width={700} height={525} loading="lazy" className="absolute left-[14%] top-[22%] w-[72%] drop-shadow-[0_22px_20px_rgba(60,45,20,0.35)]" />
            </div>
            <figcaption className="relative z-10 mt-5 text-center font-display text-[20px] leading-snug text-green-800">Iskender kabob — mol go‘shti, tomat qaylasi, iskender noni va suzma</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
