module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green' : "#08A4A6",
        'light-green' : "#E2F6F6",
      },
      fontFamily : {
        'poppins' : ['poppins'],
        'montserrat' : ['montserrat']
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp')
  ],
}
