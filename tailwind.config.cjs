/** @type {import('tailwindcss').Config} */
module.exports = {
  // informing where will be the files that will have tailwind classes
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      '2xl': 32,
      xl: 24,
      lg: 20,
      md: 18,
      sm: 16,
      xs: 14
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      gray:{
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },
      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
