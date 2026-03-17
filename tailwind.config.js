/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'light-bg': '#f5f5f5',
      },
      animation: {
        'pulse-custom': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pop-in': 'popIn 0.6s ease-out forwards',
      },
      keyframes: {
        popIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.8) translateY(10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translateY(0)' 
          }
        }
      }
    },
  },
  plugins: [],
}