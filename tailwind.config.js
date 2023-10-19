/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundSize : {
        'normal' : '280px',
      }

    },
  },
  plugins: [],
}

