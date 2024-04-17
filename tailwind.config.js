/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'Playfair': ['"Playfair Display", serif'],
      'Inter':["'Inter', sans-serif"]
    },
    extend: {
      backgroundImage: {
        'Card-bg': "url('https://casaobsidiana.com/wp-content/themes/ma-casaobsidiana-theme/assets/images/shape-beige.svg')",
      }
    },
  },
  plugins: [],
}

