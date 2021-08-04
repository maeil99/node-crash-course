const express = require("express");

// express app
const app = express();

//listen for requests at port 3000
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>Homepage</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<p>About page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page (will use if no other req is match)
app.use((req, res) => {
  res.sendFile("./views/404page.html", { root: __dirname });
});
