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
      backgroundImage: {
        'gradient-to-dark': 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) )'
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
