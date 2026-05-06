/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C06A',
          dark: '#9A7B2E',
        },
        obsidian: '#090909',
        'off-white': '#F0EDE8',
        'warm-gray': '#1c1c1c',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Jost', 'system-ui', 'sans-serif'],
        mono:    ['DM Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Override Tailwind defaults to match our 17px base
        'xs':   ['0.76rem',  { lineHeight: '1.5' }],
        'sm':   ['0.88rem',  { lineHeight: '1.6' }],
        'base': ['1rem',     { lineHeight: '1.75' }],
        'lg':   ['1.1rem',   { lineHeight: '1.75' }],
        'xl':   ['1.25rem',  { lineHeight: '1.6' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.4' }],
        '3xl':  ['1.875rem', { lineHeight: '1.3' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.15' }],
        '5xl':  ['3rem',     { lineHeight: '1.05' }],
        '6xl':  ['3.75rem',  { lineHeight: '1' }],
        '7xl':  ['4.5rem',   { lineHeight: '1' }],
        '8xl':  ['6rem',     { lineHeight: '0.95' }],
        '9xl':  ['8rem',     { lineHeight: '0.92' }],
      },
      animation: {
        'fade-up':     'fadeUp 0.9s ease forwards',
        'fade-in':     'fadeIn 1s ease forwards',
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'float':       'float 5s ease-in-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(36px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        glowPulse: { '0%, 100%': { boxShadow: '0 0 24px rgba(201,168,76,0.3)' }, '50%': { boxShadow: '0 0 60px rgba(201,168,76,0.65)' } },
        float:     { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
};
