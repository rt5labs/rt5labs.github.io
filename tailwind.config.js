/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#010409',
          900: '#0d1117',
          850: '#11161d',
          800: '#161b22',
          700: '#1c232c',
          600: '#21262d',
          500: '#30363d',
          400: '#484f58',
          300: '#6e7681',
          200: '#8b949e',
          100: '#c9d1d9',
          50: '#e6edf3',
        },
        green: {
          DEFAULT: '#3fb950',
          soft: 'rgba(63, 185, 80, 0.12)',
          glow: 'rgba(63, 185, 80, 0.8)',
        },
        orange: '#f0883e',
        yellow: '#d29922',
        blue: '#58a6ff',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"SFMono-Regular"',
          'Consolas',
          '"Liberation Mono"',
          'Menlo',
          'monospace',
        ],
      },
      letterSpacing: {
        tightest: '-0.055em',
        tighter: '-0.04em',
      },
      maxWidth: {
        content: '1080px',
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [],
};
