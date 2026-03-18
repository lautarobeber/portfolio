/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#EBE5DB',
        slate: {
          light: '#88B4CA',
          DEFAULT: '#56819B',
          dark: '#2E3F4B',
        }
      }
    },
  },
  plugins: [],
}
