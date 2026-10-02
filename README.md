# YAPROQ DONAR — website

Marketing and ordering site for YAPROQ DONAR (3 branches in Tashkent). Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/data/menu.ts` | Categories, dishes, prices, popular dishes |
| `src/data/site.ts` | Branches (address, hours, phone, coordinates), contacts, nav, helpers |
| `src/lib/cart.tsx` | Cart state (React context + reducer, persisted to `localStorage`) |
| `src/components/*` | One component per page section + shared UI (`DishArt`, `AddToCart`, `Reveal`, icons) |
| `src/app/globals.css` | Design tokens in use: buttons, eyebrow labels, reveal animation, reduced-motion rules |
| `tailwind.config.ts` | Colour palette, type scale, radii, keyframes |

Page flow: **Hero → category ribbon → popular → menu → promotions → about → why us → branches → reviews → final CTA → footer**, following *discover → explore food → choose → find a branch / order*.

## Design system

- **Colour**: cream `#F5EFE3` (base), ink `#15201A` (text), forest `#173F2E` (brand green), leaf `#8DBF6A` (highlight), ember `#E2622B` (primary action), saffron `#F2B544` (promo accent). Green is used for brand moments and dark sections; most of the page sits on cream.
- **Type**: Fraunces (display, with italic accents) + Manrope (UI/body). Fluid display sizes `display-xl / lg / md`.
- **Buttons**: pill-shaped, min 44–48 px tall. `btn-primary` (ember) = main conversion action, `btn-dark` / `btn-ghost` secondary.
- **Radius**: 14 / 20 / 28 px; large feature panels 36–40 px.
- **Motion**: one reveal-on-scroll, a slow plate rotation in the hero, pointer parallax on ingredients, hover turns on food. All disabled under `prefers-reduced-motion`.

## Before launch

- **Branch data**: addresses, phone numbers, hours and coordinates in `src/data/site.ts` are representative. Replace them with the real branch details.
- **Photos**: dishes render with built-in illustrations (`DishArt`). To use real photography, add a file to `public/images/` and set `image: "/images/<file>.jpg"` on the dish in `menu.ts`. `DishVisual` switches to the photo automatically.
- **Orders**: checkout validates and shows a confirmation, but does not send the order anywhere. Connect it at the `Integration point` comment in `src/components/CartDrawer.tsx` (order API or Telegram bot).
- **Reviews / Instagram**: sample content in `src/components/Reviews.tsx`.
