module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      flex: {
        2: '1 0 0',
        3: '1 1 50%',
        4: '0 0 35%'
      },
      flexGrow: {
        3: '3',
      }
      
      
    },
  },
  variants: {
    extend: {
      borderOpacity: ['last'],

    }
  },
  plugins: [],
}
