const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    image: String,
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('user', userSchema);
