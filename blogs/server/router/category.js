const router = require('express').Router();
const categoryModel = require('../models/categories');

router.get('/', async (req, res) => {
  try {
    const data = await categoryModel.find({});
    res.status(200).json({
      isError: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await new categoryModel(req.body);
    await newCategory.save();
    res.status(200).json({
      isError: false,
      message: 'Category saved successfully',
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

module.exports = router;
