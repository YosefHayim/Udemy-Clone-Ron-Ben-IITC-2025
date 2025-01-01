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
  updateUserInfo,
  leaveCourseById,
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
router.get("/add/course/:id", grantedAccess, joinCourseById);
router.get("/leave/course/:id", grantedAccess, leaveCourseById);
router.get("/email/verification", confirmEmailAddress);

router.post("/signup", SignUp);
router.post(
  "/email/resend/verification",
  grantedAccess,
  resendEmailVerificationToken
);
router.post("/login", login);
router.post("/logout", logout);
router.post("/reactivate", reactiveUser);

router.patch("/update/password", grantedAccess, updatePassword);
router.put("/", updateUserInfo);
router.delete("/", grantedAccess, deactivateUser);

module.exports = router;
