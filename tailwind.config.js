/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        IPM: "428px",
        IX: "375px",
      },
      fontFamily:{
        libre:["Poppins",]
      }
    },
  },
  plugins: [],
}
  