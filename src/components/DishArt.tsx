"use client";

import { createContext, useContext, useId } from "react";

const GradCtx = createContext("d");
const useG = () => useContext(GradCtx);

/**
 * Art-directed, top-down food illustrations. Every dish in the menu has an `art` kind;
 * when a real photo is supplied (Dish.image) the photo is used instead — see DishVisual.
 */
export type ArtKind =
  | "wrap"
  | "shawarma"
  | "plate"
  | "chicken"
  | "pide"
  | "salad"
  | "dessert"
  | "drink"
  | "sauce"
  | "soup"
  | "set";

type Props = {
  kind: ArtKind;
  seed?: string;
  plate?: "light" | "dark" | "none";
  className?: string;
  title?: string;
};

// Deterministic PRNG so server and client render identical SVGs.
function rng(seedStr: string) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- Primitives ---------- */

export const Leaf = ({ x, y, r = 0, s = 1, c = "#3F8560" }: { x: number; y: number; r?: number; s?: number; c?: string }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M0 0C9-15 28-15 38 0C28 15 9 15 0 0Z" fill={c} />
    <path d="M2 0H34" stroke="#ffffff" strokeOpacity=".28" strokeWidth="1.4" strokeLinecap="round" />
  </g>
);

const Tomato = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle r="17" fill="#D93A2B" />
    <circle r="13" fill="#EE5A3F" />
    {[0, 72, 144, 216, 288].map((a) => (
      <ellipse key={a} cx="0" cy="-7" rx="3.2" ry="5" fill="#F7B25A" opacity=".85" transform={`rotate(${a})`} />
    ))}
    <circle r="3" fill="#F48A5F" />
  </g>
);

const Cucumber = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <circle r="14" fill="#2E6B3D" />
    <circle r="12" fill="#CFE5A7" />
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <ellipse key={a} cx="0" cy="-5" rx="1.3" ry="2.4" fill="#F4F7DE" transform={`rotate(${a})`} />
    ))}
  </g>
);

const Onion = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill="none">
    <circle r="13" stroke="#B85C8A" strokeWidth="3" />
    <circle r="8" stroke="#F3D9E6" strokeWidth="2.4" />
  </g>
);

