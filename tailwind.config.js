/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    colors: {
      'blue': {
        lightest: '#F9FCFF',
        lighter: '#ACCCEE',
        light: '#E0EEFD',
        dark: '#5783A9',
        darkest: '#1B3346'
      },
      'orange': {
        DEFAULT: '#F0892E'
      }
    },
    extend: {},
    fontFamily: {
      'sans': ['Oto Sans', ...defaultTheme.fontFamily.sans],
      'display': 'Oto Hand'
    }
  },
  plugins: [],
}