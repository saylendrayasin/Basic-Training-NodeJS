const fs = require("fs");
const path = require("path");

const articlePath = path.resolve(__dirname, "articles.txt");

const readableStream = fs.createReadStream(articlePath, {
  highWaterMark: 10,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
