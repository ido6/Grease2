/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        'background-light': '#FFFFFF',
        'background-dark': '#1a1a1a',
        'text-light': '#333333',
        'text-dark': '#F5F5F5',
        'section-light': '#F5F5F5',
        'section-dark': '#2a2a2a'
      },
      fontFamily: {
        display: ['Heebo', 'sans-serif'],
        body: ['Assistant', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px'
      },
      container: {
        center: true
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};

