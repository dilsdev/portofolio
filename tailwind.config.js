/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    themes: ["lofi", "dark"],
    base: true,
    styled: true,
    utils: true, 
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
  purge: ['./public/**/*.html', './src/**/*.js'],
};
