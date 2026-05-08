import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 🎨 B2B 신뢰감을 주는 커스텀 브랜드 컬러
      colors: {
        brand: {
          50: '#F4F7FB',
          100: '#E1E9F4',
          500: '#2563EB',
          600: '#1D4ED8',
          900: '#0F172A',
        },
        eco: {
          500: '#10B981',
        },
        accent: {
          500: '#FBBF24',
        }
      },
    },
  },
  plugins: [],
};
export default config;