const Content = require("../models/Content");
const asyncHandler = require("express-async-handler");
const getAllContents = asyncHandler(async (req, res) => {
  const getContents = await Content.find().sort({ createdAt: -1 });
  res.status(200).json(getContents);
});

const postContent = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = await Content.create({
      title,
      body,
    });
    res.status(200).json({
      message: "Post Successful",
      newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to create",
      error,
    });
  }
});

const getSingleContent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Content.findById(id);
    if (!data) {
      res.status(500).json({
        message: "Content Not Found",
      });
    }
    res.status(200).json({
      message: "Successful",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Unsuccessful",
      error,
    });
  }
});

module.exports = {
  getAllContents,
  postContent,
  getSingleContent,
};
