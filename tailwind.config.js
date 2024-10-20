/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: '#A9A9A9',
        customOrange: '#E76E3C',
        customGreen: '#2E8856',
        customGrey2:'#2E343B'
        
      },
        
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mylighttheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
      },
      "light", // DaisyUI'nin varsayılan light teması
    ],
  },
};
