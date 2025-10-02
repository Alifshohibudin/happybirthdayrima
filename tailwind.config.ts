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
      fontSize: {
        h1: ["clamp(1.5rem, 5vw, 3rem)", { lineHeight: "1.2" }],
        h2: ["clamp(1.2rem, 4vw, 2.5rem)", { lineHeight: "1.3" }],
        p: ["clamp(0.9rem, 2vw, 1.2rem)", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [],
};

export default config;