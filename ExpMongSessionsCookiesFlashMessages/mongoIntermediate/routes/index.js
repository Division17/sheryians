var express = require("express");
var router = express.Router();
const userModel = require("./users.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  await userModel.create({
    username: "Sauriya",
    nickname: "Sid",
    description: "A girl 25",
    categories: [
      "fashion",
         "life",
         "free",
          "dancer"
    ],
  });
  res.send("Created");
});

router.get("/check", async function (req, res) {
  let dval = await userModel.find();
  res.send(dval);
});

// searching a case insensitive this gives all the enteries includes the string to be searched

router.get("/search", async function (req, res) {
  let regex = RegExp("SauRav", "i");
  let search = await userModel.find({ username: regex });
  res.send(search);
});

// ^ - string starting with
// $ - string ending with

// both combined are used to find the string only consisting the following string

router.get("/searchonly", async function (req, res) {
  let regex = RegExp("^SauRav$", "i");
  let search = await userModel.find({ username: regex });
  res.send(search);
});


// to search inside an arrray of a field inorder to display all users consisting of the following string
router.get("/fashion", async function (req, res) {
  let dval = await userModel.find({categories : { $all : ["fashion"]}});
  res.send(dval);
});


router.get("/java", async function (req, res) {
  let dval = await userModel.find({categories : { $all : ["Java","React"]}});
  res.send(dval);
});


// on the basis of the date created
   //    new Date("YYYY-MM-DD")    date in this format
   //    $gte stands for greater than equal to ,     $lte stands for less .......

router.get("/date", async function (req, res) {
  var date1 = new Date("2023-12-16");
  var date2 = new Date("2023-12-17");
  let dva = await userModel.find({ datecreated : { $gte: date1 , $lte:date2 }});
  res.send(dva);
});


// data fields on the basis whether the data category specified exists or not if then give out all data that consist that field

router.get("/field", async function (req, res) {
  let dval = await userModel.find({categories :{ $exists : true }});  // data that consist of the given data field
  res.send(dval);
});

//finding a particular value on the basis of the length of the given data item of the model  here for eg. from nickname

router.get("/len", async function (req, res) {
  let dval = await userModel.find({
  $expr: [
    {$gte: [{$strLenCP:"nickname"}, 0] },
    {$lte:[ {$strLenCP:"nickname"}, 1] }
  ]
  });
  res.send(dval);
});

module.exports = router;
