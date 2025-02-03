const express = require("express");
const {
  getInstructorById,
} = require("../../controllers/users/instructorController");

const router = express.Router();

router.get("/:id", getInstructorById);

module.exports = router;
