# Design system

## Direction

**Vitrina refrigerada** adapts the geometry of a butcher's refrigerated display
to a useful, contemporary landing page. Framed glass panes become the page's
information architecture: each pane holds one product group, purchase path, or
branch action. The product photography remains the dominant visual evidence.

The glass reference is structural, not a blur effect. Use clean surfaces,
rectilinear divisions, fine charcoal frames, and strong photographs. Do not
imitate reflections, glassmorphism, or a physical storefront facade.

## Brand and palette

- Brand red: `#ED3237`, sampled from the supplied logo and reserved for actions
  and key emphasis.
- Ink: `#292B2C`.
- Muted text: `#565D5F`.
- Cool light surface: `#F3F5F4`.
- White: `#FFFFFF`.
- Fine frame: `#D1D7D5`.

Keep the page light throughout. The supplied red logo is the single action
accent; do not introduce blue, gold, or unrelated status colors.

## Typography

Use a compact system sans-serif stack with clear weight and size contrast. Keep
headlines short, left-aligned, and readable. Body copy should remain at a
comfortable reading measure. The supplied logo is the sole custom brand mark;
do not recreate or alter its lettering.

## Composition

- Use an asymmetric 12-column desktop grid that collapses to a single column on
  narrow screens.
- Treat content areas as connected display panes separated by charcoal rules,
  not as floating cards.
- Give photographs large, intentionally cropped frames. Add explicit image
  dimensions or aspect ratios to avoid layout shift.
- Keep navigation on one line on desktop; use native links and a compact menu on
  mobile if needed.
- Alternate image-led product compositions with open text and branch/contact
  sections. Avoid repeating identical card rows.
- Use consistent small corner radii for controls; pane frames remain square.

## Interaction and accessibility

- WhatsApp is the primary conversion path. It must lead to a published branch
  contact, not a fabricated central number.
- Every action has visible text and a clear destination. Preserve keyboard
  focus, contrast, touch targets, and a reduced-motion fallback.
- Use progressive enhancement. Navigation, product information, FAQs, and
  WhatsApp links must work without JavaScript.
- Do not add tracking scripts, third-party widgets, forms, or location claims
  without approval.

## Motion

Keep the page mostly still. A short entrance for the hero media may establish
hierarchy; hover and pressed states provide feedback. Honor
`prefers-reduced-motion`.
