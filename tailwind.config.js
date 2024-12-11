/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "340px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryBlue: "#174161",
        secondaryRed: "#d63d52",
        accentAqua: "#bbe9df",
        background: "#fffbe8",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
