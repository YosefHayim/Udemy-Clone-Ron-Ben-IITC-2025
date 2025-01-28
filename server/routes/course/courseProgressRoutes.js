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

router.post(
  "/:courseId/lessons/:lessonId/notes",
  grantedAccess,
  progressController.addNote
);

// Delete a specific note
router.delete(
  "/:courseId/lessons/:lessonId/notes/:noteId",
  grantedAccess,
  progressController.deleteNote
);

// Get all notes for a specific course
router.get("/:courseId/notes", grantedAccess, progressController.getAllNotes);

module.exports = router;
