var express = require("express");
var router = express.Router();
const User = require("./users");
const localStrategy = require("passport-local");
const passport = require("passport");
passport.use(new localStrategy(User.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});


router.get("/profile", isLoggedIn, (req,res)=>{
  res.render("profile");
})

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}


router.post("/register", (req, res) => {
  var userdata = new User({
    username: req.body.username,
    secret: req.body.secret,
  });

  User.register(userdata, req.body.password).
  then(function (registereduser) {
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
});

router.post("/login", passport.authenticate("local",{
       successRedirect:"/profile",
       failureRedirect:"/" 
}),function(req, res){ })


module.exports = router;
