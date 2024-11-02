/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        hoverPrimary: 'var(--hover-primary)',
        hoverSecondary: 'var(--hover-secondary)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)'
      }
    }
  },
  plugins: []
};
