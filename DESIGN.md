---
version: 1
name: plivo-design-analysis
description: "Plivo's product design language: a white canvas with a near-neutral zinc surface ladder and near-black ink (#0F1729) that doubles as the primary action fill — buttons are ink, not colour. Saturated indigo (#343EFE) is the brand accent, rationed to brand moments rather than spent on chrome. The system is dense and utilitarian — a console built for operators who keep it open all day, not a marketing page. Corners are almost square (a single 2px radius token for everything), borders do the hierarchy work instead of shadows, and type runs Inter for body, Sora for headings, and JetBrains Mono for the uppercase micro-label. Colour is rationed: surfaces are grey, meaning is carried by a small semantic set and by per-channel tint pairs on tags."

colors:
  action: "#0F1729"
  action-foreground: "#FFFFFF"
  brand: "#343EFE"
  brand-foreground: "#FFFFFF"
  primary-color: "#0040E4"
  primary-color-4: "#E0E8FF"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F8"
  surface-2: "#F4F4F5"
  surface-3: "#F1F1F3"
  hover: "#E9E9EC"
  hairline: "#E4E4E7"
  hairline-strong: "#D4D4D9"
  ink: "#0F1729"
  ink-muted: "#48566A"
  ink-subtle: "#71717A"
  ink-disabled: "#94A3B8"
  link: "#3396FF"
  status-success: "#1BA74E"
  status-warning: "#D28004"
  status-danger: "#D52020"
  status-progress: "#0B7ED0"
  status-neutral: "#8996A9"
  tag-success-bg: "#DBF5F3"
  tag-success-ink: "#0D786B"
  tag-warning-bg: "#FEF4D7"
  tag-warning-ink: "#B2530A"
  tag-danger-bg: "#FFF0F0"
  tag-danger-ink: "#DC2828"
  dark-canvas: "#09090B"
  dark-hairline: "#27272A"
  dark-ink: "#FFFFFF"
  dark-ink-muted: "#A0A1AB"

typography:
  xl-500:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -0.035em
  h1-500:
    fontFamily: Sora
    fontSize: 26px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.01em
  h2-500:
    fontFamily: Sora
    fontSize: 22px
    fontWeight: 500
    lineHeight: 32px
    letterSpacing: -0.01em
  h3-500:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: -0.01em
  h4-500:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
    letterSpacing: -0.01em
  p-400:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
  p-500:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 22px
  p-600:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 22px
  s-400:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  s-600:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 20px
  xs-400:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 17px
  xxs-400:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: 400
    lineHeight: 13px
  label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 0.14em
    textTransform: uppercase

rounded:
  DEFAULT: 2px
  sm: 2px
  md: 2px
  lg: 2px
  xl: 2px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 48px

components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-foreground}"
    typography: "{typography.p-500}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 8px 16px
    shadow: hairline-lift
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: 1px solid {colors.hairline}
    typography: "{typography.p-500}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.ink-muted}"
    textColor: "{colors.action-foreground}"
    typography: "{typography.p-500}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 8px 16px
  button-tertiary:
    backgroundColor: "{colors.hairline-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.p-500}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 8px 16px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.p-500}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 8px 16px
  button-destructive:
    backgroundColor: "{colors.status-danger}"
    textColor: "{colors.action-foreground}"
    typography: "{typography.p-500}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 8px 16px
  button-sm:
    height: 30px
    padding: 0 12px
    typography: "{typography.xs-500}"
  button-xs:
    height: 24px
    padding: 0 8px
    typography: "{typography.xs-400}"
  text-input:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    border: 1px solid {colors.hairline}
    typography: "{typography.p-400}"
    rounded: "{rounded.DEFAULT}"
    height: 36px
    padding: 4px 12px
  text-input-focused:
    ring: 2px {colors.ink} offset 2px
  field-label:
    textColor: "{colors.ink-muted}"
    typography: "{typography.s-500}"
  card:
    backgroundColor: "{colors.canvas}"
    border: 1px solid {colors.hairline}
    rounded: "{rounded.DEFAULT}"
    padding: 24px
    shadow: hairline-lift
  panel:
    backgroundColor: "{colors.surface-1}"
    border: 1px solid {colors.hairline}
    rounded: "{rounded.DEFAULT}"
    padding: 12px
  sidebar:
    backgroundColor: "{colors.canvas}"
    borderRight: 1px solid {colors.hairline-strong}
    textColor: "{colors.ink-muted}"
    typography: "{typography.s-400}"
  sidebar-item-active:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.s-500}"
  table-header-cell:
    height: 48px
    padding: 0 16px
    textColor: "{colors.ink-subtle}"
    typography: "{typography.p-500}"
    borderBottom: 1px solid {colors.hairline}
  table-cell:
    padding: 16px
    typography: "{typography.p-400}"
  table-row-hover:
    backgroundColor: "{colors.hover}"
  tag-success:
    backgroundColor: "{colors.tag-success-bg}"
    textColor: "{colors.tag-success-ink}"
    typography: "{typography.xs-600}"
    rounded: "{rounded.DEFAULT}"
    padding: 2px 10px
  tag-warning:
    backgroundColor: "{colors.tag-warning-bg}"
    textColor: "{colors.tag-warning-ink}"
    typography: "{typography.xs-600}"
    rounded: "{rounded.DEFAULT}"
    padding: 2px 10px
  tag-danger:
    backgroundColor: "{colors.tag-danger-bg}"
    textColor: "{colors.tag-danger-ink}"
    typography: "{typography.xs-600}"
    rounded: "{rounded.DEFAULT}"
    padding: 2px 10px
  section-eyebrow:
    textColor: "{colors.ink-subtle}"
    typography: "{typography.label}"
