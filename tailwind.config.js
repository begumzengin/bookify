/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#f2eceb",
        columnBackgroundColor: "#989e6a",
        buttonBackgroundColor: "#f7d8df",
        pinkerBackgroundColor: "#f47d84",
      },
    },
  },
  plugins: [],
};
