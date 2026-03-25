/**
 * Token Map — Figma Variables → CSS Custom Properties
 *
 * This file is the handoff reference between design and engineering.
 * When a designer says "use blue/500" in Figma, this tells you exactly
 * which CSS token to reach for in code.
 *
 * Structure:
 *   Figma variable name  →  JS token path  →  CSS custom property
 *
 * Usage:
 *   import { figmaToCSS, figmaToToken } from './tokens.map'
 *   figmaToCSS['blue/500']   // → '--color-primary-500'
 *   figmaToToken['blue/500'] // → 'colors.primary[500]'
 */


// ── High-level group mapping ─────────────────────────────────────────────────

const groupMap = [
  // figmaGroup   tokenGroup     cssPrefix               intent
  { figma: 'blue',   token: 'primary',   css: '--color-primary-*',   intent: 'Brand/interactive colour — buttons, links, focus rings' },
  { figma: 'purple', token: 'secondary', css: '--color-secondary-*', intent: 'Accent/supporting colour — secondary actions, tags' },
  { figma: 'gray',   token: 'neutral',   css: '--color-neutral-*',   intent: 'Structure — text, borders, surfaces, backgrounds' },
  { figma: 'green',  token: 'success',   css: '--color-success-*',   intent: 'Positive feedback — success states, confirmations' },
  { figma: 'amber',  token: 'warning',   css: '--color-warning-*',   intent: 'Caution — warnings, alerts, pending states' },
  { figma: 'rose',   token: 'danger',    css: '--color-danger-*',    intent: 'Error/destructive — errors, deletes, critical actions' },
  { figma: 'sky',    token: 'info',      css: '--color-info-*',      intent: 'Informational — tooltips, info banners, helper text' },
];


// ── Full variable lookup: Figma name → CSS custom property ───────────────────

const figmaToCSS = {

  // Figma: blue → --color-primary-*
  'blue/50':  '--color-primary-50',
  'blue/100': '--color-primary-100',
  'blue/200': '--color-primary-200',
  'blue/300': '--color-primary-300',
  'blue/400': '--color-primary-400',
  'blue/500': '--color-primary-500',
  'blue/600': '--color-primary-600',
  'blue/700': '--color-primary-700',
  'blue/800': '--color-primary-800',
  'blue/900': '--color-primary-900',
  'blue/950': '--color-primary-950',

  // Figma: purple → --color-secondary-*
  'purple/50':  '--color-secondary-50',
  'purple/100': '--color-secondary-100',
  'purple/200': '--color-secondary-200',
  'purple/300': '--color-secondary-300',
  'purple/400': '--color-secondary-400',
  'purple/500': '--color-secondary-500',
  'purple/600': '--color-secondary-600',
  'purple/700': '--color-secondary-700',
  'purple/800': '--color-secondary-800',
  'purple/900': '--color-secondary-900',
  'purple/950': '--color-secondary-950',

  // Figma: gray → --color-neutral-*
  'gray/0':   '--color-neutral-0',
  'gray/50':  '--color-neutral-50',
  'gray/100': '--color-neutral-100',
  'gray/200': '--color-neutral-200',
  'gray/300': '--color-neutral-300',
  'gray/400': '--color-neutral-400',
  'gray/500': '--color-neutral-500',
  'gray/600': '--color-neutral-600',
  'gray/700': '--color-neutral-700',
  'gray/800': '--color-neutral-800',
  'gray/900': '--color-neutral-900',
  'gray/950': '--color-neutral-950',

  // Figma: green → --color-success-*
  'green/50':  '--color-success-50',
  'green/100': '--color-success-100',
  'green/200': '--color-success-200',
  'green/300': '--color-success-300',
  'green/400': '--color-success-400',
  'green/500': '--color-success-500',
  'green/600': '--color-success-600',
  'green/700': '--color-success-700',
  'green/800': '--color-success-800',
  'green/900': '--color-success-900',

  // Figma: amber → --color-warning-*
  'amber/50':  '--color-warning-50',
  'amber/100': '--color-warning-100',
  'amber/200': '--color-warning-200',
  'amber/300': '--color-warning-300',
  'amber/400': '--color-warning-400',
  'amber/500': '--color-warning-500',
  'amber/600': '--color-warning-600',
  'amber/700': '--color-warning-700',
  'amber/800': '--color-warning-800',
  'amber/900': '--color-warning-900',

  // Figma: rose → --color-danger-*
  'rose/50':  '--color-danger-50',
  'rose/100': '--color-danger-100',
  'rose/200': '--color-danger-200',
  'rose/300': '--color-danger-300',
  'rose/400': '--color-danger-400',
  'rose/500': '--color-danger-500',
  'rose/600': '--color-danger-600',
  'rose/700': '--color-danger-700',
  'rose/800': '--color-danger-800',
  'rose/900': '--color-danger-900',

  // Figma: sky → --color-info-*
  'sky/50':  '--color-info-50',
  'sky/100': '--color-info-100',
  'sky/200': '--color-info-200',
  'sky/300': '--color-info-300',
  'sky/400': '--color-info-400',
  'sky/500': '--color-info-500',
  'sky/600': '--color-info-600',
  'sky/700': '--color-info-700',
  'sky/800': '--color-info-800',
  'sky/900': '--color-info-900',
};


// ── Full variable lookup: Figma name → JS token path ────────────────────────

const figmaToToken = Object.fromEntries(
  Object.entries(figmaToCSS).map(([figma, css]) => {
    // '--color-primary-500' → 'colors.primary[500]'
    const match = css.match(/--color-([a-z]+)-(\d+)/);
    if (!match) return [figma, css];
    return [figma, `colors.${match[1]}[${match[2]}]`];
  })
);


// ── Reverse lookup: CSS custom property → Figma variable name ───────────────

const cssToFigma = Object.fromEntries(
  Object.entries(figmaToCSS).map(([figma, css]) => [css, figma])
);


module.exports = { groupMap, figmaToCSS, figmaToToken, cssToFigma };
