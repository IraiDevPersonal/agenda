import { neutral } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          secondary: neutral[200],
          default: neutral[100],
        },
        // foreground: {
        //   secondary: neutral[200],
        //   default: neutral[100],
        // },
        text: {
          default: neutral[800],
          secondary: neutral[600],
          disabled: neutral[500],
        },
      },
    },
  },
  plugins: [],
};
