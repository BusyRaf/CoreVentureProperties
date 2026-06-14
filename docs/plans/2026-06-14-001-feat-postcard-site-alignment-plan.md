---
title: "feat: Align website with PostCardMania postcard deliverables"
type: feat
status: active
date: 2026-06-14
---

# feat: Align website with PostCardMania postcard deliverables

## Summary

Update `index.html` to match the approved PostCardMania postcard copy and branding: swap the nav/footer SVG lockup for the client-approved PNG logo (`assets/logo.png`), align copy across hero/owner/process/as-is sections, add a testimonial band and business address, and gitignore `New folder/`. All working integrations remain untouched.

---

## Problem Frame

The live site was built from the Cornerstone wireframe before the final PostCardMania postcard was approved. Homeowners who scan the postcard QR code land on a site with a mismatched logo, missing trust signals (testimonial, 15-year Jacksonville credential, business address), a cautious "7–21 days" closing claim vs. the postcard's "7 days," and no Realtors® disclaimer. The site needs to read as the digital companion to the physical mail piece — same story, same brand, same offer.

---

## Requirements

- R1. Nav and footer must display `assets/logo.png` (client-approved PostCardMania wordmark) instead of the SVG brick+text lockup.
- R2. All postcard copy claims must have a clear on-page home: "15+ years in Jacksonville," service area callout, "as little as 7 days," all six benefits, Realtors® disclaimer, "No agents. No hassles. Just a fair cash offer."
- R3. The testimonial "Holly was honest, responsive, and made the process easy. — Jacksonville Homeowner" must appear on the page.
- R4. Footer must display the full legal name (Core Property Ventures, LLC) and business address (7643 Gate Pkwy., Ste. 104-1304, Jacksonville, FL 32256).
- R5. All working integrations must be preserved: Formspree endpoint, `tel:9042067479`, `holly@corepropertyventures.com`, form validation, AJAX submit, scroll-reveal, mobile-first responsive layout.
- R6. Page must remain fast, accessible (alt text, semantic HTML, focus-visible), and mobile-first.

---

## Scope Boundaries

- No React rebuild or migration off single-file HTML
- No new backend or Formspree endpoint changes
- No QR code regeneration — URL stays `corepropertyventures.com`; no copy change forces a new QR
- No postcard print file edits
- Section-header SVG brick marks (`.brick-mark` before "The Process" and "Request an Offer" headings) are retained as decorative accents — only nav/footer lockup is replaced with PNG
- `privacy.html` is not changed; footer address addition does not affect the privacy page

### Deferred to Follow-Up Work

- Domain migration from `coreventureproperties1.vercel.app` to `corepropertyventures.com`: separate DNS/Vercel task; re-check QR code once that completes

---

## Context & Research

### Relevant Code and Patterns

- `index.html` — single-file production page; all CSS inline in `<style>`, JS in `<script>` at bottom
- Sections in DOM order: `<nav>`, `.hero`, `.owner`, `.process`, `.as-is`, `.offer`, `<footer>`
- `assets/logo.png` — client-approved PNG (45,954 bytes); visually and byte-count identical to `New folder/CorePropertyVentures (1).png` — no copy step needed
- `assets/holly-2026.png` — owner photo referenced in `.owner__photo img`
- `.lockup` CSS (~lines 69–95) — SVG circle + CORE text stack; entire construction replaced by `<img>` in U2; associated CSS is removed once replaced
- `.brick-mark` CSS (~lines 98–106) — 34×34 decorative circle used in section headers; retained unchanged
- `.as-is__bullets` — `grid-template-columns: 1fr 1fr` mobile, `repeat(4, 1fr)` desktop; needs update for 6 bullets
- `.reveal` + IntersectionObserver in `<script>` — new sections with class `reveal` are automatically picked up; no script changes needed
- Formspree AJAX, chip logic, and nav shadow toggle — all in `<script>` block; must not be touched

### Institutional Learnings

- None on record (`docs/solutions/` does not yet exist)

### External References

- None required — static HTML content/copy alignment

---

## Key Technical Decisions

