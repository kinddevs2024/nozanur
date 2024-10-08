/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");



export default withMT({
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'sadia': '#FFFCF9',
        'sadia-text': '#591A2B',
        'sadia-text-fucus': '#861b38',
        'dark-sadia': '#000000',
      },
    },
  },
  plugins: [],
  
});