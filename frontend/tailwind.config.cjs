/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
        'ldr-kaet': ['"LDR KAET"', 'sans-serif'],
      },
      colors: {
        'tvsm-white': '#F8F8E4',
        'tvsm-black': '#000000',
        'tvsm-orange': '#CE8C3D',
        "tvsm-blue": "#00A0E4",
        "tvsm-dark-blue": "#124069",
        "tvsm-wine-red": "#442022",
      },
      backgroundImage: theme => ({
        'main-screen-default': "url('/main-screen-default.png')",
        'main-screen-variant': "url('/main-screen-variant.png')",
        'swamp-monster-default': "url('/swamp-monster-default.png')",
        'swamp-monster-variant': "url('/swamp-monster-variant.png')",
        'teddies-default': "url('/teddies-default.png')",
        'teddies-variant': "url('/teddies-variant.png')",
        'monsters-default': "url('/monsters-default.png')",
        'monsters-variant': "url('/monsters-variant.png')",
      })
    },
  },
  plugins: [],
}
