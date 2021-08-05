const express = require("express");

// express app
const app = express();

//register View engine
app.set("view engine", "ejs");

//listen for requests at port 3000
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>Homepage</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat browser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { tajuk: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>About page</p>");
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { tajuk: "About" });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { tajuk: "Create a new blog" });
});

//404 page (will use if no other req is match)
app.use((req, res) => {
  //res.sendFile("./views/404page.html", { root: __dirname });
  res.status(404).render("404", { tajuk: "404 Forbidden" });
});
