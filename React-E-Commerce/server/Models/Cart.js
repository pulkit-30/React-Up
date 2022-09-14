const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    UserId: String,
    ProductId: String,
    ProductImage: String,
    ProductDescription: String,
    ProductName: String,
    Price: Number,
    rating: Number,
    Quantity: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("cart", CartSchema);
