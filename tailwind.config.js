/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'light-white': 'rgba(255, 255, 255, 0.87)',
      'black': 'rgba(0, 0, 0, 0.87)',
      'yellow': '#F4E041',
      'light-yellow': '#FFE302',
      'blue': '#00BDD3',
      'gray': '#7E7E7E',
      'disabled-gray': '#B4B4B4',
      'background-gray': '#F8F8F8',
      'light-gray': '#D0CFCF',
      'red': '#CB3D40',
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1170px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3.75rem',
        xl: '0',
      },
    },
    extend: {},
  },
  plugins: [],
}

