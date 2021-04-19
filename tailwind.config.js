module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        2: '1 0 0'
      },
      colors: {
        cyan: '#9cdbff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
