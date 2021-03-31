var mongoose = require("mongoose");
var Schema = mongoose.Schema;

function getMoney(value) {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
}

var productSchema = new Schema({
  title: {
    type: String,
    trim: true,
    minLength: 10,
    maxLength: 50,
    required: [true, "Why no title?"],
  },
  shortdesc: {
    type: String,
    trim: true,
    minLength: 10,
    maxLength: 250,
    required: [true, "Why no Short Desc?"],
  },
  price: {
    type: Schema.Types.Decimal128,
    get: getMoney,
  },
  mark: {
    type: String,
    trim: true,
    required: true,
  },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  type: { type: Schema.Types.ObjectId, ref: "Type" },
  color: [String],
  size: [String],
  images: [String],
  desc: {
    type: String,
    trim: true,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const decimal2JSON = (v, i, prev) => {
  if (v !== null && typeof v === "object") {
    if (v.constructor.name === "Decimal128") prev[i] = v.toString();
    else
      Object.entries(v).forEach(([key, value]) =>
        decimal2JSON(value, key, prev ? prev[i] : v)
      );
  }
};

productSchema.set("toJSON", {
  transform: (doc, ret) => {
    decimal2JSON(ret);
    return ret;
  },
});

module.exports = mongoose.model("Product", productSchema);
