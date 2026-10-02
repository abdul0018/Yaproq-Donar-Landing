// Painted, brush-torn edge where two colour fields meet (the reference posters' edge).
// The shape is a raster alpha mask with dry-brush breakup (public/images/paint/edge-*.png),
// filled with the section's own colour via `currentColor`. Place inside a `relative` section.

export default function TornEdge({ className = "", seed = 1 }: { className?: string; seed?: number }) {
  const mask = `url(/images/paint/edge-${((seed - 1) % 3) + 1}.png)`;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-full h-[40px] bg-current sm:h-[64px] ${seed % 2 ? "" : "-scale-x-100"} ${className}`}
      style={{ WebkitMaskImage: mask, maskImage: mask, WebkitMaskSize: "100% 100%", maskSize: "100% 100%", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }}
    />
  );
}
