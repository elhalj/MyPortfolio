/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "340px",
      md:"540px",
    },
    fontFamily: {
      Lenxeng: ["Lexend Giga", "serif"],
      Meow: [ "Meow Script", "serif"]
    }
  },
  plugins: [],
}