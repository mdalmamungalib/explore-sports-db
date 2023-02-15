/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#48f2d3",
        
"secondary": "#d05ae2",
        
"accent": "#99a3ff",
        
"neutral": "#292230",
        
"base-100": "#EAEDF5",
        
"info": "#3574E9",
        
"success": "#65E697",
        
"warning": "#FAB347",
        
"error": "#EB6E60",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
