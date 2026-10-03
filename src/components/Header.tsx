"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { IconArrow, IconBag, IconClose, IconMenu, IconPhone } from "./icons";
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
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,color] duration-500 ${
        light ? "bg-transparent text-white" : "bg-paper/95 text-ink shadow-[0_1px_0_rgba(15,36,23,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <a href="#asosiy" aria-label="YAPROQ — bosh sahifa" onClick={() => setMenuOpen(false)} className={`tap ${light ? "text-white" : "text-green-800"}`}>
          <Logo className="h-8 w-auto sm:h-9" />
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
                    className={`relative inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-semibold transition-colors ${
                      isActive ? (light ? "bg-white/15" : "bg-green-800/10 text-green-800") : light ? "hover:bg-white/10" : "hover:bg-green-800/5"
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
          <a href={telHref(contacts.phone)} className={`tabular hidden items-center gap-2 rounded-full px-3 py-2 text-[15px] font-bold xl:inline-flex ${light ? "hover:bg-white/10" : "hover:bg-green-800/5"}`}>
            <IconPhone className="h-4 w-4" /> {contacts.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn min-h-[44px] gap-2.5 bg-yellow px-4 text-green-950 hover:bg-yellow-300 sm:px-5"
            data-cart-target
            aria-label={`Savat, ${count} ta mahsulot`}
          >
            <IconBag className="h-[18px] w-[18px]" />
            <span className="hidden sm:inline">Buyurtma</span>
            <span key={pulse?.n} className={`tabular grid h-6 min-w-6 place-items-center rounded-full bg-green-900 px-1.5 text-[12px] font-bold text-white ${pulse ? "animate-pop" : ""}`}>
              {count}
            </span>
          </button>
          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${light ? "hover:bg-white/10" : "hover:bg-green-800/5"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          >
            {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

    </header>
      {/* Mobile navigation: a sibling of the header, because the header's backdrop-filter would make it
          the containing block for this fixed panel and collapse it to the header's height. */}
      <div
        id="mobile-nav"
        className={`on-light fixed inset-x-0 bottom-0 top-[calc(72px+env(safe-area-inset-top))] z-[49] origin-top overflow-y-auto bg-paper transition-all duration-500 ease-out lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobil navigatsiya" className="container flex min-h-full flex-col pb-[max(2rem,env(safe-area-inset-bottom))] pt-6">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-green-800/10">
                <a href={l.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-5 font-display text-[34px] leading-none text-green-900">
                  {l.label}
                  <IconArrow className="h-6 w-6 text-green-800/40" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3">
            <button type="button" onClick={() => { setMenuOpen(false); setOpen(true); }} className="btn-primary w-full">
              <IconBag className="h-5 w-5" /> Buyurtma berish
            </button>
            <a href={telHref(contacts.phone)} className="btn-outline tabular w-full">
              <IconPhone className="h-5 w-5" /> {contacts.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
