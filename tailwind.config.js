module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Poppins", "sans-serif"]
    }
  },
  plugins: [
    require("tailwindcss-scoped-groups"),
  ],
  variants: {
    extend: {
      rotate: ['group-hover']
    }
  }
}
