/** @type {import('tailwindcss').Config} */
//
// 2026-05-05 — Enfield design tokens from the Claude Design handoff.
// Medical-trust blue on a clean white surface, soft 12px rounded
// cards, single accent (Inter only — no serif italics).
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg:        '#ffffff',  // primary page background — white
        cream:     '#ffffff',  // legacy alias kept so any consumer not migrated still works
        paper:     '#ffffff',  // ditto
        soft:      '#f4f9fc',  // section background — pale blue
        line:      '#e3e8ef',  // primary divider
        ink:       '#1a2233',  // body / heading text — deep navy ink

        // Text scale
        'ink-text':  '#3a4456',  // secondary body text
        'ink-mute':  '#6b7488',  // tertiary / labels

        // Brand blue (medical-trust primary)
        brand: {
          50:  '#f4f9fc',
          100: '#e8f3fb',
          200: '#cfe4f4',
          300: '#a7cbe5',
          400: '#5fa3cf',
          500: '#0a6cb8',  // primary blue — buttons, headlines, links
          600: '#08507f',  // darker — utility bar, hover
          700: '#063e62',
          800: '#04304b',
          900: '#1a2233',  // collapses to ink
        },

        // Status colours from the design tokens. `success` for the
        // live-now dot, `warning` for the YMYL alert strip, `danger`
        // for the medical-emergency callout text.
        success: { 500: '#2e9c6b' },
        warning: { 500: '#f5b400', 600: '#c88f00' },
        danger:  { 500: '#d93b3b', 600: '#b22e2e', 700: '#8a2424' },

        // Legacy alias kept so anything still referencing urgent.*
        // renders coherently. Maps to danger.
        urgent: {
          50:  '#fff0f0',
          500: '#d93b3b',
          600: '#b22e2e',
          700: '#8a2424',
        },
      },
      fontFamily: {
        // Inter only on Enfield. The display token aliases sans so any
        // legacy `font-display` usage falls through to Inter cleanly.
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'card':  '12px',
        'btn':   '10px',
        'pill':  '999px',
      },
      boxShadow: {
        // Subtle blue-tinted shadow on primary CTAs. Used everywhere a
        // button or card needs to lift slightly off the page.
        'btn-blue':  '0 4px 12px rgba(10,108,184,0.25)',
        'card-soft': '0 2px 8px rgba(15,28,53,0.06)',
      },
    },
  },
  plugins: [],
};
