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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#CFFFE2",
        secondary: "#A2D5C6",
        tertiary: "#7DD3FC",
        accent: "#F6F6F6",
        dark: "#000000",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        hero: ["var(--font-bungee)", "Impact", "sans-serif"],
        header: ["var(--font-righteous)", "Impact", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
