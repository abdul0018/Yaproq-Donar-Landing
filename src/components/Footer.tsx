import Logo from "./Logo";
import { branches, contacts, facts, navLinks, telHref } from "@/data/site";
import { IconArrowUpRight, IconInstagram, IconPhone } from "./icons";
import Valance from "./Valance";

export default function Footer() {
  return (
    <footer id="aloqa" className="relative bg-green-950 pb-28 pt-16 text-paper lg:pb-10">
      <Valance className="text-green-950" seed={8} />
      <div className="container">
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-12">
          <div className="xl:col-span-4">
            <Logo className="h-11 w-auto text-white" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-green-100">Turk taomlari va desertlari. {facts.founded}-yildan beri Toshkentda xizmatingizdamiz.</p>
            <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white/15 px-4 py-2.5 text-[14px] font-bold transition hover:border-yellow hover:text-yellow">
              <IconInstagram className="h-5 w-5" /> {contacts.instagramHandle}
            </a>
          </div>

          <nav aria-label="Sayt bo‘limlari" className="xl:col-span-2">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-green-200">Sahifa</h3>
            <ul className="mt-3 grid text-[15px]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block py-3 text-green-100 underline-offset-4 hover:text-white hover:underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="xl:col-span-3">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-green-200">Filiallar</h3>
            <ul className="mt-5 grid gap-4 text-[15px]">
              {branches.map((b) => (
                <li key={b.id} className="border-b border-white/10 pb-4">
                  <span className="block font-bold">{b.name}</span>
                  <span className="text-[14px] text-green-100">{b.address ?? "Manzil: telefon orqali"}</span>
                </li>
              ))}
            </ul>
            <p className="tabular mt-4 text-[14px] text-green-100">Har kuni {facts.hours}</p>
          </div>

          <div className="xl:col-span-3">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-green-200">Buyurtma</h3>
            <a href={telHref(contacts.phone)} className="tabular mt-5 tap flex items-center gap-2 whitespace-nowrap font-display text-[26px] leading-none hover:text-yellow">
              <IconPhone className="h-5 w-5" /> {contacts.phone}
            </a>
            <p className="mt-2 text-[14px] text-green-100">Yetkazib berish: eng yaqin filialdan 1 soat ichida</p>
            <div className="mt-6 grid gap-2">
              <a href={contacts.orderUrl} target="_blank" rel="noopener noreferrer" className="btn h-12 min-h-0 w-full bg-yellow text-green-950 hover:bg-yellow-300">
                Sayt orqali buyurtma berish <IconArrowUpRight className="h-4 w-4" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a href={contacts.appStore} target="_blank" rel="noopener noreferrer" className="btn h-11 min-h-0 border-2 border-white/20 px-3 text-[14px] hover:border-white">App Store</a>
                <a href={contacts.googlePlay} target="_blank" rel="noopener noreferrer" className="btn h-11 min-h-0 border-2 border-white/20 px-3 text-[14px] hover:border-white">Google Play</a>
              </div>
            </div>
            <p className="mt-6 text-[14px] text-green-100">To‘lov turlari: {facts.payments.join(", ")}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13.5px] text-green-200 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} YAPROQ DONAR · Donar by Beshqozon</p>
          <p className="tabular">
            Ish o‘rinlari bo‘yicha: <a href={telHref(contacts.vacancyPhone)} className="tap underline underline-offset-4 hover:text-white">{contacts.vacancyPhone}</a> (10:00 – 18:00)
          </p>
        </div>
      </div>
    </footer>
  );
}
