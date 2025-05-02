const path = require("node:path");
const child_process = require("node:child_process");
const chokidar = require("chokidar");

const rebuild = () => {
  console.time("Rebuilding stylesheet");
  try {
    child_process.execSync("node build.cjs", {
      stdio: "inherit",
      cwd: __dirname,
    });
  } catch (error) {
    console.error(error);
  }
  console.timeEnd("Rebuilding stylesheet");
};

chokidar
  .watch([
    path.join(__dirname, "../src"),
    path.join(__dirname, "../package.json"),
  ])
  .on("change", (path) => {
    console.log(`File ${path} has been changed`);
    rebuild();
  });

rebuild();
