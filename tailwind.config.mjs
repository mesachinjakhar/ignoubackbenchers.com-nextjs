/** @type {import('tailwindcss').Config} */
export default {
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
        "custom-bg": "#fbfbfa",
      },
      screens: {
        xs: { max: "420px" },
      },
      keyframes: {
        scrollText: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-110%)" },
        },
      },
      animation: {
        scrollText: "scrollText 13s linear infinite",
      },
    },
  },
  plugins: [],
};
