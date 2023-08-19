/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        elementalRed: '#f87171',
        elementalBlue: '#38bdf8',
        elementalPurple: '#c084fc',
        elementalGreen: '#4ade80',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        scaleUp: {
          '0%': { opacity: 0, transform: 'translateY(-150%) scale(2)' },
          '100%': { opacity: 1, transform: 'translateY(0%) scale(1)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-150%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(150%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease-in-out',
        scaleUp: 'scaleUp 1.2s ease-in-out',
        fadeInLeftFirst: 'fadeInLeft 1s ease-in-out',
        fadeInLeftSecond: 'fadeInLeft 1.3s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
