const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        header: "96px",
      },
      width: {
        fit: "fit-content",
      },
      colors: {
        main: {
          500: "#7c3aed",
        },
      },
    },
    container: {
      center: true,
    },
    screen: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      display: ["group-hover", "group-focus"],
      backgroundColor: ["active"],
      accessibility: ["hover", "active", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
