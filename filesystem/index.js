const fs = require("fs");
const path = require("path");

const testPath = path.resolve(__dirname, "notes.txt");

console.log(testPath);

//async
const datas = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
};
fs.readFile(testPath, "utf-8", datas);

// //sync
// const data = fs.readFileSync(testPath, "utf-8");
// console.log(data);
