const fs = require("node:fs/promises");
const path = require("node:path");
const { BlobWriter, ZipWriter, Uint8ArrayReader } = require("@zip.js/zip.js");
const { version } = require("../package.json");

const inputs = [
  "../dist/stylesheet.css",
  "../dist/stylesheet.css.map",
  "../dist/enhance.js",
  "../dist/enhance.js.map",
];

const output = `../dist/stylesheet-${version}.zip`;

async function createZipFile() {
  const zipFileWriter = new BlobWriter();
  const zipWriter = new ZipWriter(zipFileWriter);

  // Add all input files
  for (const input of inputs) {
    const filename = path.basename(input);
    const inputPath = path.join(__dirname, input);
    const inputContent = await fs.readFile(inputPath);
    await zipWriter.add(filename, new Uint8ArrayReader(inputContent));
  }

  // Generate the zip file and write it to disk
  const zipFileBlob = await zipWriter.close();
  const zipFileBuffer = Buffer.from(await zipFileBlob.arrayBuffer());
  const outputPath = path.join(__dirname, output);
  await fs.writeFile(outputPath, zipFileBuffer);

  console.log(`Zip file created: ${outputPath}`);
}

createZipFile().catch((e) => {
  console.error("Failed to create zip file", e);
  process.exit(1);
});
