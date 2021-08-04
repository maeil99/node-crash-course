//import other function in other file
// const importPeople = require("./people");

// console.log(importPeople);

// console.log(importPeople.orang[2]);
// console.log(importPeople.umur[2]);

//import using destructuring
const { orang, umur } = require("./people");

console.log(orang, "\n", umur);

//import built in function
//can be used for os system properties
const os = require("os");
// console.log(os);
//will show laptop platform and its home directory
console.log(
  `platform: ${os.platform()}`,
  "\n",
  `Home directory: ${os.homedir()}`
);
