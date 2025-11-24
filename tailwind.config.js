// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gs: {
          red: "#B41E0B",
          redDark: "#981707",
          ink: "#0B0B0B",
          gray: "#6B7280",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ['"Times New Roman"', "Times", "serif"],

        // NOVAS
        poppins: ['"Poppins"', "system-ui", "sans-serif"],
        montserrat: ['"Montserrat"', "system-ui", "sans-serif"],
        poly: ['"Poly"', "serif"],

        // mantém o sans genérico
        sans: [
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },

      boxShadow: { header: "0 2px 16px rgba(0,0,0,0.06)" },
      maxWidth: { container: "1200px" },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
    },
  },
  plugins: [],
};
