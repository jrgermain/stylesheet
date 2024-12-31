const fs = require("node:fs/promises");
const path = require("node:path");
const { rimraf } = require("rimraf");
const postcss = require("postcss");
const postcssSass = require("@csstools/postcss-sass");
const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

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

const projectRoot = path.join(__dirname, "..");

const processCssFile = async (sourcePath, destPath, plugins) => {
  const absoluteSourcePath = path.join(projectRoot, sourcePath);
  const absoluteDestPath = path.join(projectRoot, destPath);

  const sourceContent = await fs.readFile(absoluteSourcePath, "utf-8");

  const result = await postcss(plugins).process(sourceContent, {
    from: absoluteSourcePath,
    to: absoluteDestPath,
  });

  if (result.map) {
    const destFilename = path.basename(destPath);
    const sourceMapRef = `\n/*# sourceMappingURL=./${destFilename}.map */`;
    await fs.writeFile(absoluteDestPath, result.css + sourceMapRef);
    await fs.writeFile(`${absoluteDestPath}.map`, result.map.toString());
  } else {
    await fs.writeFile(absoluteDestPath, result.css);
  }
};

(async () => {
  // Prepare dist directory
  const distPath = path.join(projectRoot, "dist");
  await rimraf(distPath);
  await fs.mkdir(distPath);

  // Process files
  await processCssFile("src/styles/index.scss", "dist/index.css", [
    postcssSass,
    postcssPresetEnv(presetEnvOptions),
    cssnano(cssNanoOptionsNormal),
  ]);
  await processCssFile("src/styles/index.scss", "dist/index.min.css", [
    postcssSass,
    postcssPresetEnv(presetEnvOptions),
    cssnano(cssNanoOptionsMinified),
  ]);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
