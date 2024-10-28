/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        0: "0",
        1: "0.5rem",
        2: "1rem",
      },
      colors: {
        "primary-light": "#EFD9B4",
        "primary-dark": "#3B454D",
        "chess-dark": "#494949",
      },
    },
  },
  plugins: [
    {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
