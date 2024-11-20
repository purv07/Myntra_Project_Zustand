/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        Cust_MyntraLogoShadow: '0 4px 12px 0px rgba(0, 0, 0, 0.08)',
        Cust_ProductShadow: '0 2px 16px 4px rgba(40, 44, 63, .07)',
      },
      screens:{
        xs:'400px',
      },
      zIndex: {
        Cust_NavBarZIndex: '1000',
      },
      bottom:{
        Cust_bottom:'2px'
      }
      ,
      fontFamily: {
        Cust_NavbarFont: [
          'Assistant',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        Cust_StudioNew: '10px',
        Cust_Nav3IconFont: '14px',
        Cust_StrikeSize: '12px',
        Cust_ProductName: '14px',
        Cust_ProductAddCart: '13px',
      },
    },
  },
  plugins: [],
}

