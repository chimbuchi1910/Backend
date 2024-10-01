const express = require("express");
const {
  getAllContents,
  postContent,
  getSingleContent,
  updateContent,
  deleteContent,
} = require("../controllers/Content");
const route = express.Router();
route.get("/", getAllContents);
route.post("/", postContent);
route.get("/:id", getSingleContent); //for params
route.put("/:id", updateContent);
route.delete("/:id", deleteContent);
module.exports = route;
