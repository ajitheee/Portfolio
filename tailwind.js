/** @type {import('tailwindcss').Config} */
module.exports = {
  // Make sure this content array is correct
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This is important for your dark mode toggle
  theme: {
    extend: {
      // Add custom animations here if you want to use them with Tailwind's JIT compiler
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInFromLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInScale: {
          'from': { opacity: '0', transform: 'scale(0.8)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        // ... and so on for other animations
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slide-in-from-left': 'slideInFromLeft 1s ease-out forwards',
        'fade-in-scale': 'fadeInScale 1s ease-out forwards',
        // ...
      }
    },
  },
  plugins: [],
}