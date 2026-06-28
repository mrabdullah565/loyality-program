# Merchant Detail — Loyalty Program (Qtap test task)

A pixel-fidelity build of the **Merchant Detail** screen in two loyalty states — **Points** (with Active offers) and **Stamps** — built with Expo SDK 54 + Expo Router.

## Run it

```bash
npm install
npx expo start
```

Then open in:

- **Expo Go** — scan the QR code with your phone
- **iOS Simulator** — press `i` in the terminal
- **Android Emulator** — press `a` in the terminal
- **Web** — press `w` in the terminal (or `npm run web`)

The app boots straight into the Merchant Detail screen — there's no other route.

## Switching states

A "Preview state" segmented control is pinned to the top of the screen (above the actual Figma content) — tap **Points** / **Stamps** to re-render the whole screen from the same mock data object. This control is tooling for the reviewer, not part of the Figma design.

## Project structure

- `data/mock-merchant.ts` — the single mock data object (`merchant`, `pointsProgram`, `stampCard`, `offers`) that drives both states.
- `types/loyalty.ts` — typed shape for that data.
- `constants/theme.ts` — design tokens (colour, typography, spacing, radius) from the client's spec. No inline hex/magic numbers in components.
- `components/` — typed, reusable presentational components (`Header`, `HeroImage`, `InfoRow`, `PointsCard`, `StampCard`, `OfferCard`, `Contacts`, `PrimaryButton`, plus internal helpers like `BrandLogo`, `CurrentCardShell`, `ProgressBar`, `StampGrid`, `Chip`).

## Implementation notes

- The literal field list didn't include a short loyalty-brand label distinct from the branch name (header/current-card show "Starbuks" while the H1 below the hero shows the branch "Al Mirqab Al Jadeed"). I added `merchant.brand_name` to cover that slot rather than hardcoding the string in two places.
- `merchant.logo_url` is seeded as `null` on purpose to exercise the null-fallback path (renders a brand-initial badge instead of an image); `cover_image_url` is seeded with a real placeholder photo to keep the hero section visually representative — the same fallback pattern is implemented for it too, just not exercised by the default seed.
- Offer "Expires in" countdowns tick down live client-side from `expires_in` (seconds) — a small bit of interactivity since this is a runnable prototype, not just a static render.

## What I'd improve with more time

- Pull exact values from Figma Dev Mode (I worked from flattened screenshots + the client's token sheet) to tighten spacing/line-height in a couple of spots I had to eyeball, like the offer card seal icon and ribbon proportions.
- Add a reward-list/detail sheet behind "Reward option" — out of scope for this screen, but it's the obvious next screen in the flow.
- Snapshot/unit tests for the derived-progress logic (next reward selection, stamp fill ratio) to lock in correctness as the data model grows.
