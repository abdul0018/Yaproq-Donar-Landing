"use client";

import { useEffect, useRef } from "react";
import { formatPrice } from "@/data/site";

/** Price that ticks in when it changes (e.g. a new size), and renders still on first paint. */
export default function Price({ value }: { value: number }) {
  const first = useRef(true);
  useEffect(() => {
    first.current = false;
  }, []);
  return (
    <span key={value} className={first.current ? undefined : "price-tick"}>
      {formatPrice(value)}
    </span>
  );
}
