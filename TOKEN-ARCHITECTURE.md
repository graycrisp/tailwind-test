# Token Architecture — Design Decisions

A walkthrough of how the token system is structured, why it's built this way, and what changed from the previous setup. Intended for anyone merging these files into the codebase.

---

## The Problem We Were Solving

The original `tokens.js` only had one layer — semantic names like `primary`, `neutral`, `danger`. That works fine in code, but the Figma file uses hue-based names like `blue`, `gray`, `rose`. There was no documented link between them, so designers and developers were speaking two different languages with no bridge.

Every time a designer said "use `blue/500`", someone had to mentally translate that to `primary-500`. That knowledge lived in people's heads, not in the codebase.

---

## What We Built: A Two-Tier Token System

This is the pattern used by mature design systems like GitHub Primer, Twilio Paste, Radix, and IBM Carbon. It separates *what a colour is* from *what it's for*.

```
Figma "blue/500"
      ↓
primitives.js  →  colors.blue[500]      (what it is — raw palette)
      ↓
tokens.js      →  colors.primary[500]   (what it's for — semantic intent)
      ↓
input.css      →  --color-primary-500   (what the browser uses)
```

The chain is now explicit at every level. No more guessing.

---

## File Breakdown

### `src/primitives.js` — New file

This is the raw colour palette. It mirrors Figma's colour variables exactly — same names, same grouping, same scale steps.

| Primitive name | Figma group | Hex range |
|---|---|---|
| `blue` | blue | #f0f4ff → #181a55 |
| `purple` | purple | #fdf3ff → #440052 |
| `gray` | gray | #ffffff → #0d0f10 |
| `green` | green | #ecfdf5 → #064e3b |
| `amber` | amber | #fffbeb → #78350f |
| `rose` | rose | #fff1f2 → #881337 |
| `sky` | sky | #eff6ff → #1e3a8e |

**Why a separate file and not just comments?**
Because comments drift. When a designer renames a colour group in Figma, there's now one concrete file to update — and the semantic layer automatically inherits the change. It also makes the primitives importable in scripts, Storybook, style dictionary pipelines, or automated Figma sync tools down the road.

**Why are `blue` (primary) and `sky` (info) separate?**
They look similar but they're different colour families. `blue` is the custom brand blue (`#5567fa` at 500 — a blue-purple). `sky` is a standard informational blue (`#3b82f6` at 500 — Tailwind's blue). Conflating them would mean info states look like brand interactions, which creates confusion for users.

---

### `src/tokens.js` — Refactored

The semantic layer. Previously this had hardcoded hex values. Now it imports from `primitives.js` and assigns intent.

```js
primary:   c.blue,    // Figma: blue
secondary: c.purple,  // Figma: purple
neutral:   c.gray,    // Figma: gray
danger:    c.rose,    // Figma: rose
```

**Why keep the semantic names at all — why not just use `blue` and `gray` in code?**
Semantic names are what makes a design system maintainable long-term. If the brand ever shifts from blue to teal, you update one line in `primitives.js` and everything that references `primary` follows automatically. If you hardcode `blue` in components, you have a find-and-replace job across every file. The semantic layer also communicates *intent* — `danger` tells a developer something meaningful that `rose` does not.

---

### `src/tokens.map.js` — New file

A reference and utility file. Exports three lookup objects:

- `groupMap` — high-level summary of which Figma group maps to which token group, with a description of the intent
- `figmaToCSS` — exact lookup: `'blue/500'` → `'--color-primary-500'`
- `figmaToToken` — exact lookup: `'blue/500'` → `'colors.primary[500]'`
- `cssToFigma` — reverse lookup: `'--color-danger-700'` → `'rose/700'`

**Why does this need to exist?**
Three practical reasons:

1. **Handoff clarity.** Anyone new to the project — designer, developer, or contractor — can open this one file and immediately understand how the entire colour system connects.

2. **Automation-ready.** If you ever set up a Figma variable sync script, a Style Dictionary pipeline, or a custom lint rule (e.g. "don't use raw hex values — use tokens"), this map is the data source you'd feed it.

3. **Debugging.** When something looks wrong in the UI, you can reverse-lookup a CSS variable back to its Figma source in seconds.

---

### `src/input.css` — Minor annotation update

No values changed. Each colour group header now shows its Figma source:

```css
/* ── Colors — Danger ── Figma: rose ──── */
--color-danger-500: #f43f5e;
```

This means a developer reading the CSS can immediately trace any token back to Figma without opening another file.

---

## What Did Not Change

- All CSS custom property names (`--color-primary-500`, etc.) are identical — zero breaking changes
- All component classes in `input.css` work exactly as before
- The `tokens.js` export shape is unchanged — any existing import of `tokens.colors.primary` still works

---

## How to Merge

1. Add `src/primitives.js` to the repo
2. Replace `src/tokens.js` with the new version (same export, just imports from primitives now)
3. Add `src/tokens.map.js` to the repo
4. Apply the comment-only changes to `src/input.css` (or skip if your team prefers less noise in CSS)

There are no dependency changes and no runtime behaviour changes. The only difference is where the colour values live and how the relationship between Figma and code is documented.

---

## Recommended Next Steps

Once this is merged, a few things become much easier to do properly:

**Figma variable sync** — With primitives matching Figma's naming exactly, you can set up automated exports (via the Figma Variables API or a plugin like Token Studio) that write directly to `primitives.js`. The semantic layer never needs to change.

**Dark mode** — The semantic layer is already the right structure for theming. A dark mode would just repoint the semantic tokens to different primitives (`neutral` → `gray-dark`, etc.) without touching any component code.

**Lint rule** — A simple ESLint or Stylelint rule can flag any hardcoded hex value in components and suggest the correct token. `tokens.map.js` gives you the data to build that.
