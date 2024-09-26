const express = require("express");
const {
  getAllContents,
  postContent,
  getSingleContent,
} = require("../controllers/Content");
const route = express.Router();
route.get("/", getAllContents);
route.post("/", postContent);
route.get("/:id", getSingleContent); //for params
module.exports = route;
