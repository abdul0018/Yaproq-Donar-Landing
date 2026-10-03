---
name: YAPROQ DONAR
description: A Karagöz shadow-theatre restaurant. A dark green hall and cream paper rooms; the food story is played on a lamp-lit yellow screen by pin-jointed leather puppets, and real dishes sit on pale lamp-lit screen tiles.
colors:
  brand-yellow: "#EDCD49"
  yellow-hover: "#F2D86E"
  yellow-shade: "#B8961A"
  logo-green: "#115A2E"
  brand-olive: "#3E5F21"
  leaf-hover: "#1A6B39"
  forest-deep: "#0B3D1F"
  hall-night: "#072813"
  pale-sage: "#E2ECDC"
  sage-line: "#C5D9BA"
  sage-tile: "#DCE5D0"
  lamp-light: "#FFF3B8"
  screen-tile-yellow: "#F8E7A6"
  hide-red: "#A3241A"
  hide-tan: "#C98A4B"
  hide-rod: "#3A2410"
  paper: "#F6F0E1"
  studio-grey: "#ECEBE7"
  ink: "#0F2417"
  ink-muted: "#45574B"
  ink-quiet: "#5E6E63"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Yeseva One, Georgia, serif"
    fontSize: "clamp(2.8rem, 6.6vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Yeseva One, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Yeseva One, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  dish-name:
    fontFamily: "Yeseva One, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body-sm:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.375
  label:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.2
  price:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.2
    fontFeature: "\"tnum\""
rounded:
  tile: "16px"
  card-sm: "20px"
  photo: "22px"
  card: "24px"
  panel: "36px"
  pill: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter-tablet: "24px"
  gutter-desktop: "40px"
  container-max: "1320px"
  section-y: "80px"
  section-y-lg: "112px"
  valance-height: "22px"
components:
  button-primary:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.hall-night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
    textColor: "{colors.hall-night}"
  button-green:
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-green-hover:
    backgroundColor: "{colors.leaf-hover}"
  button-outline-light:
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-outline-light-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest-deep}"
  size-switch-option-selected:
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
    height: "44px"
  input-search:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px 0 40px"
    height: "44px"
  chip-new:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.hall-night}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  dish-tile:
    backgroundColor: "{colors.screen-tile-yellow}"
    rounded: "{rounded.photo}"
  lead-dish-card:
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "12px"
  price-ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card-sm}"
    padding: "12px 12px 12px 20px"
---

# Design System: YAPROQ DONAR

## Overview

**Creative North Star: "The Lamp-Lit Perde"**

YAPROQ is staged as a Karagöz shadow-theatre restaurant. The brand's darkest green is the darkened hall; cream paper is the lit room around it; and the food story is played on a woven, radially lit yellow screen (the perde) inside a scalloped frame, by translucent, pin-jointed leather puppets on rods: the cook slicing at the spit, the plate, the delivery rider. It is Turkish food told in Turkish theatre's own illustrated form, in the owner's pinned yellow and greens.

The page alternates hall and room. Dark green fields (hero, ordering ways, closing panel, footer) hold the lit screens and the yellow actions; cream paper fields with a fine grain hold the menu, branches and story; a full yellow field carries offers and the category ribbon. Where two fields meet, the upper field's colour is cut as a scalloped valance with a punched hole in every scallop, like the frame of a Karagöz screen and the perforations in the leather figures. Real, official dish photos never become illustration: they sit on pale lamp-lit screen tiles (one woven yellow cloth, the same under every dish), so every plate is itself on a small perde.

All illustration is hand-built SVG in code: the perde, the puppets, the valance mask, the icon set. There is no generated or painted raster art. The only rasters are the official studio product photos and their cut-outs. The previous painted-poster world (brush-torn edges, watercolour splashes, Young Serif, Caveat) is retired and must not return.

**Key Characteristics:**
- Dark green hall, cream paper rooms, one yellow field: three grounds, never a fourth.
- The perde: radially lit yellow screen, 6px weave, scalloped yellow frame, dark hall surround.
- Puppets in dyed hide (red, tan, rod brown) with ring perforations and brass pins; they rise once, then sway.
- Scalloped, punched valance on every coloured section top.
- Official dish photos on woven lamp-lit tiles, never on raw grey.
- Yeseva One for everything a visitor reads as a name or a price headline; Figtree for reading.
- Brand yellow is the action colour.

