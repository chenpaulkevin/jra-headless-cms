/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '4rem',
        '3xl': '1rem',
      },
    },
    extend: {
      fontSize: {
        xs: '10.13px', // Extra small size
        sm: '13.5px', // Small size
        base: '18px', // Base size
        lg: '23.99px', // Large size
        xl: '31.98px', // Extra large size
        '2xl': '42.63px', // 2 times base size
        '3xl': '56.83px', // 3 times base size
        '4xl': '75.76px', // 4 times base size
        '5xl': '100.98px', // 5 times base size
        '6xl': '134.61px', // 6 times base size
        '7xl': '179.43px', // 7 times base size
      },
      colors: {
        primary: '#FF5A5F',
        blackPrimary: '#222222',
        gray: '#636363',
        lightGray: '#EDEDED',
        white: '#F8F8F8',
      },
    },
  },
  plugins: [],
}
