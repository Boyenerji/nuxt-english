/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

