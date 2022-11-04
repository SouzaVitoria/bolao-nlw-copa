/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },

      backgroundImage: {
        app: 'url(/app-bg.png)',
      },

      colors: {
        gray: {
          900: '#121214',
          800: '#202024',
          600: '#323238',
          300: '#8d8d99',
          100: '#e1e1e6',
        },
        yellow: {
          500: '#f7dd43',
          700: '#e5cd3d',
        },
        ignite: {
          500: '#129e57',
        },
      },
    },
  },
  plugins: [],
};
