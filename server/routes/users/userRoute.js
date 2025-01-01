const express = require("express");
const {
  getAllUsers,
  SignUp,
  login,
  logout,
  updatePassword,
  deactivateUser,
  reactiveUser,
  getUserById,
  confirmEmailAddress,
  resendEmailVerificationToken,
  joinCourseById,
} = require("../../controllers/users/userController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/add/course/:id", joinCourseById);
router.get("/email/verification", confirmEmailAddress);

router.post("/signup", SignUp);
router.post("/email/resend/verification", resendEmailVerificationToken);
router.post("/login", login);
router.post("/logout", logout);
router.post("/reactivate", reactiveUser);

router.patch("/update/password", updatePassword);
router.put("/");
router.delete("/", deactivateUser);

module.exports = router;
