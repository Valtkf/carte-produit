/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleImage: {
        bgred1: 'url("/images/BgRed1.png")',
      },
    },
  },
  plugins: [],
};
