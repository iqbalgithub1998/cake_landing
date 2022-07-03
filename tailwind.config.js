/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightGreen: "#DBFFF9",
        lightRed: "#FFE6E3",
        darkOrange: "#FD6D24",
        darkGrayishBlue: "hsl(227,12%,61%)",
        lightGray: "#F9F9FB",
      },
    },
  },
  plugins: [],
};
