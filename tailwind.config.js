/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

          backgroundImage: {
            "kissme": "url('/assets/section4/kiss.png')",
          },
          colors: {
            'electric': '#1E9FB2',
            'pink': '#FFE1F8',
            'lblue': '#C6F7FF',
            'llbue': '#E4FBFF',
            'cream': '#FAE8CD',
            'lgrey': '#F1F1F1',
            'dgrey': '#777777',
            'wgrey': '#353535',
          },
        },
        fontFamily: {
          atma: ['atma'],
          poppins: ['Poppins', 'sans-serif'],
          police: ['ABeeZee', 'sans-serif'],
        }
      },
      plugins: [],
    }
