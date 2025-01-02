const express = require("express");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  reactivateCourseById,
} = require("../../controllers/courses/courseController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// get all courses
router.get("/", grantedAccess, getAllCourses);

// get course by specific course id
router.get("/:id", grantedAccess, getCourseById);

// create course
router.post("/", grantedAccess, createCourse);

// update course information by course id
router.put("/:id", grantedAccess, updateCourse);

// delete course by course id
router.delete("/:id", grantedAccess, deleteCourse);

// Re-activate course by the authorized creator
router.get("/re-activate/:id", grantedAccess, reactivateCourseById);

module.exports = router;
