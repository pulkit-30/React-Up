const Checkout = require("../Models/Checkout");
const route = require("express").Router();
route.post("/:id", async (req, res) => {
  try {
    req.body.UserId = req.params.id;
    const newOrder = await new Checkout(req.body);
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json("Something Went Wrong try Again");
  }
});

module.exports = route;
