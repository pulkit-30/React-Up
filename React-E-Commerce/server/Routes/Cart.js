const Cart = require("../Models/Cart");
const route = require("express").Router();
route.get("/", (req, res) => {
  if (req.query.UserId) {
    try {
      Cart.find({ UserId: req.query.UserId }, (error, data) => {
        if (error) {
          res.status(404).json(error);
        } else {
          res.status(200).json(data);
        }
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
});
route.post("/:UserId", async (req, res) => {
  try {
    req.body.UserId = req.params.UserId;
    const newCartProduct = await new Cart(req.body);
    await newCartProduct.save();
    res.status(200).json(newCartProduct);
  } catch (error) {
    res.status(404).json(error.message);
  }
});
route.delete("/:id", async (req, res) => {
  try {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      Cart.find({ UserId: req.query.UserId }, (error, data) => {
        if (error) {
          throw new Error("Something Went Wrong");
        } else {
          console.log(data);
          res.status(200).json(data);
        }
      });
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.json(error);
  }
});
module.exports = route;
