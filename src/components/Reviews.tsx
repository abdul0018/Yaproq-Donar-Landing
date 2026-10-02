import DishArt, { type ArtKind } from "./DishArt";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight, IconInstagram, IconQuote, IconStar } from "./icons";
import { contacts } from "@/data/site";

const reviews = [
  {
    name: "Dilnoza R.",
    branch: "Yunusobod",
    rating: 5,
    text: "Donar haqiqatan katta va go‘shti ko‘p. Oq sousi alohida gap — har safar qo‘shimcha olaman. Terrasada o‘tirish ham juda yoqimli.",
    when: "2 kun oldin",
    initials: "DR",
    color: "bg-leaf text-forest-900",
  },
  {
    name: "Javohir T.",
    branch: "Buyuk Ipak Yo‘li",
    rating: 5,
    text: "Kechasi soat 3 da ham issiq va yangi. Tunda ishlaganim uchun bu filial men uchun qutqaruvchi bo‘ldi.",
    when: "1 hafta oldin",
    initials: "JT",
    color: "bg-ember text-white",
  },
  {
    name: "Malika A.",
    branch: "Chilonzor",
    rating: 5,
    text: "Oilaviy setni oldik, to‘rt kishiga bemalol yetdi. Bolalar burchagi bor ekan — ota-onalar uchun katta qulaylik.",
    when: "2 hafta oldin",
    initials: "MA",
    color: "bg-saffron text-ink",
  },
  {
    name: "Sardor N.",
    branch: "Yunusobod",
    rating: 4,
    text: "Iskandar kabob zo‘r, sariyog‘ni stol oldida quyishadi. Tushlikda biroz navbat bo‘ladi, lekin tez xizmat qilishadi.",
    when: "3 hafta oldin",
    initials: "SN",
    color: "bg-forest text-cream",
  },
];

const posts: Array<{ image?: string; art?: ArtKind; seed: string; bg: string; caption: string; likes: string }> = [
  { image: "/images/donar-tarelka.webp", seed: "ig-1", bg: "bg-studio", caption: "Donar tarelka — klassika", likes: "2,4 ming" },
  { image: "/images/pide-pishloqli.webp", seed: "ig-2", bg: "bg-studio", caption: "Tandirdan endigina chiqdi", likes: "1,8 ming" },
  { art: "drink", seed: "ig-ayron-3", bg: "bg-leaf", caption: "Ayron — har kuni yangi", likes: "1,1 ming" },
  { image: "/images/non-donar.webp", seed: "ig-4", bg: "bg-studio", caption: "Non ichida donar qaytdi", likes: "3,0 ming" },
  { image: "/images/yasmiq-shorva.webp", seed: "ig-5", bg: "bg-studio", caption: "Sovuq kunlar uchun sho‘rva", likes: "2,2 ming" },
  { image: "/images/lavash-donar.webp", seed: "ig-6", bg: "bg-studio", caption: "Lavash, go‘sht, fri. Tamom.", likes: "960" },
];

const Stars = ({ n, className = "" }: { n: number; className?: string }) => (
  <span className={`flex gap-0.5 text-saffron ${className}`} aria-label={`5 dan ${n} baho`}>
    {Array.from({ length: 5 }, (_, i) => (
      <IconStar key={i} className={`h-4 w-4 ${i < n ? "" : "opacity-25"}`} />
    ))}
  </span>
);

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container">
        <SectionHeading id="reviews-title" eyebrow="Mehmonlar fikri" title={<>Bizni <span className="italic text-forest">ta’mimiz</span> uchun sevishadi</>} />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="flex flex-col rounded-3xl bg-forest p-7 text-cream sm:p-8 lg:col-span-4">
            <p className="font-display text-[88px] leading-none">4,8</p>
            <Stars n={5} className="mt-3" />
            <p className="mt-3 text-[15px] text-cream/70">Google va Yandex xaritalaridagi 2 400 dan ortiq sharh asosida</p>
            <ul className="mb-8 mt-8 grid gap-2.5">
              {[
                [5, 86],
                [4, 9],
                [3, 3],
                [2, 1],
                [1, 1],
              ].map(([s, pct]) => (
                <li key={s} className="flex items-center gap-3 text-[13px]">
                  <span className="w-3 text-cream/70">{s}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream/15">
                    <span className="block h-full rounded-full bg-saffron" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="w-9 text-right text-cream/60">{pct}%</span>
                </li>
              ))}
            </ul>
            <a href="https://www.google.com/maps/search/YAPROQ+DONAR+Toshkent" target="_blank" rel="noopener noreferrer" className="btn-ghost-light mt-8 w-full lg:mt-auto">
              Sharh qoldirish <IconArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:col-span-8 lg:gap-5">
            {reviews.map((r, i) => (
              <Reveal as="li" key={r.name} delay={i * 80} className="flex w-[85%] shrink-0 snap-center flex-col rounded-3xl border border-ink/10 bg-cream-50 p-6 sm:w-auto">
                <div className="flex items-center justify-between">
                  <Stars n={r.rating} />
                  <IconQuote className="h-6 w-6 text-forest/15" />
                </div>
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-ink-600">“{r.text}”</blockquote>
                <footer className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span aria-hidden className={`grid h-11 w-11 place-items-center rounded-full text-[14px] font-bold ${r.color}`}>{r.initials}</span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block text-[13px] text-ink-500">{r.branch} filiali · {r.when}</span>
                  </span>
                </footer>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Instagram */}
        <div className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-ember">Instagram</p>
            <p className="mt-3 font-display text-[32px] leading-tight sm:text-[40px]">{contacts.instagramHandle}</p>
          </div>
          <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost w-fit">
            <IconInstagram className="h-5 w-5" /> Obuna bo‘lish
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((p, i) => (
            <Reveal as="li" key={p.seed} delay={i * 60}>
              <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className={`group relative block aspect-square overflow-hidden rounded-2xl ${p.bg}`} aria-label={`Instagram posti: ${p.caption}`}>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt="" width={600} height={450} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                ) : (
                  <DishArt kind={p.art!} seed={p.seed} plate="none" className="absolute inset-[-8%] h-[116%] w-[116%] transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:scale-110" />
                )}
                <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-3 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="text-[13px] font-semibold leading-snug">{p.caption}</span>
                  <span className="mt-1 flex items-center gap-1 text-[12px] text-cream/70">♥ {p.likes} <IconArrowUpRight className="ml-auto h-4 w-4" /></span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
