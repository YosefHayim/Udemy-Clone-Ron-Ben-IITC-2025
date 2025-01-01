const express = require("express");
const {
  getAllInstructors,
  getInstructorById,
  signUpInstructor,
  loginInstructor,
  confirmInstructorEmailAddress,
  logoutInstructor,
} = require("../../controllers/instructors/instructorController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.get("/", grantedAccess, getAllInstructors);
router.get("/:id", grantedAccess, getInstructorById);
router.post("/signup", signUpInstructor);
router.post("/login", loginInstructor);
router.get("/confirm-email", confirmInstructorEmailAddress);
router.post("/logout", grantedAccess, logoutInstructor);

module.exports = router;
