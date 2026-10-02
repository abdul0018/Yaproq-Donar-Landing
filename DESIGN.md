---
name: YAPROQ DONAR
description: The official YAPROQ campaign world on the web. Deep brand-green fields, brand-yellow actions and drop shapes, heavy geometric headlines, real studio photography.
colors:
  logo-green: "#115A2E"
  forest-deep: "#0B3D1F"
  forest-night: "#072813"
  leaf-hover: "#1A6B39"
  sprout-green: "#2E7A45"
  brand-olive: "#3E5F21"
  mist-green: "#F1F6EE"
  pale-sage: "#E2ECDC"
  brand-yellow: "#EDCD49"
  yellow-hover: "#F2D86E"
  yellow-shade: "#B8961A"
  ink: "#0F2417"
  ink-soft: "#2B3D31"
  ink-muted: "#45574B"
  ink-quiet: "#5E6E63"
  paper: "#F5F7F1"
  studio-grey: "#ECEBE7"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Urbanist, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 7.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Urbanist, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.8vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  title-lg:
    fontFamily: "Urbanist, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Urbanist, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 900
    lineHeight: 1
  title-sm:
    fontFamily: "Urbanist, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.25
  lead:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.375
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.2
  price:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.2
    fontFeature: "\"tnum\""
rounded:
  segment: "14px"
  tile: "20px"
  card: "28px"
  panel: "36px"
  pill: "9999px"
  drop: "50% 0 50% 50%"
spacing:
  card-pad: "24px"
  gutter: "20px"
  section-y-mobile: "80px"
  section-y: "112px"
  container-max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.forest-night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
    textColor: "{colors.forest-night}"
  button-green:
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-green-hover:
    backgroundColor: "{colors.leaf-hover}"
  button-outline:
    textColor: "{colors.forest-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.white}"
  dish-tile:
    backgroundColor: "{colors.mist-green}"
  dish-photo:
    backgroundColor: "{colors.studio-grey}"
    rounded: "{rounded.tile}"
  size-switch:
    rounded: "{rounded.tile}"
    padding: "4px"
  size-switch-option-on:
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.segment}"
    height: "44px"
  category-tab-on:
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 16px"
  search-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "44px"
  tag-new:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.forest-night}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  feature-card-green:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  closing-panel:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.forest-night}"
    rounded: "{rounded.panel}"
---

# Design System: YAPROQ DONAR

## Overview

**Creative North Star: "The Campaign Poster, Served Hot"**

This is the brand's own campaign artwork carried onto the web: deep green fields that read as the YAPROQ identity before a single word is read, brand yellow reserved for the things a hungry visitor should press, and heavy geometric headlines that sit like banner lettering. Food is always the real studio photograph on its grey studio backdrop, never an illustration. The page alternates full-bleed fields (forest green, paper, mist green, solid yellow, white) so each section is a distinct poster panel rather than a stack of cards on one ground.

Density is generous at section level (80px mobile, 112px desktop vertical rhythm) and compact inside commerce surfaces: dish tiles, size switches, and cart rows pack weight, price, and action tightly so ordering stays fast. Motion is quiet and eased (a single expo-out curve); the hero's leaf-in is the one authored entrance, everything else is a short fade-up reveal that respects reduced motion.

The world replaced an earlier cream, italic-serif, terracotta restaurant build. That default is rejected: no serif display, no cream ground, no terracotta.

**Key Characteristics:**
- Green field plus yellow action: green carries identity, yellow carries intent.
- The brand drop shape (one square corner, three round) frames hero, about, and closing photos.
- Urbanist 900 headlines, tight and negative-tracked; Manrope for everything read or tapped.
- Real studio product photography on studio grey; real OpenStreetMap streets for branches.
- Pills for every control; large soft radii (20 to 36px) for every container.
- Soft, green-tinted ambient shadows only; no hard edges of depth.

## Colors

Two owner-pinned brand hues, green and yellow, carry the whole system over a green-tinted neutral family; there is no third accent.

