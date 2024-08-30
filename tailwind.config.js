/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
      },
      height: {
        17: "70px",
      },
      width: {
        25: "100px",
        37: "150px",
        81: "350px",
      },
    },
  },
  plugins: [],
};
