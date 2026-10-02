"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Fades content up as it enters the viewport. Content renders visible on the server and
 * without JS; only elements still below the fold after hydration are held back for the reveal.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  style,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "pending" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return; // already on screen: leave it be
    setState("pending");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = state === "pending" ? "reveal-pending" : state === "in" ? "reveal-in" : "";
  return (
    <Tag ref={ref} className={`${cls} ${className}`} style={{ ...style, transitionDelay: state === "in" ? `${delay}ms` : undefined }}>
      {children}
    </Tag>
  );
}
