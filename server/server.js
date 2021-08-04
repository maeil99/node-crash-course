const http = require("http");

//create a server
const server = http.createServer((req, res) => {
  console.log("request made");
});

const port = 3000;

//server port number and its host name
server.listen(port, "localhost", () => {
  console.log(`listening for request on port ${port}`);
});
