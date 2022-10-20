module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        branding: {
          blue: {
            200: "#E9F1FF",
            400: "#4285F4",
            500: "#0089ED",
          },
          neutral: {
            200: "#F2F2F2",
            500: "#8D8D8D",
          }
        }
      },
      fontFamily: {
        sans: ["Poppins", 'ui-sans-serif']
      },
      fontSize: {
        sm: ['13px', '20px'],
        base: ['14px', '21px'],
        huge: ['40px', {
          lineHeight: '60px',
          fontWeight: 500,
        }],
      },
      spacing: {
        15: "3.8125rem",
      },
      borderRadius: {
        lg: "40px",
        md: "9px",
      },
      minHeight: {
        panel: "740px",
      },
      maxWidth: {
        panel: "326px",
      }
    },
  },
  plugins: [],
}