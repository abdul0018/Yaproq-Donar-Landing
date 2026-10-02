"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { IconBag, IconClose, IconMenu, IconPhone } from "./icons";
import { navLinks, contacts, telHref } from "@/data/site";
import { useCart } from "@/lib/cart";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { count, setOpen, pulse } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const light = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${
        light ? "bg-transparent text-cream" : "bg-cream/90 text-ink shadow-[0_1px_0_rgba(21,32,26,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <a href="#asosiy" aria-label="YAPROQ DONAR — bosh sahifa" onClick={() => setMenuOpen(false)}>
          <Logo tone={light ? "light" : "dark"} />
        </a>

        <nav aria-label="Asosiy navigatsiya" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                      isActive ? (light ? "bg-cream/15" : "bg-forest/10 text-forest") : light ? "hover:bg-cream/10" : "hover:bg-ink/5"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={telHref(contacts.callCenter)} className={`hidden items-center gap-2 rounded-full px-3 py-2 text-[15px] font-semibold xl:inline-flex ${light ? "hover:bg-cream/10" : "hover:bg-ink/5"}`}>
            <IconPhone className="h-4 w-4" /> {contacts.callCenterShort}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`btn min-h-[44px] gap-2.5 px-4 sm:px-5 ${light ? "bg-cream text-forest hover:bg-white" : "bg-forest text-cream hover:bg-forest-700"}`}
            aria-label={`Savat, ${count} ta mahsulot`}
          >
            <IconBag className="h-[18px] w-[18px]" />
            <span className="hidden sm:inline">Buyurtma</span>
            <span key={pulse?.n} className={`grid h-6 min-w-6 place-items-center rounded-full bg-ember px-1.5 text-[12px] font-bold text-white ${pulse ? "animate-pop" : ""}`}>
              {count}
            </span>
          </button>
          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${light ? "hover:bg-cream/10" : "hover:bg-ink/5"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          >
            {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 bottom-0 top-[72px] origin-top bg-cream transition-all duration-500 ease-out lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobil navigatsiya" className="container flex h-full flex-col pb-8 pt-6">
          <ul className="flex flex-col">
            {navLinks.map((l, i) => (
              <li key={l.href} className="border-b border-ink/10" style={{ transitionDelay: `${menuOpen ? i * 40 : 0}ms` }}>
                <a href={l.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-5 font-display text-[32px] leading-none tracking-tight text-ink">
                  {l.label}
                  <span className="text-[14px] font-sans font-semibold text-ink-400">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3">
            <button type="button" onClick={() => { setMenuOpen(false); setOpen(true); }} className="btn-primary w-full">
              <IconBag className="h-5 w-5" /> Buyurtma berish
            </button>
            <a href={telHref(contacts.callCenter)} className="btn-ghost w-full">
              <IconPhone className="h-5 w-5" /> {contacts.callCenter}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
