// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'class', // Ready for future dark mode implementation
  theme: {
    extend: {
      fontFamily: {
        // As per spec: Inter or Manrope for headings, Inter or System UI for body
        sans: ['var(--font-inter)', ...fontFamily.sans],
        manrope: ['var(--font-manrope)', ...fontFamily.sans],
        // As per spec: JetBrains Mono or Fira Code for code/technical text
        mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
      },
      colors: {
        // As per spec: Color Palette
        'deep-blue': '#1E3A8A',
        'electric-purple': '#8B5CF6',
        'accent-cyan': '#06B6D4',
        
        // Light Mode Neutrals (as per spec)
        'background-light': '#FAFAFA',
        'text-charcoal': '#1F2937',
        'subtle-gray-light': '#E5E7EB',

        // Dark Mode Neutrals (as per spec)
        'background-dark': '#0F172A',
        'text-light': '#F1F5F9',
        'subtle-gray-dark': '#1E293B', // A slightly lighter dark for borders
      },
      animation: {
        'gradient-bg': 'gradient-bg 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'underline-in': 'underline-in 0.3s ease-in-out forwards',
        'underline-out': 'underline-out 0.3s ease-in-out forwards',
      },
      keyframes: {
        'gradient-bg': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'underline-in': {
          '0%': { transform: 'scaleX(0)', 'transform-origin': 'left' },
          '100%': { transform: 'scaleX(1)', 'transform-origin': 'left' },
        },
        'underline-out': {
          '0%': { transform: 'scaleX(1)', 'transform-origin': 'right' },
          '100%': { transform: 'scaleX(0)', 'transform-origin': 'right' },
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, #1E3A8A 0%, #0F172A 100%)',
        'grid-pattern': "url('/images/grid-pattern.svg')", // Assumes you have this SVG in public/images
      },
    },
  },
  plugins: [],
};