import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',        // Для всех файлов в папке src/app
    './src/components/**/*.{js,ts,jsx,tsx}', // Для всех файлов в папке src/components
    './src/pages/**/*.{js,ts,jsx,tsx}',      // Для всех файлов в папке src/pages (если используется)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',  // Добавлено `forwards`, чтобы анимация оставалась в конце
      },
    },
  },
  plugins: [],
};

export default config;
