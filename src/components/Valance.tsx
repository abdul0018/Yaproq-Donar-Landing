// Where two colour fields meet, the upper edge of a section is cut like the scalloped valance
// that frames a Karagöz screen, with a row of punched holes as in the leather figures.
// Filled with the section's own colour via `currentColor`. Place inside a `relative` section.

const widths = [44, 56, 50];

export default function Valance({ className = "", seed = 1 }: { className?: string; seed?: number }) {
  const w = widths[(seed - 1) % widths.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='22'><path fill-rule='evenodd' d='M0 22V12Q${w / 2} -6 ${w} 12V22ZM${w / 2 - 2.6} 13a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0Z'/></svg>`;
  const mask = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-full h-[22px] bg-current ${className}`}
      style={{ WebkitMaskImage: mask, maskImage: mask, WebkitMaskSize: `${w}px 22px`, maskSize: `${w}px 22px`, WebkitMaskRepeat: "repeat-x", maskRepeat: "repeat-x", WebkitMaskPosition: "center bottom", maskPosition: "center bottom" }}
    />
  );
}
