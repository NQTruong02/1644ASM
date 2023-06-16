var mongoose = require('mongoose');

var ToySchema = mongoose.Schema(
   {
      name : String,
      image : String,
      price : Number,
      category : String,
      quantity : String,
 
   }
);

var ToyModel = mongoose.model("ASM1644ToyStore", ToySchema, "ToyStore");

module.exports = ToyModel;