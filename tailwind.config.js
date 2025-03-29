/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Override or customize the `text-sm` class
        sm: ['12px', '20px'], // font size 14px with line-height 20px
      },
    },
  },
  plugins: [],
}

