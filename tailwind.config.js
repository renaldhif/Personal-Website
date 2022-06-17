/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      // set default colors for all components
        colors: {
        // primary: sky-500
        primary: '#0ea5e9',
        // secondary for text: slate 500
        secondary: '#64748b',
        // tertiary for text: slate 300
        tertiary: '#cbd5e1',
        // dark: sky-700
        dark: '#0369a1', 
        // darkest: sky-900
        darkest: '#0c4a6e',
        // light: sky-400
        light: '#38bdf8',
        // lightest: sky-200
        lightest: '#bae6fd',
      }
    },
  },
  plugins: [],
}