### Primary
- **Logo Green** (#115A2E): the brand's logo colour and the workhorse action green. Secondary buttons, the active category tab, the selected size segment, add-to-cart on light grounds, map pin, icon strokes on light grounds, focus ring on light grounds, browser theme colour.
- **Forest Deep** (#0B3D1F): the hero field, the "ways to order" field, promo cards, and the default colour of every headline on a light ground.
- **Forest Night** (#072813): the footer field and the text colour on yellow (about 11:1 contrast). Also the selection text colour.
- **Leaf Hover** (#1A6B39): hover state of every green fill.
- **Sprout Green** (#2E7A45): the open-now dot only.
- **Brand Olive** (#3E5F21): owner-pinned official site green. The accent word inside a headline on light grounds ("yeymiz?", "YAPROQ") and hover colour for text links and ribbon items. About 6.7:1 on Paper.

### Secondary
- **Brand Yellow** (#EDCD49): owner-pinned. Primary action fill, the accent word in the hero H1, full section fields (promotions, closing CTA), the drop-shape backing behind hero and about photos, "Yangi" tags and discount badges, the active size segment on dark grounds, the global focus ring and text selection.
- **Yellow Hover** (#F2D86E): hover of every yellow fill.
- **Yellow Shade** (#B8961A): only as the tint of the primary button's glow shadow.

### Neutral
- **Ink** (#0F2417): body text on light grounds; a green-black, never pure black.
- **Ink Soft** (#2B3D31): secondary body text in cards and branch details.
- **Ink Muted** (#45574B): leads and descriptions on light grounds, price-from lines.
- **Ink Quiet** (#5E6E63): counts, placeholders, portion weights.
- **Paper** (#F5F7F1): page ground, scrolled header, cart drawer.
- **Mist Green** (#F1F6EE): the menu section field.
- **Pale Sage** (#E2ECDC): body copy on green fields (as `green-100`) and the map panel's loading ground.
- **Studio Grey** (#ECEBE7): the backdrop of every product photo container, matched to the official studio shots so photos sit seamlessly.
- **White** (#FFFFFF): branch cards, dialogs, reviews and closing section grounds.

### Named Rules
**The Yellow Means Go Rule.** Yellow fills are for the action a visitor should take next, for offers, and for the drop backing behind photos. Text on yellow is always Forest Night, never white.

**The Pinned Palette Rule.** #EDCD49, #115A2E and #3E5F21 are owner-pinned. Never shift, desaturate, or substitute them; derive states from the defined hover steps only.

**The Green Neutrals Rule.** Every neutral leans green (ink, paper, mist). No warm cream, no pure grey except the studio photo backdrop.

## Typography

**Display Font:** Urbanist 700/800/900 (with system-ui, sans-serif)
**Body Font:** Manrope (with system-ui, sans-serif)

**Character:** Urbanist at 900 with negative tracking echoes the lettering in YAPROQ's campaign banners; Manrope is a calm, wide-aperture grotesk that keeps prices, weights, and Uzbek Latin diacritics (o‘, g‘) legible at small sizes.

### Hierarchy
- **Display** (900, clamp(2.9rem, 7.2vw, 6rem), 0.92): the hero H1 only. One accent word may switch to Brand Yellow.
- **Headline** (900, clamp(2.2rem, 4.8vw, 4rem), 0.98): every section H2. One accent word may switch to Brand Olive on light grounds.
- **Title Large** (900, clamp(1.6rem, 2.8vw, 2.4rem), 1.05): the featured dish name in the signature card.
- **Title** (900, 30px, 1): branch names, promo set names, large prices, offer rows (up to 34px).
- **Title Small** (800, 20 to 22px, 1.25): dish tile names, about pillars, hero price chip.
- **Lead** (400, 17px, 1.625): the paragraph under a section headline, max 60ch.
- **Body** (400, 15px, 1.5): branch details, card copy, dialog content.
- **Body Small** (400, 14px, 1.375): dish descriptions and meta lines.
- **Label** (700, 15px; 13 to 14px in compact buttons): buttons, nav links, chips. Sentence case.
- **Price** (800, 16 to 17px, tabular figures): every price, weight, phone number, distance and count.

### Named Rules
**The Heavy Headline Rule.** Every heading uses Urbanist at 800 or 900. Never a lighter display weight, never a serif, never italic.

**The Tabular Numbers Rule.** Prices, weights, phone numbers, hours and distances always use tabular figures so columns of prices align.

**The No Eyebrow Rule.** Headlines carry their own weight. No small uppercase label above a section heading.

## Layout

A centred container that caps at 1320px, with side padding of 16px (mobile), 24px (from 640px) and 40px (from 1024px). Sections are full-bleed colour fields with 80px vertical padding on mobile and 112px from 640px; each section switches field colour so the page reads as a sequence of panels.

Desktop composition uses a 12-column grid: the hero splits 6/6 (copy left, drop photo right) with a full-width fact row underneath; branches split 5/7 (card list left, sticky map right); the signature section splits 7/5. Dish grids step 1, 2, 3, 4 columns at 0, 640, 1024 and 1280px with 20px gaps on mobile, then 24px across and 48px down from 640px. On mobile, dish tiles switch to a horizontal row (104px photo beside text) to keep the menu scannable, and the map moves above the branch list.

The header is fixed at 72px, transparent over the hero and Paper with blur once scrolled; the menu's category bar sticks directly under it. Anchor scrolling offsets by 5.5rem so headings land clear of the header.

## Elevation & Depth

Depth is mostly tonal: colour fields and white branch cards and dialogs on tinted grounds do the layering, while dish photos lift straight off the menu ground. Shadows are soft, long, negatively spread and tinted green or black at low opacity, used to lift a photo, the selected card, or a floating chip. There are no hard or offset shadows.

### Shadow Vocabulary
- **Yellow Glow** (`box-shadow: 0 10px 24px -12px rgba(184,150,26,0.9)`): under the primary yellow button only.
- **Card Lift** (`box-shadow: 0 18px 36px -28px rgba(11,61,31,0.6)`, deepening to `0 26px 44px -26px rgba(11,61,31,0.65)` on hover): dish photo wells; a slightly tighter variant (-30px, 0.55) marks the selected branch card.
- **Photo Drop** (`box-shadow: 0 40px 70px -30px rgba(0,0,0,0.6)`): drop-shaped hero and closing photos.
- **Floating Chip** (`box-shadow: 0 24px 50px -24px rgba(0,0,0,0.55)`): the hero price chip; map pins and map chips use the smaller `0 10px 24px -8px rgba(0,0,0,0.5)`.
- **Header Hairline** (`box-shadow: 0 1px 0 rgba(15,36,23,0.08)`): scrolled header edge.

### Named Rules
**The Soft Lift Rule.** Shadows are diffuse and negatively spread, so they read as light under an object, never as an outline. Nothing at rest on a coloured field gets a shadow.

## Shapes

Two shape families. Controls are full pills (buttons, tabs, chips, inputs, badges, icon buttons). Containers are large soft rectangles: 14px for size-switch segments, 20px for photo wells and cart rows, 28px for cards, the map panel and dialogs, 36px for the closing CTA panel.

The signature silhouette is the **brand drop**: border-radius 50% 0 50% 50%, a circle with its top-right corner squared, taken from the YAPROQ campaign artwork. It frames hero, about and closing photos, usually over a slightly larger yellow drop as backing. The "ways to order" detail panel uses its rectangular cousin (40px 0 40px 40px). The sprout-leaf glyph from the campaign art is the one decorative mark.

Borders are 2px and translucent green (10 to 20% Logo Green) on light grounds, 15 to 30% white on green. Dividers are 1 to 2px at the same opacities.

### Named Rules
**The Drop Is For Food Rule.** The 50% 0 50% 50% drop frames real dish photography. It is a frame, not a decoration on empty space.

## Components

### Buttons
Confident, round and thumb-sized.
- **Shape:** full pill, min height 48px (hero CTAs 56px; compact in-card buttons 44px), 24px side padding, 8px icon gap.
- **Primary:** Brand Yellow with Forest Night text and the Yellow Glow shadow. Hover to Yellow Hover.
- **Green:** Logo Green with white text; hover to Leaf Hover. Used for secondary actions on light grounds and as the primary action on yellow fields.
- **Outline:** 2px border at 20% Logo Green, Forest Deep text; hover fills Logo Green with white text. On green fields the outline-light variant uses a 30% white border and fills white on hover.
- **States:** all buttons scale to 0.97 on press, transition 300ms expo-out, and show the 3px yellow focus ring (green on light grounds) with 3px offset.

### Chips and Tags
- **Tags:** pill, 12px bold. "Yangi" is yellow with Forest Night; "Bepul" is Logo Green with white. Discount badges are yellow, Urbanist 900 at 18px.
- **Open badge:** pill at 10% Logo Green with a 6px Sprout Green dot; closed state is 5% ink with an Ink Quiet dot.

### Category Tabs
- Pill tabs 44px tall in a horizontally scrolling, sticky bar on a translucent Mist Green ground. Active: Logo Green fill, white label, count in yellow. Inactive: Ink Muted, hover 5% green wash. A right-edge mask fade appears only while more tabs are hidden.

### Size Switch (signature)
A segmented control for official dish sizes: a 20px-radius well at 7% Logo Green (10% white on dark), 4px inner padding, equal-width 14px-radius segments at least 44px tall. The weight leads in 14px/800; the official size name sits under it at 12px tabular. Selected segment is Logo Green with white on light grounds, Brand Yellow with Forest Night on dark. Changing it updates price and cart line.

### Cards / Containers
- **Dish tile:** no card. The Studio Grey photo well (20px radius on mobile, 22px from sm, 4:3 from sm) sits directly on the Mist Green menu ground with a soft green Card Lift that deepens on hover, and the photo scales to 105%. Name, description, size switch and price/action follow on the ground. On mobile, tiles are rows separated by a 1px 10% green rule.
- **Feature card (on light):** Logo Green or Forest Deep field, white text, 28px radius, photo well inset at 22px radius.
- **Branch card:** white at 60% with a 2px 10% green border; selected becomes solid white with a Logo Green border and lift. 24px padding.
- **Promo card:** Forest Deep, 28px radius, photo half on Studio Grey, yellow discount badge.

### Inputs / Fields
- **Search:** pill, 44px (48px on mobile), white fill, 1px border at 15% Logo Green, leading search icon in Ink Quiet. Focus shifts the border to Logo Green and the desktop field widens from 192 to 256px.

### Navigation
- Fixed 72px header with the official logo SVG in currentColor (white over the hero, Logo Green once scrolled). Nav links are 15px/600 pills; the in-view section gets a 15% white (or 10% green) fill. Cart is a yellow pill with a count. On mobile the links collapse into a full-screen sheet.

### Branch Map
A 28px-radius panel holding a static OpenStreetMap street render per branch at reduced saturation (0.75), with a centred Logo Green pill pin carrying a yellow pin disc and the branch name. Branch selector chips sit top left (yellow when selected, white otherwise); a primary "Yo‘lni ko‘rsatish" button sits bottom right; OSM attribution stays visible bottom left.

## Do's and Don'ts

### Do:
- **Do** put the next action in Brand Yellow (#EDCD49) with Forest Night text, and keep secondary actions green or outline.
- **Do** alternate full-bleed section fields (Forest Deep, Paper, Mist Green, Brand Yellow, White) to separate sections.
- **Do** frame hero-level dish photography in the brand drop (50% 0 50% 50%), backed by a yellow drop.
- **Do** place every product photo on Studio Grey (#ECEBE7) so the official studio shots sit edge-free.
- **Do** set all headings in Urbanist 800/900 with negative tracking, and allow one accent-coloured word per headline.
- **Do** use tabular figures for prices, weights, phone numbers and hours.
- **Do** keep every interactive target at least 44px and use pills for controls.
- **Do** keep shadows soft, long and negatively spread, tinted green or black at low opacity.

### Don't:
- **Don't** use a serif or italic display face, a cream ground, or terracotta; that is the replaced restaurant default.
- **Don't** put white text on yellow, or yellow text on light grounds.
- **Don't** alter or substitute the owner-pinned colours #EDCD49, #115A2E or #3E5F21.
- **Don't** add uppercase eyebrow labels above section headings.
- **Don't** use hard, offset, or zero-blur shadows.
- **Don't** replace official studio photography with illustrations, stock, or generated food imagery.
- **Don't** redraw or recolour the official logo paths; only its currentColor fill changes with the ground.
