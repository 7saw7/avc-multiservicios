import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0c10",
        surface: "#12131a",
        panel: "#171824",
        ink: "#f2f3f7",
        muted: "#b2b5c4",
        primary: "#7c5cff",
        primary2: "#6ad2ff",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
