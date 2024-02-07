/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Oto Sans', ...defaultTheme.fontFamily.sans],
      'display': 'Oto Hand'
    }
  },
  plugins: [],
}