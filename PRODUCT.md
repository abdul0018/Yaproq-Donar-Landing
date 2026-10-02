# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: **locals who live or work near a YAPROQ branch** (confirmed by the owner). They want a filling, trustworthy meal close by and decide quickly: what to eat, how much it costs, which branch is nearest, and whether to walk in, pick up, or have it delivered.

Secondary audiences seen on the official site, not yet confirmed as priorities: delivery customers across Tashkent, and job applicants (the official site has a Vacancies page).

## Product Purpose

A restaurant website for YAPROQ DONAR, a Turkish doner restaurant chain in Tashkent. It presents the brand and real menu and turns a hungry local into a visit or an order.

Success means more visits and orders through YAPROQ's own channels: branch walk-ins, pickup, and delivery. The owner named the official website as the main ordering channel.

## Positioning

**Freshness and quality** (owner-confirmed), backed by facts from the official About page:

- Mostly Turkish dishes and desserts.
- Most dishes use doner meat made from **100% local, high-quality beef**.
- A **free salad and sauces** come with any main dish.

## Operating Context

Source: https://yaproq-donar.uz (About, Branches and Menu pages, read 2026-10-02).

- **Founded:** 2021.
- **Branches (3):** Kukcha, Nurafshon, Yunusobod.

  | Branch | Address | Coordinates | Online ordering |
  |---|---|---|---|
  | Kukcha | Ko‘kcha-Darvoza ko‘chasi, 345 | 41.322020, 69.205720 | Yes |
  | Yunusobod | Yunusobod tumani, Iftixor ko‘chasi, 1 (1/1 on 2GIS) | 41.347733, 69.286792 | Yes |
  | Nurafshon | Nurafshon aylanma ko‘chasi, 41/13, Shayxontohur tumani; «Besh Qozon» binosi, 3-qavat (terrasa). Hours 10:00–03:00. Owner-provided 2026-10-02 (sources: Goldenpages, Instagram). Same building as the 2GIS listing at Sherozi ko‘chasi 41/1 | 41.31654, 69.209663 (2GIS point; matches OSM "Besh qozon") | Not listed on the website |

- **Hours:** the official sources disagree; owner to confirm.
  - About page: 10:00–03:00, delivery 10:00–03:00.
  - Site header: "every day 11:00–02:40".
  - Branch ordering config: 10:00–02:40.
- **Phone:** +998 71 200 84 44, for all branches and delivery.
- **Ordering channels:** website (yaproq-donar.uz), phone, and the Yaproq Donar mobile app (Google Play and App Store). There is no Telegram bot (owner-confirmed); the official About page mention is outdated.
  - The website supports delivery and pickup. Table booking is enabled; dine-in ordering on the web is not.
  - The app also allows pre-ordering before a visit and sends promotion notifications.
- **Delivery:** from the nearest branch, within 1 hour. Price depends on the customer's location.
- **Payment:** cash, card terminal, bank transfer, Click, Payme.
- **Vacancies:** +998 94 502 03 13 (phone or Telegram), applications 10:00–18:00.
- **Socials:** Instagram https://www.instagram.com/yaproqdonar/, plus Telegram and Facebook (exact URLs not captured).

## Capabilities and Constraints

- **Real menu:** 69 products in 9 categories:
  - Set
  - Asosiy taomlar
  - Tovuqli Donar
  - Sho‘rvalar
  - Pide
  - Salatlar
  - Desertlar
  - Ichimliklar
  - Souslar
- **Signature dishes and prices (so‘m):**
  - Yaproq Donar 79 000 / 96 000 / 120 000
  - Pilav ustu donar 82 000 / 106 000 / 132 000
  - Iskender kabob 109 000
  - Donar Beyti 95 000 / 140 000
  - Tandir Beyti 105 000
  - Tombik donar 59 000 / 75 000
  - Yaproq Burger 75 000
  - Smash Burger 84 000
  - Chicken versions of the main dishes
  - Sirli / Yaproq pide 60 000 / 70 000
  - Ezogelin and Mercimek sho‘rva 19 000
  - Desserts: San Sebastian, Trileçe, Sutlach, Maraş, Havuç
  - Bulk doner by weight: 0.5 kg and 1 kg
