const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice")
const userSchema = mongoose.Schema({
 name:String,
 username:String,
 age:Number,

})

module.exports = mongoose.model("User", userSchema);