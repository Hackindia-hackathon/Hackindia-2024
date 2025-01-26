import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-image": "url('/home.svg')",
        "game-image": "url('/gamepage.svg')",
        "pepe-maze": "url('/game/pepe-maze.webp')",
        "aptos-arena": "url('/game/aptos-arena.webp')",
        "soul-saver": "url('/game/soul-saver.webp')",
        "out-of-sight": "url('/game/out-of-sight.webp')",
        "tennis": "url('/game/tennis.webp')",
        "cinemare": "url('/game/cinemare.webp')",
        "3d-box-shooter": "url('/game/3d-box-shooter.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
