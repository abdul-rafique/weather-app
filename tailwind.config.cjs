/** @type {import('tailwindcss').Config} */
const Colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    theme: {
      colors: {
        error: Colors.red,
      },
    },
  },

  plugins: [require("daisyui")],
};
