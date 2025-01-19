const express = require("express");
const {
  getAllCoursesProgress,
  getCourseProgressByUserId,
  updateLessonByCourseId,
  getCourseProgressById,
} = require("../../controllers/courses/courseProgress");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

router.get("/", getAllCoursesProgress);

router.get("/:courseProgressId", getCourseProgressById);

router.get("/:id", getCourseProgressByUserId);

router.put("/:id", grantedAccess, updateLessonByCourseId);

module.exports = router;
