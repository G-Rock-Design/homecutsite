/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#151515',
        primary: '#D6AD45',
        primaryLight: '#F5E88A',
        textWhite: '#F5F2E9',
        textMuted: '#B9B9B9',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
