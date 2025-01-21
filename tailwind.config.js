/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        "fade-in":{
          "0%": {opacity: 0},
          "100%": {opacity:1}
        },
        "fade-out":{
          "0%": {opacity: 1},
          "100%": {opacity:0}
        },
      },
      animation:{
        "fade-in": "fade-in 500ms linear forwards",
        "fade-out": "fade-out 500ms linear forwards",
      }
    },
  },
  plugins: [],
}