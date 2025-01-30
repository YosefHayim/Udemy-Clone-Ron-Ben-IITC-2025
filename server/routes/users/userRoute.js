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
  joinCoursesByIds,
  verifyCode,
} = require("../../controllers/users/userController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");
const { OAuth2Client } = require("google-auth-library");
const getUserData = require("../../utils/loginViaGoogle");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();

router.param("id", (req, res, next, val) => {
  // console.log(`ID is: ${val}`);
  next();
});

// get all users
router.get("/", getAllUsers);

// get user by is id
router.get("/:id", getUserById);

// join courses by array of courses ids
router.post("/add/courses", grantedAccess, joinCoursesByIds);

// Verify user code either for login or for sign up.
router.post("/verify", verifyCode);

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

// login regular
router.post("/auth/login", login);

// generate url for google
router.post("/auth/google/", (req, res, next) => {
  const redirectUrl = "http://localhost:5137/";

  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: "https://www.googleapis.com/authw/userinfo.profile openid",
    prompt: "consent",
  });

  res.status(201).json({
    url: authorizeUrl,
  });
});

// get token info of the user login with google
router.post("/oauth/callback", async (req, res) => {
  const { code } = req.body;

  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "http://localhost:5137/api/user/oauth/callback"
  );

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Retrieve user info
    const userInfo = await getUserData(tokens.access_token);

    res.status(200).json({ tokens, user: userInfo });
  } catch (error) {
    console.error("Token exchange error:", error);
    res.status(500).json({ error: "Failed to authenticate" });
  }
});

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
