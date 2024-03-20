import express from "express";

const app  = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));

app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/error",(req, res)=>{
    throw Error
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err,
    code: 500})
  })

  app.listen(5000,()=>{
    console.log("Server is running");
  })