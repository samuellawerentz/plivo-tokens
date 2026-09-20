import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'

const type = JSON.parse(readFileSync(new URL('src/type.json', import.meta.url), 'utf8'))
const css = readFileSync(new URL('dist/type.css', import.meta.url), 'utf8')
const preset = (await import(new URL('dist/tailwind.cjs', import.meta.url))).default

test('every token reaches both outputs under the same name', () => {
  for (const name of Object.keys(type)) {
    assert.ok(css.includes(`.text-${name} {`), `missing .text-${name} in type.css`)
    assert.ok(preset.theme.extend.fontSize[name], `missing ${name} in the tailwind preset`)
  }
  assert.equal(Object.keys(preset.theme.extend.fontSize).length, Object.keys(type).length)
})

test('the CSS build carries what a Tailwind fontSize tuple cannot', () => {
  // `label` is the reason type.json exists rather than a raw Tailwind config.
  const label = css.slice(css.indexOf('.text-label {'))
  assert.match(label, /font-family: 'JetBrains Mono'/)
  assert.match(label, /text-transform: uppercase/)
  assert.equal(preset.theme.extend.fontSize.label[1].fontFamily, undefined)
})

test('radius collapses to a single token', () => {
  const radii = Object.entries(preset.theme.extend.borderRadius).filter(([k]) => k !== 'none' && k !== 'full')
  assert.ok(radii.every(([, v]) => v === 'var(--radius)'), 'every named radius should be var(--radius)')
})
