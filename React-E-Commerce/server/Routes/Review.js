const route = require("express").Router();
const Review = require("../Models/Review");
route.get("/", (req, res) => {
  try {
    Review.find({ ProductId: req.query.ProductId }, (error, review) => {
      if (error) {
        res.status(404).json("Something went wrong");
      } else {
        res.status(200).json(review);
      }
    });
  } catch (error) {
    res.json(error.message);
  }
});
route.post("/:UserId/:ProductId", (req, res) => {
  try {
  } catch (error) {}
});
module.exports = route;