- **Sizes:** many dishes come in several sizes (meat weight 110 / 160 / 200 g). Sauces are free (0 so‘m).
- **Menu language:** the official data mixes Uzbek, Russian (Cyrillic) and Turkish names. Customer-facing copy here must be **Uzbek Latin** (from the original brief), so names need normalising, e.g. "Сырли пиде" → "Sirli pide".
- **Checkout on this site:** a front-end demo only; it does not send orders. Real orders go through YAPROQ's channels above. Connecting to the official ordering backend is an open decision.
- **Stack:** existing Next.js 15 + Tailwind codebase in this repo.

## Brand Commitments

- **Name:** YAPROQ DONAR. The logo reads "YAPROQ — Donar by Beshqozon". The official site also uses "YAPROQ DONER" for branch names.
- **Colours (owner-confirmed, binding):** keep the original yellow `#edcd49` and green. Site green `#3e5f21`; logo green `#115a2e`.
- **Logo:** https://yaproq-donar.uz/images/yaproq/logo.svg (single-colour wordmark), vendored as `src/components/Logo.tsx`.
- **Campaign slogan:** "Ta’mga yangicha yondashuv", from the official homepage slider.
- **From the original brief:**
  - Green must stay an important brand colour without covering the whole interface.
  - Copy is natural Uzbek Latin, with no random Russian or English.
  - The result should be premium, food-focused and conversion-focused, not a generic template or a delivery-marketplace look.

## Evidence on Hand

- **Real promotions** (official homepage slider, 2026-10-02):
  - Pita seti (tovuqli) −25%: 56 000 so‘m, was 75 500.
  - Durum seti (tovuqli) −25%: 54 000 so‘m, was 73 500.
  - "Birinchi yetkazib berish BEPUL".
  - "Har bir buyurtmadan 2% keshbek" (shown with the app).
  - No end dates are published, so no countdowns.
- **App links:** App Store https://apps.apple.com/uz/app/yaproq-donar/id6755135029 · Google Play https://play.google.com/store/apps/details?id=uz.yaproqdonar.app
- **Telegram bot:** none (owner-confirmed). Never offer it as a channel.
- **Facebook URL:** not found on the official site; do not link it until confirmed.
- **Price oddity:** "Qarsildoq baqlajon salati" is listed at 69 001 so‘m officially; it is shown as listed.

- **Official menu data:** names, descriptions, prices, weights and product photo paths, from yaproq-donar.uz (2026-10-02).
- **Product photos in this repo:** `public/images/` — donar-tarelka, lavash-donar, non-donar, pide-pishloqli, yasmiq-shorva.
  - They are studio shots on a warm-grey backdrop.
  - Per-product photos for the full menu exist on the official site's CDN.
- **Branch coordinates:** for Kukcha and Yunusobod, from the official site.
- **Missing; do not fabricate:**
  - Ratings, review counts and customer testimonials.
  - Daily volumes, preparation times, seat counts and amenities (parking, kids' corner, terrace, drive-thru, 24/7).
  - Chef quotes, the founding story, and promotions or discounts.
- **Invented content removed (2026-10-02 rebuild):** the earlier build's fake founding year, branches, ratings, testimonials, stats, dishes, prices and promotions have been replaced with the official data above. Do not reintroduce any of them.

## Product Principles

1. **Freshness is the claim; facts are the proof.** Back quality with true statements (local beef, the dishes themselves, real photos), never with invented numbers or reviews.
2. **Nearby local → decision in seconds.** A visitor should quickly see what to eat, what it costs, which branch is closest and open, and how to get the food.
3. **The website mirrors the real menu.** Dish names, sizes and prices match the official menu; anything not yet confirmed is marked, not guessed.
4. **Send orders to the channels that work.** Calls to action lead to working paths (website ordering, phone, app, directions), not dead ends.
5. **Uzbek first, naturally.** All customer-facing copy is fluent Uzbek Latin.
