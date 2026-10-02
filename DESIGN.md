---
name: YAPROQ DONAR
description: Painted restaurant poster in YAPROQ's pinned yellow and greens. Deep green fields torn by brush edges into warm grained paper, a soft heavy serif, and real food on colour tiles.
colors:
  logo-green: "#115A2E"
  forest-deep: "#0B3D1F"
  forest-night: "#072813"
  leaf-hover: "#1A6B39"
  brand-olive: "#3E5F21"
  sprout-green: "#2E7A45"
  pale-sage: "#E2ECDC"
  brand-yellow: "#EDCD49"
  yellow-hover: "#F2D86E"
  yellow-shade: "#B8961A"
  paper: "#F6F0E1"
  paper-deep: "#ECE1C8"
  sage-tile: "#DCE5D0"
  studio-grey: "#ECEBE7"
  ink: "#0F2417"
  ink-soft: "#2B3D31"
  ink-muted: "#45574B"
  ink-quiet: "#5E6E63"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.8rem, 6.6vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
    fontFeature: "\"kern\", \"liga\""
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.005em"
    fontFeature: "\"kern\", \"liga\""
  title-lg:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
  title-sm:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  hand:
    fontFamily: "Caveat, cursive"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.25
  lead:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
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
  segment: "14px"
  tile: "20px"
  tile-lg: "22px"
  card: "28px"
  panel: "36px"
  pill: "9999px"
  drop: "50% 0 50% 50%"
spacing:
  card-pad: "24px"
  grid-gap: "20px"
  grid-gap-x: "24px"
  grid-gap-y: "48px"
  torn-edge-mobile: "40px"
  torn-edge: "64px"
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
  food-tile-sage:
    backgroundColor: "{colors.sage-tile}"
    rounded: "{rounded.tile-lg}"
  food-tile-paper:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.tile-lg}"
  studio-photo-well:
    backgroundColor: "{colors.studio-grey}"
    rounded: "{rounded.tile-lg}"
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
  category-ribbon:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.forest-deep}"
    typography: "{typography.title}"
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
    backgroundColor: "{colors.logo-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  promo-card:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
  closing-panel:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "{colors.forest-night}"
    rounded: "{rounded.panel}"
---

# Design System: YAPROQ DONAR

## Overview

**Creative North Star: "The Painted Menu Board"**

The site reads like a set of painted restaurant posters, the kind the user brought as references, re-inked in YAPROQ's own pinned colours. Deep green fields carry big, soft serif headlines in cream; where a field ends it does not stop on a ruler line but tears into the next colour along a dry-brush edge. Below the fold the ground is warm, finely grained paper, and the food sits on flat sage and deeper-paper tiles as clean cutouts with a soft warm shadow, like plates set down on a coloured board. Brand yellow is the ink of action and of offers.

The page is a sequence of colour fields: forest hero, yellow category ribbon, paper menu, yellow offers, paper story, forest "ways to order", paper branches and reviews, a yellow closing panel, a night-green footer. Density is generous between sections (80px mobile, 112px desktop) and compact inside commerce: tiles, size switches and cart rows keep weight, price and action together. Motion is quiet and eased on one expo-out curve; the hero's leaf-in is the single authored entrance.

The world replaces a flat, plain-sans template pass that the user rejected as "simple fonts". The display voice is always the soft serif; sans is for reading and tapping only.

**Key Characteristics:**
- Forest-green and yellow fields meet warm grained paper along painted, brush-torn edges.
- One soft, heavy serif (Young Serif 400) for every heading; cream on green, forest on paper and yellow.
- Food as alpha cutouts on flat sage or paper-deep tiles; studio photos only for hero, lead card, promos and closing panel.
- The brand drop shape (one square corner, three round) frames the hero and closing photos over yellow.
- Pills for every control; large soft radii (20 to 36px) for every container.
- Caveat hand-lettering appears as a rare margin note, never as a heading.

## Colors

Two owner-pinned brand hues, green and yellow, on a warm paper ground; the greens carry identity, the yellow carries intent.

