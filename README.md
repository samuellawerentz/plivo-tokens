# @plivo/tokens

Plivo's design tokens — colours, type ramp, radius and font stacks — in the three
shapes consumers actually need. No React, no components, no framework.

| Consumer | Use |
|---|---|
| Tailwind projects | the preset |
| Non-Tailwind projects (Vue, Astro, plain pages, email) | `type.css` + `colors.css` |
| Figma plugins, generators, docs | `type.json` |

Same class names in every shape, so markup copied between projects keeps working.

## Use

**Tailwind:**

```js
// tailwind.config.cjs
module.exports = {
  presets: [require('@plivo/tokens/tailwind')],
  content: ['./src/**/*.{ts,tsx}'],
}
```

```html
<p class="text-p-400 text-foreground rounded-lg">…</p>
```

**Without Tailwind:**

```css
@import '@plivo/tokens/colors.css';  /* the custom properties */
@import '@plivo/tokens/type.css';    /* .text-p-400, .text-s-600, … */
```

`colors.css` is required either way — the preset maps Tailwind colours onto
`hsl(var(--token))`, so without the custom properties every colour resolves to
nothing. It ships `:root` and `.dark`.

## The type ramp

`<role>-<weight>`: `p-400` is 14px/22px at weight 400, `s-600` is 13px/20px at 600.
Roles are `h1`–`h4`, `p`, `s`, `xs`, `xxs`, `xl`, plus `pi`/`xsi` (italic) and
`label`. 25 tokens.

`label` is why `type.json` exists rather than a raw Tailwind config. It is 11px
mono uppercase with `0.14em` tracking — and a Tailwind `fontSize` tuple cannot
carry `font-family` or `text-transform`, so upstream every call site has to write
`text-label font-jetbrains uppercase` by hand. The CSS build carries all three:

```css
/* dist/type.css — complete */        /* Tailwind's .text-label — partial */
.text-label {                          .text-label {
  font-size: 11px;                       font-size: 11px;
  line-height: 14px;                     line-height: 14px;
  font-weight: 500;                      letter-spacing: 0.14em;
  letter-spacing: 0.14em;                font-weight: 500
  font-family: 'JetBrains Mono', …;    }
  text-transform: uppercase;
}
```

Every named `borderRadius` step maps to `var(--radius)` on purpose — one corner
everywhere. Only `rounded-full` stays round.

## Provenance

v1 is extracted, not authored: the source of truth is still Plivo's internal
console, which is mid-way through adopting the plivo.com theme kit.

```sh
node scripts/extract.mjs <console-repo> <git-ref>   # Plivo engineers only
node build.mjs
node --test
```

The repo path and ref are arguments and are never committed — generated files
record only the extraction date.

`extract.mjs` `require()`s the upstream Tailwind config and reads its theme
object rather than parsing it, so it survives edits upstream. Re-run it when the
branch moves and diff `src/`.

Direction of truth reverses once the console consumes this package instead —
until then, do not hand-edit `src/`.

## Known gaps for v1

- `src/colors.css` is a faithful copy: 210 light vars and 104 dark. Some are
  product-specific rather than brand (channel and agent colours). Pruning needs
  the design owner, not a guess.
- One product-only colour group is excluded from the Tailwind mapping;
  `sidebar.*`, `bubble.*`, `call.*` still ship.
- Upstream still has three HSL spellings (`0deg 0% 100%`, `240 5.9% 90%`,
  `189, 85%, 92%, 1`). The comma form carries a baked-in alpha, so Tailwind's
  `bg-x/50` opacity syntax breaks on those. Normalising is the next change.
- The Tailwind preset is verified by hand, not in CI:

  ```sh
  bunx tailwindcss -c tailwind.config.cjs -i in.css -o out.css
  ```

## License

MIT
