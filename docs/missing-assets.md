# Missing Assets

All 42 assets from the Wix site were downloaded successfully (36 original + 6 carousel images). No assets are missing.

## Carousel Images (added in iteration 2)

| File | Content | Dimensions |
|---|---|---|
| `carousel-1.jpeg` | Team at outdoor community engagement event | 3072×2304 |
| `carousel-2.jpg` | Team at corporate meeting | 2757×1620 |
| `carousel-3.jpeg` | Team at field healthcare event | 3072×2304 |
| `carousel-4.jpg` | Team group photo at conference | 3000×2250 |
| `carousel-5.jpg` | Large team gathering at company event | 3000×2250 |
| `carousel-6.jpg` | Team selfie with NeoAxis product banners | 3000×2250 |

## Assets Not Used (by design, per prompt instructions)

| Asset | Reason |
|---|---|
| Gradient strip (`11062b_cee9...`) | Decorative only; skipped per instructions |
| Footer link icon (`64a918_547a...`) | Tiny icon; destination unknown; skipped per instructions |
| Phone illustration (`9c9589_e89dad10...`) | Skipped per instructions |
| Six-pillars screenshot (`9c9589_eebd30eb...`) | Reference only; pillars rebuilt in code |

## Notes

- **Leadership photo mapping:** Portraits were visually matched:
  - `portrait-1.jpg` → Lokesh Manikonda (man with glasses speaking at NeoAxis event)
  - `portrait-2.jpeg` → Prashant Deshpande (man in striped shirt, arms crossed)
  - `portrait-3.jpg` → Dr Payal Sharma (Laad) (woman in traditional saree)
  - **Client confirmation recommended** for the two male portraits. The female portrait is certain.

- **WHO-GMP claim:** Present in `src/content/facts.ts` with `needsClientConfirmation: true`. Not rendered on any page.

- **No postal address or social media URLs** were found on the live site. None have been invented.
