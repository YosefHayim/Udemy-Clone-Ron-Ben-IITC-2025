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

// Get all courses and filter by user queries
router.get("/", getAllCourses);

// Get course by specific course id
router.get("/:id", getCourseById);

// Create course
router.post("/", grantedAccess, createCourse);

// Update course information by course id
router.put("/:id", grantedAccess, updateCourse);

// Delete course by course id
router.delete("/:id", grantedAccess, deleteCourse);

// Re-activate course by the authorized creator
router.get("/re-activate/:id", grantedAccess, reactivateCourseById);

module.exports = router;
