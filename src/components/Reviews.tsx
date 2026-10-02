import { contacts } from "@/data/site";
import Reveal from "./Reveal";
import { IconArrowUpRight, IconInstagram, IconStar } from "./icons";

// Real photos only; no captions, counts or quotes are invented here.
const photos = [
  { src: "/images/menu/yaproq-donar.webp", alt: "Yaproq donar" },
  { src: "/images/menu/yaproq-pide.webp", alt: "Yaproq pide" },
  { src: "/images/menu/tovuq-iskender.webp", alt: "Tovuqli Iskender kabob" },
  { src: "/images/menu/mercimek.webp", alt: "Merjimek sho‘rvasi" },
  { src: "/images/menu/tombik-donar.webp", alt: "Tombik donar" },
  { src: "/images/menu/havuch.webp", alt: "Havuch dilim" },
];

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="bg-white py-20 sm:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <h2 id="reviews-title" className="font-display text-display-lg font-black text-green-900">
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
          <p className="font-display text-[30px] font-black leading-none text-green-900 sm:text-[36px]">{contacts.instagramHandle}</p>
          <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline w-fit">
            <IconInstagram className="h-5 w-5" /> Instagram’da kuzating
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {photos.map((p, i) => (
            <Reveal as="li" key={p.src} delay={i * 50}>
              <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="group block aspect-square overflow-hidden rounded-2xl bg-studio" aria-label={`Instagram: ${p.alt}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt="" width={600} height={450} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
