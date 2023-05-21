/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "google-gray": "rgb(232,234,237)",
        "blue-gray": "#f3f6fc",
        "google-dark": "#202124",
      },
    },
  },
  plugins: [],
};
