const Mongoose = require('mongoose');

const categorySchema = new Mongoose.Schema(
  {
    category: String,
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('category', categorySchema);
