const Course = require("../../models/courses/courseModel");
const courseProgress = require("../../models/courses/courseProgressModel");
const User = require("../../models/users/userModel");
const APIFeatures = require("../../utils/apiFeatures");
const sendEmail = require("../../utils/email");
const createError = require("../../utils/errorFn");
const { catchAsync } = require("../../utils/wrapperFn");
const {
  generateToken,
  verifyToken,
} = require("../authorization/authController");
const randomize = require("randomatic");

const getAllUsers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .search()
    .sort()
    .limitFields()
    .paginate();

  const users = await features.query;

  if (!users || users.length === 0) {
    return next(createError("No users documents found in the database", 404));
  }

  res.status(200).json({
    status: "Success",
    totalUsers: users.length,
    response: users,
  });
});

const getUserById = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

  if (!userId) {
    return next(createError("Please provide ID in the URL.", 400));
  }

  const findUser = await User.findOne({ _id: userId });

  if (!findUser) {
    return next(createError("There is no such user in the database.", 404));
  }

  res.status(200).json({
    status: "success",
    data: findUser,
  });
});

const signUp = catchAsync(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  // If one of the fields is missing
  if (!fullName || !email || !password) {
    return next(createError("One of the required fields is missing.", 400));
  }

  // Create user with email token and expiration
  const newUser = await User.create({
    fullName,
    email,
    password,
  });

  if (!newUser) {
    return next(createError("Error occurred during user creation.", 500));
  }

  // // Send confirmation email
  // const mailOptions = {
  //   from: "robustBackend@gmail.com",
  //   to: email,
  //   subject: `Hi ${fName} ${lName}, welcome aboard`,
  //   html: `<h1>Welcome to the robust backend website, ${fName}!</h1>
  //   <p>Verify your email address by providing this code: http://localhost:3000/api/user/?token=${newUser.emailVerificationToken}</p>`,
  // };

  // await sendEmail(mailOptions);

  const token = generateToken({
    id: newUser._id,
    fullName: newUser.fullName,
    email: newUser.email,
    profilePic: newUser.profilePic,
    bio: newUser.bio,
    role: newUser.role,
    coursesBought: newUser.coursesBought,
    udemyCredits: newUser.udemyCredits,
  });

  res.cookie("cookie", token, {
    maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days
    secure: process.env.NODE_ENV === "production", // Only HTTPS in production
    httpOnly: false, // Restrict JavaScript access for security
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Cross-origin in production
    path: "/", // Ensure the cookie is available across the entire site
  });

  res.status(200).json({
    status: "success",
    message: "User created successfully. Please confirm your email to log in.",
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return next(createError("Email is missing.", 400));
  }

  const isFoundUser = await User.findOne({ email });

  if (!isFoundUser) {
    return next(createError("Invalid email or password.", 401));
  }

  const loginCode = randomize("0", 6);

  sendEmail({
    to: req.user.email,
    subject: "Udemy Login: Here's the 6-digit verification code you requested",
    html: `Hi ${req.user.fullName}, \n Use the code below to log in to your Udemy account. \n ${loginCode} \n This code will expires in 15 mintues. \n Didn't request this code? Contact us. \n 
    Delivered by Udemy 600 Harrison Street, 3rd Floor, San Francisco, CA 94107.
`,
  });

  const token = generateToken({
    id: isFoundUser._id,
    fullName: isFoundUser.fullName,
    email: isFoundUser.email,
    profilePic: isFoundUser.profilePic,
    role: isFoundUser.role,
    bio: isFoundUser.bio,
    coursesBought: isFoundUser.coursesBought,
    udemyCredits: isFoundUser.udemyCredits,
  });

  res.cookie("cookie", token, {
    maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days
    secure: process.env.NODE_ENV === "production", // Only HTTPS in production
    httpOnly: false, // Restrict JavaScript access for security
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Cross-origin in production
    path: "/", // Ensure the cookie is available across the entire site
  });

  if (!isFoundUser.emailVerified) {
    res.status(200).json({
      status: "success",
      message: "Login successful. Please verify your email address.",
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Login successful.",
  });
});

const confirmEmailAddress = catchAsync(async (req, res, next) => {
  const token = req.query.token;

  if (req.user.emailVerified) {
    res.status(200).json({
      status: "Success",
      message: "Your email has been already verified.",
    });
    return;
  }

  // Check if the token matches and hasn't expired
  if (
    req.user.emailVerificationToken === token &&
    req.user.emailVerificationExpires > Date.now()
  ) {
    req.user.emailVerified = true;
    req.user.emailVerificationToken = undefined;
    req.user.emailVerificationExpires = undefined;
    await req.user.save();

    sendEmail({
      to: req.user.email,
      subject: "Your account has been verified",
      html: `<p>enjoy udemy`,
    });

    res.status(200).json({
      status: "success",
      message: "Email successfully verified!",
    });
  }
});

const logout = catchAsync(async (req, res, next) => {
  res.cookie("cookie", "clear", {
    maxAge: 900 * 1000, // 15 minutes
    secure: process.env.NODE_ENV === "production", // Secure in production
    httpOnly: false, // Allow JavaScript access
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // Cross-origin in production
  });
  res.status(200).json({
    status: "success",
    message: "User logged out successfully.",
  });
});

const updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmNewPassword) {
    return next(createError("One of the fields is missing.", 400));
  }

  const newUserPw = await req.user.updatePassword(
    currentPassword,
    newPassword,
    confirmNewPassword
  );

  if (!newUserPw) {
    return next(
      createError("Failed to update the password. Please try again.", 500)
    );
  }

  sendEmail({
    to: req.user.email,
    subject: "Your account password has been updated",
    html: `<p>Enjoy our robust backend platform</p>`,
  });

  res.status(200).json({
    status: "success",
    message: "New password has been successfully set.",
  });
});

