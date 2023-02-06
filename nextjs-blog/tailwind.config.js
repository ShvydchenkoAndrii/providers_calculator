/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      main: "#f5f5f5",
      black: "#000000",
      red: "#800000",
      h1: "rgba(175, 47, 47, 0.15)",
      grey: "#13ce66",
      green: "#50C878",
      input: "rgba(0, 0, 0, 0.003)",
      gray: "#8492a6",
      "gray-light": "#e6e6e6",
    },
    extend: {},
  },
  plugins: [],
};