const Chili = ({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M0 0C14-6 34-4 52 8C38 4 18 6 2 8C-2 6-2 2 0 0Z" fill="#C8281E" />
    <path d="M4 2C16-1 30 0 42 4" stroke="#fff" strokeOpacity=".3" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    <path d="M0 3C-6 1-10-4-12-8" stroke="#3F8560" strokeWidth="3.5" fill="none" strokeLinecap="round" />
  </g>
);

const Lemon = ({ x, y, r = 0, s = 1 }: { x: number; y: number; r?: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
    <path d="M-20 0A20 20 0 0 1 20 0Z" fill="#F2C230" />
    <path d="M-16 0A16 16 0 0 1 16 0Z" fill="#FCE58A" />
    {[-60, -30, 0, 30, 60].map((a) => (
      <line key={a} x1="0" y1="0" x2="0" y2="-15" stroke="#F2C230" strokeWidth="1.2" transform={`rotate(${a})`} />
    ))}
  </g>
);

const Fry = ({ x, y, r = 0, l = 46 }: { x: number; y: number; r?: number; l?: number }) => (
  <g transform={`translate(${x} ${y}) rotate(${r})`}>
    <rect x={-l / 2} y="-4.5" width={l} height="9" rx="3" fill="#F2B544" />
    <rect x={-l / 2} y="-4.5" width={l} height="3" rx="1.5" fill="#FAD27A" />
    <rect x={l / 2 - 6} y="-4.5" width="6" height="9" rx="3" fill="#D98E2B" />
  </g>
);

const MeatSlice = ({ x, y, r = 0, s = 1, tone = 0 }: { x: number; y: number; r?: number; s?: number; tone?: number }) => {
  const base = ["#8A4A26", "#9C5630", "#7A3E1E"][tone % 3];
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d="M-26-8C-14-16 12-15 26-6C30 2 22 12 6 13C-10 14-28 8-30 1C-31-3-29-6-26-8Z" fill={base} />
      <path d="M-22-5C-10-11 10-10 22-3" stroke="#C47A45" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".75" />
      <path d="M-24 4C-10 9 8 9 20 5" stroke="#4A2410" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity=".55" />
    </g>
  );
};

const Sauce = ({ x, y, r = 0, c = "#FBF6EA" }: { x: number; y: number; r?: number; c?: string }) => (
  <path
    transform={`translate(${x} ${y}) rotate(${r})`}
    d="M-50 0C-40-10-30 10-20 0S0-10 10 0 30 10 40 0"
    stroke={c}
    strokeWidth="5"
    strokeLinecap="round"
    fill="none"
  />
);

const Pepper = ({ x, y }: { x: number; y: number }) => <circle cx={x} cy={y} r="2.6" fill="#2A1A10" />;

/* ---------- Plate ---------- */

function Plate({ tone, id }: { tone: "light" | "dark"; id: string }) {
  const rim = tone === "dark" ? "#1C4A35" : "#FBF8F2";
  const well = tone === "dark" ? "#163D2C" : "#F2EBDD";
  const edge = tone === "dark" ? "#2A6047" : "#FFFFFF";
  return (
    <g>
      <ellipse cx="206" cy="214" rx="178" ry="178" fill={`url(#${id}-shadow)`} />
      <circle cx="200" cy="200" r="176" fill={rim} />
      <circle cx="200" cy="200" r="176" fill="none" stroke={edge} strokeOpacity=".7" strokeWidth="2" />
      <circle cx="200" cy="200" r="132" fill={well} />
      <circle cx="200" cy="200" r="132" fill={`url(#${id}-well)`} />
    </g>
  );
}

/* ---------- Dishes ---------- */

function WrapHalf({ x, y, r, fill }: { x: number; y: number; r: number; fill: "beef" | "chicken" }) {
  const G = useG();
  const meat = fill === "beef" ? "#8E4B27" : "#C98A4B";
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <rect x="-110" y="-38" width="150" height="76" rx="34" fill="#E2B872" />
      <rect x="-110" y="-38" width="150" height="76" rx="34" fill={`url(#${G}-lavash)`} />
      {[-80, -50, -20, 10].map((gx) => (
        <path key={gx} d={`M${gx} -34 L${gx + 16} 34`} stroke="#B9813E" strokeWidth="5" strokeLinecap="round" opacity=".55" />
      ))}
      {/* cut face */}
      <ellipse cx="42" cy="0" rx="20" ry="38" fill="#F1D9A6" />
      <ellipse cx="44" cy="0" rx="16" ry="33" fill={meat} />
      <ellipse cx="46" cy="-14" rx="9" ry="9" fill="#E8402E" />
      <ellipse cx="44" cy="12" rx="9" ry="10" fill="#5FA052" />
      <ellipse cx="48" cy="-2" rx="6" ry="7" fill="#FBF6EA" />
      <ellipse cx="40" cy="24" rx="5" ry="5" fill="#F0E2C2" />
    </g>
  );
}

function Wrap({ seed, chicken, variant }: { seed: () => number; chicken?: boolean; variant: string }) {
  const t = Math.round(seed() * 40) - 20;
  const cheese = /pishloq/.test(variant);
  const hot = /achchiq|olov/.test(variant);
  const big = /katta/.test(variant);
  return (
    <g>
      {big &&
        Array.from({ length: 6 }, (_, i) => <Fry key={i} x={262 + i * 7} y={250 + (i % 2) * 8} r={60 + i * 10} l={48} />)}
      <WrapHalf x={190} y={160} r={-28 + t} fill={chicken ? "chicken" : "beef"} />
      <WrapHalf x={214} y={250} r={152 + t} fill={chicken ? "chicken" : "beef"} />
      {cheese && (
        <g fill="#F2B544">
          <path d="M150 140c10 6 30 4 40 14s-6 20 4 26-20 4-30-6-24-24-14-34Z" opacity=".9" />
          <path d="M230 240c12 2 26 10 22 22s-18 6-26 0-8-24 4-22Z" opacity=".9" />
        </g>
      )}
      {hot && (
        <>
          <Chili x={110} y={140} r={-50} s={0.9} />
          <Chili x={260} y={300} r={20} s={0.8} />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={150 + i * 22} cy={110 + (i % 2) * 14} r="3" fill="#C8281E" />
          ))}
        </>
      )}
      <Leaf x={92} y={250} r={-40} s={1.1} />
      <Leaf x={108} y={268} r={10} s={0.9} c="#5FA052" />
      {!hot && <Tomato x={300} y={128} s={0.9} />}
      {!big && <Onion x={128} y={128} s={0.9} />}
      <Pepper x={286} y={292} />
      <Pepper x={296} y={300} />
      <Pepper x={278} y={304} />
    </g>
  );
}

