const fs = require("node:fs/promises");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { rimraf } = require("rimraf");
const { bundle, browserslistToTargets } = require("lightningcss");
const browserslist = require("browserslist");

const projectRoot = path.join(__dirname, "..");
const targets = browserslistToTargets(browserslist("defaults"));
const tsc = path.join(projectRoot, "node_modules", ".bin", "tsc");

const processCssFile = async (sourcePath, destPath) => {
  const absoluteSourcePath = path.join(projectRoot, sourcePath);
  const absoluteDestPath = path.join(projectRoot, destPath);

  const sourceContent = await fs.readFile(absoluteSourcePath);

  const result = bundle({
    code: sourceContent,
    filename: absoluteSourcePath,
    cssModules: false,
    errorRecovery: false,
    projectRoot: path.dirname(absoluteSourcePath),
    minify: true,
    sourceMap: true,
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
                // Compress/normalize consecutive whitespace characters into single spaces
                .replace(/\s+/g, " ")
                // Replace all double quotes with single quotes
                .replaceAll('"', "'")
                // Remove whitespace between tags
                .replaceAll("> <", "><")
                // Remove whitespace at beginning of attribute values
                .replaceAll("=' ", "='")
                // Remove whitespace at end of attribute values
                .replaceAll(" '", "'")
                // Encode characters that MUST be encoded (we can leave the rest since browsers are forgiving)
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

  // Build CSS
  await processCssFile("src/styles/index.css", "dist/stylesheet.css");

  // Build TypeScript
  execFileSync(tsc, { cwd: projectRoot, stdio: "inherit" });

  console.log("Build complete");
})().catch((e) => {
  console.error("Build failed", e);
  process.exit(1);
});
