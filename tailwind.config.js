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
        paper: "#ffffff",
        ink: "#000000",
        graphite: "#2f3842",
        mist: "#f1f1f1",
        line: "#d6d6d6",
        moss: "#2f3842",
        clay: "#8b8d8e",
        steel: "#8b8d8e"
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "Raleway", "system-ui", "sans-serif"],
        display: ["var(--font-raleway)", "Raleway", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        caps: "0.05em",
        widebrand: "0.12em"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(22, 22, 20, 0.12)"
      }
    }
  },
  plugins: []
};
