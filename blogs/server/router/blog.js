const router = require('express').Router();
const blogModel = require('../models/blog');

router.get('/', async (req, res) => {
  try {
    var data = [];
    if (req.query.id) {
      data = await blogModel.findById(req.query.id);
    } else {
      data = await blogModel.find({});
      data = data.reverse();
    }
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
    const newBlog = await new blogModel(req.body);
    await newBlog.save();
    res.status(200).json({
      isError: false,
      message: 'Blog Published Successfully!',
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

// edit blog
router.put('/:userId/:blogId', async (req, res) => {
  try {
    await blogModel.findByIdAndUpdate(req.params.blogId, {
      $set: req.body,
    });

    res.status(200).json({
      isError: false,
      message: 'Blog Updates Successfully!',
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

// delete blog
router.delete('/:userId/:blogId', async (req, res) => {
  try {
    if (
      req.params.userId !== req.body.user ||
      req.params.blogId !== req.body._id
    )
      throw new Error('You cannot delete this post!');
    await blogModel.findByIdAndDelete(req.params.blogId);
    res.status(200).json({
      isError: false,
      message: 'Post Deleted Successfully',
    });
  } catch (error) {
    res.status(400).json({
      isError: true,
      error,
    });
  }
});

module.exports = router;
