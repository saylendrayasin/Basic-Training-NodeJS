const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input.txt");
const outputPath = path.resolve(__dirname, "output.txt");

const readableStream = fs.createReadStream(inputPath, {
  highWaterMark: 15,
});

const writeableStream = fs.createWriteStream(outputPath);

readableStream.on("readable", () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`);
  } catch (e) {
    console.log(e);
  }
});

readableStream.on("end", () => {
  writeableStream.end();
});
