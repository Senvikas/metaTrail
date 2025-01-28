/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#000000", // Custom black color
        "custom-gray": "#585858", // Custom gray color
        "custom-yellow": "#fff300",
      },
      backgroundImage: {
        "gradient-to-custom": "linear-gradient(to right, #000000, #1a1a1a)", // Custom linear gradient
      },
    },
  },
  plugins: [],
};
