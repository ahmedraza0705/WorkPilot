/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b9ccff',
          300: '#96b3ff',
          400: '#6b8fff',
          500: '#4a6cf7',
          600: '#3451d1',
          700: '#2a3ea6',
          800: '#1e2c7a',
          900: '#131c52',
        },
        accent: {
          400: '#f59e0b',
          500: '#d97706',
        },
        sidebar: '#0f172a',
        'sidebar-hover': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        sidebar: '4px 0 24px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
