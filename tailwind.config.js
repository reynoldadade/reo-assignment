module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      cursor: ['responsive', 'hover', 'focus', 'disabled'],
      backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
      fontWeight: ['hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus', 'disabled'],
    },
  },
  plugins: [],
}
