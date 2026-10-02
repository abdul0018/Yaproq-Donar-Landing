import Reveal from "./Reveal";

const pillars = [
  {
    n: "01",
    title: "Go‘sht",
    text: "Faqat mahalliy mol va tovuq go‘shti. Har tong filialda marinadlanadi — kechagi go‘sht ertangi kunga qolmaydi.",
  },
  {
    n: "02",
    title: "Non",
    text: "Lavash va pide xamiri har kuni qoriladi. Lavash buyurtmadan so‘ng isitiladi, shuning uchun yumshoq bo‘ladi.",
  },
  {
    n: "03",
    title: "Sous",
    text: "Firmaviy oq sous qatiq, sarimsoq va ukropdan tayyorlanadi. Retsepti 2016 yildan beri o‘zgarmagan.",
  },
];

export default function About() {
  return (
    <section id="biz-haqimizda" aria-labelledby="about-title" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-ember">Biz haqimizda</p>
            <h2 id="about-title" className="mt-5 font-display text-display-lg font-medium">
              <span className="italic text-forest">Yaproq</span> — barg degani. Biz uchun bu{" "}
              <span className="relative whitespace-nowrap">
                yangilik
                <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full text-leaf" preserveAspectRatio="none">
                  <path d="M2 8C50 2 150 2 198 7" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              va halollik.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-ink-600">
              YAPROQ 2016 yilda Chilonzordagi kichik oshxonadan boshlangan. Maqsad oddiy edi: donarni xuddi uyda qilgandek — yangi
              mahsulotdan, shoshilmasdan va to‘yimli qilib tayyorlash. Bugun bizning uchta filialimiz bor, lekin bu qoida o‘zgarmagan.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.n} delay={i * 90} className="bg-cream p-6 sm:p-7">
                <span className="font-display text-[15px] italic text-ember">{p.n}</span>
                <h3 className="mt-3 font-display text-[28px] leading-none">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={150} className="relative lg:col-span-5">
          <figure className="relative mx-auto max-w-md overflow-hidden rounded-[40px] bg-forest p-3 lg:max-w-none">
            <div className="overflow-hidden rounded-[30px] bg-studio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pide-pishloqli.webp" alt="Tandirdan yangi chiqqan pishloqli pide" width={600} height={450} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105" />
            </div>
            <figcaption className="px-5 pb-5 pt-6 text-cream sm:px-6">
              <p className="font-display text-[22px] italic leading-snug">“Go‘sht tongda keladi, kechqurun tugaydi. Qolgani — bizning ishimiz emas.”</p>
              <p className="mt-3 text-[14px] text-cream/60">Bosh oshpaz</p>
            </figcaption>
          </figure>
          <div className="absolute -left-6 bottom-36 hidden rounded-2xl bg-cream-50 p-5 shadow-[0_24px_60px_-30px_rgba(21,32,26,0.5)] sm:block lg:-left-10">
            <p className="font-display text-5xl leading-none text-forest">1 200+</p>
            <p className="mt-2 max-w-[14ch] text-[14px] leading-snug text-ink-500">porsiya donar har kuni tayyorlanadi</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