const deactivateUser = catchAsync(async (req, res, next) => {
  const findUser = req.user;

  if (!findUser || !findUser._id) {
    return next(createError("The user doesn't exist in the database.", 404));
  }

  findUser.active = false;
  await findUser.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    message: "User has been successfully deactivated.",
  });
});

const reactiveUser = catchAsync(async (req, res, next) => {
  const email = req.body.email.trim();

  if (!email) {
    return next(createError("Wrong email provided.", 400));
  }

  const findUser = await User.findOne({
    email,
    active: false,
    includeInactive: true,
  });

  if (!findUser) {
    return next(
      createError(`No inactive user found with this email: ${email}`, 404)
    );
  }

  findUser.active = true;
  await findUser.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    response: "User has been successfully reactivated.",
  });
});

const resendEmailVerificationToken = catchAsync(async (req, res, next) => {
  const email = req.body.email;

  if (!email) {
    return next(
      createError(
        "You must provide an email to receive a new verification token.",
        400
      )
    );
  }

  const findUser = await User.findOne({ email });

  if (!findUser) {
    return next(createError("No such email exists.", 404));
  }

  if (findUser.emailVerified) {
    return next(createError("Email is already verified.", 400));
  }

  findUser.generateEmailVerificationToken();
  await findUser.save();

  sendEmail({
    to: findUser.email,
    subject: "Verify Your Email",
    text: `Your email verification token is: ${findUser.emailVerificationToken}`,
    html: `<p>Use the following token to verify your email: <b>${findUser.emailVerificationToken}</b></p>`,
  });

  res.status(200).json({
    status: "success",
    message:
      "A new email verification token has been sent to your email address.",
  });
});

const joinCourseById = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const user = req.user;

  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    return next(
      createError("Please provide a valid course ID in the URL.", 400)
    );
  }

  const course = await Course.findById(courseId);

  if (!course) {
    return next(createError(`No course exists with this ID: ${courseId}`, 404));
  }

  if (user.coursesCreated.includes(courseId)) {
    return next(createError("You cannot join your own course.", 403));
  }

  if (
    user.coursesBought.some((bought) => bought.course.toString() === courseId)
  ) {
    return next(createError("You have already joined this course.", 400));
  }

  const existingProgress = await courseProgress.findOne({
    userId: user._id,
    courseId: courseId,
  });

  if (existingProgress) {
    return next(createError("You already have progress for this course.", 400));
  }

  course.totalStudentsEnrolled.students.push(user._id);
  await course.save();

  user.coursesBought.push({
    courseName: course.courseName,
    courseId: courseId,
    coursePrice: course.courseDiscountPrice,
    boughtAt: new Date(),
  });

  const initCourseProgress = await courseProgress.create({
    userId: user._id,
    courseId: courseId,
  });

  await user.save();

  res.status(201).json({
    status: "success",
    message: `You have successfully joined the course ${course.courseName}`,
    courseProgress: initCourseProgress,
  });
});

