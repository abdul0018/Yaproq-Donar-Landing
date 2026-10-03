"use client";

import { useEffect, useRef, useState } from "react";
import { branches, contacts, facts, hoursPhrase, directionsUrl, distanceKm, hasLocation, isOpenNow, telHref, yandexUrl, type Branch } from "@/data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { IconArrowUpRight, IconClock, IconClose, IconLocate, IconNavigate, IconPhone, IconPin } from "./icons";
import Valance from "./Valance";

type Geo = { status: "idle" | "loading" | "ok" | "error"; pos?: { lat: number; lng: number }; message?: string };

const located = branches.filter(hasLocation);

function OpenBadge({ b, mounted }: { b: Branch; mounted: boolean }) {
  if (!mounted) return null;
  const open = isOpenNow(b);
  if (open === null) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12.5px] font-bold ${open ? "bg-green-800/10 text-green-800" : "bg-ink/5 text-ink-600"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-green-600" : "bg-ink-400"}`} />
      {open ? "Hozir ochiq" : "Hozir yopiq"}
    </span>
  );
}

/**
 * Real street map of the selected branch: a static OpenStreetMap render (zoom 16) centred on the
 * branch's official coordinates, so the pin sits at the exact centre. Data © OpenStreetMap contributors.
 */
function BranchMap({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  const b = located.find((x) => x.id === selected) ?? located[0];
  return (
    <div className="relative h-full overflow-hidden rounded-3xl bg-green-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={b.id}
        src={`/images/map/${b.id}.webp`}
        alt={`${b.name} filiali joylashgan hudud xaritasi: ${b.address}`}
        width={1200}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover [filter:saturate(.75)]"
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full" aria-hidden>
        <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-green-800 py-1.5 pl-1.5 pr-3.5 text-[13px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)]">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow text-green-950"><IconPin className="h-3.5 w-3.5" /></span>
          YAPROQ {b.name}
        </span>
        <span className="mx-auto block h-3 w-3 -translate-y-1.5 rotate-45 bg-green-800" />
      </span>
      <div className="absolute left-3 top-3 flex gap-2" role="group" aria-label="Xaritadagi filial">
        {located.map((x) => {
          const on = x.id === b.id;
          return (
            <button
              key={x.id}
              type="button"
              onClick={() => onSelect(x.id)}
              aria-pressed={on}
              className={`flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold shadow-[0_8px_20px_-10px_rgba(0,0,0,0.5)] transition-colors ${on ? "bg-yellow text-green-950" : "bg-white text-green-900 hover:bg-green-50"}`}
            >
              <IconPin className="h-3.5 w-3.5" /> {x.name}
            </button>
          );
        })}
      </div>
      <a href={directionsUrl(b)} target="_blank" rel="noopener noreferrer" className="btn-primary absolute bottom-3 right-3 h-11 min-h-0 px-5 text-[14px]">
        <IconNavigate className="h-4 w-4" /> Yo‘nalishni ko‘rsatish
      </a>
      <p className="absolute bottom-0 left-0 rounded-tr-lg bg-white/85 px-2 py-0.5 text-[11px] text-ink-700">
        ©{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">
          OpenStreetMap
        </a>{" "}
        mualliflari
      </p>
    </div>
  );
}

function BranchDialog({ branch, onClose, mounted }: { branch: Branch | null; onClose: () => void; mounted: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (branch && !d.open) d.showModal();
    if (!branch && d.open) d.close();
  }, [branch]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="on-light m-auto max-h-[calc(100dvh-2rem)] w-[min(540px,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-3xl bg-white p-0 text-ink backdrop:bg-green-950/60 backdrop:backdrop-blur-sm open:animate-fade-up"
      aria-labelledby="branch-dialog-title"
    >
      {branch && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="branch-dialog-title" className="font-display text-[38px] leading-none text-green-900">{branch.name}</h3>
              {branch.district && <p className="mt-2 text-[15px] text-ink-600">{branch.district}</p>}
            </div>
            <button type="button" onClick={onClose} className="grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-green-800/5" aria-label="Yopish">
              <IconClose className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4"><OpenBadge b={branch} mounted={mounted} /></div>
          <dl className="mt-6 grid gap-4 text-[15px]">
            <div className="flex gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-green-800" />
              <div><dt className="sr-only">Manzil</dt><dd className="font-semibold">{branch.address ?? "Manzilni telefon orqali aniqlashtiring"}</dd>{branch.landmark && <dd className="text-ink-600">{branch.landmark}</dd>}</div>
            </div>
            <div className="flex gap-3">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-green-800" />
              <div><dt className="sr-only">Ish vaqti</dt><dd className="tabular font-semibold">{branch.hours ? `Har kuni, ${branch.hours}` : "Ish vaqtini telefon orqali aniqlashtirishingiz mumkin"}</dd></div>
            </div>
            <div className="flex gap-3">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-green-800" />
              <div><dt className="sr-only">Telefon raqami</dt><dd><a href={telHref(branch.phone)} className="tap tabular font-semibold underline decoration-green-800/30 decoration-2 hover:decoration-green-800">{branch.phone}</a></dd></div>
            </div>
          </dl>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hasLocation(branch) ? (
              <>
                <a href={directionsUrl(branch)} target="_blank" rel="noopener noreferrer" className="btn-green">
                  <IconNavigate className="h-4 w-4" /> Google Maps
                </a>
                <a href={yandexUrl(branch)} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Yandex Xaritalar <IconArrowUpRight className="h-4 w-4" />
                </a>
              </>
            ) : (
              <a href={telHref(branch.phone)} className="btn-green sm:col-span-2">
                <IconPhone className="h-4 w-4" /> Qo‘ng‘iroq qilish
              </a>
            )}
            {branch.onlineOrders && (
              <a href={contacts.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary sm:col-span-2">
                Ushbu filialdan buyurtma berish <IconArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Branches() {
  const [selected, setSelected] = useState(located[0].id);
  const [detail, setDetail] = useState<Branch | null>(null);
  const [geo, setGeo] = useState<Geo>({ status: "idle" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const distances = geo.pos ? Object.fromEntries(located.map((b) => [b.id, distanceKm(geo.pos!, b)])) : null;
  const nearestId = distances ? Object.entries(distances).sort((a, b) => a[1] - b[1])[0][0] : null;

  const locate = () => {
    if (!("geolocation" in navigator)) {
      setGeo({ status: "error", message: "Brauzeringiz joylashuvingizni aniqlay olmadi. Iltimos, filialni ro‘yxatdan tanlang." });
      return;
    }
    setGeo({ status: "loading" });
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const pos = { lat: p.coords.latitude, lng: p.coords.longitude };
        setGeo({ status: "ok", pos });
        setSelected([...located].sort((a, b) => distanceKm(pos, a) - distanceKm(pos, b))[0].id);
      },
      () => setGeo({ status: "error", message: "Joylashuvni aniqlashga ruxsat berilmadi. Iltimos, filialni ro‘yxatdan tanlang." }),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  };

  return (
    <section id="filiallar" aria-labelledby="branches-title" className="relative bg-paper py-20 sm:py-28">
      <Valance className="text-paper" seed={7} />
      <div className="container">
        <SectionHeading
          id="branches-title"
          title={<>Sizga eng yaqin <span className="text-green-500">YAPROQ</span> filiali</>}
          lead={`Toshkentda uchta filialimiz mavjud, har kuni ${hoursPhrase(facts.hours)} ishlaydi. Joylashuvingizni biz bilan ulashing — sizga eng yaqin filialni o‘zimiz topib beramiz.`}
          action={
            <button type="button" onClick={locate} disabled={geo.status === "loading"} className="btn-green h-14 px-6">
              <IconLocate className={`h-5 w-5 ${geo.status === "loading" ? "animate-spin" : ""}`} />
              {geo.status === "loading" ? "Aniqlanmoqda…" : "Eng yaqin filialni topish"}
            </button>
          }
        />
        {geo.status === "error" && <p role="status" className="mt-4 text-[14.5px] font-semibold text-[#9A3412]">{geo.message}</p>}

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <ul className="grid content-start gap-3 lg:col-span-5">
            {branches.map((b, i) => {
              const on = b.id === selected;
              const loc = hasLocation(b);
              return (
                <Reveal as="li" key={b.id} delay={i * 80}>
                  <article className={`relative rounded-3xl border-2 p-5 transition-all duration-500 sm:p-6 ${on ? "border-green-800 bg-white shadow-[0_22px_44px_-30px_rgba(11,61,31,0.55)]" : "border-green-800/10 bg-white/60 hover:border-green-800/30"}`}>
                    {loc && <button type="button" onClick={() => setSelected(b.id)} className="absolute inset-0 rounded-3xl" aria-label={`${b.name} filialini xaritada ko‘rsatish`} aria-pressed={on} />}
                    <div className="pointer-events-none relative flex items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <OpenBadge b={b} mounted={mounted} />
                          {nearestId === b.id && <span className="rounded-full bg-yellow px-2.5 py-1 text-[12.5px] font-bold text-green-950">Eng yaqin</span>}
                        </div>
                        <h3 className="mt-2 font-display text-[30px] leading-none text-green-900">{b.name}</h3>
                      </div>
                      {distances?.[b.id] !== undefined && <span className="tabular shrink-0 text-[14px] font-bold text-green-800">{distances[b.id].toFixed(1).replace(".", ",")} km</span>}
                    </div>
                    <div className="pointer-events-none relative mt-4 grid gap-2 text-[15px] text-ink-700">
                      <p className="flex gap-2.5"><IconPin className="mt-0.5 h-4 w-4 shrink-0 text-green-800" /> <span>{b.address ?? "Manzil va yo‘nalishni telefon orqali aniqlashtirishingiz mumkin"}{b.landmark && <span className="block text-ink-500">{b.landmark}</span>}</span></p>
                      <p className="flex gap-2.5"><IconClock className="mt-0.5 h-4 w-4 shrink-0 text-green-800" /> <span className="tabular">{b.hours ? `Har kuni, ${b.hours}` : "Ish vaqtini telefon orqali aniqlashtirishingiz mumkin"}</span></p>
                      <p className="flex gap-2.5"><IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-green-800" /> <a href={telHref(b.phone)} className="tap tabular pointer-events-auto underline decoration-green-800/30 decoration-2 hover:decoration-green-800">{b.phone}</a></p>
                    </div>
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {loc ? (
                        <a href={directionsUrl(b)} target="_blank" rel="noopener noreferrer" className={`btn h-11 min-h-0 px-5 text-[14px] ${on ? "bg-yellow text-green-950 hover:bg-yellow-300" : "bg-green-800 text-white hover:bg-green-700"}`}>
                          <IconNavigate className="h-4 w-4" /> Yo‘nalishni ko‘rsatish
                        </a>
                      ) : (
                        <a href={telHref(b.phone)} className="btn h-11 min-h-0 bg-green-800 px-5 text-[14px] text-white hover:bg-green-700">
                          <IconPhone className="h-4 w-4" /> Qo‘ng‘iroq qilish
                        </a>
                      )}
                      <button type="button" onClick={() => setDetail(b)} className="btn-outline h-11 min-h-0 px-5 text-[14px]">
                        Batafsil
                      </button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="order-first h-[300px] sm:h-[380px] lg:sticky lg:top-28 lg:order-none lg:col-span-7 lg:h-[520px] lg:self-start">
            <BranchMap selected={selected} onSelect={setSelected} />
          </Reveal>
        </div>
      </div>
      <BranchDialog branch={detail} onClose={() => setDetail(null)} mounted={mounted} />
    </section>
  );
}
