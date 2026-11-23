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
        'deep-black': '#050509',
        'dark-navy': '#0B1020',
        'electric-blue': '#2563EB',
        'neon-purple': '#8B5CF6',
        'cyan-accent': '#22D3EE',
        navy: {
          950: '#050509',
          900: '#0B1020',
          850: '#0F172A',
          800: '#131B2E',
          700: '#1E293B',
          600: '#334155',
        },
        electric: {
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
        },
        purple: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(34, 211, 238, 0.45)',
        'glow-purple': '0 0 30px -4px rgba(139, 92, 246, 0.45)',
        'glow-blue': '0 0 30px -4px rgba(37, 99, 235, 0.45)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 16px 48px -8px rgba(37, 99, 235, 0.35), inset 0 0 0 1px rgba(34, 211, 238, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
