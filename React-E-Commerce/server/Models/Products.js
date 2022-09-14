const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    ProductCategory: {
      type: String,
      required: true,
    },
    ProductImage: {
      type: String,
      required: false,
    },
    ProductName: {
      type: String,
      required: true,
    },
    ProductDescription: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Offer: {
      type: String,
      required: false,
    },
    Stars: {
      type: Number,
      required: true,
    },
    Stocks: {
      type: Number,
      default: 1,
    },
    Reviews: {
      type: Array,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