- **PNG logo in nav/footer, SVG marks in section headers:** `assets/logo.png` is a horizontal wordmark proportioned for large-format use. The `.brick-mark` circles are 34px decorative accents — the PNG wordmark does not scale to icon size. Retaining brick marks preserves visual rhythm without contradicting the logo replacement.
- **`assets/logo.png` is already canonical:** The New folder file and `assets/logo.png` are byte-for-byte identical. No file copy is needed — only the HTML reference changes.
- **"As little as 7 days" is the authoritative timeline claim:** The PostCardMania postcard is the approved marketing artifact. The site's "7–21 days" predates approval; update process step III to match.
- **Testimonial as a standalone section:** A dedicated `<section class="testimonial reveal">` between `.as-is` and `.offer` reinforces social proof immediately before the ask — the natural Cornerstone editorial rhythm.
- **Business address in footer, not a new Contact section:** The postcard back uses the address as a trust/identity signal, not a navigation destination. Footer placement matches that intent without restructuring the page.
- **6-bullet as-is grid with `repeat(3, 1fr)` on desktop:** Adding "Flexible Closing Timelines" and "Inherited? Probate? Yes." brings bullets to 6. Mobile `1fr 1fr` (3 rows) works unchanged. Desktop should shift to `repeat(3, 1fr)` (2 rows of 3) — cleaner than `repeat(4, 1fr)` with 6 items, which produces an uneven 4+2 layout.
- **Realtors® disclaimer in as-is panel sub-copy:** Matches postcard placement (benefit section), satisfies NAR ® usage, and avoids legal copy in a prominent position.

---

## Open Questions

### Resolved During Planning

- **Logo treatment:** Replace SVG lockup in nav and footer with PNG `<img>`; retain section-header SVG brick marks.
- **Closing timeline:** "As little as 7 days" — postcard is authoritative.
- **Business address:** Show in footer.
- **Asset housekeeping:** `New folder/` → add to `.gitignore`; `assets/logo.png` is already the canonical file.
- **QR codes:** No URL changes → no regeneration needed.

### Deferred to Implementation

- Exact CSS `height` value for `.nav-logo` (depends on visual rendering during implementation).
- Whether "No agents. No hassles. Just a fair cash offer." fits best in the hero body paragraph, the as-is sub-copy, or both — implementer checks visual rhythm after inserting other copy.

---

## Implementation Units

### U1. Asset housekeeping

**Goal:** Add `New folder/` to `.gitignore` so the temp PostCardMania assets are excluded from git.

**Requirements:** None — housekeeping only.

**Dependencies:** None.

**Files:**
- Modify: `.gitignore`

**Approach:**
- Append `New folder/` to `.gitignore`
- No file copy needed — `assets/logo.png` already contains the approved PNG

**Test scenarios:**
- Test expectation: none — gitignore-only change; confirm with `git status` that `New folder/` no longer appears as untracked

**Verification:**
- `New folder/` is absent from `git status` untracked output

---

### U2. PNG logo replacement in nav and footer

**Goal:** Replace the SVG brick+text `.lockup` construction in nav and footer with a plain `<img>` pointing to `assets/logo.png`. Remove the now-dead lockup CSS.

**Requirements:** R1, R6.

**Dependencies:** None (can run parallel with U1 and U3).

**Files:**
- Modify: `index.html` (nav HTML, footer HTML, and the `<style>` block to remove `.lockup*` rules and add `.nav-logo`)

**Approach:**
- In `<nav>`: replace the entire `<a class="lockup">…</a>` block with `<a href="#" aria-label="Core Property Ventures"><img src="assets/logo.png" alt="Core Property Ventures" class="nav-logo"></a>`
- In `<footer>`: same replacement for the footer's `.lockup` block
- Add `.nav-logo` CSS: `height: 38px; width: auto; display: block;` for mobile; bump to `height: 44px` at the 768px breakpoint
- Remove CSS rules for `.lockup`, `.lockup__mark`, `.lockup__text`, `.lockup__word`, `.lockup__rule`, `.lockup__sub` — dead code after the swap
- Retain `.brick-mark` CSS entirely

**Patterns to follow:**
- `assets/holly-2026.png` `<img>` usage in `.owner__photo` for attribute pattern

**Test scenarios:**
- Happy path: PNG logo renders in nav on 375px viewport — no overflow, proportional
- Happy path: PNG logo renders in nav on 1024px viewport — proportional to nav bar height
- Happy path: Footer logo renders at consistent size with nav
- Edge case: PNG fails to load → `alt="Core Property Ventures"` visible fallback
- Integration: Clicking nav logo `<a>` still scrolls to top of page

**Verification:**
- Nav and footer display the PostCardMania wordmark PNG, not SVG elements
- No broken-image indicators; no console errors
- `.lockup*` CSS rules are absent from the `<style>` block

---

### U3. Copy alignment across existing sections

**Goal:** Update hero, owner block, process step III, and as-is panel to carry every postcard claim.

**Requirements:** R2, R5, R6.

**Dependencies:** None (can run parallel with U2).

**Files:**
- Modify: `index.html` (hero, owner, process, and as-is section HTML and CSS)

**Approach:**

