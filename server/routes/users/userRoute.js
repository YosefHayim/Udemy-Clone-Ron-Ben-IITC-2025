const express = require("express");
const {
  getAllUsers,
  signUp,
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
  updateProfilePic,
  toggleCourseWishlist,
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
router.post("/add/course/:id", grantedAccess, joinCourseById);

// Add or remove courses to wishlist
router.post("/course/wishlist/:id", grantedAccess, toggleCourseWishlist);

// leave course by course id
router.post("/leave/course/:id", grantedAccess, leaveCourseById);

// verify email address of user auth
router.get("/email/verification", confirmEmailAddress);

// sign up
router.post("/auth/signup", signUp);

// resend verification email token
router.post(
  "/email/resend/verification",
  grantedAccess,
  resendEmailVerificationToken
);

// login
router.post("/auth/login", login);

// logout and clear cookie
router.post("/logout", grantedAccess, logout);

// reactivate "delete" account
router.post("/reactivate", reactiveUser);

// update password of uer
router.patch("/update/password", grantedAccess, updatePassword);

// update user information
router.put("/", grantedAccess, updateUserInfo);

// update user profile picture
router.patch("/profile/picture", grantedAccess, updateProfilePic);

// "delete" user account
router.delete("/", grantedAccess, deactivateUser);

module.exports = router;
