const express = require("express");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../../controllers/courses/courseController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", createCourse);
router.put("/", updateCourse);
router.delete("/", deleteCourse);

module.exports = router;
