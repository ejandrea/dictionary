import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        100: '#3A3A3A',
        200: '#2D2D2D',
        300: '#1F1F1F',
        400: '#050505'
      },
      gray: {
        100: '#F4F4F4',
        200: '#E9E9E9',
        300: '#757575'
      },
      white: '#FFFFFF',
      accent: '#A445ED',
      error: '#FF5252'
    },
    fontFamily: {
      inter: 'var(--font-inter)',
      lora: 'var(--font-lora)',
      inconsolata: 'var(--font-inconsolata)'
    }
  },
  plugins: [],
};
export default config;
