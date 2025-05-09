/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          lightest: '#233554',
          light: '#112240',
          DEFAULT: '#0a192f',
          dark: '#020c1b',
        },
        slate: {
          lightest: '#ccd6f6',
          light: '#a8b2d1',
          DEFAULT: '#8892b0',
          dark: '#495670',
        },
        teal: {
          DEFAULT: '#64ffda',
        },
      },
      boxShadow: {
        card: '0 10px 30px -15px rgba(2,12,27,0.7)',
        button: '0 10px 30px -15px rgba(100,255,218,0.4)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};