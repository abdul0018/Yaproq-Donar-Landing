import type { Config } from "tailwindcss";

// Brand palette from the official YAPROQ identity: logo green #115A2E, site green #3E5F21, site yellow #EDCD49.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2.5rem" }, screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        green: {
          50: "#F1F6EE",
          100: "#E2ECDC",
          200: "#C5D9BA",
          // Brand olive (official site green): accent words in headings, link hovers.
          500: "#3E5F21",
          600: "#2E7A45",
          700: "#1A6B39",
          800: "#115A2E",
          900: "#0B3D1F",
          950: "#072813",
        },
        yellow: {
          DEFAULT: "#EDCD49",
          100: "#FBF3CF",
          200: "#F6E39A",
          300: "#F2D86E",
          400: "#EDCD49",
          500: "#DDB92C",
          600: "#B8961A",
        },
        ink: { DEFAULT: "#0F2417", 700: "#2B3D31", 600: "#45574B", 500: "#5E6E63", 400: "#83918A" },
        // Warm paper ground from the user's reference posters.
        paper: "#F6F0E1",
        "paper-deep": "#ECE1C8",
        sage: "#DCE5D0",
        // Backdrop of the official studio product photos.
        studio: "#ECEBE7",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.8rem, 6.6vw, 5.6rem)", { lineHeight: "1", letterSpacing: "-0.015em" }],
        "display-lg": ["clamp(2.1rem, 4.4vw, 3.6rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.6rem, 2.6vw, 2.2rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      borderRadius: { xl: "14px", "2xl": "20px", "3xl": "28px" },
      transitionTimingFunction: { out: "cubic-bezier(0.16, 1, 0.3, 1)" },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(22px)" }, "100%": { opacity: "1", transform: "none" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        "leaf-in": { "0%": { opacity: "0", transform: "scale(.92) rotate(-6deg)" }, "100%": { opacity: "1", transform: "none" } },
      },
      animation: {
        "fade-up": "fade-up .8s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 45s linear infinite",
        "leaf-in": "leaf-in 1.2s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
