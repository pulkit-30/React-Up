const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
      max: 25,
      min: 2,
    },
    LastName: {
      type: String,
      required: true,
      max: 25,
      min: 2,
    },
    UserName: {
      type: String,
      required: true,
      max: 50,
      min: 4,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    Password: {
      type: String,
      required: true,
      min: 8,
    },
    BrandName: String,
    Products: {
      type: Array,
    },
    Age: {
      type: Number,
      required: false,
    },
    ProfilePicture: {
      type: String,
      required: false,
      default: null,
    },
    About: {
      type: String,
      required: false,
      default: "Hii I am New User",
    },
    UserCart: {
      type: Array,
      required: false,
      default: [],
    },
    IsDisabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Auth", AuthSchema);
