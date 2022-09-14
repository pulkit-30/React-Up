const Mongoose = require('mongoose');

const BlogSchema = new Mongoose.Schema(
  {
    user: String,
    coverImage: String,
    title: String,
    tags: Array,
    markdown: String,
  },
  {
    timestamps: true,
  }
);
module.exports = Mongoose.model('blog', BlogSchema);
