const fs = require("fs");

const readStream = fs.createReadStream("../docs/blogs3.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("../docs/blogs4.txt");

//on is an event listener
// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

//piping (other method for previous one)
readStream.pipe(writeStream);
