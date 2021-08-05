const express = require("express");

//3rd party middleware
const morgan = require("morgan");

//mongoose
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");
// express app
const app = express();

//connect to mongoDB
const dbURI =
  "mongodb+srv://ismail:test123@nodecluster.bz0v3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  //listen for requests at port 3000
  .then(() => {
    app.listen(3000), console.log("Connected to http://localhost:3000/");
  })
  .catch((err) => console.log(err));

//register View engine
app.set("view engine", "ejs");

//middleware and static files (will allow all files to be accessed to public)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//middleware
// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
// //used to tell the server to run next function
//   next();
// });

// app.use((req, res, next) => {
//   console.log("\nIn the next middleware");
//   //used to tell the server to run next function
//   next();
// });

// //mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "about my new blog 2",
//     body: "more about my new blog 2",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("610b78cf653b2219847f6264").then((result) => {
//     res.send(result);
//   });
// });

app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  //res.send("<p>Homepage</p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat browser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", { tajuk: "Home", blogs });
  res.redirect("/blogs");
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

//blog routes
app.use('/blogs',blogRoutes);

//404 page (will use if no other req is match)
app.use((req, res) => {
  //res.sendFile("./views/404page.html", { root: __dirname });
  res.status(404).render("404", { tajuk: "404 Forbidden" });
});
