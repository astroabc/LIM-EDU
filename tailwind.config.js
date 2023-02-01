/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-search-bk-2-1": "url('./src/assets/img/header-search-bk-2-1.webp')",
        "header-search": "url('./src/assets/img/header-search.webp')"
      },
      screens: {
        'mb': {'max': '480px'},
  
        'tab': {'min': '481px', 'max': '1023px'},

        'lg': {'min': '1024px'}
      }
    },
  },
  plugins: [],
}
