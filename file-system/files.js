const fs = require("fs");

//reading files
// fs.readFile("../docs/blogs1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

//writing files
// fs.writeFile("../docs/blogs1.txt", "hello world", () => {
//   console.log("file was written");
// });

// fs.writeFile("../docs/blogs2.txt", "hello again", () => {
//     console.log("file was written");
//   });

//directories
if (!fs.existsSync("./assests")) {
  fs.mkdir("./assests", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
} else {
  fs.rmdir("./assests", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder deleted");
    }
  });
}

//deleting files
if (fs.existsSync("../docs/deleteMe.txt")) {
  fs.unlink("../docs/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
