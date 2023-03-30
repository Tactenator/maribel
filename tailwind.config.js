/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Monarda': ['Monarda', 'sans-serif'],
        'Afterglow': ['Afterglow', 'sans-serif']
      }
    },
  },
  plugins: [],
}

