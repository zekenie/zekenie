module.exports = {
  purge: ["../**/*.njk", "../posts/*.md", "../**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '200': '2',
      },
      scale: {
        '175': '1.75',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
