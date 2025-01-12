/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 4px 6px 5px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