function Shawarma({ seed }: { seed: () => number }) {
  const G = useG();
  const t = Math.round(seed() * 16) - 8;
  return (
    <g transform={`rotate(${-34 + t} 200 200)`}>
      <rect x="92" y="150" width="230" height="100" rx="48" fill="#E4C080" />
      <rect x="92" y="150" width="230" height="100" rx="48" fill={`url(#${G}-lavash)`} />
      {/* paper sleeve */}
      <path d="M150 146H330V254H150Z" fill="#FBF6EA" />
      <path d="M150 146H330V254H150Z" fill={`url(#${G}-paper)`} />
      <rect x="196" y="146" width="34" height="108" fill="#2C6A4C" />
      <text x="213" y="203" textAnchor="middle" fontSize="13" fontWeight="700" fill="#FBF6EA" transform="rotate(-90 213 200)" letterSpacing="2">
        YAPROQ
      </text>
      {/* open end */}
      <ellipse cx="104" cy="200" rx="26" ry="48" fill="#F0D6A0" />
      <ellipse cx="104" cy="200" rx="21" ry="41" fill="#C98A4B" />
      <circle cx="100" cy="182" r="9" fill="#E8402E" />
      <circle cx="108" cy="204" r="8" fill="#F2A33A" />
      <circle cx="98" cy="222" r="9" fill="#6DB05E" />
      <path d="M90 196C98 190 108 192 118 186" stroke="#FBF6EA" strokeWidth="5" strokeLinecap="round" fill="none" />
    </g>
  );
}

function PlateMeal({ seed }: { seed: () => number }) {
  const slices = Array.from({ length: 7 }, (_, i) => i);
  return (
    <g>
      {/* rice */}
      <path d="M118 210C110 160 160 120 210 128C228 132 232 170 220 210C206 250 128 262 118 210Z" fill="#F4EEDF" />
      {Array.from({ length: 40 }, (_, i) => {
        const a = seed() * Math.PI * 2;
        const d = seed() * 45;
        return (
          <ellipse key={i} cx={170 + Math.cos(a) * d} cy={190 + Math.sin(a) * d} rx="3.4" ry="1.5" fill="#E2D8C0" transform={`rotate(${seed() * 180} ${170 + Math.cos(a) * d} ${190 + Math.sin(a) * d})`} />
        );
      })}
      {/* meat fan */}
      {slices.map((i) => (
        <MeatSlice key={i} x={250 + i * 6} y={150 + i * 17} r={-20 + i * 9} s={1.05} tone={i} />
      ))}
      <Sauce x={250} y={200} r={70} />
      {/* fries */}
      {Array.from({ length: 7 }, (_, i) => (
        <Fry key={i} x={170 + i * 9} y={276 + (i % 2) * 6} r={-60 + i * 14} l={44 + (i % 3) * 6} />
      ))}
      <Tomato x={128} y={276} s={0.85} />
      <Cucumber x={150} y={300} s={0.85} />
      <Leaf x={300} y={110} r={30} />
      <Chili x={112} y={150} r={-60} s={0.8} />
    </g>
  );
}

function Chicken({ seed }: { seed: () => number }) {
  const legs = [
    { x: 170, y: 170, r: -30 },
    { x: 240, y: 190, r: 40 },
    { x: 190, y: 250, r: 180 },
  ];
  return (
    <g>
      {legs.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r + (seed() * 10 - 5)})`}>
          <path d="M-60 0C-60-30-20-42 10-30C30-22 40-10 54-6C64-4 64 6 54 6C40 10 30 22 10 30C-20 42-60 30-60 0Z" fill="#B5652B" />
          <path d="M-50-6C-44-26-14-32 8-24" stroke="#E0964F" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".7" />
          {[-34, -14, 6].map((gx) => (
            <path key={gx} d={`M${gx} -26 L${gx + 12} 26`} stroke="#4A230E" strokeWidth="5" strokeLinecap="round" opacity=".55" />
          ))}
          <circle cx="62" cy="0" r="7" fill="#F3E3C6" />
        </g>
      ))}
      <Lemon x={300} y={270} r={-30} s={1.1} />
      <Leaf x={110} y={240} r={-20} />
      <Leaf x={290} y={120} r={60} s={0.9} c="#5FA052" />
      <Chili x={260} y={300} r={10} s={0.7} />
      {Array.from({ length: 10 }, (_, i) => (
        <circle key={i} cx={150 + seed() * 120} cy={140 + seed() * 140} r="1.8" fill="#C8281E" opacity=".8" />
      ))}
    </g>
  );
}

function Pide({ seed }: { seed: () => number }) {
  const G = useG();
  return (
    <g transform={`rotate(${-38 + Math.round(seed() * 8)} 200 200)`}>
      <path d="M40 200C80 150 320 150 360 200C320 250 80 250 40 200Z" fill="#D9A15A" />
      <path d="M40 200C80 150 320 150 360 200C320 250 80 250 40 200Z" fill={`url(#${G}-crust)`} />
      <path d="M78 200C110 172 290 172 322 200C290 228 110 228 78 200Z" fill="#9C4A25" />
      {Array.from({ length: 34 }, (_, i) => {
        const x = 100 + seed() * 200;
        const y = 188 + seed() * 24;
        return <circle key={i} cx={x} cy={y} r={2 + seed() * 4} fill={["#7A3418", "#C9452A", "#E8B24A", "#5C2A12"][i % 4]} />;
      })}
      {[130, 200, 270].map((x) => (
        <ellipse key={x} cx={x} cy={200} rx="16" ry="11" fill="#E8402E" opacity=".9" />
      ))}
      <Leaf x={160} y={198} r={-10} s={0.6} />
      <Leaf x={232} y={204} r={170} s={0.6} />
      {[110, 170, 230, 290].map((x) => (
        <path key={x} d={`M${x} 168 l6 -2`} stroke="#8F5420" strokeWidth="3" strokeLinecap="round" />
      ))}
    </g>
  );
}

