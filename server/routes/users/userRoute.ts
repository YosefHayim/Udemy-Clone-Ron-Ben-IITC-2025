import express, { Request, Response } from "express";
import { grantedAccess } from "../../controllers/authorization/authController";
import {
  getAllUsers,
  signUp,
  login,
  logout,
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
  joinCoursesByIds,
  verifyCode,
  googleLoginOrSignUp,
  updateMe,
  uploadUserPhoto,
  resizeUserPhoto,
} from "../../controllers/users/userController";
const router = express.Router();

router.param("id", (req: Request, res: Response, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// get all users
router.get("/", getAllUsers);

// refresh cookie data
router.post("/me", grantedAccess, updateMe);

// join course by course id
router.post("/add/course/:id", grantedAccess, joinCourseById);

// get user by is id
router.get("/:id", getUserById);

// join courses by array of courses ids
router.post("/add/courses", grantedAccess, joinCoursesByIds);

// Verify user code either for login or for sign up.
router.post("/verify", verifyCode);

// Add or remove courses to wishlist
router.post("/course/wishlist/:id", grantedAccess, toggleCourseWishlist);

// leave course by course id
router.post("/leave/course/:id", grantedAccess, leaveCourseById);

// verify email address of user auth
router.get("/email/verification", confirmEmailAddress);

// Google OAuth Callback Route
router.post("/google/auth/login", googleLoginOrSignUp);

// sign up
router.post("/auth/signup", signUp);

// resend verification email token
router.post(
  "/email/resend/verification",
  grantedAccess,
  resendEmailVerificationToken
);

// login regular
router.post("/auth/login", login);

// logout and clear cookie
router.post("/logout", grantedAccess, logout);

// reactivate "delete" account
router.post("/reactivate", reactiveUser);

// update user information
router.put("/", grantedAccess, updateUserInfo);

// update user profile picture
router.patch(
  "/profile/picture",
  grantedAccess,
  uploadUserPhoto,
  resizeUserPhoto,
  updateProfilePic
);

// "delete" user account
router.delete("/", grantedAccess, deactivateUser);

export default router;
