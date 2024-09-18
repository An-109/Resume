/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',  
    './src/**/*.js',

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