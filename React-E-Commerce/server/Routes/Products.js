const Product = require("../Models/Products");
const route = require("express").Router();
route.get("/", (req, res) => {
  try {
    if (req.query.ProductId) {
      Product.find({ _id: req.query.ProductId }, (error, data) => {
        if (error) {
          throw new Error("Something Went Wrong");
        } else {
          res.status(200).json(data);
        }
      });
    } else if (req.query.UserId) {
      Product.find({ UserId: req.query.UserId }, (error, data) => {
        if (error) {
          throw new Error("Something Went Wrong");
        } else {
          res.status(200).json(data);
        }
      });
    } else if (req.query.Category) {
      Product.find({ Category: req.query.Category }, (error, data) => {
        if (error) {
          throw new Error("Something Went Wrong");
        } else {
          res.status(200).json(data);
        }
      });
    } else {
      Product.find({}, (error, data) => {
        if (error) {
          throw new Error("Something Went Wrong");
        } else {
          res.status(200).json(data);
        }
      });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
});
route.post("/AddProduct/:UserId", async (req, res) => {
  try {
    const newProduct = await new Product(req.body);
    newProduct.UserId = req.params.UserId;
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.json(error.message);
  }
});
route.delete("/:id", async (req, res) => {
  try {
    try {
      await Product.findByIdAndDelete(req.params.id);
      Product.find({ UserId: req.query.UserId }, (error, data) => {
        if (error) {
          throw new Error("Something Went Wrong");
        } else {
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
