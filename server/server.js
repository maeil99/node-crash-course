const http = require("http");
const fs = require("fs");

//create a server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "../views/";

  //routing
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //redirect path
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404page.html";
      res.statusCode = 404;
      break;
  }

  //write what the server should sent/response
  //sent a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      //end the request
      res.end();
    } else {
      //res.write(data);

      //end the request
      res.end(data);
    }
  });
});

const port = 3000;

//server port number and its host name
server.listen(port, "localhost", () => {
  console.log(`listening for request on port ${port}`);
});
