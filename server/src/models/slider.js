import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sliderSchema = new Schema({
  image: String,
  link: String,
  order: Number,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Slider", sliderSchema);
