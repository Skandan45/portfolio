/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#030303',
          900: '#050505',
          850: '#0A0A0A',
          800: '#101010',
          700: '#171717',
          600: '#262626',
        },
        charcoal: {
          900: '#0F0F10',
          800: '#151517',
          700: '#1E1E22',
        },
        bronze: {
          200: '#E8D5C4',
          300: '#D4AF7A',
          400: '#C59B6D',
          500: '#8C6239',
          600: '#714B24',
          700: '#523416',
        },
        amber: {
          muted: '#D97706',
          warm: '#F59E0B',
          glow: 'rgba(217, 119, 6, 0.15)',
        }
      },
      fontFamily: {
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        editorial: '.35em',
      },
      boxShadow: {
        'bronze-glow': '0 0 35px -5px rgba(140, 98, 57, 0.25)',
        'amber-glow': '0 0 45px -8px rgba(217, 119, 6, 0.2)',
        'portrait-shadow': '0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(140, 98, 57, 0.22)',
      }
    },
  },
  plugins: [],
}
