import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1100px" }
    },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }]
      },
      maxWidth: { content: "64rem" },
      transitionTimingFunction: { "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both"
      }
    }
  },
  plugins: []
};

export default config;
