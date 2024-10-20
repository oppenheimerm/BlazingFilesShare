/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{razor, html}'],
  theme: {
      extend: {
          colors: {
              'primary': '#BE3D2C',
              'black': '#222222'
          }
      },
      fontFamily: {
          sans: ["'Oswald'", "sans-serif"]
      }
  },
  plugins: [],
}

