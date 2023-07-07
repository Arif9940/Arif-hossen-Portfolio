/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'bg': '#E8D5C4',
      'word': '#564E47',
      'bg2': '#FEF9F5'
    },
    fontFamily: {
      'header': ['Montserrat', 'sans-serif'],
      'para': ['Raleway', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
