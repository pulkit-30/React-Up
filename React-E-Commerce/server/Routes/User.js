const Auth = require("../Models/Auth");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const Products = require("../Models/Products");

router.put("/:id", async (req, res) => {
  if (req.body.UserId === req.params.id) {
    if (req.body.Password) {
      const salt = await bcrypt.genSalt(10);
      req.body.Password = await bcrypt.hash(req.body.Password, salt);
    }
    try {
      const UpdatedUser = await Auth.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(UpdatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can only modify your account");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    try {
      await Auth.findByIdAndDelete(req.params.id, () => {
        console.log("User deleted SuccessFully");
      });
      await Products.deleteMany({ UserId: req.params.id });
      res.status(200).json("User deleted Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.json(error);
  }
});
router.get("/:id", async (req, res) => {
  if (req.body.UserId === req.params.id) {
    try {
      const user = await Auth.findById(req.params.id);
      const { Password, ...other } = user._doc;
      res.status(200).json(other);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(404).json("User Not Found");
  }
});
module.exports = router;
