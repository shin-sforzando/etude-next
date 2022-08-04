/** @type {import('tailwindcss/types').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
    },
  },
  plugins: [],
}
