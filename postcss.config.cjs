// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- THIS IS THE KEY CHANGE
    autoprefixer: {},
  },
};