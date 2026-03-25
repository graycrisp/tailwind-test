/**
 * Primitive Tokens — Raw colour palette
 *
 * These are the base hue scales. They mirror your Figma colour variables 1:1.
 * Names here match Figma exactly (blue, purple, gray, green, amber, rose, sky).
 *
 * IMPORTANT: Do not use these directly in components or CSS.
 * Always go through the semantic layer in tokens.js instead.
 * The semantic tokens (primary, neutral, danger, etc.) reference these values.
 *
 * How this connects to Figma:
 *   Figma "blue/500"   →  primitives.colors.blue[500]   →  tokens.colors.primary[500]   →  --color-primary-500
 *   Figma "gray/300"   →  primitives.colors.gray[300]   →  tokens.colors.neutral[300]   →  --color-neutral-300
 *   Figma "rose/500"   →  primitives.colors.rose[500]   →  tokens.colors.danger[500]    →  --color-danger-500
 */

const primitives = {
  colors: {

    // ── Figma: blue (brand blue — used for primary) ──────────────────────────
    blue: {
      50:  '#f0f4ff',
      100: '#e0eaff',
      200: '#c7d8ff',
      300: '#a4bbff',
      400: '#7a94ff',
      500: '#5567fa',
      600: '#4148f0',
      700: '#3535dc',
      800: '#2c2db2',
      900: '#282b8d',
      950: '#181a55',
    },

    // ── Figma: purple (used for secondary) ──────────────────────────────────
    purple: {
      50:  '#fdf3ff',
      100: '#fae6ff',
      200: '#f4ccff',
      300: '#eca4ff',
      400: '#df6bfe',
      500: '#cc40f5',
      600: '#b022d9',
      700: '#931ab5',
      800: '#7a1993',
      900: '#651a77',
      950: '#440052',
    },

    // ── Figma: gray (used for neutral) ──────────────────────────────────────
    gray: {
      0:   '#ffffff',
      50:  '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
      950: '#0d0f10',
    },

    // ── Figma: green (used for success) ─────────────────────────────────────
    green: {
      50:  '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },

    // ── Figma: amber (used for warning) ─────────────────────────────────────
    amber: {
      50:  '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },

    // ── Figma: rose (used for danger) ───────────────────────────────────────
    rose: {
      50:  '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
    },

    // ── Figma: sky (used for info — distinct from brand blue) ───────────────
    sky: {
      50:  '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8e',
    },

  },
};

module.exports = primitives;
