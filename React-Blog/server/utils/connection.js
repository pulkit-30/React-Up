const mongoose = require('mongoose');
async function main() {
  await mongoose.connect(process.env.DBURL);
}
module.exports = main;
