const express = require("express");
const router = express.Router();
const progressController = require("../../controllers/courses/progressController");

// Initialize progress for a course
router.post("/initialize", progressController.initializeProgress);

// Update progress for a specific lesson
router.patch("/:courseId/lessons/:lessonId", progressController.updateLessonProgress);

// Get progress for a course
router.get("/:courseId", progressController.getCourseProgress);

module.exports = router;