const joinCoursesByIds = catchAsync(async (req, res, next) => {
  let courseIds = req.body.courses;
  const user = req.user;

  if (!courseIds || !Array.isArray(courseIds)) {
    return next(createError("Please provide an array of course IDs.", 400));
  }

  courseIds = courseIds.filter((id) => mongoose.Types.ObjectId.isValid(id));

  if (courseIds.length === 0) {
    return next(createError("No valid course IDs provided.", 400));
  }

  const courses = await Course.find({ _id: { $in: courseIds } });
  const validCourseIds = courses.map((course) => course._id.toString());

  const existingProgress = await courseProgress.find({
    userId: user._id,
    courseId: { $in: validCourseIds },
  });

  const existingIds = existingProgress.map((prog) => prog.courseId.toString());
  const newCourseIds = validCourseIds.filter((id) => !existingIds.includes(id));

  if (newCourseIds.length === 0) {
    return next(
      createError("You have already joined all the provided courses.", 400)
    );
  }

  const purchasedCourses = newCourseIds.map((courseId) => {
    const course = courses.find((c) => c._id.toString() === courseId);
    return {
      courseName: course.courseName,
      courseId: courseId,
      coursePrice: course.courseDiscountPrice,
      boughtAt: new Date(),
    };
  });

  user.coursesBought.push(...purchasedCourses);

  const initCoursesProgress = await Promise.all(
    newCourseIds.map((courseId) =>
      courseProgress.create({
        userId: user._id,
        courseId: courseId,
      })
    )
  );

  await user.save();

  res.status(201).json({
    status: "success",
    message: `Successfully joined courses: ${newCourseIds.join(", ")}`,
    coursesJoined: initCoursesProgress,
  });
});

const leaveCourseById = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const user = req.user;

  if (!courseId) {
    return next(createError("Please provide a course ID in the URL.", 400));
  }

  const course = await Course.findById(courseId);

  if (!course) {
    return next(createError(`No course exists with this ID: ${courseId}`, 404));
  }

  if (!user.coursesBought.includes(courseId)) {
    return next(createError("You are not enrolled in this course.", 400));
  }

  if (user.coursesCreated.includes(courseId)) {
    return next(
      createError(
        "You cannot leave your own course. Please use another route to deactivate it.",
        403
      )
    );
  }

  // Remove user from course enrollment
  course.totalStudentsEnrolled.students =
    course.totalStudentsEnrolled.students.filter(
      (id) => id.toString() !== user._id.toString()
    );
  await course.save(); // `post('save')` will update the count automatically

  // Remove course from user's purchased courses
  user.coursesBought = user.coursesBought.filter(
    (id) => id.toString() !== courseId.toString()
  );
  await user.save();

  res.status(200).json({
    status: "success",
    response: `You have successfully left the course ${course.courseName}`,
  });
});

const updateUserInfo = catchAsync(async (req, res, next) => {
  const {
    fullName,
    headline,
    biography,
    preferredLanguage,
    website,
    xPlatform,
    facebook,
    linkedin,
    youtube,
  } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      fullName,
      headline,
      biography,
      preferredLanguage,
      links: {
        website,
        xPlatform,
        facebook,
        linkedin,
        youtube,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    return next(createError("User not found.", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

const updateProfilePic = catchAsync(async (req, res, next) => {
  const { profilePic } = req.body;

  if (!profilePic) {
    return next(
      createError(
        "Please provide a URL of the profile picture in the body.",
        400
      )
    );
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    { profilePic },
    { new: true, runValidators: true }
  );

  if (!updatedUser) {
    return next(createError("User not found.", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

const toggleCourseWishlist = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(createError("Please provide a course ID in the URL.", 400));
  }

  const course = await Course.findById(courseId);

  if (!course) {
    return next(createError("Course not found.", 404));
  }

  const isInWishlist = req.user.wishlistCourses.includes(courseId);

  if (isInWishlist) {
    req.user.wishlistCourses = req.user.wishlistCourses.filter(
      (wishlistId) => wishlistId.toString() !== courseId
    );
    await req.user.save();
    res.status(200).json({
      status: "success",
      message: "Course removed from wishlist.",
      wishlistCourses: req.user.wishlistCourses,
    });
  } else {
    req.user.wishlistCourses.push(courseId);
    await req.user.save();
    res.status(200).json({
      status: "success",
      message: "Course added to wishlist.",
      wishlistCourses: req.user.wishlistCourses,
    });
  }
});

module.exports = {
  joinCoursesByIds,
  toggleCourseWishlist,
  updateProfilePic,
  joinCourseById,
  leaveCourseById,
  logout,
  login,
  signUp,
  getAllUsers,
  updatePassword,
  deactivateUser,
  reactiveUser,
  getUserById,
  confirmEmailAddress,
  resendEmailVerificationToken,
  updateUserInfo,
};
