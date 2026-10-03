"use client";

import { useEffect, useRef } from "react";

// The Karagöz screen (perde): a lamp-lit, woven yellow screen with translucent, pin-jointed
// leather figures on rods. Hand-built SVG; every motion is CSS and switched off for reduced motion.

type Props = { id: string; scene?: "kitchen" | "delivery"; className?: string };

const ring = (cx: number, cy: number, r: number, n: number, fill: string, size = 2.2) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i * 2 * Math.PI) / n;
    return <circle key={i} cx={+(cx + Math.cos(a) * r).toFixed(1)} cy={+(cy + Math.sin(a) * r).toFixed(1)} r={size} fill={fill} />;
  });

const Pin = ({ x, y }: { x: number; y: number }) => (
  <>
    <circle cx={x} cy={y} r="5" fill="#3A2410" />
    <circle cx={x} cy={y} r="2" fill="#D9B25A" />
  </>
);

const Rod = ({ x, y, h }: { x: number; y: number; h: number }) => <rect x={x} y={y} width="6" height={h} rx="2" fill="#3A2410" />;

function Kitchen() {
  return (
    <>
      {/* Donar spit */}
      <g transform="translate(470 120)">
        <g className="puppet puppet-b">
          <rect x="36" y="-30" width="8" height="330" fill="#3A2410" />
          <path d="M0 10 Q40 -8 80 10 L92 240 Q40 262 -12 240 Z" fill="#8E3B12" opacity=".88" />
          {Array.from({ length: 8 }, (_, i) => (
            <path key={i} d={`M${-4 + i * 0.6} ${30 + i * 28} Q40 ${16 + i * 28} ${84 - i * 0.6} ${30 + i * 28}`} stroke="#E8A13A" strokeWidth="5" fill="none" opacity=".8" />
          ))}
          {ring(40, 125, 28, 14, "#F6E39A")}
          <Pin x={40} y={10} />
          <Pin x={40} y={240} />
          <path d="M-30 280 h140 l-14 22 h-112 z" fill="#1F6B3A" opacity=".9" />
        </g>
      </g>
      {/* The cook, in Karagöz profile */}
      <g transform="translate(140 110)">
        <g className="puppet puppet-a">
          <path d="M40 0 q30 -8 44 18 l-6 18 h-46 z" fill="#A3241A" />
          <circle cx="62" cy="62" r="30" fill="#C98A4B" />
          <path d="M86 58 q20 6 4 16" fill="#C98A4B" />
          <circle cx="70" cy="56" r="4" fill="#2B1A0E" />
          <path d="M46 78 q18 22 36 0" stroke="#2B1A0E" strokeWidth="5" fill="none" />
          <path d="M28 96 h72 l12 150 h-96 z" fill="#115A2E" opacity=".92" />
          {ring(64, 150, 26, 12, "#EDCD49")}
          <path d="M30 246 h30 l-4 80 h-22 z M70 246 h30 l-4 80 h-22 z" fill="#5C3A1E" />
          <g className="puppet-arm">
            <path d="M100 110 l90 40 l-8 16 l-92 -34 z" fill="#C98A4B" />
            <path d="M188 146 l70 -12 l2 10 l-70 14 z" fill="#D8D8D8" />
            <Pin x={186} y={154} />
          </g>
          <Pin x={64} y={96} />
          <Pin x={102} y={118} />
          <Pin x={45} y={248} />
          <Pin x={85} y={248} />
          <Rod x={60} y={326} h={90} />
        </g>
      </g>
      {/* The plate */}
      <g transform="translate(300 330)">
        <g className="puppet puppet-c">
          <ellipse cx="80" cy="40" rx="96" ry="30" fill="#1F6B3A" />
          <ellipse cx="80" cy="34" rx="80" ry="22" fill="#F6E39A" />
          <path d="M20 30 q60 -40 120 0 q-60 14 -120 0z" fill="#B25A22" />
          {ring(80, 40, 70, 22, "#0B3D1F")}
          <Rod x={77} y={66} h={90} />
        </g>
      </g>
    </>
  );
}

