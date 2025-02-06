/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1a1a1a',
        'secondary': '#2d2d2d',
        'accent': '#404040',
      },
      fontFamily: {
        'exo2': ['Exo2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
