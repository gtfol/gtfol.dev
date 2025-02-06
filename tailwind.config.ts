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
      fontFamily: {
        unbounded: ["var(--font-unbounded)"],
        spaceMono: ["var(--font-space-mono)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      colors: {
        "space-gray": "#888888",
        "space-gray-hover": "#a0a0a0",
        silver: "#e8e9f3",
        "hype-purple": "#4733ff",
        "hype-purple-hover": "#5e4dff",
        'hype-purple-text': '#4d66ff',
        'hype-purple-text-hover': '#668aff',
        'cement-gray': '#cecece',
        'void-purple': '#272635',
        'void-purple-hover': '#3D3B53',
        'secondary-bg': '#f4f5f6',
      },
    },
  },
  plugins: [],
};
export default config;
