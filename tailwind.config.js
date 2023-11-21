/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        'primary-dark': '#f3f4f6',
        forePrimary: '#4338ca',
        project1: '#7e22ce',
        project2: '#eab308',
        project3: '#15803d',
      },
      animation: {
        water: 'water 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        water: {
          '0%,100%': {
            'clip-path':
              'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
          },

          '50%': {
            'clip-path':
              'polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
          },
        },
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
      },
    },
  },
  plugins: [],
};
