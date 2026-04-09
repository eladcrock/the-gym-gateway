

## Update Portal to Match Benicia BMA Branding

### Design Extraction from beniciabma.com
- **Background**: Near-black (#111111 / #0a0a0a)
- **Accent/Primary**: Gold/bronze (#C9A84C or similar warm gold)
- **Text**: White (#FFFFFF) for headings, soft cream for secondary
- **Typography**: Bold condensed uppercase — will use **Oswald** (free Google Font, closest match to their display typeface)
- **Card style**: Dark cards with subtle gold border on hover, gold glow effect

### Changes

**1. Add Google Font (index.html)**
- Add Oswald font import (weights 400, 600, 700)

**2. Update CSS variables (src/index.css)**
- Keep dark background (#0a0a0a)
- Change primary from red to gold (#C9A84C / hsl(43, 55%, 54%))
- Update ring, border colors to complement gold
- Set muted tones to dark grays

**3. Update Tailwind config (tailwind.config.ts)**
- Add `fontFamily: { heading: ['Oswald', 'sans-serif'] }`

**4. Update Index page (src/pages/Index.tsx)**
- Apply Oswald font to the heading with uppercase tracking
- Update hover effects: gold border glow instead of red
- Keep the two-card layout with placeholder logos
- Add subtle gold accent styling to location names

