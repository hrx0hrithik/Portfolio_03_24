/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        "OutfitNew": ["Outfit", "sans-serif"],
        "QuicksandNew": ["Quicksand", "sans-serif"]
      },
      boxShadow: {
        'innNew': '0 0 0 4px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)'
      }
    },
  },
  plugins: [],
}