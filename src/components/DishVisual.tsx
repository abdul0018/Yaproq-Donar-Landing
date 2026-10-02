import DishArt from "./DishArt";
import type { Dish } from "@/data/menu";

/** Uses the real photo when one is provided, otherwise the illustration. */
export default function DishVisual({ dish, plate = "light", className = "" }: { dish: Dish; plate?: "light" | "dark" | "none"; className?: string }) {
  if (dish.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={dish.image} alt={dish.name} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return <DishArt kind={dish.art} seed={dish.id} plate={plate} className={className} title={dish.name} />;
}
