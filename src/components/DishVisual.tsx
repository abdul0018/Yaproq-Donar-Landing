import DishArt from "./DishArt";
import type { Dish } from "@/data/menu";

type Props = {
  dish: Dish;
  /** Plate tone for the illustration fallback. */
  plate?: "light" | "dark" | "none";
  /** Extra classes on the photo (e.g. hover zoom). */
  photoClassName?: string;
  /** Extra classes on the illustration (e.g. padding, hover rotation). */
  artClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Real product photo when the dish has one, otherwise the illustration.
 * Fills its parent — the parent decides the frame (tile, disc, thumbnail).
 */
export default function DishVisual({ dish, plate = "light", photoClassName = "", artClassName = "", priority }: Props) {
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
        className={`h-full w-full object-cover ${photoClassName}`}
      />
    );
  }
  return <DishArt kind={dish.art} seed={dish.id} plate={plate} className={`h-full w-full ${artClassName}`} title={dish.name} />;
}
