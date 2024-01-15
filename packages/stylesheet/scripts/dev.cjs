const fs = require("node:fs/promises");
const http = require("node:http");
const handler = require("serve-handler");
const chokidar = require("chokidar");
const path = require("node:path");
const postcss = require("postcss");
const postcssSass = require("@csstools/postcss-sass");
const postcssPresetEnv = require("postcss-preset-env");
const child_process = require("node:child_process");

const root = path.join(__dirname, "..");
const docs = path.join(root, "docs");
const src = path.join(root, "src");
const mainStyle = path.join(src, "styles/index.scss");
const styleOutput = path.join(docs, "index.css");

const server = http.createServer((request, response) => {
  return handler(request, response, {
    redirects: [{ source: "/", destination: "/docs" }],
  });
});

server.listen(8080);

chokidar.watch(src).on("all", () => {
  child_process.execSync(`node ${path.join(__dirname, "build.cjs")}`);
});

console.log("http://localhost:8080/");
