const router = require('express').Router();
const userModel = require('../models/user');
const blogModel = require('../models/blog');
const bcrypt = require('bcrypt');

// register user
router.post('/register', async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const HashedPassword = bcrypt.hashSync(req.body.password, salt);
    req.body.password = HashedPassword;
    const newUser = await new userModel(req.body);
    await newUser.save();
    res.status(200).json({
      isError: false,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

// login user
router.post('/login', async (req, res) => {
  try {
    const userData = await userModel.findOne({ email: req.body.email });
    if (!userData) throw new Error('No User Found!!');
    const valid = bcrypt.compareSync(req.body.password, userData.password);

    if (!valid) throw new Error('Invalid Password!!');

    res.status(200).json({
      isError: false,
      data: {
        user: userData,
      },
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error: error.message,
    });
  }
});

// get user
router.get('/:id', async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json({
      isError: false,
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error: error.message,
    });
  }
});

// edit user account
router.put('/:id', async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json({
      isError: false,
      message: 'User Account Updates Successfully!',
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

// delete user account
router.delete('/:id', async (req, res) => {
  try {
    if (req.params.id !== req.body._id)
      throw new Error('You cannot delete this account!');
    await userModel.findByIdAndDelete(req.params.id);
    await blogModel.deleteMany({ user: req.params.id });

    res.status(200).json({
      isError: false,
      message: 'Account Deleted Successfully',
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

module.exports = router;
