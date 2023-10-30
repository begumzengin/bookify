/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    fontFamily: {
      title: ["Rozha One"],
    },
    extend: {
      colors: {
        backgroundColor: "#f2eceb",
        columnBackgroundColor: "#989e6a",
        buttonBackgroundColor: "#f7d8df",
        pinkerBackgroundColor: "#f47d84",
        titleColor: "#5c6e4a",
      },
    },
  },
  plugins: [],
};
