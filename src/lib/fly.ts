/**
 * Add-to-cart feedback: a small yellow dot travels from the button to the header cart.
 * Skipped under reduced motion (the cart count still pops).
 */
export function flyToCart(from: Element) {
  if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const target = document.querySelector<HTMLElement>("[data-cart-target]");
  if (!target) return;
  const a = from.getBoundingClientRect();
  const b = target.getBoundingClientRect();
  const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2;
  const x1 = b.left + b.width / 2, y1 = b.top + b.height / 2;
  const dot = document.createElement("span");
  dot.className = "fly-dot";
  dot.style.left = `${x0}px`;
  dot.style.top = `${y0}px`;
  document.body.appendChild(dot);
  const dx = x1 - x0, dy = y1 - y0, lift = Math.min(160, Math.abs(dx) * 0.35 + 60);
  const anim = dot.animate(
    [
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - lift}px) scale(0.9)`, opacity: 1, offset: 0.55 },
      { transform: `translate(${dx}px, ${dy}px) scale(0.45)`, opacity: 0.4 },
    ],
    { duration: 520, easing: "cubic-bezier(0.33, 0, 0.2, 1)" },
  );
  anim.onfinish = anim.oncancel = () => dot.remove();
}
