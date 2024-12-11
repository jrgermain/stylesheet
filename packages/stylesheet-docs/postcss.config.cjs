module.exports = {
  plugins: [
    require("@csstools/postcss-sass"),
    require("postcss-preset-env")({
      features: {
        "oklab-function": false,
        "custom-properties": false,
      },
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
