/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')], // 以插件的方式引入
  daisyui: {
    themes: ['light', 'dark']
  }
}
