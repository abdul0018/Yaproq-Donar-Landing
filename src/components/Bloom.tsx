"use client";

import { useEffect, useRef, useState } from "react";

/** The About watercolour splash: visible by default, blooms once when it first scrolls into view. */
export default function Bloom() {
  const ref = useRef<HTMLImageElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight * 0.85) return; // already on screen: stay still
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      aria-hidden
      src="/images/paint/splash-sage.png"
      alt=""
      width={900}
      height={741}
      loading="lazy"
      className={`pointer-events-none absolute -inset-[16%] h-[132%] w-[132%] max-w-none rotate-[-6deg] object-contain ${run ? "bloom-run" : ""}`}
    />
  );
}
