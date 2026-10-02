import Logo from "./Logo";
import { branches, contacts, navLinks, telHref } from "@/data/site";
import { IconInstagram, IconPhone, IconTelegram } from "./icons";

export default function Footer() {
  return (
    <footer id="aloqa" className="bg-forest-900 pb-28 pt-16 text-cream lg:pb-10">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/60">Olovda pishgan donar va tandir pide. Toshkentda 2016 yildan beri.</p>
            <div className="mt-6 flex gap-2">
              <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 transition hover:border-leaf hover:text-leaf">
                <IconInstagram className="h-5 w-5" />
              </a>
              <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 transition hover:border-leaf hover:text-leaf">
                <IconTelegram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Sayt xaritasi" className="lg:col-span-2">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-cream/40">Sahifa</h3>
            <ul className="mt-5 grid gap-3 text-[15px]">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="link-underline text-cream/80 hover:text-cream">{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-cream/40">Filiallar va ish vaqti</h3>
            <ul className="mt-5 grid gap-4 text-[15px]">
              {branches.map((b) => (
                <li key={b.id} className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-4">
                  <span>
                    <span className="block font-semibold">{b.name}</span>
                    <span className="text-[14px] text-cream/55">{b.address}</span>
                  </span>
                  <span className="shrink-0 text-[14px] text-leaf">{b.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-cream/40">Aloqa</h3>
            <a href={telHref(contacts.callCenter)} className="mt-5 flex items-center gap-2 font-display text-[28px] leading-none hover:text-leaf">
              <IconPhone className="h-5 w-5" /> {contacts.callCenterShort}
            </a>
            <p className="mt-2 text-[14px] text-cream/55">{contacts.callCenter}</p>
            <a href={`mailto:${contacts.email}`} className="mt-3 block text-[14px] text-cream/80 link-underline w-fit">{contacts.email}</a>
            <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className="btn mt-6 h-12 min-h-0 w-full bg-leaf text-forest-900 hover:bg-leaf-300">
              <IconTelegram className="h-4 w-4" /> Telegram bot
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-[13px] text-cream/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} YAPROQ DONAR. Barcha huquqlar himoyalangan.</p>
          <p>Yetkazib berish: har kuni 10:00 – 02:00</p>
        </div>
      </div>
    </footer>
  );
}
