/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Helvetica Neu", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "white",
        lightText: "#212428",
        fadeColor: "#59616B",
        darkColor: "#212428",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#60a5fa",
      },
      boxShadow: {
        shadowOne:"bg-blue-500 shadow-lg shadow-blue-500/50",
        // shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
