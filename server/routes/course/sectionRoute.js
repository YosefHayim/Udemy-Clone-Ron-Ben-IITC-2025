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

router.get("/", getAllSections);
router.get("/:id", getSectionById);
router.post("/", createSection);
router.put("/", updateSection);
router.delete("/", deleteSection);

module.exports = router;
