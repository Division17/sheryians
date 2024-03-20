var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/failed', function(req, res, next) {
  req.flash("error", " ku bhai")
  res.send("ban gya flash dc alla");
});

router.get('/login', function(req, res, next) {
console.log(req.flash("error"))  
res.send("terminal dekhna zara")
       
});


module.exports = router;
