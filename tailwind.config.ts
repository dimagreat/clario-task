import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          200: "#4A4E71",
          500: "#151D51",
        },
        green: "#27B274",
        grey: "#6F91BC",
        red: {
          100: "#ED5F59",
          500: "#FF8080",
        },
      },
      fontSize: {
        sm: '13px',
        "3xl": "28px",
      },
      borderRadius: {
        "3xl": "30px",
        lg: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
