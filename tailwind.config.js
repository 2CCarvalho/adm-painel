module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-/,
    },
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "rgb(0, 220, 130)",
      },
    },
  },
  plugins: [],
};
