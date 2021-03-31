var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var typeSchema = new Schema({
  name: {
    type: String,
    maxlength: 100,
  },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Type", typeSchema);