*Hero:*
- Add service area callout — "Serving Jacksonville & Surrounding Areas" — as an additional eyebrow line or appended to the existing body paragraph; should be visible above the fold on mobile
- Add a secondary phone CTA alongside the existing "Request an offer" button: `<a href="tel:9042067479" class="btn-outline">Call or text Holly · 904·206·7479</a>`
- Strengthen body paragraph: add "No agents. No hassles. Just a fair cash offer." as a sentence

*Owner block:*
- Update `.owner__title` from "Owner · Core PV" to "Owner · Jacksonville local, 15+ years"
- The owner quote can remain; it already covers "not an agent, buys directly, your timeline"

*Process step III:*
- Change desc text "We can close in 7–21 days" → "We can close in as little as 7 days"

*As-is panel:*
- Add two bullets: `<li class="as-is__bullet"><span class="as-is__dot"></span>Flexible Closing</li>` and `<li class="as-is__bullet"><span class="as-is__dot"></span>Inherited? Probate? Yes.</li>`
- Update desktop `.as-is__bullets` grid: `grid-template-columns: repeat(3, 1fr)` (replacing `repeat(4, 1fr)`)
- Update `.as-is__sub` to append: "We're not Realtors® — we buy homes directly."

**Patterns to follow:**
- `.eyebrow`, `.hero__body`, `.process__desc`, `.as-is__bullet`, `.as-is__sub` class conventions
- `&reg;` HTML entity for ®; `&#8209;` for non-breaking hyphen in "as-is"

**Test scenarios:**
- Happy path: "Serving Jacksonville & Surrounding Areas" visible at 375px without scrolling past hero
- Happy path: Secondary phone CTA renders on mobile as a full-width or inline button alongside "Request an offer"
- Happy path: Process step III reads "as little as 7 days" — "7–21 days" must not appear anywhere on the page
- Happy path: As-is panel shows 6 bullets; 2-col mobile grid renders 3 rows cleanly at 375px
- Happy path: As-is desktop shows a 3×2 grid (2 rows of 3)
- Happy path: Realtors® renders as "®" — not `&reg;` literal or question-mark box
- Edge case: Phone CTA `tel:` link opens system dialer on iOS/Android
- Integration: Existing "Request an offer" anchor scroll still works after hero copy additions

**Verification:**
- "7–21 days" does not appear anywhere in the page source
- All 6 postcard front benefits visible in the as-is section
- Owner title communicates "15+ years in Jacksonville"
- ® renders correctly in Chrome, Safari, Firefox

---

### U4. Testimonial section

**Goal:** Add a new testimonial section between the as-is panel and the offer form.

**Requirements:** R3.

**Dependencies:** U3 (as-is finalized before inserting below it).

**Files:**
- Modify: `index.html` (new `<section>` HTML after `.as-is`, new CSS rules in `<style>`)

**Approach:**
- New `<section class="testimonial reveal" aria-label="Customer testimonial">` inserted between `.as-is` and `.offer`
- Quote text: "Holly was honest, responsive, and made the process easy."
- Attribution: "— Jacksonville Homeowner"
- Use `<blockquote>` for the quote and `<cite>` or a `<p>` for attribution
- Visual style: Fraunces italic serif quote in `var(--ink-2)`, gold left border or decorative mark, mono attribution — consistent with `.owner__quote` aesthetic
- Keep it compact — one quote, single block, no carousel
- Add padding that matches the section rhythm (`var(--section-gap) var(--gutter) 0`)

**Patterns to follow:**
- `.owner__quote` (Fraunces italic, `var(--ink-2)`, `line-height: 1.6`) for the quote text
- `.eyebrow` mono for attribution
- `.section-header` pattern if a label is needed (optional — the quote may stand alone)

**Test scenarios:**
- Happy path: Testimonial section renders between as-is and offer at 375px — no layout shift, no overflow
- Happy path: Testimonial renders at 1024px — quote text max-width constrained, not stretching full column width
- Happy path: `.reveal` scroll-reveal triggers as section scrolls into viewport
- Accessibility: `<blockquote>` wraps the quote; attribution uses semantic element; section has `aria-label`

**Verification:**
- Testimonial quote and attribution are visible on the page at the correct position
- Scroll-reveal animation fires when the section enters the viewport
- No new CSS class name conflicts with existing `.testimonial-*` or section names

---

### U5. Footer enhancement

**Goal:** Update the footer with the full legal name and business address.

**Requirements:** R4.

**Dependencies:** U2 (footer logo swap should complete first for a coherent atomic change).

**Files:**
- Modify: `index.html` (footer HTML; optional CSS for address layout)

