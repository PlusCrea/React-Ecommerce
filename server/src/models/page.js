var mongoose = require("mongoose"),
  slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
var Schema = mongoose.Schema;

var pageSchema = new Schema({
  title: {
    type: String,
    trim: true,
    minLength: 10,
    maxLength: 150,
    required: [true, "Why no title?"],
  },
  slug: { type: String, slug: "title", unique: true },
  desc: {
    type: String,
    trim: true,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Page", pageSchema);
