/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react")


module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js, ts, jxs, tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}

