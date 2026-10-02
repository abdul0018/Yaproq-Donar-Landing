// Brush-torn edge where two colour fields meet (the painted edge from the user's reference posters).
// Place it inside a `relative` section: it rises above the section's top edge in the section's own colour.

const W = 1440;
const H = 72;

// Deterministic jitter so server and client render the same path.
function rand(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function edgePath(seed: number) {
  const r = rand(seed);
  // Soft painted contour: two slow waves, a cloud-like bump layer, and only a little grain.
  const bumps = Array.from({ length: 9 }, () => ({ c: r() * W, w: 60 + r() * 160, h: 6 + r() * 14 }));
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 8) {
    const wave = Math.sin((x / W) * Math.PI * 2.2 + seed) * 9 + Math.sin((x / W) * Math.PI * 7 + seed * 1.7) * 4;
    const cloud = bumps.reduce((acc, bp) => acc - bp.h * Math.exp(-(((x - bp.c) / bp.w) ** 2)), 0);
    const grain = (r() - 0.5) * 3.5;
    pts.push(`${x},${(H * 0.62 + wave + cloud + grain).toFixed(1)}`);
  }
  return `M0,${H} L${pts.join(" L")} L${W},${H} Z`;
}

function flecks(seed: number) {
  const r = rand(seed * 7 + 3);
  // A few dry-brush marks just above the contour.
  return Array.from({ length: 7 }, () => ({
    cx: r() * W,
    cy: H * 0.32 + r() * H * 0.18,
    rx: 10 + r() * 34,
    ry: 1.5 + r() * 3,
    o: 0.25 + r() * 0.35,
  }));
}

export default function TornEdge({ className = "", seed = 1, flip = false }: { className?: string; seed?: number; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 h-[34px] w-full sm:h-[56px] ${flip ? "top-full rotate-180" : "bottom-full"} ${className}`}
      fill="currentColor"
    >
      {flecks(seed).map((f, i) => (
        <ellipse key={i} cx={f.cx} cy={f.cy} rx={f.rx} ry={f.ry} opacity={f.o} />
      ))}
      <path d={edgePath(seed)} />
    </svg>
  );
}
