module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: [
  ],
  variants: {
    extend: {
      rotate: ['group-hover']
    }
  },
  darkMode: 'class',
  important: true
}
