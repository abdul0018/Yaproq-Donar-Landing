import type { Dish } from "@/data/menu";

/** The official product photo, or a name tile for the rare item without one. Fills its parent. */
export default function DishVisual({ dish, className = "", priority }: { dish: Dish; className?: string; priority?: boolean }) {
  if (dish.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={dish.image}
        alt={dish.name}
        width={600}
        height={450}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  // No official photo: an honest name tile rather than a drawing among real photos.
  return (
    <div className="grid h-full w-full place-items-center bg-green-100 p-3 text-center">
      <span className="font-display text-[clamp(18px,4vw,30px)] leading-none text-green-800">{dish.name}</span>
    </div>
  );
}
