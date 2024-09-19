/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./index.html",
    "./src/assets/JS/*.js"

  ],
  theme: {
    extend: {
      fontFamily: {
        'suse': ['Suse', 'sans-serif'],
      },
    },
  },
  plugins: [],
}