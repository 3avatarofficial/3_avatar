/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0f172a',
          100: '#1e293b',
          200: '#334155',
        }
      }
    },
  },
  plugins: [],
};