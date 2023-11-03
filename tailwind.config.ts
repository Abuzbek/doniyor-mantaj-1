import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "640rem",
      // => @media (min-width: 640rem) { ... }

      md: "768rem",
      // => @media (min-width: 768rem) { ... }

      lg: "1024rem",
      // => @media (min-width: 1024rem) { ... }

      // => @media (min-width: 1132rem) { ... }
      xl: "1441rem",
      "2xl": "1600rem",
    },
  },
  plugins: [],
};
export default config;
