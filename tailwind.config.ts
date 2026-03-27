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
        primary: "#DC2626",
        secondary: "#2563EB",
        accent: "#7C3AED",
        bg: "#0A0A12",
        "bg-alt": "#0E0E18",
        "bg-card": "#111119",
        "text-main": "#F1F0EE",
        "text-soft": "#C4C3BF",
        muted: "#6B7280",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-karla)", "sans-serif"],
      },
      maxWidth: {
        site: "1120px",
      },
    },
  },
  plugins: [],
};
export default config;
