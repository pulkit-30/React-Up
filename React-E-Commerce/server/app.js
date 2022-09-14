const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const Auth = require("./Routes/Auth");
const Checkout = require("./Routes/Checkout");
const Product = require("./Routes/Products");
const Review = require("./Routes/Review");
const User = require("./Routes/User");
const Cart = require("./Routes/Cart");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Database is connected Successfully"))
    .catch((error) => console.log(error));
}

//
app.use("/images", express.static(path.join(__dirname, "/images")));
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.FileName);
  },
});
const Upload = multer({ storage: Storage });
app.post("/Upload", Upload.single("file"), (req, res) => {
  res.status(200).json("File has been Uploaded");
});
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//App Routes
app.get("/", (req, res) => {
  res.send("Welcome to E-commerce Api");
});
app.use("/Auth", Auth);
app.use("/Product", Product);
app.use("/Checkout", Checkout);
app.use("/Review", Review);
app.use("/User", User);
app.use("/Cart", Cart);
//App Listening
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("App is Running at Port", port);
});
