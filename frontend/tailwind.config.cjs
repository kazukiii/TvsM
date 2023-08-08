/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-100": "calc(100vh + 100px)",
        "screen-200": "calc(100vh + 200px)",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        "ldr-kaet": ['"LDR KAET"', "sans-serif"],
      },
      colors: {
        "tvsm-white": "#F8F8E4",
        "tvsm-black": "#000000",
        "tvsm-orange": "#CE8C3D",
        "tvsm-blue": "#00A0E4",
      },
      backgroundImage: (theme) => ({
        "main-screen-default": "url('/main-screen-default.png')",
        "main-screen-variant": "url('/main-screen-variant.png')",
        "swamp-monster-default": "url('/swamp-monster-default.png')",
        "swamp-monster-variant": "url('/swamp-monster-variant.png')",
        "teddies-default": "url('/teddies-default.png')",
        "teddies-variant": "url('/teddies-variant.png')",
        "monsters-default": "url('/monsters-default.png')",
        "monsters-variant": "url('/monsters-variant.png')",
        greenShadow1: "url('/greenShadow1.png')",
      }),
    },
  },
  plugins: [],
};
