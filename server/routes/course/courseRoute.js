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

router.get("/", grantedAccess, getAllCourses);
router.get("/:id", grantedAccess, getCourseById);
router.post("/", grantedAccess, createCourse);
router.put("/:id", grantedAccess, updateCourse);
router.delete("/:id", grantedAccess, deleteCourse);

module.exports = router;
