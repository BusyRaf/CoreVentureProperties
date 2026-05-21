# Core Property Ventures — Landing Page Wireframe

**Direction: Cornerstone** (boutique editorial)
Mobile-first wireframe for a single QR-code landing page.

## What's in here

| File                              | Purpose                                       |
|-----------------------------------|-----------------------------------------------|
| `Cornerstone Wireframe.html`      | **Open this** — the chosen direction         |
| `Core Property Ventures.html`     | All three explored directions on one canvas   |
| `styles.css`                      | Brand tokens, type system, primitives         |
| `wireframe-a.jsx`                 | The Cornerstone wireframe component           |
| `wireframe-b.jsx` / `wireframe-c.jsx` | The two unused directions (kept for reference) |
| `app.jsx`                         | Shared brand components (Lockup, BrickMark)   |
| `design-canvas.jsx` / `tweaks-panel.jsx` | Canvas + tweaks shell (3-up only)      |
| `assets/holly.jpg`                | Holly's headshot                              |
| `assets/logo.png`                 | Original logo                                 |

## Brand system

- **Navy** `#15233d` · **Gold** `#c79a44` · **Cream paper** `#f4f1ea`
- **Display:** Archivo 700–800 (echoes the CORE wordmark)
- **Editorial serif:** Fraunces (headlines, byline copy)
- **Body:** Inter
- **Structural labels / annotations:** JetBrains Mono
- **Brick mark:** recreated in SVG inside the `BrickMark` component (`app.jsx`)
- **Lockup:** brick mark on the **left** of "CORE" + gold hairline + "PROPERTY · VENTURES"

## Sections (top → bottom)

1. **Nav strip** — Lockup left, "Jacksonville · FL" right
2. **Hero** — Serif headline: "We buy houses as-is, in cash, on your timeline."
3. **Owner block** — Holly's portrait + pull-quote
4. **The Process** — Three roman-numeral steps (I / II / III)
5. **As-is panel** — Navy card with gold inlay, four bullets
6. **Request an offer** — Form: name, contact, address, timeline chips
7. **Footer** — Lockup + email + JAX line

## Notes for dev handoff

- This is still a **wireframe**. Type, spacing, color are brand-true but layout is meant to communicate hierarchy, not pixel-perfect final UI.
- The form has no submission backend — wire it to whatever you use (Formspree, a CRM webhook, plain mailto, etc.).
- The phone number `904-206-7479` and email `holly@corepropertyventures.com` are live and should be `tel:` / `mailto:` links in production.
- The QR code on the postcard should resolve to this landing page's URL.

## Next steps (suggested)

1. Hi-fi pass on the Cornerstone direction (real photography, micro-interactions, real type rendering)
2. Add a small "Areas we serve" Jacksonville neighborhood line if she wants
3. Decide on form host + spam protection
4. Generate the QR code pointed at the deployed URL
