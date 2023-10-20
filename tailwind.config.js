/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundSize : {
        'normal' : '270px',
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/home_page/correct-stick.svg")',
      },

    },
  },
  plugins: [],
}

