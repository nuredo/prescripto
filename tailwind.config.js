/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    gridTemplateColumns: {
      auto: "repeat(auto-fill,minmax(200px, 1fr))",
    },
  },
  plugins: [],
};
