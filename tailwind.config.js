/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./assets/Hero.jpg')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      script: ['Outfit', 'sans-serif']
    },
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '540px',
      // => @media (min-width: 540px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

