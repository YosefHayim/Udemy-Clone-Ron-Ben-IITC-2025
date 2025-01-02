const express = require("express");
const {
  getAllLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson,
} = require("../../controllers/courses/lessonController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

// get all lessons of all courses
router.get("/", getAllLessons);

// get specific lesson by lesson id
router.get("/:id", getLessonById);

// create lesson
router.post("/", createLesson);

// update lesson
router.put("/", updateLesson);

// delete lesson
router.delete("/", deleteLesson);

module.exports = router;
