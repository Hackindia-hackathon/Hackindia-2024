/** @type {import('tailwindcss').Config} */

import {main_bg} from "./src/values/images.json";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09090b",
        secondary: "#131418",
        tertiary: "#242424",
        accent: "#fff",
        primaryText: "#fff",
        secondaryText: "#d4d4d8",
        tertiaryText: "#a1a1aa",
      },
      backgroundImage: {
        main: `url(${main_bg})`,
      },
      fontFamily: {
        mona: "Mona-Sans, sans-serif",
      }
    },
  },
  plugins: [],
}

