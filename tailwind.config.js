/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        // padding: "2rem", // Define um padding global para o container
        screens: {
          // sm: "640px", // Define a largura máxima para telas pequenas
          // md: "768px", // Define a largura máxima para telas médias
          // lg: "1024px", // Define a largura máxima para telas grandes
          // xl: "1280px", // Define a largura máxima para telas extra grandes
          "2xl": "1436px", // Define a largura máxima para telas 2x extra grandes
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