function Delivery() {
  return (
    <g transform="translate(170 150)">
      <g className="puppet puppet-ride">
        {/* scooter */}
        <path d="M60 230 q10 -60 90 -60 h120 l40 -90 h30 l-34 96 q60 6 70 54 z" fill="#115A2E" opacity=".92" />
        {ring(200, 210, 22, 10, "#EDCD49")}
        {[100, 360].map((x) => (
          <g key={x}>
            <circle cx={x} cy="250" r="42" fill="#2B1A0E" />
            <circle cx={x} cy="250" r="20" fill="#C9A12A" />
            {ring(x, 250, 31, 12, "#F6E39A", 2.6)}
          </g>
        ))}
        {/* box on the back */}
        <rect x="20" y="70" width="110" height="96" rx="8" fill="#EDCD49" />
        <rect x="20" y="70" width="110" height="96" rx="8" fill="none" stroke="#B8961A" strokeWidth="4" />
        <path d="M75 92 q-26 26 0 56 q26 -30 0 -56z" fill="#115A2E" />
        <path d="M75 100 v44" stroke="#EDCD49" strokeWidth="3" />
        {/* rider */}
        <path d="M170 -20 q30 -8 44 18 l-6 18 h-46 z" fill="#A3241A" />
        <circle cx="192" cy="42" r="28" fill="#C98A4B" />
        <path d="M216 38 q18 6 4 16" fill="#C98A4B" />
        <circle cx="200" cy="36" r="4" fill="#2B1A0E" />
        <path d="M158 74 h68 l14 100 h-90 z" fill="#A3241A" opacity=".9" />
        {ring(192, 122, 20, 10, "#F6E39A")}
        <path d="M220 90 l80 -6 l2 14 l-80 8 z" fill="#C98A4B" />
        <Pin x={192} y={74} />
        <Pin x={222} y={96} />
        <Rod x={190} y={292} h={70} />
      </g>
      {/* road dashes passing under the wheels */}
      <g className="puppet-road" fill="#0B3D1F" opacity=".35">
        {Array.from({ length: 10 }, (_, i) => <rect key={i} x={-120 + i * 80} y="300" width="44" height="6" rx="3" />)}
      </g>
    </g>
  );
}

export default function Perde({ id, scene = "kitchen", className = "" }: Props) {
  const lamp = `${id}-lamp`, weave = `${id}-weave`, clip = `${id}-clip`;
  const ref = useRef<SVGSVGElement>(null);
  // A screen that starts below the fold holds its show until it is scrolled into view.
  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add("perde-wait");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.remove("perde-wait");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <svg ref={ref} viewBox="0 0 720 560" className={`perde ${className}`} aria-hidden>
      <defs>
        <radialGradient id={lamp} cx="50%" cy="45%" r="70%">
          <stop offset="0" stopColor="#FFF3B8" />
          <stop offset=".45" stopColor="#F5DB6A" />
          <stop offset="1" stopColor="#D9AE2A" />
        </radialGradient>
        <pattern id={weave} width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3h6M3 0v6" stroke="#C9A12A" strokeWidth=".5" opacity=".35" />
        </pattern>
        <clipPath id={clip}>
          <rect x="34" y="34" width="652" height="470" rx="6" />
        </clipPath>
      </defs>
      <rect x="0" y="0" width="720" height="560" rx="18" fill="#072813" />
      {/* the screen before the lamp is lit, then lit */}
      <rect x="34" y="34" width="652" height="470" rx="6" fill="#5C4A14" />
      <g className="perde-lamp">
        <rect x="34" y="34" width="652" height="470" rx="6" fill={`url(#${lamp})`} />
      </g>
      <rect x="34" y="34" width="652" height="470" rx="6" fill={`url(#${weave})`} />
      <g fill="none" stroke="#EDCD49" strokeWidth="3" opacity=".9">
        {Array.from({ length: 19 }, (_, i) => <path key={`t${i}`} d={`M${34 + i * 36} 22 q18 -14 36 0`} />)}
        {Array.from({ length: 19 }, (_, i) => <path key={`b${i}`} d={`M${34 + i * 36} 516 q18 14 36 0`} />)}
      </g>
      <g clipPath={`url(#${clip})`} className="perde-cast">
        {scene === "kitchen" ? <Kitchen /> : <Delivery />}
      </g>
      <rect x="34" y="34" width="652" height="470" rx="6" fill="none" stroke="#0B3D1F" strokeWidth="10" />
    </svg>
  );
}
