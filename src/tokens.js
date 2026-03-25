/**
 * Design Tokens — Semantic layer (single source of truth)
 *
 * This file maps raw primitive colours to their intended purpose.
 * It is the bridge between what Figma calls a colour and what the code uses.
 *
 * Primitive colours live in primitives.js — they match Figma variable names exactly.
 * Semantic tokens here give those primitives meaning (primary, neutral, danger, etc.)
 *
 * Quick reference:
 *   Figma "blue"   →  tokens.colors.primary   →  --color-primary-*
 *   Figma "purple" →  tokens.colors.secondary  →  --color-secondary-*
 *   Figma "gray"   →  tokens.colors.neutral    →  --color-neutral-*
 *   Figma "green"  →  tokens.colors.success    →  --color-success-*
 *   Figma "amber"  →  tokens.colors.warning    →  --color-warning-*
 *   Figma "rose"   →  tokens.colors.danger     →  --color-danger-*
 *   Figma "sky"    →  tokens.colors.info       →  --color-info-*
 *
 * Full mapping detail: see tokens.map.js
 */

const { colors: c } = require('./primitives');

const tokens = {
  colors: {
    primary:   c.blue,    // Figma: blue   — brand/interactive colour
    secondary: c.purple,  // Figma: purple — accent/supporting colour
    neutral:   c.gray,    // Figma: gray   — text, borders, backgrounds
    success:   c.green,   // Figma: green  — positive feedback states
    warning:   c.amber,   // Figma: amber  — caution/alert states
    danger:    c.rose,    // Figma: rose   — error/destructive states
    info:      c.sky,     // Figma: sky    — informational states (note: lighter than brand blue)
  },

  fontFamily: {
    sans:    'Inter, ui-sans-serif, system-ui, sans-serif',
    mono:    'JetBrains Mono, Fira Code, ui-monospace, monospace',
    display: 'Cal Sans, Plus Jakarta Sans, Inter, sans-serif',
  },

  fontSize: {
    '2xs': '0.625rem', xs: '0.75rem', sm: '0.875rem', base: '1rem',
    lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem',
    '4xl': '2.25rem', '5xl': '3rem', '6xl': '3.75rem', '7xl': '4.5rem',
  },

  spacing: {
    px: '1px', 0: '0', 1: '4px', 2: '8px', 3: '12px', 4: '16px',
    5: '20px', 6: '24px', 8: '32px', 10: '40px', 12: '48px',
    16: '64px', 20: '80px', 24: '96px', 32: '128px',
  },

  borderRadius: {
    none: '0', xs: '2px', sm: '4px', DEFAULT: '6px', md: '8px',
    lg: '12px', xl: '16px', '2xl': '20px', '3xl': '24px', full: '9999px',
  },

  breakpoints: {
    sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
  },
};

module.exports = tokens;
