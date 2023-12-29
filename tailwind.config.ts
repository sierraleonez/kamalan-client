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
        "merica-to-pandan": `linear-gradient(to right, #FFFBBB, #889966)`,
        "pandan-to-merica": `linear-gradient(to right, #889966, #FFFBBB)`,
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-registry-bg": "url('/static/asset/hero/registry_bg.jpg')",
        "hero-gift-bg": "url('/static/asset/hero/gift_bg.jpg')",
      },
      colors: {
        pandan: "#889966",
        merica: "#FFFBBB",
        kemiri: "#FFEECC",
        seledri: "#BBCC77",
        gula: "#DDDDDD",
        kunyit: "#FF9933",
        salam: "#667733",
        wortel: "#FF9944",
        emas: "#BB9933",
        susu: "#FFFFFF",
        kluwak: "#333333",
        blau: "#77AAEE",
        soga: "#CC1133",
        talas: "#FF00EE",
      },
      width: {
        inherit: 'inherit'
      }
    },
  },
  plugins: [],
};
export default config;
