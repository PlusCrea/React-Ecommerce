var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var parametersSchema = new Schema({
  category: [
    new Schema(
      {
        catname: String,
        types: [String],
      },
      { _id: false }
    ),
  ],
  brand: {
    type: ["String"],
  },
  color: {
    type: ["String"],
  },
  size: {
    type: ["String"],
  },

  menu: [
    new Schema(
      {
        menuname: String,
        link: String,
        order: Number,
        mainlink: String,
      },
      { _id: false }
    ),
  ],
});

module.exports = mongoose.model("Parameter", parametersSchema);
