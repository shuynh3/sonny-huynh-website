const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: {
        DEFAULT: '#695b5d', 100: '#151212', 200: '#292425', 300: '#3e3637', 400: '#53484a',
        500: '#695b5d', 600: '#89787a', 700: '#a7999b', 800: '#c4bbbd', 900: '#e2ddde'
      },
      secondary: {
        DEFAULT: '#aec3b0', 100: '#1f2a20', 200: '#3e5441', 300: '#5e7f61', 400: '#83a386',
        500: '#aec3b0', 600: '#bdcebf', 700: '#cedbcf', 800: '#dee7df', 900: '#eff3ef'
      },
      surface: {
        DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc',
        500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff'
      },
      base: {
        DEFAULT: '#f5f5f5', 100: '#313131', 200: '#626262', 300: '#939393', 400: '#c4c4c4',
        500: '#f5f5f5', 600: '#f7f7f7', 700: '#f9f9f9', 800: '#fbfbfb', 900: '#fdfdfd'
      },
      neutral: {
        DEFAULT: '#262322', 100: '#080707', 200: '#0f0e0d', 300: '#171514', 400: '#1e1c1b',
        500: '#262322', 600: '#544d4b', 700: '#837874', 800: '#ada5a2', 900: '#d6d2d1'
      },
      tertiary: {
        DEFAULT: '#e8c1c5', 100: '#3e171b', 200: '#7c2e36', 300: '#b94550', 400: '#d1828a',
        500: '#e8c1c5', 600: '#ecccd0', 700: '#f1d9db', 800: '#f6e6e7', 900: '#faf2f3'
      },
      raisin_black: {
        DEFAULT: '#262322', 100: '#080707', 200: '#0f0e0d', 300: '#171514', 400: '#1e1c1b',
        500: '#262322', 600: '#544d4b', 700: '#837874', 800: '#ada5a2', 900: '#d6d2d1'
      },
      wenge: {
        DEFAULT: '#695b5d', 100: '#151212', 200: '#292425', 300: '#3e3637', 400: '#53484a',
        500: '#695b5d', 600: '#89787a', 700: '#a7999b', 800: '#c4bbbd', 900: '#e2ddde'
      },
      tea_rose_red: {
        DEFAULT: '#e8c1c5', 100: '#3e171b', 200: '#7c2e36', 300: '#b94550', 400: '#d1828a',
        500: '#e8c1c5', 600: '#ecccd0', 700: '#f1d9db', 800: '#f6e6e7', 900: '#faf2f3'
      },
      ash_gray: {
        DEFAULT: '#aec3b0', 100: '#1f2a20', 200: '#3e5441', 300: '#5e7f61', 400: '#83a386',
        500: '#aec3b0', 600: '#bdcebf', 700: '#cedbcf', 800: '#dee7df', 900: '#eff3ef'
      },
      cambridge_blue: {
        DEFAULT: '#9fb798', 100: '#1e281c', 200: '#3d4f37', 300: '#5b7753', 400: '#7b9c71',
        500: '#9fb798', 600: '#b3c6ad', 700: '#c6d4c2', 800: '#d9e3d6', 900: '#ecf1eb'
      },
      white: {
        DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc',
        500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff'
      },
      white_smoke: {
        DEFAULT: '#f5f5f5', 100: '#313131', 200: '#626262', 300: '#939393', 400: '#c4c4c4',
        500: '#f5f5f5', 600: '#f7f7f7', 700: '#f9f9f9', 800: '#fbfbfb', 900: '#fdfdfd'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
