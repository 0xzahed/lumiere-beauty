/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: { DEFAULT: "#352824", dark: "#2B2421", light: "#4A3B36" },
        ivory: "#FFFDF8",
        cream: "#FBF7F0",
        blush: "#F4E4E3",
        nude: "#E8D5CB",
        sage: "#DDE5DA",
        gold: { DEFAULT: "#C7A77B", dark: "#A98B5F", light: "#E6D3B8" },
        ink: "#2B2421",
        muted: "#817570",
        line: "#EDE5DD",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "serif"],
        sans: ["'Jost'", "'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(53,40,36,0.08)",
        card: "0 2px 16px rgba(53,40,36,0.06)",
        lift: "0 16px 40px rgba(53,40,36,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideIn: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(0)" } },
      },
      animation: {
        fadeUp: "fadeUp .6s ease both",
        fadeIn: "fadeIn .4s ease both",
      },
    },
  },
  plugins: [],
};
