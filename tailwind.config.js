/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'artegra-slab': ['"Artegra Slab Extended"', 'serif'],
      },
    },
  },
  plugins: [],
}