---

## Overview

Plivo's product surface is a **white console**, not a marketing canvas. `{colors.canvas}` is pure white; above it sits a shallow three-step zinc ladder (`{colors.surface-1}` → `{colors.surface-3}`) for panels, table headers and inactive chrome. Hierarchy is drawn with **1px hairlines** (`{colors.hairline}` #E4E4E7), not with shadow and not with colour.

Text is near-black `{colors.ink}` (#0F1729) — a very slightly blue-shifted ink, never pure #000. Secondary text steps down through `{colors.ink-muted}` and `{colors.ink-subtle}`; disabled sits at `{colors.ink-disabled}`.

**Action colour is ink, not chroma.** The primary button is a near-black `{colors.action}` fill with white text — the same value as body ink. Chrome stays monochrome so that the only saturated things on screen are the ones that mean something: a status, a chart, a channel tag.

**Plivo indigo** `{colors.brand}` (#343EFE) is the brand accent. It is reserved for brand moments — a hero, a brand mark, a newly-themed surface — and is deliberately absent from ordinary console chrome. The older brand blue `{colors.primary-color}` (#0040E4) ships with a 1–8 ramp for logo and marketing lockups. Inline links inside body copy use `{colors.link}`.

Type is a three-family system: **Sora** for headings, **Inter** for everything else, **JetBrains Mono** for one specific thing — the uppercase wide-tracked micro-label that sits above a section or on an empty state.

The defining trait is **density and squareness**. Radius is a single global token at **2px** — `rounded-sm`, `rounded-md`, `rounded-lg` and `rounded-xl` all resolve to the same 2px. The only exception is `rounded-full` for avatars and dots. Controls are 14px/22px type with 6px vertical padding; tables run 13px. This is a tool for someone with fifty rows on screen.

**Key characteristics:**
- **Light-first console.** White canvas, zinc surface ladder, hairline borders. A dark theme exists and is a straight inversion — it is not a separate design language.
- **Monochrome chrome.** Buttons, nav and controls are ink and grey. Saturation is reserved for status, charts and channel tags.
- **Indigo is a brand accent, not a UI accent.** #343EFE marks brand surfaces; it does not paint buttons.
- **Everything is 2px.** One radius token drives the whole system. Don't reach for 8px or 12px corners.
- **Borders first, then a hairline lift.** Raised elements (button, card) carry a 1px-scale shadow that reads as a crease, not depth. Real shadow belongs to floating layers only.
- **Semantic colour is a tint pair.** A status never paints a whole surface: it's a pale background plus a dark ink of the same hue, at tag size.
- **Mono is a label, not a code style.** JetBrains Mono appears as the 11px uppercase eyebrow far more often than as code.
- **Dense by default.** 14px body, 22px line, 6–12px control padding.

## Colors

All colours ship as CSS custom properties in `dist/colors.css` and as Tailwind colour utilities via `dist/tailwind.cjs`. The shadcn-shaped tokens (`--background`, `--foreground`, `--border`, `--primary`, …) are stored as **HSL channel triplets** so they compose with `hsl(var(--x) / <alpha>)`.

### Action & Brand
- **Action** ({colors.action}): The primary button fill and the focus ring. Near-black — the same value as `{colors.ink}`. Exposed as the shadcn `--primary` token.
- **Action Foreground** ({colors.action-foreground}): White — text on an action fill.
- **Plivo Indigo** ({colors.brand}): The brand accent (#343EFE). Brand surfaces and brand marks. Not a control colour.
- **Plivo Blue** ({colors.primary-color}): Legacy/marketing brand blue (#0040E4) with a 1–8 ramp, for logo lockups and marketing.
- **Link** ({colors.link}): #3396FF for inline links inside body copy.

### Surface
- **Canvas** ({colors.canvas}): Page and card background. Pure white.
- **Surface 1 / 2 / 3** ({colors.surface-1} → {colors.surface-3}): Panels, table headers, inactive tabs, code blocks. The steps are deliberately close — this ladder separates regions, it does not create depth.
- **Hover** ({colors.hover}): Row and menu-item hover fill.
- **Hairline** ({colors.hairline}): The default 1px border. Cards, inputs, dividers, table rules.
- **Hairline Strong** ({colors.hairline-strong}): Sidebar edge, and any border that must read against a filled surface.

### Text
- **Ink** ({colors.ink}): Headings and primary body.
- **Ink Muted** ({colors.ink-muted}): Field labels, secondary body, sidebar items.
- **Ink Subtle** ({colors.ink-subtle}): Table headers, helper text, eyebrows, timestamps.
- **Ink Disabled** ({colors.ink-disabled}): Disabled controls, placeholder text.

### Semantic
Each state ships as a solid *status* colour for dots, icons and bars, and as a *tag* pair for filled pills.

- **Success** ({colors.status-success}) / tag pair {colors.tag-success-bg} + {colors.tag-success-ink}.
- **Warning** ({colors.status-warning}) / tag pair {colors.tag-warning-bg} + {colors.tag-warning-ink}.
- **Danger** ({colors.status-danger}) / tag pair {colors.tag-danger-bg} + {colors.tag-danger-ink}. Also the destructive button fill.
- **Progress** ({colors.status-progress}): In-flight, running, syncing.
- **Neutral** ({colors.status-neutral}): Unknown, idle, not-applicable.

### Channel & data colours
The palette also ships channel tints (voice, messaging, chat, WhatsApp) as pale-bg + dark-ink pairs, and an 11-step `--chart-*` ramp with named roles (`--chart-positive`, `--chart-negative`, `--chart-neutral`, …) plus a 5-step heat scale. Charts must pull from `--chart-*` by role, never pick a hex.

### Dark theme
`.dark` inverts to canvas `{colors.dark-canvas}` (#09090B) with hairlines at `{colors.dark-hairline}` (#27272A), white ink and `{colors.dark-ink-muted}` secondary. Brand indigo is unchanged across themes. Only ~half the light tokens are overridden; everything else inherits deliberately.

## Typography

### Families
- **Sora** (`--font-display`) — h1 through h4 and the 32px hero. Geometric, slightly wide.
- **Inter** (`--font-sans`) — all body, controls, tables, forms. The workhorse.
- **JetBrains Mono** (`--font-mono`) — the `label` style and actual code/IDs.

Families are referenced by **role**, never by name: `var(--font-display, var(--font-sans, system-ui, sans-serif))`. A consumer that doesn't load Sora degrades to Inter, then to the system stack, with no layout break.

### Scale
Named `<size>-<weight>`. The name *is* the token: `p-400` is 14px/22px at weight 400.

| Token | Size / Line | Weight | Use |
|---|---|---|---|
| `xl-500` | 32px / 1.04 | 500 | Page hero. One per screen at most. |
| `h1-500` | 26px / 32px | 500 | Page title. |
| `h2-500` | 22px / 32px | 500 | Section title. |
| `h3-500` | 18px / 26px | 500 | Card/panel title. |
| `h4-500` | 16px / 24px | 500 | Sub-section, dialog title. |
| `p-400` / `p-500` / `p-600` | 14px / 22px | 400 / 500 / 600 | Body, control text, emphasis. |
| `s-400` / `s-500` / `s-600` | 13px / 20px | 400 / 500 / 600 | Tables, sidebars, dense lists. |
| `xs-400` / `xs-500` / `xs-600` | 12px / 17px | 400 / 500 / 600 | Helper text, tags, metadata. |
| `xxs-400` / `xxs-600` | 10px / 13px | 400 / 600 | Badges, chart axis labels. |
| `pi-400` / `xsi-400` | 14px / 12px | 400 italic | Quoted or system-generated text. |
| `label` | 11px / 14px | 500, +0.14em, uppercase | The mono eyebrow above a section. |

Headings carry **-0.01em** tracking (the hero, -0.035em). Body carries none. `label` is the only positive-tracked style, and it must always be uppercase — the tracking exists for caps.

### Principles
- Weight, not size, carries emphasis inside a block. `p-400` → `p-600` before `p-400` → `h4-500`.
- Never invent a size between steps. If 15px feels right, the layout is wrong.
- One `h1-500` per page; don't skip levels downward.
- The 500 weights are the defaults; 600 is for genuine emphasis, 400 for long-form reading.

## Layout

### Spacing
The token package does **not** ship a spacing scale — consumers stay on Tailwind's default 4px-based scale. In practice Plivo product surfaces use:

- `2px` — icon-to-label inside a tag.
- `4px` — label-to-field, tag-to-tag.
- `8px` — between controls in a row, list-item padding.
- `12px` — panel padding, form row gap.
- `16px` — card padding, group gap.
- `24px` — between cards.
- `32–48px` — between page sections.

### Density
Buttons and inputs are **36px** tall (30px compact, 24px inline). Table rows land near 50px from 16px cell padding; a compact table drops cell padding to 8px. A full-width content column is capped around 1280px; forms cap around 640px and stay left-aligned, not centred.

### Structure
A screen is: left sidebar (fixed, hairline-strong right edge) → page header (title + primary action, right-aligned) → content. Filters sit in a hairline-bordered bar directly above tables, never in a floating card.

## Elevation & depth

Two levels, and they are far apart.

**Hairline lift** — buttons and default cards carry Tailwind's `shadow` / `shadow-sm`. At 2px corners this reads as a crease under the edge, not as height. Inputs get none (`shadow-none`).

**Floating** — only for layers that leave the page:
- `--shadow-1`: `0px 1px 15px rgba(148,163,184,0.35)` — dropdowns, popovers, command palette.
- `--shadow-2`: `0px 4px 4px rgba(148,163,184,0.25)` — toasts, drag previews.
- `--box-shadow-default`: `0px 0px 8px rgba(106,110,128,0.15)` — ambient lift on a raised card.

Panels, table containers and inline regions use a hairline and nothing more. To separate two regions, change the surface step or draw a border — don't reach for a third shadow level.

## Shapes

### Radius
One token: `--radius: 2px`. Every Tailwind radius utility maps to it, so `rounded-lg` and `rounded-sm` are visually identical by design — a consumer can theme the entire corner language by overriding one variable. `rounded-full` (9999px) survives for avatars, status dots and the occasional pill counter.

This is the single most identifiable trait of the system. A 12px-rounded card does not look like Plivo.

### Iconography
16px line icons at 1.5px stroke, inheriting `currentColor`. Icons sit at `{colors.ink-subtle}` in chrome and inherit ink in content.

## Components

### Buttons
Default height is **36px**, 16px horizontal padding, 14px/500 type, 2px corners, hairline lift.

| Variant | Fill | Text |
|---|---|---|
| primary | `{colors.action}` | white |
| outline | white + hairline border | ink |
| secondary | `{colors.ink-muted}` | white |
| tertiary | `{colors.hairline-strong}` | ink |
| ghost | transparent, fills on hover | ink |
| destructive | `{colors.status-danger}` | white |
| link | none | `{colors.action}`, underline on hover |

Sizes: `xs` 24px, `sm` 30px with 12px type, default 36px, `lg` 40px, `xl` 48px. Icon-only buttons are square at the same heights. Hover darkens or lightens the fill by ~10–20% (`/90`, `/80`) rather than swapping colour. Disabled is 50% opacity with pointer events off. Focus is a 2px ring with a 2px offset.

One primary button per view. A row of actions is one primary and N outlines.

### Inputs & forms
Label above field, `s-500` at `{colors.ink-muted}`, 4px gap. Field is **36px tall**, transparent background, 1px `{colors.hairline}` border, 14px text, 12px horizontal padding, 2px corners, no shadow. Placeholder sits at `{colors.ink-subtle}`. Focus is the same 2px offset ring as buttons — no glow, no border colour change. Error swaps border and helper text to `{colors.status-danger}`. Helper text is `xs-400` at `{colors.ink-subtle}` and reserves its line so the layout doesn't jump. A ghost variant drops border and radius entirely for inputs embedded in a toolbar or cell.

Validation is shown after interaction, not on first render of an empty form.

### Cards & panels
Card: white, hairline border, 2px radius, **24px padding**, hairline lift, optional `h3-500` title in a header block with 6px title-to-description gap. An `outline` variant drops the shadow. Panel: `{colors.surface-1}` fill for a secondary region such as a config sidebar or a summary rail. Cards don't nest more than one level; a nested region drops to a surface fill without its own border.

### Tables
Header cells are **48px tall**, 16px padding, 14px/500 at `{colors.ink-subtle}`, with a hairline rule beneath. Body cells are 16px padded at 14px/400, one hairline rule per row, `{colors.surface-2}` on hover and on selection. Footer rows sit on a 50%-alpha muted fill. Numeric columns right-align. Status renders as a tag, not as coloured row text.

### Tags & status
Pale background + dark ink of the same hue, `xs-600` (12px/600), 2px vertical and 10px horizontal padding, 2px radius, transparent border. The neutral default is `{colors.surface-3}` with ink text. A bare status dot (8px `rounded-full` in the solid status colour) is preferred where the label is already in the row.

### Navigation
Sidebar is white with a `{colors.hairline-strong}` right edge, items at `s-400` `{colors.ink-muted}`, active item on `{colors.surface-2}` at `s-500` `{colors.ink}`. Active is a surface change, never a coloured fill.

### Empty & loading states
Empty state: a `label` eyebrow, an `h4-500` line, an `xs-400` explanation at `{colors.ink-subtle}`, one primary action. Loading: skeleton blocks in `{colors.surface-2}`, matching the final layout's dimensions. No spinners for page loads.

## Do's and Don'ts

### Do
- Reference tokens (`hsl(var(--border))`, `text-p-400`, `bg-bg1`) instead of literal colour or size values.
- Keep radius at the `--radius` token so a consumer can re-theme corners in one line.
- Use weight, surface steps and the ink ramp to build hierarchy before reaching for colour.
- Give every status both a colour and a word — colour is never the only signal.
- Let `--font-display` / `--font-sans` / `--font-mono` fall back; never hard-code `Sora` in a component.

### Don't
- Don't reach for indigo (or any hue) to make a control look important — the primary fill is ink.
- Don't use 8px or 12px corners. The system is 2px.
- Don't add shadow to an input, a panel or a table container, and don't stack shadow levels.
- Don't paint a whole surface with a semantic colour — semantics live in tags, dots and 1px bars.
- Don't invent type sizes between steps, and don't set body above 14px.
- Don't use the mono `label` style in sentence case; it exists for uppercase.
- Don't pick chart hexes by hand — use the `--chart-*` roles.

## Responsive behaviour

- Breakpoints follow Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
- The console is desktop-first — below `lg` the sidebar collapses to icons, then to a sheet below `md`.
- Touch targets go to 40px minimum below `md`; padding grows, type does not.
- Tables become stacked key/value cards below `md` rather than scrolling horizontally.
- Type is fixed-size; only the hero (`xl-500`) steps down to `h1-500` on small screens.

## Using these tokens

Not on npm yet — install from git:

```bash
npm i github:samuellawerentz/plivo-tokens   # or a #<tag> / #<sha> to pin
```

```css
@import '@plivo/tokens/colors.css';
@import '@plivo/tokens/type.css';
```

```js
// tailwind.config.js
module.exports = { presets: [require('@plivo/tokens/tailwind')] }
```

That yields the class names this document uses: `text-p-400`, `text-s-600`, `text-label`, `bg-bg1`, `border-border`, `text-brand`. Load Inter, Sora and JetBrains Mono yourself; without them the role variables fall back cleanly.

## Known gaps

- **No spacing scale ships.** The values above are observed practice, not enforced tokens.
- **Three HSL spellings coexist** (`240 6% 95%`, `240deg 6% 95%`, `189, 85%, 92%, 1`). The comma form doesn't compose with Tailwind's `/alpha` syntax; a normalisation pass is pending.
- **Product-specific colours are still in the palette** — channel tints and agent-status colours that a general consumer won't need.
- **Component values here are read from the React implementation**, not from tokens. Heights, padding and shadows can drift; colours, type and radius cannot, because they come from `dist/`.
- **Motion is undefined.** No duration or easing tokens; components currently use Tailwind defaults (150ms ease-out for hovers, 200ms for overlays).
- **Dark theme is partial** — roughly half the light tokens are overridden, and the older non-shadcn palette (`--gray-*`, `--primary-color-*`) has no dark variant.
