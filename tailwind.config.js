module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  mode: "jit", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { Nunito: "nunito" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
