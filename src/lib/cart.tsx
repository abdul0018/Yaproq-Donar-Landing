"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState, type ReactNode } from "react";
import { getVariant, variantName, type Dish, type Variant } from "@/data/menu";

type Line = { id: string; qty: number };
type State = { lines: Line[] };
type Action =
  | { type: "add"; id: string; qty?: number }
  | { type: "set"; id: string; qty: number }
  | { type: "clear" }
  | { type: "hydrate"; lines: Line[] };

function reducer(state: State, a: Action): State {
  switch (a.type) {
    case "add": {
      const existing = state.lines.find((l) => l.id === a.id);
      if (existing) return { lines: state.lines.map((l) => (l.id === a.id ? { ...l, qty: Math.min(99, l.qty + (a.qty ?? 1)) } : l)) };
      return { lines: [...state.lines, { id: a.id, qty: a.qty ?? 1 }] };
    }
    case "set":
      return { lines: a.qty <= 0 ? state.lines.filter((l) => l.id !== a.id) : state.lines.map((l) => (l.id === a.id ? { ...l, qty: Math.min(99, a.qty) } : l)) };
    case "clear":
      return { lines: [] };
    case "hydrate":
      return { lines: a.lines };
  }
}

type CartCtx = {
  /** `id` is a variant id (official product slug). */
  lines: Array<Line & { dish: Dish; variant: Variant; name: string }>;
  count: number;
  subtotal: number;
  qtyOf: (id: string) => number;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  /** Last added item, used for the toast. */
  pulse: { id: string; n: number } | null;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "yaproq-cart-v2";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState<CartCtx["pulse"]>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const lines = (JSON.parse(raw) as Line[]).filter((l) => getVariant(l.id) && l.qty > 0);
        dispatch({ type: "hydrate", lines });
      }
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state.lines));
    } catch {}
  }, [state.lines, ready]);

  const add = useCallback((id: string) => {
    dispatch({ type: "add", id });
    setPulse((p) => ({ id, n: (p?.n ?? 0) + 1 }));
  }, []);
  const setQty = useCallback((id: string, qty: number) => dispatch({ type: "set", id, qty }), []);
  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const value = useMemo<CartCtx>(() => {
    const lines = state.lines.map((l) => {
      const { dish, variant } = getVariant(l.id)!;
      return { ...l, dish, variant, name: variantName(dish, variant) };
    });
    return {
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: lines.reduce((s, l) => s + l.qty * l.variant.price, 0),
      qtyOf: (id) => state.lines.find((l) => l.id === id)?.qty ?? 0,
      add,
      setQty,
      clear,
      open,
      setOpen,
      pulse,
    };
  }, [state.lines, add, setQty, clear, open, pulse]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
