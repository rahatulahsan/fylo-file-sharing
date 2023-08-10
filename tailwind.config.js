/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'node_modules/preline/dist/*.js',
    './pages/**/*.{html,js}',
  './components/**/*.{html,js}',,
  "./src/**/*.{html,js}",
  "'*.{html,js}'"],
  theme: {
    fontFamily:{
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors:{
        fylodark: '#1c2431',
        fylocyan: '#62e0d9',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

