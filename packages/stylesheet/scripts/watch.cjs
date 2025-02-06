const path = require("node:path");
const child_process = require("node:child_process");
const chokidar = require("chokidar");

const rebuild = () => {
  console.time("Rebuilding stylesheet");
  child_process.execSync("node build.cjs", {
    stdio: "inherit",
    cwd: __dirname,
  });
  console.timeEnd("Rebuilding stylesheet");
};

chokidar
  .watch([
    path.join(__dirname, "../src"),
    path.join(__dirname, "../index.mjs"),
    path.join(__dirname, "../index.cjs"),
    path.join(__dirname, "../package.json"),
  ])
  .on("change", (path) => {
    console.log(`File ${path} has been changed`);
    rebuild();
  });

rebuild();
