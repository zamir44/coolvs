module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  mode: 'jit',
  theme: {
    extend: {
      flex: {
        2: '1 0 0',
        3: '1 1 50%'
      },
      colors: {
        cyan: '#9cdbff',
      },
    },
  },
  plugins: [],
}
