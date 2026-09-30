# Intentional Design System: Growth Advisory

## Overview

**Intentional** is a commercial growth advisory and creative agency. The function it holds for clients is the one most growing consumer brands never fill: the senior head who connects the money, the measurement and the creative: the seat you'd otherwise hire at $130k+ and struggle to fill with someone who holds both halves. Intentional does the work, not just the diagnosis: growth and measurement strategy, brand and storytelling, creative strategy, and the marketing campaigns that take it to market.

This system is a **refresh** of the original Intentional identity (dark performance-marketing aesthetic) repositioned for an audience of founders, managing directors, general managers and marketing directors: the people who control the budget. Direction: **"The Growth Index"**, a research-house aesthetic where evidence, figures and keeping score are the brand's signature, with headline typography consolidated into PP Neue Montreal at scale.

### What survived the refresh
- The red (`#D4271C`) and the logo mark, untouched.
- PP Neue Montreal (body) and PP Neue Montreal Mono (data), the thread of continuity.
- The 10Up circles motif, evolved from decoration into **chart fill patterns** (see Motif).

### What changed
- Dark-by-default → **dual mode**: grey-paper "daylight" surfaces by default, ink panels for emphasis, decks and signature artifacts.
- Founders Grotesk X Cond retired from headlines (too heavy for the audience); retained **only for oversized numerals** (index figures, big stats).
- New editorial voice: Source Serif 4 italic for annotations and pull-quotes.
- Copy voice: less performance-marketing jargon, more brand strategy language grounded in business growth and data-driven decision making.

### Sources
- Original design system: project `cb415eb1-7966-4e4a-978e-9da4e4bc711d` (fonts, logo, 10Up illustration copied from there).
- Direction boards from this refresh: `direction-1a-memo.dc.html`, `direction-1b-boardroom.dc.html`, `direction-1c-growth-index.dc.html` (1c chosen, with 1b's headline voice).
- No Figma or codebase provided.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Advisor, not vendor.** Speaks peer-to-peer with people who own a P&L. "We connect the money, the measurement and the creative"; never channel jargon (no ROAS-maxxing, no "scaling your ads").
- **Evidence-led.** Every claim carries a number; every number carries a source. Copy references quarters, margins, payback: the language of a board pack.
- **Declarative and short.** No hedging, no filler, no exclamation marks, no emoji, ever.
- **No em dashes.** Labels separate with the mono middot (·); prose uses colons, semicolons and commas.
- **We / You.** First-person plural for the firm, second person for the client.
- **Casing:** sentence case for body and headlines. ALL CAPS reserved for mono eyebrows/labels and condensed numerals' captions.

### Copy examples
- "The senior head most growing brands never fill."
- "Money. Measurement. Creative. One head."
- "We do the work, not just the diagnosis."
- "Growth on the record."
- "Every claim carries a number; every number carries a source."

---

## VISUAL FOUNDATIONS

### Color
Dual mode. Default is **daylight**: gesso `#EDEBE5` page, chalk `#DFDCD2` wells, white cards, ink `#1A1815` text. **Ink mode** (`#1A1815` bg, bone `#EDEBE5` text) is for emphasis panels, decks and the Growth Index artifact; an accent, not the default. Red `#D4271C` is signal only: eyebrows, deltas, figure numbers, primary CTAs. Positive green `#2E5339` (daylight) / `#2E9958` (ink) exists solely for data deltas. See `tokens/colors.css`.

### Typography (five voices)
1. **Display**: PP Neue Montreal at scale (56–88px), tracking −0.03em, sentence case. Confidence from scale and space, not weight.
2. **Body**: PP Neue Montreal 15–18px, line-height 1.5.
3. **Mono**: PP Neue Montreal Mono: data, table heads, eyebrows (0.14em tracking, uppercase), figure labels ("FIG. 01 ·").
4. **Editorial**: Source Serif 4 *italic*: annotations, pull-quotes, the humane counterpoint. Never for headlines or body.
5. **Numeral**: Founders Grotesk X Cond 600/700, oversized figures only (72px+). Never for words longer than a caption.

### Imagery
Moody, cinematic photography retained, but **annotated**: photos carry mono figure labels ("FIG. 01 · THE OPERATOR") and data callouts like a field report. Full-bleed on ink sections; framed with hairline borders on daylight. Grade: desaturated, warm shadows, directional light.

### Motif: 10Up evolved to chart textures
The ten circle patterns (rings, dots, hatches, rays) become the **fill language of every chart**: patterns distinguish data series instead of extra colors, always in red `#D4271C` at 1px weight. The motif stops decorating and starts working. Original illustration at `assets/10up-red-circles.png` for reference; live usage is CSS `repeating-*-gradient` fills (see `preview/motif-chart-fills.html`).

### Logo
Red circle + white 3-pointed arrow (`assets/logo-mark.png`). Never recolored, never on red. Clearspace 1× diameter. Wordmark is plain PP Neue Montreal "Intentional", sentence case.

### Layout & spacing
4px base scale (see `tokens/spacing.css`). Research-report grammar: hairline rules (`1px var(--border)`), numbered sections (`01`, `02` in red mono), generous margins, section padding 80–128px. Grids over floats; whitespace is a brand signal.

### Corners, borders, shadows
Radius 2px default (4/8 rare); pills only for tags. 1px hairline borders do most separation work. Shadows near-invisible on daylight (`--shadow-card`); ink panels can carry `--shadow-panel`.

### Cards
White on daylight (`--surface`, 1px `--border`, 2px radius, faint shadow). Ink cards (`--ink-2`) only inside ink sections. No colored left-border accents.

### Animation
Ease-out `cubic-bezier(0.16,1,0.3,1)`; 150/250/400ms. Signature moves: **count-ups** on figures, **pattern fills** drawing into chart bars, fade-up reveals. Never bouncy, never sideways. The brand loves visual storytelling through motion; invest in data reveals, not page transitions.

### Hover & press
Links/text: opacity 0.7. Buttons: bg → `--accent-hover`, press scale 0.98. Cards: border opacity up, no lift. No color surprises.

### Blur / transparency
Dark tinted frosted glass (`rgba(26,24,21,0.85)` + blur 12–24px) only for overlays on photography (figure labels, callouts).

---

## ICONOGRAPHY

No proprietary icon set. Use **Lucide** (CDN) at 1.5px stroke, 16/20/24px, colored `--fg-3` default, `--fg-1` active, `--accent` for signal. Unicode arrows (→ ↗ ▲ ▼) are first-class citizens in mono data contexts. No emoji, ever.

---

## Index

```
styles.css                · global entry (imports all tokens)
tokens/                   · colors.css, typography.css, spacing.css
fonts/                    · PP Neue Montreal (+Mono), Founders Grotesk X Cond
assets/                   · logo-mark.png, 10up-red-circles.png
preview/                  · foundation specimen cards (Design System tab)
components/core/          · Button, Input, Select, Badge, Eyebrow
components/data/          · StatCard, IndexTable, Delta
components/layout/        · NavBar, SectionHeader, Footer
templates/website/        · marketing site template (index.html)
templates/growth-report/  · quarterly growth report / scorecard template (index.html)
templates/brand-deck/     · Brand Deck template (BrandDeck.dc.html)
```
