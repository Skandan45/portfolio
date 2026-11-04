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
        background: '#050509',
        navy: {
          900: '#060913',
          800: '#0B1020',
          700: '#111836',
          600: '#1a244d',
        },
        electric: {
          500: '#2563EB',
          400: '#3B82F6',
          300: '#60A5FA',
        },
        neon: {
          purple: '#8B5CF6',
          violet: '#A855F7',
          fuchsia: '#C084FC',
        },
        cyan: {
          400: '#22D3EE',
          300: '#67E8F9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(37,99,235,0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px rgba(139,92,246,0.8))' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.3)',
        'glow-purple': '0 0 30px -5px rgba(139, 92, 246, 0.35)',
        'glow-blue': '0 0 30px -5px rgba(37, 99, 235, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
