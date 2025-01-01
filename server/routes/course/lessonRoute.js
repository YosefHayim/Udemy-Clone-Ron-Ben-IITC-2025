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

router.get("/", getAllLessons);
router.get("/:id", getLessonById);
router.post("/", createLesson);
router.put("/", updateLesson);
router.delete("/", deleteLesson);

module.exports = router;
