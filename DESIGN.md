# Design system

## Direction

**Mostrador de carnes contemporáneo** adapts the visual grammar of the supplied
meat-commerce reference: a compact dark storefront header, a full-bleed
photographic hero, an editorial product catalog, bold red actions, and open
photo-and-copy sections. The layout leads with the product and gives household
and wholesale buyers distinct ways to ask about it.

The reference informs the composition, hierarchy, image treatment, button
proportions, and section order. Use Don Silvio's real identity and photographs;
do not reproduce another business's logo, claims, prices, reviews, or invented
metrics. Do not imitate a generic three-card feature template.

## Brand and palette

- Ink: `#171717`.
- Header and dark surfaces: `#101010`.
- Primary conversion red: `#C51230`, with `#A90E28` for hover.
- Bright red emphasis: `#ED3237`.
- Paper: `#F5F5F3`.
- White: `#FFFFFF`.
- Quiet rules: `#DEDEDB`.

Red is reserved for the main WhatsApp action, category emphasis, and active
filter. Keep text contrast readable on both dark and red surfaces.

## Typography

Use the compact system sans-serif stack already supported by the page.
Headlines are heavy, short, and left-aligned except for the centered product
catalog title. Body copy uses comfortable line lengths. The provided logo is
the only custom brand lettering.

## Composition

- Reproduce the reference's order: dark header, full-background photographic
  hero with clear actions, product catalog and filters, image-led business
  story, retail/wholesale paths, current-offer inquiry, branches, FAQs, footer.
- The hero uses a real repository photograph as its entire background, with a
  restrained dark overlay for legible copy and a red, three-part purchase ribbon.
- Use a four-column desktop catalog with varied product photography and a
  compact filter rail; collapse to two columns on mobile.
- Alternate dark commerce framing, white editorial space, and red conversion
  panels. Let real photography carry visual weight; avoid ornamental gradients,
  fake badges, and metric blocks.
- Use every existing photograph in `img/`; lazy-load offscreen images.
- Keep branch information separate and clearly attributable to each location.
- On compact screens, retain the logo and contact action and use a full-screen
  dark navigation panel with large section links, a clear close control, and a
  WhatsApp action. Keep horizontal navigation available as a no-JavaScript
  fallback; stack large image/copy sections.

## Content and interaction

- Write in direct Argentine Spanish.
- Use one business WhatsApp destination, `5491123182958`, for every
  conversion, with a message tailored to the selected product or buyer intent.
- The catalog filters operate on product categories and keep all products
  visible by default. With JavaScript unavailable, the complete catalog remains
  readable.
- Do not invent current prices, promotions, availability, customer reviews,
  sales statistics, delivery terms, or quality certifications.
- Branch hours and addresses are sourced from published information and retain
  a note to confirm changes and holidays.
- Preserve visible keyboard focus, contrast, useful image alternatives, native
  links, and a reduced-motion fallback.
- Order primary navigation by the page's key journeys: products, popular cuts,
  company story, purchase options, and branches. The mobile menu closes with
  Escape or after following an in-page link.

## Motion

Keep motion restrained: small image scale and button feedback on hover only.
Honor `prefers-reduced-motion`. Do not add autoplay, scroll hijacking, or
repeating animation.
