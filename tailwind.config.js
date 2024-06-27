/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creme': '#FFF8E7',
        'hover-roxinho': 'rgb(99 102 241)',
        'greenClean': '#00a650',
        'colorPrecos': '#393333',
        'fundoSite': '#ededed',

      }
    },
  },

  plugins: [],

}


