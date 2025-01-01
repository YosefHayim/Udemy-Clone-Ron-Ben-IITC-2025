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

router.get("/", getAllInstructors);
router.get("/:id", getInstructorById);
router.post("/signup", signUpInstructor);
router.post("/login", loginInstructor);
router.get("/confirm-email", confirmInstructorEmailAddress);
router.post("/logout", logoutInstructor);

module.exports = router;
