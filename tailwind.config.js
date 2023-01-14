/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '0.5rem',
      'full': '9999px',
    },
    extend: {},
  },
  plugins: [],
}