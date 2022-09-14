const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema(
  {
    ProductId: String,
    ProductName: String,
    Reviews: Array,
  },
  { timestamps: true }
);
module.exports = new mongoose.model("Reviews", ReviewSchema);
