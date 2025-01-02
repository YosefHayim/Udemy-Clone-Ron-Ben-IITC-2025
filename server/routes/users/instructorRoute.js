const express = require("express");
const {
  getAllInstructors,
  getInstructorById,
  signUpInstructor,
  loginInstructor,
  confirmInstructorEmailAddress,
  logoutInstructor,
} = require("../../controllers/users/instructorController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

// Get all instructions
router.get("/", getAllInstructors);

// Get instructor by its id
router.get("/:id", getInstructorById);

// sign up as instructor
router.post("/signup", signUpInstructor);

// login as instructor
router.post("/login", loginInstructor);

// confirm email as instructor
router.get("/confirm-email", confirmInstructorEmailAddress);

// logout as instructor
router.post("/logout", logoutInstructor);

module.exports = router;
