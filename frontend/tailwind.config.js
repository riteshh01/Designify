/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    "bg-gradient-to-br",
    "from-[#401B98]/5",
    "to-[#180027]/10",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};