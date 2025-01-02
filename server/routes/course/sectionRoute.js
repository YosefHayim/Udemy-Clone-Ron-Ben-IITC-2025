const express = require("express");
const {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
  getSectionsByCourseId,
} = require("../../controllers/courses/sectionController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// get all sections of all courses
router.get("/", getAllSections);

// get specific section by id
router.get("/:id", getSectionById);

router.get("/course/:id", getSectionsByCourseId);

// create lesson
router.post("/", createSection);

// update section
router.put("/", updateSection);

// delete section
router.delete("/", deleteSection);

module.exports = router;