### Primary
- **Logo Green** (#115A2E): the brand's logo colour and the workhorse action green. Secondary buttons, the active category tab, the selected size segment, add-to-cart on light grounds, the lead dish card, the map pin, icons on light grounds, the ring around the closing photo, focus ring on light grounds, browser theme colour.
- **Forest Deep** (#0B3D1F): the hero and "ways to order" fields, promo cards, and every headline on paper or yellow.
- **Forest Night** (#072813): the footer field and all text on yellow.
- **Leaf Hover** (#1A6B39): hover of every green fill.
- **Brand Olive** (#3E5F21): owner-pinned official site green. The single accent word inside a headline on paper ("yeymiz?", "YAPROQ") and the hover colour for ribbon items and text links.
- **Sprout Green** (#2E7A45): the open-now dot only.
- **Pale Sage** (#E2ECDC): secondary copy on green fields.

### Secondary
- **Brand Yellow** (#EDCD49): owner-pinned. Primary action fill, the accent word in headlines on green fields ("yangicha", "buyurtma"), full fields (category ribbon, promotions, closing panel), the drop backing behind the hero photo, tags and discount badges, the hand-lettered notes on green, the active size segment on dark grounds, global focus ring and text selection.
- **Yellow Hover** (#F2D86E): hover of every yellow fill.
- **Yellow Shade** (#B8961A): only as the tint of the primary button's glow.

### Neutral
- **Paper** (#F6F0E1): the page ground, always with a fine warm fractal grain (about 9% opacity, 180px tile). Also the display colour on green fields.
- **Paper Deep** (#ECE1C8): every second food tile.
- **Sage Tile** (#DCE5D0): every other food tile; the watercolour splash behind the About plate is the same sage.
- **Studio Grey** (#ECEBE7): the well behind uncut studio photographs (hero, lead card, promos, closing panel).
- **Ink** (#0F2417), **Ink Soft** (#2B3D31), **Ink Muted** (#45574B), **Ink Quiet** (#5E6E63): green-black body text, secondary copy, descriptions, and counts and placeholders, in that order.
- **White** (#FFFFFF): raised surfaces only: the hero price chip, selected branch card, dialogs, cart rows, search fields, map chips.

### Named Rules
**The Pinned Palette Rule.** #EDCD49, #115A2E and #3E5F21 are owner-pinned. Never shift, desaturate or substitute them; derive states only from the defined hover steps.

**The Yellow Means Go Rule.** Yellow fills mark the next action, an offer, or the drop behind a photo. Text on yellow is always Forest Night, never white.

**The Cream On Green Rule.** Display type on a green field is Paper (#F6F0E1), not pure white; body copy on green is Pale Sage.

**The Alternating Tiles Rule.** Food tiles alternate Sage Tile and Paper Deep in sequence; never a third tile colour, never white.

## Typography

**Display Font:** Young Serif 400 (with Georgia, serif)
**Body Font:** Figtree (with system-ui, sans-serif)
**Hand Font:** Caveat 700 (with cursive)

**Character:** Young Serif is soft, round-terminaled and heavy at its only weight, the warm poster headline of the references. Figtree is a friendly, open sans that keeps prices, weights and Uzbek Latin diacritics (o‘, g‘) clear at small sizes. Caveat adds a chalkboard-style margin note.

### Hierarchy
- **Display** (400, clamp(2.8rem, 6.6vw, 5.6rem), 1): the hero H1 only, cream on forest with one yellow word.
- **Headline** (400, clamp(2.1rem, 4.4vw, 3.6rem), 1.05): every section H2; one accent word allowed: Brand Olive on paper, Brand Yellow on green.
- **Title Large** (400, clamp(1.6rem, 2.6vw, 2.2rem), 1.1): the lead dish name.
- **Title** (400, 26 to 40px, 1): branch names, set names, large prices, offer rows, ribbon categories, ordering-channel names.
- **Title Small** (400, 20 to 26px, 1.25): dish names on tiles, About pillars, hero price chip.
- **Hand** (Caveat 700, 24px, 1.25): margin notes only (see rule).
- **Lead** (400, 17px, 1.625): paragraph under a headline, max 60ch.
- **Body** (400, 15px, 1.5) and **Body Small** (400, 14px, 1.375): card copy, branch details, dish descriptions.
- **Label** (700, 15px; 13 to 14px compact): buttons, nav links, chips. Sentence case.
- **Price** (800, 16 to 17px, tabular figures): every price, weight, phone number, distance and count in sans contexts.

### Named Rules
**The One Weight Rule.** Young Serif ships one weight. Every display element is set at 400 with font synthesis off, -0.005em tracking and kerning on; never fake bold or italic, and never bring in a sans as a display face.

**The Three Notes Rule.** Caveat appears only as a short hand-lettered note: the hero perk line, the "Yangi · tovuqli" set tag, the About photo caption. It never carries a heading, a price, an action, or body copy.

**The Tabular Numbers Rule.** Prices, weights, phone numbers, hours and distances always use tabular figures.

**The No Eyebrow Rule.** Headlines carry their own weight. No small uppercase label above a section heading.

## Layout

A centred container capped at 1320px with 16px, 24px (from 640px) and 40px (from 1024px) side padding. Sections are full-bleed colour fields with 80px vertical padding on mobile and 112px from 640px.

Desktop uses a 12-column grid: the hero splits 6/6 (copy left, drop photo right) with a full-width fact row underneath; the signature section splits 7/5 (lead card, side list); About splits copy against a 5-column plate; branches split 5/7 (card list, sticky map). The menu grid steps 1, 2, 3, 4 columns at 0, 640, 1024 and 1280px with 20px gaps on mobile, 24px across and 48px down from 640px. On mobile, menu tiles become rows (104px tile beside text) separated by a 1px 10% green rule, and the map moves above the branch list.

The header is fixed at 72px, transparent over the hero and paper with blur once scrolled; the menu's category tabs stick under it. A yellow category ribbon scrolls as an endless marquee (45s, pauses on hover and focus) between the hero and the menu.

## Elevation & Depth

Depth comes from colour fields, painted edges and food that casts its own shadow. Plates and cutouts carry warm brown drop shadows that follow their alpha; photos and floating chips carry soft, long, negatively spread shadows. Nothing uses a hard or offset shadow.

### Shadow Vocabulary
- **Plate Shadow** (`filter: drop-shadow(0 14px 14px rgba(60,45,20,0.22))`): every cutout on a food tile; the About plate uses the larger `drop-shadow(0 22px 20px rgba(60,45,20,0.3))`.
- **Yellow Glow** (`box-shadow: 0 10px 24px -12px rgba(184,150,26,0.9)`): under the primary yellow button only.
- **Photo Drop** (`box-shadow: 0 40px 70px -30px rgba(0,0,0,0.6)`): the hero drop photo on green.
- **Ochre Drop** (`box-shadow: 0 34px 60px -30px rgba(150,110,10,0.55)`): the closing drop photo on yellow.
- **Selected Card** (`box-shadow: 0 22px 44px -30px rgba(11,61,31,0.55)`): the selected branch card.
- **Floating Chip** (`box-shadow: 0 24px 50px -24px rgba(0,0,0,0.55)`): the hero price chip; map chips and pin use `0 8px 20px -10px` to `0 10px 24px -8px rgba(0,0,0,0.5)`.
- **Header Hairline** (`box-shadow: 0 1px 0 rgba(15,36,23,0.08)`): scrolled header edge.

### Named Rules
**The Warm Shadow Rule.** Shadows on food are warm brown and follow the plate's outline; shadows on yellow are ochre; nothing on a coloured field gets a neutral grey shadow.

## Shapes

Three families. Controls are full pills. Containers are large soft rectangles: 14px size-switch segments, 20px tiles on mobile, 22px tiles and photo wells from 640px, 28px cards, the map panel and dialogs, 36px for the closing panel.

The **brand drop** (border-radius 50% 0 50% 50%, a circle with its top-right corner squared, from YAPROQ's campaign art) frames the hero photo over a yellow drop and the closing photo inside a 10px Logo Green ring. The "ways to order" detail panel uses its rectangular cousin (40px 0 40px 40px).

The **painted edge** is the third family: a 40px (64px from 640px) strip filled with the incoming section's colour and cut by one of three dry-brush raster masks, mirrored on alternate uses. It sits on top of every section that changes the field colour, rising into the section above. A sage watercolour splash behind the About plate is the only other painted mark; the sprout-leaf glyph separates ribbon items.

Borders are 2px at 10 to 20% Logo Green on light grounds and 15 to 30% white on green; dividers are 1 to 2px at the same opacities.

### Named Rules
**The Torn Seam Rule.** Where two field colours meet, the boundary is a painted brush edge in the lower section's colour, never a straight line or a wave SVG. Same-colour neighbours get no edge.

**The Drop Is For Food Rule.** The 50% 0 50% 50% drop frames real dish photography only, never empty decoration.

## Components

### Buttons
Round, warm and thumb-sized.
- **Shape:** full pill, min height 48px (hero and closing CTAs 56px; in-card buttons 44px), 24px side padding, 8px icon gap.
- **Primary:** Brand Yellow with Forest Night text and the Yellow Glow; hover to Yellow Hover.
- **Green:** Logo Green with white text; hover to Leaf Hover. The primary action on yellow fields.
- **Outline:** 2px border at 20% Logo Green, Forest Deep text; fills Logo Green on hover. On green fields the light variant uses a 30% white border and fills white.
- **States:** press scales to 0.97, transitions are 300ms expo-out, focus is a 3px yellow ring (Logo Green on paper) with 3px offset.

### Chips and Tags
- **Tags:** pill, 12px bold. "Yangi" yellow with Forest Night, "Bepul" Logo Green with white. Discount badges are yellow pills in Young Serif 18px.
- **Open badge:** pill at 10% Logo Green with a 6px Sprout Green dot; closed is 5% ink with an Ink Quiet dot.

### Category Ribbon (signature)
A yellow field topped by a painted edge, carrying category names in Young Serif 26 to 30px Forest Deep, separated by Logo Green sprout-leaf glyphs, scrolling as an endless marquee. Each name jumps to that menu category; hover turns it Brand Olive.

### Category Tabs
Pill tabs 44px tall in a sticky, horizontally scrolling bar. Active: Logo Green, white label, yellow count. Inactive: Ink Muted with a 5% green hover wash. A right-edge mask fade shows only while tabs are hidden.

### Size Switch (signature)
Segmented control for official dish sizes: a 20px well at 7% Logo Green (10% white on dark), 4px padding, equal 14px segments at least 44px tall. Weight leads at 14px/800; the official size name sits under it at 12px tabular. Selected is Logo Green with white on light grounds, yellow with Forest Night on dark. It updates price and cart line.

### Food Tiles
- **Menu and side tiles:** a Sage Tile or Paper Deep tile (alternating), square on mobile and 4:3 with 22px radius from 640px, holding the dish cutout inset 9% with the Plate Shadow; the cutout scales to 105% on hover. Name, description, size switch and price/action sit on the paper ground below; there is no card around the tile.
- **Studio wells:** the hero, lead card, promos and closing panel keep the uncut studio photo on Studio Grey.

### Cards / Containers
- **Lead dish card:** Logo Green, cream type, 28px radius, studio photo well inset at 22px.
- **Promo card:** Forest Deep, 28px radius, studio photo half with a yellow discount badge and a yellow hand-lettered tag.
- **Branch card:** 2px border at 10% Logo Green on 60% white; selected becomes white with a Logo Green border and the Selected Card shadow. 24px padding.
- **Closing panel:** yellow, 36px radius, drop photo in a Logo Green ring with the Ochre Drop.

### Inputs / Fields
- **Search:** pill, 44px (48px on mobile), white, 1px border at 15% Logo Green, leading icon in Ink Quiet. Focus turns the border Logo Green; the desktop field widens from 192 to 256px.

### Navigation
Fixed 72px header with the official logo SVG in currentColor (cream over the hero, Logo Green once scrolled). Links are 15px/600 pills with a 15% white or 10% green fill for the in-view section. Cart is a yellow pill with a count. The mobile sheet lists sections in Young Serif 34px.

### Branch Map
A 28px panel with a static OpenStreetMap render per branch at 0.75 saturation, a centred Logo Green pill pin with a yellow disc and the branch name, branch chips top left (yellow selected, white otherwise), a primary directions button bottom right and visible OSM attribution bottom left.

## Do's and Don'ts

### Do:
- **Do** set every heading in Young Serif 400 with -0.005em tracking and kerning on; cream on green, Forest Deep on paper and yellow.
- **Do** put the next action in Brand Yellow (#EDCD49) with Forest Night text, and keep secondary actions green or outline.
- **Do** close every change of field colour with a painted brush edge in the lower section's colour.
- **Do** present menu food as cutouts on alternating Sage Tile (#DCE5D0) and Paper Deep (#ECE1C8) tiles with a warm plate shadow.
- **Do** keep the paper ground grained and warm (#F6F0E1).
- **Do** frame hero-level dish photography in the brand drop (50% 0 50% 50%).
- **Do** use tabular figures for prices, weights, phone numbers and hours.
- **Do** keep every interactive target at least 44px and use pills for controls.

### Don't:
- **Don't** set a heading in a sans or a synthesised bold or italic serif; that is the rejected "simple fonts" template.
- **Don't** use Caveat beyond a short margin note: no hand-lettered headings, prices, buttons or paragraphs.
- **Don't** alter or substitute the owner-pinned colours #EDCD49, #115A2E or #3E5F21.
- **Don't** put white text on yellow, or yellow text on paper.
- **Don't** separate colour fields with straight rules or generated wave shapes.
- **Don't** add uppercase eyebrow labels above section headings.
- **Don't** use hard, offset or neutral-grey shadows on food or coloured fields.
- **Don't** replace official studio photography or its cutouts with illustrations, stock or generated food.
- **Don't** redraw or recolour the official logo paths; only its currentColor fill changes with the ground.
