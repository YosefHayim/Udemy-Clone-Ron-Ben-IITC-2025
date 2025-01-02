const express = require("express");
const {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
} = require("../../controllers/courses/sectionController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

// get all sections of all courses
router.get("/", getAllSections);

// get specific section by id
router.get("/:id", getSectionById);

// create lesson
router.post("/", createSection);

// update section
router.put("/", updateSection);

// delete section
router.delete("/", deleteSection);

module.exports = router;
