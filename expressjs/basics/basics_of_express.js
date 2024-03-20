import express from "express";
const app = express();

app.use((req, res, next)=>{
 console.log("Hi from middle ware");
 next();
});

app.use((req, res, next)=>{
    console.log("Hi from middle ware 2");
    next();
   });

app.get("/",(req, res, next)=>{
    res.send("home route ran")
});

app.get("/profile",(req, res)=>{
    res.send("profile route ran");
});

app.listen(3000,()=>{
    console.log("server is running");
});