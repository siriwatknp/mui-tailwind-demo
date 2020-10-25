const theme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
    fontFamily: {
      display: ['Rubik', 'sans-serif'],
      body: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: theme.colors.gray
      },
    },
  },
  variants: {},
  plugins: [],
};
