"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";

/** Fades content up once it scrolls into view. Respects prefers-reduced-motion via CSS. */
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
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${shown ? "is-in" : ""} ${className}`} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
