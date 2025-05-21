/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',
        accent: '#6366f1',
        softWhite: '#f1f5f9',
        darkText: '#1e293b',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { borderColor: 'rgba(255, 105, 180, 0.8)' },
          '50%': { borderColor: 'rgba(255, 255, 255, 0.9)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        zoomIn: 'zoomIn 0.4s ease-in-out forwards',
        slideInDown: 'slideInDown 0.5s ease-out forwards',
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
