"use client";

import { useState, type ReactNode } from "react";
import { contacts, facts, telHref } from "@/data/site";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight, IconCard, IconDevice, IconGlobe, IconPhone, IconStore } from "./icons";
import TornEdge from "./TornEdge";

type Way = { id: string; title: string; short: string; text: string; icon: (p: { className?: string }) => ReactNode; actions: ReactNode };

// Every channel and detail here is from the official site's About page.
const ways: Way[] = [
  {
    id: "sayt",
    title: "Saytda buyurtma",
    short: "Yetkazib berish yoki olib ketish",
    text: "yaproq-donar.uz’da menyuni tanlab, yetkazib berish yoki filialdan olib ketishni rasmiylashtiring. Buyurtma eng yaqin filialdan 1 soat ichida yetkaziladi.",
    icon: IconGlobe,
    actions: (
      <a href={contacts.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
        Saytda buyurtma berish <IconArrowUpRight className="h-4 w-4" />
      </a>
    ),
  },
  {
    id: "ilova",
    title: "YAPROQ ilovasi",
    short: "2% keshbek va oldindan buyurtma",
    text: "Restoranga bormasdan buyurtma bering yoki tashrifdan oldin buyurtmani tayyorlab qo‘ying. Aksiyalar haqida birinchi bo‘lib bilasiz, har buyurtmadan 2% keshbek.",
    icon: IconDevice,
    actions: (
      <>
        <a href={contacts.appStore} target="_blank" rel="noopener noreferrer" className="btn-primary">
          App Store <IconArrowUpRight className="h-4 w-4" />
        </a>
        <a href={contacts.googlePlay} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
          Google Play <IconArrowUpRight className="h-4 w-4" />
        </a>
      </>
    ),
  },
  {
    id: "telefon",
    title: "Telefon orqali",
    short: contacts.phone,
    text: `Qo‘ng‘iroq qiling — buyurtmani qabul qilib, eng yaqin filialga yo‘naltiramiz. Har kuni ${facts.hours}.`,
    icon: IconPhone,
    actions: (
      <a href={telHref(contacts.phone)} className="btn-primary tabular">
        <IconPhone className="h-4 w-4" /> {contacts.phone}
      </a>
    ),
  },
  {
    id: "filial",
    title: "Filialga keling",
    short: "Kukcha, Nurafshon, Yunusobod",
    text: "Issiq donarni joyida tanovul qiling yoki olib keting. Eng yaqin filialni xaritadan toping.",
    icon: IconStore,
    actions: (
      <a href="#filiallar" className="btn-primary">
        Filiallarni ko‘rish
      </a>
    ),
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);
  const [changed, setChanged] = useState(false);
  const pick = (i: number) => {
    if (i !== active) setChanged(true);
    setActive(i);
  };
  const w = ways[active];
  const Icon = w.icon;

  return (
    <section aria-labelledby="ways-title" className="relative bg-green-900 py-20 text-white sm:py-28">
      <TornEdge className="text-green-900" seed={6} />
      <div className="container">
        <SectionHeading
          id="ways-title"
          tone="light"
          title={<>Qanday <span className="text-yellow">buyurtma</span> berasiz?</>}
          lead={`To‘lov: ${facts.payments.join(", ")}.`}
        />

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {ways.map((x, i) => {
              const on = i === active;
              const XIcon = x.icon;
              return (
                <li key={x.id} className="border-b border-white/15 first:border-t">
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    onMouseEnter={() => window.matchMedia("(hover: hover)").matches && pick(i)}
                    aria-expanded={on}
                    aria-controls={`way-${x.id}`}
                    className="group flex w-full items-center gap-5 py-5 text-left sm:gap-7 sm:py-6"
                  >
                    <XIcon className={`h-7 w-7 shrink-0 transition-colors ${on ? "text-yellow" : "text-green-200"}`} />
                    <span className="min-w-0 flex-1">
                      <span className={`block font-display text-[28px] leading-none transition-colors duration-300 sm:text-[38px] ${on ? "text-white" : "text-green-100 group-hover:text-white"}`}>
                        {x.title}
                      </span>
                      <span className="tabular mt-2 block text-[14.5px] text-green-100">{x.short}</span>
                    </span>
                    <span aria-hidden className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 transition-all duration-500 ${on ? "rotate-45 border-yellow bg-yellow text-green-950" : "border-white/25"}`}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                  {/* Mobile: details open in place */}
                  <div id={`way-${x.id}`} className={`grid transition-all duration-500 ease-out lg:hidden ${on ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden pl-12 sm:pl-14">
                      <p className="text-[15.5px] leading-relaxed text-green-100">{x.text}</p>
                      <div className="mt-4 flex flex-wrap gap-2">{x.actions}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div key={active} className={`sticky top-32 rounded-[40px_0_40px_40px] bg-green-800 p-9 ${changed ? "animate-fade-up" : ""}`}>
              <Icon className="h-12 w-12 text-yellow" />
              <p className="mt-6 font-display text-[40px] leading-none">{w.title}</p>
              <p className="mt-5 text-[17px] leading-relaxed text-green-100">{w.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">{w.actions}</div>
              <p className="mt-10 flex items-center gap-2.5 border-t border-white/15 pt-5 text-[14px] text-green-100">
                <IconCard className="h-5 w-5 text-yellow" /> {facts.payments.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
