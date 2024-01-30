/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },

      width: {
        1445: "1445px",
        1200: "1200px",
        1100: "1100px",
        1000: "1000px",
        375: "375px",
        360: "360px",
        340: "340px",
        330: "330px",
        300: "300px",
        450: "450px",
        260: "260px",
        200: "200px",
      },

      fontWeight: {
        400: 400,
        500: 500,
        700: 700,
      },

      borderRadius: {
        "sm-ext": ".3rem",
      },
    },
  },

  plugins: [],
};
