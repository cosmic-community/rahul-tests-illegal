/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0b',
        carbon: '#121214',
        surface: '#1a1a1d',
        edge: '#2a2a2e',
        ember: {
          DEFAULT: '#ff5722',
          dark: '#e64a19',
        },
        gold: '#fbbf24',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'grow-bar': 'growBar 1s ease-out forwards',
      },
      keyframes: {
        growBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-width)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}