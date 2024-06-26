/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "emerald",
      "synthwave",
      "fantasy",
      "business",
      "night",
      "retro",
      "wireframe",
      "acid",
      "nord",
      "winter",
      "corporate",
      "aqua",
      "garden",
      "lofi",
      "pastel",
      "cmyk",
    ],
  },
};
