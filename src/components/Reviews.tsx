"use client";

import { contacts } from "@/data/site";
import Reveal from "./Reveal";
import { selectCategory } from "./CategoryStrip";
import { IconArrowUpRight, IconInstagram, IconStar } from "./icons";

// Official menu photos, labelled as such (not presented as social posts).
const photos = [
  { src: "/images/menu/yaproq-donar.webp", name: "Yaproq donar", cat: "asosiy" },
  { src: "/images/menu/yaproq-pide.webp", name: "Yaproq pide", cat: "pide" },
  { src: "/images/menu/tovuq-iskender.webp", name: "Tovuqli Iskender", cat: "tovuq" },
  { src: "/images/menu/mercimek.webp", name: "Merjimek sho‘rvasi", cat: "shorvalar" },
  { src: "/images/menu/tombik-donar.webp", name: "Tombik donar", cat: "asosiy" },
  { src: "/images/menu/havuch.webp", name: "Havuch", cat: "desertlar" },
] as const;

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="bg-paper pb-20 pt-4 sm:pb-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="reviews-title" className="font-display text-display-lg text-green-900">
              Mehmonlarimiz fikrini o‘qing
            </h2>
            <p className="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-ink-600">
              Filiallarimiz haqidagi haqiqiy sharhlar Yandex Xaritalar va 2GIS’da. O‘zingiz ham tashrifdan so‘ng fikr qoldiring — har bir sharhni o‘qiymiz.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <a href={contacts.reviews.yandex} target="_blank" rel="noopener noreferrer" className="btn-green">
              <IconStar className="h-4 w-4 text-yellow" /> Yandex Xaritalar <IconArrowUpRight className="h-4 w-4" />
            </a>
            <a href={contacts.reviews.gis} target="_blank" rel="noopener noreferrer" className="btn-outline">
              2GIS <IconArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t-2 border-green-800/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-[30px] leading-none text-green-900 sm:text-[36px]">Menyudan</p>
          <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline w-fit">
            <IconInstagram className="h-5 w-5" /> {contacts.instagramHandle} <IconArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {photos.map((p, i) => (
            <li key={p.src}>
              <button type="button" onClick={() => selectCategory(p.cat)} className="group block w-full text-left">
                <span className={`block aspect-square overflow-hidden rounded-2xl ${i % 2 ? "bg-paper-deep" : "bg-sage"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src.replace("/menu/", "/cut/")} alt="" width={600} height={450} loading="lazy" className="h-full w-full object-contain p-[10%] drop-shadow-[0_14px_14px_rgba(60,45,20,0.22)] transition-transform duration-700 ease-out group-hover:scale-110" />
                </span>
                <span className="mt-2 block text-[14px] font-bold text-green-900 group-hover:underline">{p.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