function Salad({ seed }: { seed: () => number }) {
  const items = Array.from({ length: 30 }, () => ({
    a: seed() * Math.PI * 2,
    d: 20 + seed() * 92,
    k: Math.floor(seed() * 5),
    r: seed() * 360,
  }));
  return (
    <g>
      {items
        .filter((i) => i.k < 2)
        .map((i, n) => (
          <Leaf key={`l${n}`} x={200 + Math.cos(i.a) * i.d} y={200 + Math.sin(i.a) * i.d} r={i.r} s={1.3} c={i.k ? "#4E9A57" : "#2F7A45"} />
        ))}
      {items
        .filter((i) => i.k === 2)
        .map((i, n) => (
          <Tomato key={`t${n}`} x={200 + Math.cos(i.a) * i.d * 0.8} y={200 + Math.sin(i.a) * i.d * 0.8} s={0.8} />
        ))}
      {items
        .filter((i) => i.k === 3)
        .map((i, n) => (
          <Cucumber key={`c${n}`} x={200 + Math.cos(i.a) * i.d * 0.8} y={200 + Math.sin(i.a) * i.d * 0.8} s={0.8} />
        ))}
      {items
        .filter((i) => i.k === 4)
        .map((i, n) => (
          <circle key={`p${n}`} cx={200 + Math.cos(i.a) * i.d * 0.7} cy={200 + Math.sin(i.a) * i.d * 0.7} r="6" fill="#A3182F" />
        ))}
      <Onion x={180} y={210} />
      <Lemon x={270} y={150} r={40} />
      <path d="M150 160C180 150 230 170 250 230" stroke="#E9C46A" strokeOpacity=".6" strokeWidth="3" fill="none" strokeDasharray="2 7" strokeLinecap="round" />
    </g>
  );
}

