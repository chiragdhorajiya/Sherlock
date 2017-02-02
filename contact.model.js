var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RegisterSchema = new Schema({
  Name:String,
  Password : String,
  Email : String,
  Number : String
});

var Register = mongoose.model("RegisterCollection",RegisterSchema,"RegisterCollection");

module.exports = Register;
