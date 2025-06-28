/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "vue-green": "#42b883",
        "vue-dark": "#35495e",
      },
    },
  },
  plugins: [],
};