function Dessert({ seed }: { seed: () => number }) {
  const pieces = [
    { x: 160, y: 170 },
    { x: 240, y: 170 },
    { x: 160, y: 250 },
    { x: 240, y: 250 },
  ];
  return (
    <g transform={`rotate(${Math.round(seed() * 20)} 200 200)`}>
      {pieces.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y}) rotate(45)`}>
          <rect x="-34" y="-34" width="68" height="68" rx="6" fill="#C9822E" />
          <rect x="-28" y="-28" width="56" height="56" rx="4" fill="#E2A64B" />
          <path d="M-28-10H28M-28 8H28" stroke="#B9722A" strokeWidth="2" opacity=".6" />
          {Array.from({ length: 9 }, (_, j) => (
            <circle key={j} cx={-14 + (j % 3) * 14 + seed() * 4} cy={-14 + Math.floor(j / 3) * 14 + seed() * 4} r="4" fill="#7DAA3C" />
          ))}
        </g>
      ))}
      <path d="M120 120C180 140 220 120 290 140" stroke="#F2B544" strokeOpacity=".7" strokeWidth="4" fill="none" strokeLinecap="round" />
      <Leaf x={290} y={300} r={-30} s={0.7} c="#5FA052" />
    </g>
  );
}

function Drink({ seed, tone }: { seed: () => number; tone: "ayran" | "lemon" | "tea" | "cola" }) {
  const G = useG();
  const liquid = { ayran: "#F7F3EA", lemon: "#F3E7A1", tea: "#A8361C", cola: "#3A1A10" }[tone];
  const foam = { ayran: "#FFFFFF", lemon: "#FFFBE0", tea: "#C9512A", cola: "#8A5A3C" }[tone];
  return (
    <g>
      <circle cx="200" cy="200" r="104" fill="#FFFFFF" opacity=".35" />
      <circle cx="200" cy="200" r="96" fill={liquid} />
      <circle cx="200" cy="200" r="96" fill={`url(#${G}-glass)`} />
      {Array.from({ length: 14 }, (_, i) => (
        <circle key={i} cx={150 + seed() * 100} cy={150 + seed() * 100} r={3 + seed() * 6} fill={foam} opacity=".75" />
      ))}
      {tone === "lemon" && (
        <>
          <Lemon x={232} y={176} r={-20} s={1.4} />
          <Leaf x={150} y={210} r={-30} s={1.1} c="#3F8560" />
          <rect x="178" y="210" width="34" height="34" rx="6" fill="#FFFFFF" opacity=".6" transform="rotate(20 195 227)" />
        </>
      )}
      {tone === "ayran" && <Leaf x={210} y={196} r={-140} s={0.8} c="#3F8560" />}
      <path d="M140 130A90 90 0 0 1 250 118" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".7" />
      {/* straw */}
      {(tone === "lemon" || tone === "cola") && <rect x="210" y="60" width="12" height="150" rx="6" fill="#2C6A4C" transform="rotate(35 216 135)" />}
    </g>
  );
}

