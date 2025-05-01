import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F1EFEC",
        accent: "#D4C9BE",
        primary: "#123458",
        dark: "#030303",
      },
    },
  },
  plugins: [],
};
export default config;
