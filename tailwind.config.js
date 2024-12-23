/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'phone': '320px',
      // => @media (min-width: 640px) { ... }
      'tablet': '640px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '1380px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

