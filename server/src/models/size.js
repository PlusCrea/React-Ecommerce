var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var sizeSchema = new Schema({
  size: {
    type: String,
    maxlength: 50,
  },
});

module.exports = mongoose.model("Size", sizeSchema);
