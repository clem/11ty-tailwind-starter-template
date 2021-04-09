const defaultTheme = require("tailwindcss/defaultTheme");
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  purge: {
    content: [
      "./src/*.njk",
      "./src/_includes/**/*.njk",
      "./src/_includes/**/**/.njk",
    ]
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      listStyleType: {
        circle: 'circle',
      },
    }
  },
  variants: {},
  plugins: []
}