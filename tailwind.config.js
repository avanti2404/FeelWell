/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors : {
      navyBlue : "#262D31",
      white : "#FFFFFF",
      black : "#000000",
      gray : "#999999"
    },
    fontFamily: {
      heading: ["Cardo", "serif"],
      subHeading : ["Candara"],
    },
    extend: {},
  },
  plugins: [],
}

