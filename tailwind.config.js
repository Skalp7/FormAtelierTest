/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f2eb",
        ink: "#161614",
        graphite: "#363632",
        mist: "#d9d4ca",
        line: "#c9c0b4",
        moss: "#33453b",
        clay: "#a56f57",
        steel: "#66717a"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"]
      },
      letterSpacing: {
        caps: "0.08em"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(22, 22, 20, 0.12)"
      }
    }
  },
  plugins: []
};
