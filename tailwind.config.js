/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#60a5fa',
        },
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
      },
    },
  },
  plugins: [],
};
