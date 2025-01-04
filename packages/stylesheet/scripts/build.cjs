const fs = require("node:fs/promises");
const path = require("node:path");
const { rimraf } = require("rimraf");
const { bundle, browserslistToTargets } = require("lightningcss");
const browserslist = require("browserslist");

const projectRoot = path.join(__dirname, "..");
const targets = browserslistToTargets(browserslist("defaults"));

const processCssFile = async (sourcePath, destPath, options = {}) => {
  const absoluteSourcePath = path.join(projectRoot, sourcePath);
  const absoluteDestPath = path.join(projectRoot, destPath);

  const sourceContent = await fs.readFile(absoluteSourcePath);

  const result = bundle({
    code: sourceContent,
    filename: absoluteSourcePath,
    cssModules: false,
    errorRecovery: false,
    projectRoot: path.dirname(absoluteSourcePath),
    targets,
    ...options,
  });

  if (result.map) {
    const destFilename = path.basename(destPath);
    const sourceMapRef = `\n/*# sourceMappingURL=./${destFilename}.map */`;
    await fs.writeFile(absoluteDestPath, result.code);
    await fs.appendFile(absoluteDestPath, sourceMapRef);
    await fs.writeFile(`${absoluteDestPath}.map`, result.map);
  } else {
    await fs.writeFile(absoluteDestPath, result.code);
  }
};

(async () => {
  // Prepare dist directory
  const distPath = path.join(projectRoot, "dist");
  await rimraf(distPath);
  await fs.mkdir(distPath);

  // Process files
  await processCssFile("src/styles/index.css", "dist/index.css", {
    sourceMap: true,
  });
  await processCssFile("src/styles/index.css", "dist/index.min.css", {
    minify: true,
    sourceMap: true,
  });
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
