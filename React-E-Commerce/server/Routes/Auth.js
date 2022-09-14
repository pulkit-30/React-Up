const route = require("express").Router();
const Auth = require("../Models/Auth");
const bcrypt = require("bcrypt");
route.get("/", (req, res) => {
  res.send("This is Auth Route");
});
route.post("/Register", async (req, res) => {
  try {
    if (req.body.Password) {
      const salt = await bcrypt.genSalt(parseInt(process.env.SaltRounds));
      const HashedPassword = await bcrypt.hash(req.body.Password, salt);
      const newUser = await new Auth({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserName: `${req.body.FirstName} ${req.body.LastName}`,
        Email: req.body.Email,
        Password: HashedPassword,
      });
      if (newUser) {
        await newUser.save();
        res.status(200).json(newUser);
      } else {
        throw new Error("Something Went Wrong");
      }
    } else {
      throw new Error("Something went wrong!");
    }
  } catch (error) {
    res.status(400).json({ isError: true, ErrorMessage: error.message });
  }
});
route.post("/LogIn", async (req, res) => {
  try {
    Auth.findOne({ Email: req.body.Email }, async (error, user) => {
      if (error) {
        res.status(400).json("Something Went Wrong");
      } else {
        if (user) {
          const validate = await bcrypt.compare(
            req.body.Password,
            user.Password
          );
          if (validate) {
            res.status(200).json(user);
          } else {
            res.status(400).json("Incorrect Password");
          }
        } else {
          res.status(400).json("No User Found");
        }
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = route;
