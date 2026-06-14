/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens (values defined as CSS variables in src/index.css)
        canvas: 'rgb(var(--c-canvas) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        faint: 'rgb(var(--c-faint) / <alpha-value>)',
        line: 'var(--color-line)',
        // Brand accents — fixed across themes
        accent: {
          violet: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(139,92,246,0.25), 0 20px 60px -20px rgba(59,130,246,0.45)',
      },
    },
  },
  plugins: [],
}
