/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif']

      }, backgroundImage: {
        'doctor1': "url(https://w7.pngwing.com/pngs/753/484/png-transparent-physician-doctor-of-medicine-clinic-pharmacy-others-miscellaneous-service-nutrition-thumbnail.png)",
        
      }
    },
  },
  plugins: [],
  important: true
}
