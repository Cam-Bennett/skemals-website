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
        navy: "#0F1B2D",
        navySecondary: "#1B2838",
        gold: "#C89B3C",
        goldHover: "#D4A843",
        bodyBg: "#F8F6F0",
        cardBg: "#FFFFFF",
        textDark: "#1A1A1A",
        textLight: "#F8F6F0",
        textMuted: "#6B7280",
        textLightMuted: "#B0B8C4",
        border: "#E5E1D8",
        // Keep legacy aliases for components that still use them
        primary: "#C89B3C",
        "bg": "#0F1B2D",
        "bg-alt": "#1B2838",
        "bg-card": "#FFFFFF",
        "text-main": "#F8F6F0",
        "text-soft": "#B0B8C4",
        muted: "#6B7280",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "sans-serif"],
        // Legacy aliases
        heading: ["var(--font-serif)", "Georgia", "serif"],
        body: ["var(--font-sans)", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
