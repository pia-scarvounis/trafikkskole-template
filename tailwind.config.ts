import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0049FF",      // hovedblå
        surface: "#F6F7F9",    // grå bakgrunn
        base: "#FFFFFF",       // hvit
        text: "#111827",       // mørk tekst (valgfri)
      },
    },
  },
  plugins: [],
};

export default config;
