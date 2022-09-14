const mongoose = require("mongoose");
const CheckoutSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    UserName: {
      type: String,
    },
    Email: {
      type: String,
      required: true,
    },
    Order: {
      type: Array,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    PinCode: {
      type: String,
      required: true,
    },
    ShippingAddress: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Checkout", CheckoutSchema);
