var express = require('express');
var router = express.Router();
const Users = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create", async function(req, res){
  const createdUser = await Users.create({
    name:"saurav",
    username: "Pagalsapna",
    age:22,
  })
  res.send(createdUser);
})

router.get("/allusers", async function(req, res){
  const all = await Users.find();
  res.send(all);
})


router.get("/one", async function(req, res){
  const one = await Users.findOne({username:"division"});
  res.send(one);
})

router.get("/deleteOne", async function(req, res){
  const del = await Users.findOneAndDelete({username:"division"});
  res.send(del);
})

router.get("/delete", async function(req, res){
  const dele = await Users.findOneAndDelete({});
  res.send(dele);
})

router.get("/check", function(req, res){
  req.session.value = "skalaka boom boom"
  res.send( req.session.value);
})

router.get("/similar", function(req, res){
   if(req.session.value === "skalaka boom boom"){
    res.send("sahi mein bhai hai same mat maan")
   }

   else {
    res.send("mein to na sehta bhai")
   }
})

router.get("/khatam", function(req, res){
  req.session.destroy((err)=>{
     if(err) throw err;

     res.send("finish viro")
  })
  res.send( req.session.value);
})


router.get("/cookie", (req, res)=>{
   res.cookie("naam", "mein kyu bataun");
   res.send("Bana gayi cookie")
})

router.get("/cookieread", (req, res)=>{
 
  res.send(req.cookies.naam)
  res.send("read value of cookie")
})

router.get("/cookiedel", (req, res)=>{
  res.send("deleted")
  res.clearCookie("naam");
})


module.exports = router;
