import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  darkMode: 'class', // 通过class控制主题
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'body': 'blue'
      },
      screens: {
        // 统一并对齐媒体查询viewport-size
        // 移动端优先，默认为 min-width
        'sm': '376px',
        'md': '481px',
        'lg': '641px',
        'xl': '769px',
        'laptop': '1025px',
        '2xl': '1217px',
        '3xl': '1921px',
        '4xl': '2561px',
        'max-sm': { 'max': '375px' },
        'max-md': { 'max': '480px' },
        'max-lg': { 'max': '640px' },
        'max-xl': { 'max': '768px' },
        'max-laptop': { 'max': '1024px' },
        'max-2xl': { 'max': '1216px' },
        'max-3xl': { 'max': '1920px' },
        'max-4xl': { 'max': '2560px' },
        // 以下去掉，请使用不带 min- 自定义预设类名
        // 'min-xl': { 'min': '768px' },
        // 'min-2xl': { 'min': '1216px' },
        // 'min-lg': { 'min': '640px' },
        // 'min-lg-max-xl': { 'min': '640px', 'max': '768px' },
      }
    },
  },
  plugins: [nextui()]
};
export default config;
