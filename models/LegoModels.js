var mongoose = require('mongoose');

var LegoSchema = mongoose.Schema(
   {
      name : String,
      image : String,
      price : Number,
      weight : Number,
      height : Number,
 
   }
);

var LegoModel = mongoose.model("ToyStore2", LegoSchema , "ToyStore2" );

module.exports = LegoModel;