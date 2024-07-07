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

      },
      keyframes: {
        "fade-in-top-left": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(-100%, -100%, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
      }
    },
  },

  plugins: [],

}


