# Milestone Interior — One Page Conversion Site

This repository contains a simple one-page conversion-focused website for Milestone Interior, an interior design studio in Lucknow.

## Files

- `index.html` — main landing page structure and content.
- `styles.css` — styling for the layout, typography, colors, responsive behavior, and subtle animation effects.
- `script.js` — small interaction enhancements: scroll reveal and button press feedback.
- `details.txt` — original designer details used to build the content.

## Code Structure

### `index.html`
- `header.hero` — hero section with a strong value proposition, direct call-to-action buttons, and trust-focused microcopy.
- `section.focus-section` — short benefit cards that communicate core service strengths.
- `section.gallery-section` — image-driven visual proof of premium work and design sensibility.
- `section.testimonial-section` — two customer reviews pulled from `details.txt` to build credibility.
- `section.contact-section` — contact information, operating hours, and CTA buttons for phone calls and location.
- `footer.footer` — closing reassurance and a brand tagline.

### `styles.css`
- Contains a dark, premium visual theme with gold accent styling and clean spacing.
- Uses responsive grid layouts and typography to keep the page compact on desktop and mobile.
- Adds subtle card shadows, background overlays, and reveal animations.
- Ensures the page stays lightweight and visually converting without relying on heavy copy.

### `script.js`
- Uses `IntersectionObserver` to reveal cards and gallery elements as the user scrolls.
- Adds a tiny click feedback effect for interactive buttons.
- Keeps the interaction layer very small to avoid unnecessary complexity.

## How to Update

### Change content
- Edit `index.html` to update headings, testimonials, address, phone number, business name, or CTA text.
- Replace the review quotes and client names directly in the testimonial cards.

### Change images
- Update the background image in `styles.css` under the `.hero` selector.
- Replace gallery card image URLs in `index.html` inside the `style="background-image: ..."` attributes.

### Change styling
- Modify colors, spacing, and typography in `styles.css`.
- Add or adjust responsive breakpoints in the media query sections.

## Development Notes

- This site is intentionally minimal to keep the visitor focused on the brand, trust, and conversion action.
- The phone call button is the primary conversion path.
- The page is built to be easy for any developer to maintain and update quickly.

## Deployment

- Deploy the page by serving `index.html` with the `styles.css` and `script.js` files in the same folder.
- No build step or server-side code is required.
