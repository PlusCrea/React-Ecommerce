var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
  },
});

module.exports = mongoose.model("Category", categorySchema);
