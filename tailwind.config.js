/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          0: '#F5FAFF',
          100: '#C5E1FD',
          600: '#277ACD',
          700: '#0066CC',
          800: '#00478F',
          900: '#003366',
          1000: '#042330',
        },
        ink: {
          500: '#454648',
          600: '#17181A',
          900: '#090A0A',
        },
        orange: '#FF6B35',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 18px rgba(10, 22, 40, 0.08)',
        soft: '0 1px 4px rgba(0, 10, 20, 0.06)',
      },
    },
  },
  plugins: [],
};
