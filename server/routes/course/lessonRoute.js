const express = require("express");
const {
  getAllLessons,
  getLessonById,
  createLesson,
  updateLessonById,
  deleteLessonById,
} = require("../../controllers/courses/lessonController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// Get all lessons of all courses
router.get("/", getAllLessons);

// Get specific lesson by lesson id
router.get("/:id", getLessonById);

// Create lesson
router.post("/", createLesson);

// Update lesson by id
router.put("/:id", updateLessonById);

// Delete lesson by id
router.delete("/:id", deleteLessonById);

module.exports = router;
