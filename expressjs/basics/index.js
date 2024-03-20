import express from "express";
const app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.use((req, res, next) => {
  console.log("midleware");
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile", { name: "Harsh" });
});

app.get("/profile/:username", (req, res) => {
  res.send(`hi from user ${req.params.username}`);
});

app.get("/error", (req, res) => {
  throw Error ("Check out your connection")
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)

    res.render('error', { error: err,
    code: 500})
  })

app.listen(3000, () => {
  console.log("server is running");
});
