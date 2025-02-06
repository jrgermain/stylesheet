const fs = require("node:fs/promises");
const { readFileSync } = require("node:fs");
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
    visitor: {
      Url({ loc, url }) {
        // Inline assets, whose paths will be a URL starting with "@/" and relative to the project root
        if (!url.startsWith("@/")) {
          return;
        }

        // Replace @ with absolute path to project directory
        const absolutePath = path.join(projectRoot, url.slice(2));

        // Read file content
        let content;
        try {
          content = readFileSync(absolutePath, "utf-8");
        } catch (e) {
          throw new Error("Could not resolve url: " + url);
        }

        // Replace the URL with a data URL
        const extension = path.extname(url);
        switch (extension) {
          case ".svg":
            return {
              loc,
              url: `data:image/svg+xml,${content
                .replaceAll('"', "'")
                .replace(/>\s{1,}</g, "><")
                .replace(/\s{2,}/g, " ")
                .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)}`,
            };
          default:
            return {
              loc,
              url: `data:image/${extension.slice(1)};base64,${content.toString(
                "base64"
              )}`,
            };
        }
      },
    },
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
