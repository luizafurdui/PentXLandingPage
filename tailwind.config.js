/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BgColor: '#08090A', 
        textColor: '#CDCDCD', 
        buttonColor: '#28282C', 
        buttonHover: '#38383E'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      margin: {
        '72': '18rem',
        '80': '20rem',
        '90': '22rem', 
        '100': '25rem',
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(to right, #28282C, #232325)',
      },
    },
  },
  plugins: [],
}
