import DishArt from "./DishArt";
import type { Dish } from "@/data/menu";

/** The official product photo, or a drawn fallback for the rare item without one. Fills its parent. */
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
  return (
    <div className="grid h-full w-full place-items-center bg-studio">
      <DishArt kind="drink" seed={dish.id} plate="none" className="h-[78%] w-[78%]" title={dish.name} />
    </div>
  );
}