## Colors

Three owner-pinned brand colours (yellow #EDCD49, logo green #115A2E, olive #3E5F21) stretched into a hall-to-lamp range, plus a small dyed-hide palette that lives only inside the theatre.

### Primary
- **Lamp Yellow** (brand-yellow): owner-pinned. Every primary action (Menyuni ko'rish, Buyurtma, Savatga on dark), the cart button, selected size on dark, offer badges, accent words in dark headings ("yangicha", "buyurtma"), the free-salad line, the screen frame scallops, selection highlight and focus ring. Also the full ground of the offers section and category ribbon.
- **Lamp Yellow Hover** (yellow-hover): hover fill for yellow buttons.
- **Lamp Shade** (yellow-shade): the coloured glow under primary buttons and the stroke of the rider's delivery box. Never text.

### Secondary
- **Logo Green** (logo-green): owner-pinned. Green buttons (Savatga on paper), selected size on paper, the lead-dish card, the outline-button hover fill, the focus ring on paper, theme-color, scrollbar and form accent.
- **Leaf Hover** (leaf-hover): hover fill for green buttons.
- **Brand Olive** (brand-olive): owner-pinned. Hover colour for text links and the category ribbon names; never a fill.
- **Forest Deep** (forest-deep): the perde surround, the ordering-ways section, offer cards, heading text on paper.
- **Hall Night** (hall-night): the darkest hall: hero, closing panel, footer; and the text colour on every yellow fill.

### Tertiary (theatre only)
- **Lamp Light** (lamp-light): the hot centre of the perde's radial gradient (to #F8E486, then #DDB236 at the edge).
- **Screen Tile Yellow** (screen-tile-yellow): the single woven tile ground under every dish photo, everywhere (menu, signature dishes, offers, cart, gallery). Sage Tile (sage-tile) is retired: one ground keeps the dishes reading as one menu.
- **Dyed Hide Red** (hide-red), **Hide Tan** (hide-tan), **Rod Brown** (hide-rod): puppet caps, faces and limbs, rods and pin bodies. Brass pin centres are #D9B25A.

### Neutral
- **Cream Paper** (paper): the light rooms, with a 9%-alpha fractal-noise grain; also the price ticket, cart surfaces and text on dark.
- **Pale Sage** (pale-sage): secondary text on dark green (leads, portions, payment lines).
- **Sage Line** (sage-line): footer column labels and inactive icons on dark.
- **Studio Grey** (studio-grey): the backdrop of uncut official photos (lead dish, offer cards, cart).
- **Ink** (ink), **Ink Muted** (ink-muted), **Ink Quiet** (ink-quiet): body text, descriptions, placeholders and portions on paper.
- **White** (white): text on logo green; search field and paper-side dish cards.

### Named Rules
**The Yellow Means Act Rule.** Brand yellow fills only what the visitor can press, the offer badge, or a field-wide ground. Yellow text is reserved for one accent word in a dark heading and the gift line.

**The Text On Yellow Is Hall Night Rule.** Anything on a yellow fill is hall-night (contrast about 11:1), never white.

**The Hide Stays On Stage Rule.** Hide red, tan and rod brown appear only inside the perde. They never colour UI.

## Typography

**Display Font:** Yeseva One (with Georgia, serif)
**Body Font:** Figtree (with system-ui, sans-serif)

**Character:** Yeseva One is a high-contrast swelling serif with the outline of a cut-leather silhouette; it carries headlines, dish names, category names, offer prices and the free-salad line. Figtree is a clean, friendly grotesque that does all reading, buttons, prices in lists and the controls.

### Hierarchy
- **Display** (400, clamp(2.8rem, 6.6vw, 5.6rem), 1.0): the hero H1 only.
- **Headline** (400, clamp(2.1rem, 4.4vw, 3.6rem), 1.05): section titles, closing panel title.
- **Title** (400, clamp(1.6rem, 2.6vw, 2.2rem), 1.1): lead dish name; Yeseva at 26 to 40px for side-dish names, ordering-way titles, offer names and lead/offer prices.
- **Dish Name** (400, 22px, 1.2): menu tiles, 20px on mobile; price ticket at 19px.
- **Body** (400, 17px, 1.625): section leads at max 60ch, hero copy at 34rem.
- **Body Small** (400, 14 to 15px, 1.375): dish descriptions.
- **Label** (700, 15px): buttons, nav, links; nav pills at 600.
- **Price** (800, 17px, tabular figures): list prices and quantity counts.

### Named Rules
**The One Weight Rule.** Yeseva One ships at 400 only. Synthesis is disabled; never request bold or italic display text.

**The Tabular Price Rule.** Every price, phone number, weight and count uses tabular figures.

**The No Eyebrow Rule.** Headings carry their own weight. No small label sits above a section title.

## Layout

A centred container (max 1320px; gutters 16px, 24px from 640px, 40px from 1024px) on a 12-column grid at large widths. Sections breathe at 80px vertical padding, 112px from 640px. The hero is a full-viewport dark hall split 6/6: copy left, perde right with the cream price ticket overlapping the screen's foot. The signature dishes split 7/5 (lead card plus a divided list). The menu is a four-up tile grid on desktop and a 104px-thumb list on mobile. The fixed header is 72px, transparent over the hall and cream with blur once scrolled; anchors offset 5.5rem. Breakpoints are Tailwind defaults (640, 768, 1024, 1280).

### Named Rules
**The Valance Seam Rule.** A section whose colour differs from the one above it opens with a 22px scalloped valance of its own colour (scallop width 44, 56 or 50px by seed, one punched hole per scallop). No straight seams between colour fields, and no torn or brushed edges.

## Elevation & Depth

Mostly flat. Depth comes from light, not lift: the perde's radial lamp and breathing hotspot, the woven tile glow behind each dish. Shadows are soft, low-alpha and strongly negative-spread, used to float a few things above a field: the perde over the hall, the price ticket over the perde, primary buttons on their own yellow glow, the selected branch card, map chips and the mobile cart bar. Cut-out dishes cast a warm brown drop shadow onto their tile.

### Shadow Vocabulary
- **Screen float** (`drop-shadow(0 40px 50px rgba(0,0,0,0.45))`): the hero perde.
- **Ticket float** (`0 24px 50px -24px rgba(0,0,0,0.6)`): the price ticket on the screen.
- **Lamp glow** (`0 10px 24px -12px rgba(184,150,26,0.9)`): under primary yellow buttons.
- **Selected card** (`0 22px 44px -30px rgba(11,61,31,0.55)`): the active branch card.
- **Plate on cloth** (`drop-shadow(0 14px 14px rgba(60,45,20,0.22))`): cut-out dishes on tiles.

### Named Rules
**The Light Not Lift Rule.** Never stack shadows to make cards feel raised. If a surface needs presence, give it lamp light or a darker field.

## Shapes

Soft and round on the interface, theatrical at the edges. Every button, nav item, chip, search field and badge is a full pill. Dish tiles round at 16px (22px on desktop photo frames); cards at 24px; the closing hall panel at 36px. The perde frame is a 18px-rounded dark rectangle with a 6px-rounded screen and 18 scallops top and bottom. The ornamental vocabulary is scallops and punched circles: valance seams, frame scallops, ring perforations on puppets and a sprout-leaf device between ribbon categories.

## Components

### Buttons
Round, warm and tactile; they press down to 97% on click.
- **Shape:** full pill (9999px), min height 48px; 56px in the hero and closing panel.
- **Primary:** brand yellow with hall-night text and the lamp glow; hover lightens to yellow-hover.
- **Green:** logo green with white text; hover leaf-hover. The default Savatga on paper.
- **Outline (paper):** 2px border at 20% logo green, forest text; hover fills logo green with white text.
- **Outline (dark):** 2px border at 30% white; hover fills white with forest text.
- **Add to cart:** becomes a pill stepper (minus, tabular count, plus) in the same fill once added; a yellow dot flies to the cart and the count pops.
- **Focus:** 3px brand-yellow outline at 3px offset; logo green on paper sections.

### Chips
- **Style:** pill, 12px Figtree bold. "Yangi" is yellow with hall-night text; "Bepul" is logo green with white text. Offer badges are yellow pills in Yeseva 18px.

### Cards / Containers
- **Lead dish:** logo-green card, 24px radius, photo inset 12 to 16px on studio grey at 22px radius, paper text, a white/15 hairline above price and action.
- **Menu tile:** woven yellow screen tile (the same for every dish), 16px radius (22px on desktop), photo multiplied onto the tile; name, description, size switch, price and Savatga below with no card chrome.
- **Offer card:** forest-deep card, 24px radius, studio-grey photo half, Yeseva name and price.
- **Branch card:** white, 24px radius, 2px border; selected state takes the logo-green border and the selected-card shadow.

### Inputs / Fields
- **Style:** white pill, 1px border at 15% logo green, 44px tall with a leading search icon; placeholder in ink-quiet.
- **Focus:** border goes solid logo green; the desktop field widens from 192 to 256px.
- **Size switch:** segmented radio group in a 16px-rounded tray (7% green on paper, 10% white on dark); selected option is logo green (yellow on dark); weight leads, the official size name sits beneath in 12px.

### Navigation
- **Header:** 72px; logo, centred pill links (15px, 600), phone, yellow cart pill with a hall-night count badge. The in-view section is marked with a translucent pill. Mobile opens a full cream sheet of 34px Yeseva links with arrows and a pinned primary order button.
- **Category ribbon:** a yellow field, valance on top, endless marquee of Yeseva category names (26 to 30px) separated by the sprout leaf; pauses on hover, focus or off-screen; each name jumps to its menu filter.

### The Perde (signature)
A 720 by 560 SVG: forest-deep surround, a screen that starts unlit (#5C4A14), the lamp radial gradient and a blurred hotspot, a 6px woven pattern, 18 yellow scallops top and bottom, the puppet cast clipped to the screen, a hall-night inner stroke. Two scenes: kitchen (cook with slicing arm, donar spit, plate) and delivery (rider on scooter over passing road dashes). Puppets are flat translucent hide shapes joined by brass pins, with rings of punched holes and a rod to the bottom edge.
- **Motion:** the lamp catches with a 1s flicker; puppets rise from 70% below on their rods (0.9s, ease-out cubic-bezier(0.16,1,0.3,1), staggered 0.7 to 1s), then sway ±1.6 degrees on 3.8 to 5.4s loops; the cook's arm slices; the hotspot breathes. A screen that starts below the fold holds its show until scrolled into view.
- **Reduced motion:** the lit, still screen with the cast in place.

### Screen Tile (signature)
The dish's own small perde: a 6px weave of 1px lines over a radial glow from a warm centre (#FFF8D9 to #EFD27A). Cut-outs sit at 9% padding with the plate-on-cloth shadow; uncut photos multiply onto it.

### Valance (signature)
A 22px masked strip in the section's own colour, sitting just above the section edge, scallops repeating along the width with one punched hole each.

## Do's and Don'ts

### Do:
- **Do** put every primary action in brand yellow with hall-night text, on a pill.
- **Do** open each new colour field with the scalloped, punched valance in that field's colour.
- **Do** show real dishes only as official photos, on a woven yellow or sage screen tile.
- **Do** build any new illustration as hand-made SVG in the perde language: flat hide shapes, brass pin joints, ring perforations, rods, lit from behind.
- **Do** give each perde one authored moment (lamp catches, cast rises) and only ambient sway after; hold below-fold screens until seen; show the lit still screen under reduced motion.
- **Do** set prices, weights and phone numbers in tabular figures.

### Don't:
- **Don't** bring back the painted-poster world: brush-torn edges, watercolour splashes, Young Serif or Caveat.
- **Don't** use generated or painted raster illustration; the only rasters are official product photos.
- **Don't** use generic flat food-delivery illustration; figures are Karagöz puppets or nothing.
- **Don't** fake bold or italic Yeseva One.
- **Don't** put white text on brand yellow, or use dyed-hide colours outside the perde.
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** use hard offset shadows; depth is lamp light and soft negative-spread shadow.
