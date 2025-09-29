import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        birthday: "#ff80bf",
      },
      fontFamily: {
        festive: ["'Comic Neue'", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;