var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var colorSchema = new Schema({
  color: {
    type: String,
    maxlength: 50,
  },
});

module.exports = mongoose.model("Color", colorSchema);
