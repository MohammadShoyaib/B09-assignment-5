/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      
      extend: {
        fontFamily: {
          'Inter': ['Inter', 'sans-serif'],
          'Raleway': ['Raleway', 'serif'] // Ensure fonts with spaces have " " surrounding it.
        }
      },
    },
    plugins: [],
  }