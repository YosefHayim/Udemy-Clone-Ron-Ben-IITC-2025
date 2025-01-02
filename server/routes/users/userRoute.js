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

// get all users
router.get("/", getAllUsers);

// get user by is id
router.get("/:id", getUserById);

// join course by course id
router.get("/add/course/:id", grantedAccess, joinCourseById);

// leave course by course id
router.get("/leave/course/:id", grantedAccess, leaveCourseById);

// verify email address of user auth
router.get("/email/verification", confirmEmailAddress);

// sign up
router.post("/signup", SignUp);

// resend verification email token
router.post(
  "/email/resend/verification",
  grantedAccess,
  resendEmailVerificationToken
);

// login
router.post("/login", login);

// logout and clear cookie
router.post("/logout", logout);

// reactivate "delete" account
router.post("/reactivate", reactiveUser);

// update password of uer
router.patch("/update/password", grantedAccess, updatePassword);
// update user information
router.put("/", updateUserInfo);

// "delete" user account
router.delete("/", grantedAccess, deactivateUser);

module.exports = router;
