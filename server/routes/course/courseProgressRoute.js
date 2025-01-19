const express = require("express");
const {
  getAllCoursesProgress,
  getCourseProgressByUserId,
  updateLessonByCourseId,
} = require("../../controllers/courses/courseProgress");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.get("/", getAllCoursesProgress);

router.get("/:id", getCourseProgressByUserId);

router.put("/:id", grantedAccess, updateLessonByCourseId);

module.exports = router;
