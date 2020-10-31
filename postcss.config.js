module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [
              "./components/**/*.js",
              "./pages/**/*.js",
              "./pages/**/*.mjs",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: {
              standard: [/orange$/, /black$/],
            },
          },
        }
      : {}),
  },
};
