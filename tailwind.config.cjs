/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        violet: {
          dark: '#16161d',
          light: '#939BF4',
        },
        blue: {
          midnight: '#121721',
        },

        grey: {
          light: '#F4F6F8',
          med: '#9DAEC2',
          dark: '#6E8098',
          darkest: '#525861',
        },
      },
      keyframes: {
        flip: {
          '0%': {
            transform: 'rotateX(0)',
          },
          '45%': {
            transform: 'rotateX(90deg)',
          },
          '55%': {
            transform: 'rotateX(90deg)',
          },
          '100%': {
            transform: 'rotateX(0deg)',
          },
        },
        bounce: {
          '0%': {
            transform: 'translateY(0)',
          },
          '30%': {
            transform: 'translateY(-20px)',
          },
          '60%': {
            transform: 'translateY(2px)',
          },
          '80%': {
            transform: 'translateY(4px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'bounce-once': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
            borderColor: '#9DAEC2',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(12px)' },
          '40%': { transform: 'translateX(-12px)' },
          '60%': { transform: 'translateX(12px)' },
          '80%': { transform: 'translateX(-12px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        shake: 'shake 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both',
        'bounce-once': 'bounce-once 0.2s ease-in-out',
        'flip-1': 'flip 0.1s ease-in-out',
        'flip-2': 'flip 0.3s ease-in-out',
        'flip-3': 'flip 0.5s ease-in-out',
        'flip-4': 'flip 0.7s ease-in-out',
        'flip-5': 'flip 0.9s ease-in-out',
        'win-1': 'flip 0.1s ease-in-out, bounce 0.2s 0.9s ease-in-out',
        'win-2': 'flip 0.3s ease-in-out, bounce 0.2s 1.1s ease-in-out',
        'win-3': 'flip 0.5s ease-in-out, bounce 0.2s 1.3s ease-in-out',
        'win-4': 'flip 0.7s ease-in-out, bounce 0.2s 1.5s ease-in-out',
        'win-5': 'flip 0.9s ease-in-out, bounce 0.2s 1.7s ease-in-out',
      },
    },
  },
  plugins: [],
}
