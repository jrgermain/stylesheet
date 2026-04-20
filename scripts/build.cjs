const fs = require("node:fs/promises");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");
const { bundle, browserslistToTargets } = require("lightningcss");
const browserslist = require("browserslist");
const esbuild = require("esbuild");

const projectRoot = path.join(__dirname, "..");
const targets = browserslistToTargets(browserslist("defaults"));

const createCssBundle = async (sourcePath, destPath) => {
  const absoluteSourcePath = path.join(projectRoot, sourcePath);

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
                "base64",
              )}`,
            };
        }
      },
    },
  });

  if (result.map) {
    const destFilename = path.basename(destPath);
    const sourceMapRef = `\n/*# sourceMappingURL=./${destFilename}.map */`;
    await fs.writeFile(destPath, result.code);
    await fs.appendFile(destPath, sourceMapRef);
    await fs.writeFile(`${destPath}.map`, result.map);
  } else {
    await fs.writeFile(destPath, result.code);
  }
};

const createJsBundle = async (sourcePath, destPath) => {
  const absoluteSourcePath = path.join(projectRoot, sourcePath);

  await esbuild.build({
    entryPoints: [absoluteSourcePath],
    outfile: destPath,
    platform: "browser",
    target: ["es2020"],
    sourcemap: "linked",
    minify: true,
  });
};

(async () => {
  // Create temp directory for build artifacts
  const tempPath = path.join(projectRoot, `build/${Date.now()}`);

  // Build TypeScript
  execSync(`npx tsc --outDir '${tempPath}'`, {
    stdio: "inherit",
    cwd: projectRoot,
  });

  // Build CSS
  await createCssBundle("src/styles/index.css", `${tempPath}/stylesheet.css`);

  // Create client-side JS bundle
  await createJsBundle("src/enhance.ts", `${tempPath}/enhance.js`);

  // Delete previous build
  const distPath = path.join(projectRoot, "dist");
  await fs.rm(distPath, { recursive: true, force: true });

  // Move new build to dist
  await fs.rename(tempPath, distPath);

  console.log("Build complete");
})().catch((e) => {
  console.error("Build failed", e);
  process.exit(1);
});
