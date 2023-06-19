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

var ToyModel = mongoose.model("ToyStore1", ToySchema , "ToyStore1" );

module.exports = ToyModel;