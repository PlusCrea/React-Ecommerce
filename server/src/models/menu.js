import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
  name: String,
  link: String,
  menutype: String,
  mainId: String,
  order: Number,
  page: { type: Schema.Types.ObjectId, ref: "Page" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  type: { type: Schema.Types.ObjectId, ref: "Type" },
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Menu", menuSchema);
