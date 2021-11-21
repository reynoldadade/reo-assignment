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
    extend: {
      colors: {
        'hover-gray': 'rgba(0, 0, 0, 0.04)',
        'pressed-gray': 'rgba(0, 0, 0, 0.08)',
        'selected-blue': 'rgba(24, 144, 255, 1)',
        'disabled-gray': 'rgba(245, 245, 245, 1)',
      },
    },
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
