/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(0, 156, 59)",
          secondary: "#f4f4f4",
          accent: "#0284c7",
          neutral: "#ffffff",
          "base-100": "#0e4773",
          info: "#6e90f7",
          success: "#16a34a",
          warning: "#d38912",
          error: "#e12343",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
