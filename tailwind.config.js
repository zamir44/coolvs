module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      flex: {
        2: '1 0 0',
        3: '1 1 50%',
      },
      colors: {
        cyan: '#406fbc',
      },
      backgroundColor: {
        blue30: '#eaf2ff',
      }
    },
  },
  plugins: [],
}
