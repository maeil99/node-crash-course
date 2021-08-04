//Global object

//will prompt all available function for global use
//console.log(global);

//this function will run after 3 sec
setTimeout(() => {
  console.log("in the timeout");
  //this function will clear/stop the interval function
  clearInterval(int);
}, 3000);

//this function will run for every 1 sec
const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

//to get directory path
console.log(__dirname);

//to get directory path and file name
console.log(__filename);
