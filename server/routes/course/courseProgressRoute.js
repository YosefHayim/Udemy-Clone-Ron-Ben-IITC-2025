const express = require("express");
const {
  getAllCoursesProgress,
  getCourseProgressByUserId,
} = require("../../controllers/courses/courseProgress");

const router = express.Router();

router.get("/", getAllCoursesProgress);

router.get("/:id", getCourseProgressByUserId);

module.exports = router;
