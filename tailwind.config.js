/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "25%": {
            opacity: "0.25",
            transform: "translateX(-75px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateX(-50px)",
          },
          "75%": {
            opacity: "0.75",
            transform: "translateX(-25px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "25%": {
            opacity: "0.25",
            transform: "translateX(75px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateX(50px)",
          },
          "75%": {
            opacity: "0.75",
            transform: "translateX(25px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 400ms ease-in-out",
        "slide-in-right": "slide-in-right 400ms ease-in-out",
      },
    },
  },
};
