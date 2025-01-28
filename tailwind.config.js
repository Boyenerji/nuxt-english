/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '2px 2px 10px 2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