**Approach:**
- Update the eyebrow from "Core PV · Jax FL" to "Core Property Ventures, LLC"
- Add address lines below the eyebrow (or below the logo in the left column): "7643 Gate Pkwy., Ste. 104-1304" / "Jacksonville, FL 32256"
- Use `.footer__email` mono style (or a similar `<p>` with mono font) for address lines — same typographic register as the email
- Keep the email link, Bunshin colophon, and gold rule unchanged
- "Call Today. We Can Close in As Little As 7 Days!" is already represented in process step III and the hero; omit from footer to avoid redundancy

**Patterns to follow:**
- `.footer__email` mono style for address typography
- `.eyebrow` class for the legal name line

**Test scenarios:**
- Happy path: Full LLC name and address visible in footer at 375px — no horizontal overflow
- Happy path: Address visible at 1024px in footer layout
- Happy path: Address text is plain text (selectable, not an image)
- Edge case: Very long address on narrow screen — wraps gracefully, not clipped

**Verification:**
- Footer shows "Core Property Ventures, LLC" and full mailing address
- No horizontal scroll introduced at any breakpoint
- Bunshin colophon is untouched

---

### U6. Visual production pass

**Goal:** Spot-check all changed and new sections at key breakpoints; apply CSS micro-adjustments for production quality.

**Requirements:** R6.

**Dependencies:** U2, U3, U4, U5 (all content changes complete).

**Files:**
- Modify: `index.html` (CSS-only adjustments; no structural HTML changes)

**Approach:**
- 375px review: hero phone CTA + request button stacking, as-is 6-bullet grid, testimonial block height, footer address wrapping
- 768px review: desktop grid transitions, PNG logo scale in nav, owner block 2-col layout with updated title
- 1280px review: max-width column centering, testimonial max-width, footer address alignment
- Confirm all new `<section>` elements carry the `.reveal` class so IntersectionObserver picks them up automatically
- Verify no `7–21 days` text remains anywhere in the source

**Test scenarios:**
- Happy path: No horizontal scroll at 375px, 768px, or 1280px
- Happy path: All `.reveal` sections animate on scroll (testimonial, updated as-is, offer form)
- Happy path: Nav PNG logo does not taller than the nav bar at either breakpoint
- Edge case: 320px viewport — 6-bullet grid and phone CTA do not overflow
- Accessibility: Tab order through nav logo link → hero phone CTA → "Request an offer" button → form fields → submit is logical

**Verification:**
- Visual spot-check at 375px, 768px, and 1280px in a local browser confirms no regressions
- `grep "7–21" index.html` returns no matches
- `grep "7.21" index.html` returns no matches
- Form submits via Formspree AJAX and shows success state

---

## System-Wide Impact

- **Interaction graph:** The existing IntersectionObserver in `<script>` uses `document.querySelectorAll('.reveal')` — any new `<section class="reveal">` is automatically observed without script changes.
- **Error propagation:** No error paths change; Formspree errors and validation logic are untouched.
- **State lifecycle risks:** None — static HTML, no client state beyond chip selection and form submit.
- **API surface parity:** `privacy.html` link in the form note is not changed; `vercel.json` cache headers are not changed.
- **Unchanged invariants:** Formspree endpoint (`https://formspree.io/f/xwvzlyrk`), phone (`tel:9042067479`), email (`holly@corepropertyventures.com`), and `privacy.html` link must remain byte-for-byte identical after all changes.

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| PNG logo wrong size / aspect ratio in nav | Size with CSS `height` only; `width: auto` preserves aspect ratio; spot-check both breakpoints |
| 6-bullet desktop grid produces uneven 4+2 layout | Switch desktop grid to `repeat(3, 1fr)` — cleaner 2-row layout |
| ® encoding breaks in some browsers | Use `&reg;` HTML entity; test Chrome/Safari/Firefox |
| Testimonial section pushes offer form too far below fold on mobile | Keep testimonial compact; avoid generous padding; one quote, no extra chrome |
| `New folder/` already staged in git index | If staged, `git rm --cached "New folder/" -r` before relying on `.gitignore` |
| Removing `.lockup*` CSS breaks something unexpected | Search for `.lockup` in `index.html` before deleting — confirm no hidden uses beyond the two known `<a>` blocks |

---

## Documentation / Operational Notes

- After implementation, run a postcard parity check: read each claim on the postcard front and back, confirm each has an on-page counterpart
- Vercel auto-deploys on push to main; `vercel.json` cache headers are unchanged
- `assets/logo.png` is already committed — no new binary to track

---

## Sources & References

- Postcard copy: provided in planning brief (`New folder/PostCardMania_Final 06.01.2026.pdf`)
- Client-approved logo: `assets/logo.png` (identical to `New folder/CorePropertyVentures (1).png`)
- Production page: `index.html`
- Live site: coreventureproperties1.vercel.app
- Formspree: `https://formspree.io/f/xwvzlyrk`
