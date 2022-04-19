const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
  
    extend: {
      colors:{
        'main-c': '#100A30',
        'text-hover-c': '#624DE3'
      },
      fontFamily: {
        'main-f': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'h-title': ['55px', '64px'],
        'm-title': ['48px', '56px']
      },
  },
},
  plugins: []
}
