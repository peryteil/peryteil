/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // 경로는 프로젝트 구조에 따라 조정
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require("daisyui")],
}