/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'main': '80px auto 300px'
      },
      hueRotate:{
        '-270': '270deg'
      },
      invert:{
        '75': '20%'
      }
    },
  },
  plugins: [],
}

