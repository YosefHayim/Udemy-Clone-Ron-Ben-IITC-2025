const express = require("express");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  reactivateCourseById,
  getCourseProsById,
  getCourseInfoForCart,
  viewCourseById,
} = require("../../controllers/courses/courseController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// Get all courses and filter by user queries
router.get("/", getAllCourses);

// Get course by specific course id
router.get("/:id", getCourseById);

// view course by course id if it is part of the courses you bought
router.get("/:courseId", grantedAccess, viewCourseById);

// Get cart course info by course id
router.get("/cartInfo/:id", getCourseInfoForCart);

// Get course pros by courseId
router.get("/pros/:courseId", getCourseProsById);

// Re-activate course by the authorized creator
router.post("/re-activate/:id", grantedAccess, reactivateCourseById);

// Create course
router.post("/", grantedAccess, createCourse);

// Update course information by course id
router.put("/:id", grantedAccess, updateCourse);

// Delete course by course id
router.delete("/:id", grantedAccess, deleteCourse);

module.exports = router;
