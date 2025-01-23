const express = require("express");
const router = express.Router();
const progressController = require("../../controllers/courses/progressController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

// Initialize progress for a course
router.post(
  "/initialize/:id",
  grantedAccess,
  progressController.initializeProgress
);  

// Update progress for a specific lesson
router.patch(
  "/:courseId/lessons/:lessonId",
  grantedAccess,
  progressController.updateLessonProgress
);

// Get progress for a course
router.get("/:courseId", grantedAccess, progressController.getCourseProgress);

module.exports = router;
