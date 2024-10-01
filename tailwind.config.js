/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["retro", "cupcake"],
  },
  safelist: ["bg-red-500", "bg-green-500", "bg-blue-500"],
};
