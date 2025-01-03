const express = require("express");
const {
  getAllSections,
  getSectionById,
  createSection,
  deleteSectionById,
  updateSectionById,
  getSectionsByCourseId,
} = require("../../controllers/courses/sectionController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// Get all sections of all courses
router.get("/", getAllSections);

// Get specific section by id
router.get("/:id", getSectionById);

router.get("/course/:id", getSectionsByCourseId);

// Create section
router.post("/", createSection);

// Update section by section id
router.put("/:id", updateSectionById);

// Delete section by id
router.delete("/:id", deleteSectionById);

module.exports = router;