function SauceBowl({ tone }: { tone: "white" | "red" | "cheese" }) {
  const c = { white: "#FBF6EA", red: "#C8281E", cheese: "#F2B544" }[tone];
  const hi = { white: "#FFFFFF", red: "#E8603F", cheese: "#FAD27A" }[tone];
  return (
    <g>
      <circle cx="200" cy="200" r="104" fill="#FFFFFF" />
      <circle cx="200" cy="200" r="104" fill="none" stroke="#E7DCC6" strokeWidth="6" />
      <circle cx="200" cy="200" r="86" fill={c} />
      <path d="M150 200C150 170 180 150 205 155C235 160 245 190 225 205C205 220 180 210 185 190C190 175 210 178 210 190" stroke={hi} strokeWidth="7" fill="none" strokeLinecap="round" />
      {tone === "white" && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M${170 + i * 14} ${230 - (i % 2) * 8}l6-6`} stroke="#3F8560" strokeWidth="3" strokeLinecap="round" />
          ))}
        </>
      )}
      {tone === "red" && [0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={165 + i * 13} cy={235 - (i % 2) * 10} r="2.5" fill="#7A1510" />)}
    </g>
  );
}

function Soup({ seed }: { seed: () => number }) {
  return (
    <g>
      <circle cx="200" cy="200" r="118" fill="#B8733F" />
      <circle cx="200" cy="200" r="108" fill="#D99A5E" />
      <circle cx="200" cy="200" r="94" fill="#E9A93A" />
      {Array.from({ length: 16 }, (_, i) => (
        <circle key={i} cx={140 + seed() * 120} cy={140 + seed() * 120} r={1.6 + seed() * 2.4} fill="#C4761E" opacity=".7" />
      ))}
      <path d="M150 170c20-12 60-14 90 4" stroke="#F6CC6A" strokeWidth="6" strokeLinecap="round" fill="none" opacity=".7" />
      <Leaf x={186} y={210} r={-20} s={0.7} c="#3F8560" />
      <Leaf x={214} y={226} r={160} s={0.6} c="#5FA052" />
      <Lemon x={290} y={118} r={40} s={1.3} />
    </g>
  );
}

function SetBoard({ seed }: { seed: () => number }) {
  const G = useG();
  return (
    <g>
      <rect x="40" y="70" width="320" height="260" rx="40" fill="#9A6A3A" />
      <rect x="40" y="70" width="320" height="260" rx="40" fill={`url(#${G}-wood)`} />
      <rect x="40" y="70" width="320" height="260" rx="40" fill="none" stroke="#7A4E25" strokeWidth="3" />
      <g transform="translate(-30 -40) scale(.85)">
        <WrapHalf x={200} y={190} r={-14} fill="beef" />
        <WrapHalf x={210} y={270} r={-8} fill="chicken" />
      </g>
      {/* fries cone */}
      <g transform="translate(278 160)">
        {Array.from({ length: 8 }, (_, i) => (
          <Fry key={i} x={-14 + i * 4} y={-18 + (i % 3) * 3} r={-90 + (i - 4) * 9} l={46} />
        ))}
        <path d="M-34 6H34L22 64H-22Z" fill="#E2622B" />
        <path d="M-34 6H34L32 16H-32Z" fill="#C9501C" />
      </g>
      {/* sauces */}
      {[
        { x: 110, c: "#FBF6EA" },
        { x: 162, c: "#C8281E" },
        { x: 214, c: "#F2B544" },
      ].map((s) => (
        <g key={s.x} transform={`translate(${s.x} 290)`}>
          <circle r="22" fill="#FFFFFF" />
          <circle r="17" fill={s.c} />
        </g>
      ))}
      <Leaf x={300} y={270} r={-30} s={1} />
      <Tomato x={318} y={296} s={0.75} />
      {Array.from({ length: 6 }, (_, i) => (
        <Pepper key={i} x={250 + seed() * 30} y={300 + seed() * 18} />
      ))}
    </g>
  );
}

/* ---------- Main ---------- */

export default function DishArt({ kind, seed = kind, plate = "light", className, title }: Props) {
  const raw = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const id = `d${raw}`;
  const r = rng(seed);
  const usesPlate = plate !== "none" && kind !== "set" && kind !== "drink" && kind !== "sauce";

  const drinkTone = /ayron/.test(seed) ? "ayran" : /limonad/.test(seed) ? "lemon" : /choy/.test(seed) ? "tea" : /kola/.test(seed) ? "cola" : "ayran";
  const sauceTone = /achchiq/.test(seed) ? "red" : /pishloq/.test(seed) ? "cheese" : "white";

  return (
    <GradCtx.Provider value={id}>
    <svg viewBox="0 0 400 400" className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <defs>
        <radialGradient id={`${id}-shadow`} cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#0B1A12" stopOpacity=".28" />
          <stop offset="100%" stopColor="#0B1A12" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-well`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity=".18" />
          <stop offset="100%" stopColor="#000000" stopOpacity=".06" />
        </radialGradient>
        <linearGradient id={`${id}-lavash`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5D9A0" stopOpacity=".9" />
          <stop offset=".55" stopColor="#E2B872" stopOpacity="0" />
          <stop offset="1" stopColor="#B07A3A" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".6" />
          <stop offset="1" stopColor="#D8CCB4" stopOpacity=".6" />
        </linearGradient>
        <radialGradient id={`${id}-crust`} cx="50%" cy="50%" r="55%">
          <stop offset=".6" stopColor="#E9B66C" stopOpacity="0" />
          <stop offset="1" stopColor="#8F5420" stopOpacity=".6" />
        </radialGradient>
        <radialGradient id={`${id}-glass`} cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".5" />
          <stop offset="1" stopColor="#000000" stopOpacity=".12" />
        </radialGradient>
        <linearGradient id={`${id}-wood`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C49058" stopOpacity=".8" />
          <stop offset="1" stopColor="#6E4420" stopOpacity=".5" />
        </linearGradient>
      </defs>
      {kind === "drink" || kind === "sauce" ? <ellipse cx="208" cy="214" rx="120" ry="120" fill={`url(#${id}-shadow)`} /> : null}
      {kind === "set" ? <rect x="48" y="86" width="320" height="260" rx="40" fill="#0B1A12" opacity=".18" /> : null}
      {usesPlate && <Plate tone={plate === "dark" ? "dark" : "light"} id={id} />}
      {kind === "wrap" && <Wrap seed={r} chicken={/tovuq/.test(seed)} variant={seed} />}
      {kind === "shawarma" && <Shawarma seed={r} />}
      {kind === "plate" && <PlateMeal seed={r} />}
      {kind === "chicken" && <Chicken seed={r} />}
      {kind === "pide" && <Pide seed={r} />}
      {kind === "salad" && <Salad seed={r} />}
      {kind === "dessert" && <Dessert seed={r} />}
      {kind === "drink" && <Drink seed={r} tone={drinkTone} />}
      {kind === "sauce" && <SauceBowl tone={sauceTone} />}
      {kind === "set" && <SetBoard seed={r} />}
      {kind === "soup" && <Soup seed={r} />}
    </svg>
    </GradCtx.Provider>
  );
}

export { Chili, Tomato, Lemon, Pepper };
