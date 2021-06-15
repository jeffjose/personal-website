const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans"],
        lato: ["Lato", "ui-sans"],
        sans: ["-apple-system", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        rose: colors.rose,
        sepia: {
          50: "#faf9f7",
          100: "#fff0e3",
          200: "#e9d8cf",
          300: "#cfb3a4",
          400: "#b38a79",
          500: "#976956",
          600: "#7c4e3e",
          700: "#5f3b30",
          800: "#422923",
          900: "#2a1a17"
        }
      }
      //gridTemplateRows: {
      //  home: "2fr [logo-start main-start] 1fr [logo-end main-end] 2fr"
      //},
      //gridTemplateColumns: {
      //  home: "1fr [logo-start] 2fr [logo-end main-start] 9fr [main-end] 1fr"
      //}
    }
  }
};
