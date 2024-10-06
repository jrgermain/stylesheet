const fs = require("node:fs/promises");
const path = require("node:path");
const { rimraf } = require("rimraf");
const postcss = require("postcss");
const postcssSass = require("@csstools/postcss-sass");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

const sourceFilePath = path.join(__dirname, "../src/styles/index.scss");
const destDirectoryPath = path.join(__dirname, "../dist");

/** @type {import('postcss-preset-env').pluginOptions} */
const presetEnvOptions = {
  features: {
    "oklab-function": false,
    "custom-properties": false,
  },
};

/** @type {import('cssnano').Options} */
const cssNanoOptionsNormal = {
  preset: ["default", { normalizeWhitespace: false }],
};

/** @type {import('cssnano').Options} */
const cssNanoOptionsMinified = {
  preset: "default",
};

const processFile = async ({ source, plugins, outputFilename }) => {
  const outputPath = path.join(destDirectoryPath, outputFilename);

  return postcss(plugins)
    .process(source, {
      from: sourceFilePath,
      to: outputPath,
    })
    .then((result) => {
      const promises = [];
      if (result.map) {
        promises.push(
          fs.writeFile(
            outputPath,
            `${result.css}\n/*# sourceMappingURL=${outputFilename}.map */`
          )
        );
        promises.push(fs.writeFile(`${outputPath}.map`, result.map.toString()));
      } else {
        promises.push(fs.writeFile(outputPath, result.css));
      }
      return promises;
    });
};

rimraf(destDirectoryPath)
  .then(() => fs.mkdir(destDirectoryPath))
  .then(() => fs.readFile(sourceFilePath))
  .then((source) =>
    Promise.all([
      processFile({
        source,
        plugins: [
          postcssSass,
          postcssPresetEnv(presetEnvOptions),
          cssnano(cssNanoOptionsNormal),
        ],
        outputFilename: "index.css",
      }),
      processFile({
        source,
        plugins: [
          postcssSass,
          postcssPresetEnv(presetEnvOptions),
          cssnano(cssNanoOptionsMinified),
        ],
        outputFilename: "index.min.css",
      }),
    ])
  )
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
