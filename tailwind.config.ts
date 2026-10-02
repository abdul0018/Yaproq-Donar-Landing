import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2.5rem" }, screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        cream: { DEFAULT: "#F5EFE3", 50: "#FBF8F2", 100: "#F5EFE3", 200: "#EAE0CD", 300: "#DCCDB2" },
        ink: { DEFAULT: "#15201A", 600: "#3A4640", 500: "#5C6862", 400: "#86908A" },
        forest: { DEFAULT: "#173F2E", 900: "#0F2B1F", 800: "#173F2E", 700: "#1F5039", 600: "#2C6A4C", 500: "#3F8560" },
        leaf: { DEFAULT: "#8DBF6A", 300: "#B7D99C", 100: "#E4F0D9" },
        ember: { DEFAULT: "#E2622B", 600: "#C9501C", 400: "#F08A55", 100: "#FBE3D5" },
        saffron: "#F2B544",
        // Matches the backdrop of the studio product photos so photo tiles blend in.
        studio: "#E1DAD5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7vw, 6.25rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.25rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.2vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      borderRadius: { xl: "14px", "2xl": "20px", "3xl": "28px" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "none" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        "fade-up": "fade-up .9s cubic-bezier(0.22,1,0.36,1) both",
        "spin-slow": "spin-slow 90s linear infinite",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
