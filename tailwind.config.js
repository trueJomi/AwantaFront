/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        magenta:{
          base:'#571744',
          100:'#7d2161',
          200:'a32b7f',
        },
        RedBajo:'#91133f',
        RedMain:'#c7113a',
        OrangeMain:'#ea593a',
        YelowMain:'#fdc217',
      },
      fontFamily: {
        Noto:['Noto Sans','serif']
      }
    },
  },
  plugins: [
  ],
}
