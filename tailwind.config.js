/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

