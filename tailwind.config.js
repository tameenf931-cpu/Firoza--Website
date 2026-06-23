/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        firoza: {
          deep: "#1E7A73",
          soft: "#5FB3AB",
        },
        champagne: "#C6A059",
        ivory: "#FBF7F1",
        beige: "#ECE2D0",
        ink: "#2B2520",
      },
    },
  },
  plugins: [],
};
