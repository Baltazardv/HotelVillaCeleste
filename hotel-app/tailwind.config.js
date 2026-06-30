/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0d1f3c',
          700: '#112549',
        },
        gold: {
          400: '#d4af37',
          500: '#c9a227',
          300: '#e5c96a',
        },
      },
    },
  },
  plugins: [],
}

