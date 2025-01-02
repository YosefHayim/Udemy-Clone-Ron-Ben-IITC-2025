const Course = require("../../models/courses/courseModel");
const User = require("../../models/users/userModel");
const APIFeatures = require("../../utils/apiFeatures");
const cookieOptions = require("../../utils/cookieOptions");
const sendEmail = require("../../utils/email");
const { catchAsync } = require("../../utils/wrapperFn");
const { generateToken } = require("../authorization/authController");

const getAllUsers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const users = await features.query;

  if (!users || users.length === 0) {
    return next(new Error("No Users documents found in database"));
  }

  res
    .status(200)
    .json({ status: "Success", totalUsers: users.length, response: users });
});

const getUserById = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

  if (!userId) {
    return next(new Error("Please provide id in the url."));
  }

  const findUser = await User.findOne({ _id: userId });

  if (!findUser) {
    return next(new Error("There is no such user in database"));
  }

  res.status(200).json({
    status: "success",
    data: findUser,
  });
});

const SignUp = catchAsync(async (req, res, next) => {
  const { fName, lName, email, password, passwordConfirm } = req.body;

  // If one of the fields is missing
  if (!fName || !lName || !email || !password || !passwordConfirm) {
    return next(new Error("One of the fields is missing."));
  }

  // Create user with email token and expiration
  const newUser = await User.create({
    fName,
    lName,
    email,
    password,
    passwordConfirm,
  });

  if (!newUser) {
    return next(new Error("Error occurred during user creation."));
  }

  // // Send confirmation email
  const mailOptions = {
    from: "robustBackend@gmail.com",
    to: email,
    subject: `Hi ${fName} ${lName}, welcome aboard`,
    html: `<h1>Welcome to the robust backend website, ${fName}!</h1>
    <p> your email address by providing this code: http://localhost:3000/api/user/?token=${newUser.emailVerificationToken}</p>`,
  };

  await sendEmail(mailOptions);

  const token = generateToken(newUser._id);
  res.cookie("cookie", token, cookieOptions);

  res.status(200).json({
    status: "success",
    message: "User created successfully. Please confirm your email to log in.",
    data: newUser,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    return next(new Error("Email or password is missing."));
  }

  // Find user by email and include password
  const isFoundUser = await User.findOne({ email }).select("+password");

  if (!isFoundUser) {
    return next(new Error("Invalid email or password."));
  }

  // Check if password is correct
  if (isFoundUser.password === password) {
  }

  // Generating the token and sending to client
  const token = generateToken(isFoundUser._id);

  res.cookie("cookie", token, cookieOptions);

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
      html: `<p>enjoy our robust backend platform`,
    });

    res.status(200).json({
      status: "success",
      message: "Email successfully verified!",
    });
  }
});

const logout = catchAsync(async (req, res, next) => {
  // If user enter this route than we clear the cookie with "clear"
  res.cookie("cookie", "clear", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
  });
});

const updatePassword = catchAsync(async (req, res, next) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmNewPassword) {
    return next(new Error("One of the fields is missing."));
  }

  // Call the instance method on the user
  await req.user.updatePassword(
    currentPassword,
    newPassword,
    confirmNewPassword
  );

  sendEmail({
    to: req.user.email,
    subject: "Your account password has been updated",
    html: `<p>enjoy our robust backend platform`,
  });
  res.status(200).json({
    status: "success",
    message: "New password has been successfully set.",
  });
});

const deactivateUser = catchAsync(async (req, res, next) => {
  const findUser = await User.findById(req.user._id);

  if (!findUser) {
    return next(new Error("The user doesn't exist in database."));
  }
  findUser.active = false;

  await findUser.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    response: "User has been successfully de-activated",
  });
});

const reactiveUser = catchAsync(async (req, res, next) => {
  const email = req.body.email.trim();

  if (!email) {
    return next(new Error(`Wrong email provided: ${email}`));
  }

  // Find inactive user explicitly
  const findUser = await User.findOne({
    email,
    active: false,
    includeInactive: true,
  });

  if (!findUser) {
    return next(
      new Error(`There is no user in the database with this email: ${email}`)
    );
  }

  // Reactivate the user
  findUser.active = true;
  await findUser.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    response: "User has been successfully reactivated",
  });
});

const resendEmailVerificationToken = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(
      new Error(
        "You must provide an email to receive a new verification token."
      )
    );
  }

  // Find the user by email
  const findUser = await User.findOne({ email });

  if (!findUser) {
    return next(new Error("No such email exists."));
  }

  // Check if the email is already verified
  if (findUser.emailVerified) {
    return next(new Error("Email is already verified."));
  }

  // Generate a new email verification token
  findUser.generateEmailVerificationToken();
  await findUser.save();

  // Send the new token to the user's email (pseudo-code for email sending)
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

  if (!courseId) {
    return next(new Error("Please provide a valid course ID in the URL."));
  }

  const isCourseExist = await Course.findById(courseId);

  if (!isCourseExist) {
    return next(new Error(`No course exists with this ID: ${courseId}`));
  }

  if (isCourseExist.courseInstructor.toString() === user._id.toString()) {
    return next(new Error("You cannot join your own course."));
  }

  if (user.coursesBought.includes(courseId)) {
    return next(new Error("You have already joined this course."));
  }

  // Add user to course enrollment
  isCourseExist.totalStudentsEnrolled.students.push(user._id);
  isCourseExist.totalStudentsEnrolled.count += 1;
  await isCourseExist.save();

  // Add course to user's purchased courses
  user.coursesBought.push(courseId);
  await user.save();

  res.status(200).json({
    status: "success",
    message: `You have successfully joined the course ${isCourseExist.courseName}`,
    courseData: {
      courseId: isCourseExist._id,
      courseName: isCourseExist.courseName,
      totalStudentsEnrolled: isCourseExist.totalStudentsEnrolled.count,
    },
    userData: {
      userId: user._id,
      coursesBought: user.coursesBought,
    },
  });
});

const leaveCourseById = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const user = req.user;

  if (!courseId) {
    return next(new Error("Please provide a course ID in the URL."));
  }

  const isCourseExist = await Course.findOne({ _id: courseId });

  if (!isCourseExist) {
    return next(new Error(`No course exists with this ID: ${courseId}`));
  }

  if (!user.coursesBought.includes(courseId)) {
    return next(new Error("You are not in this course."));
  }

  if (user.coursesCreated.includes(courseId)) {
    return next(
      new Error(
        "You cant leave your own course. please use another route to de-activate it."
      )
    );
  }

  user.coursesBought = user.coursesBought.filter(
    (id) => id.toString() !== courseId.toString()
  );
  await user.save();

  res.status(200).json({
    status: "Success",
    response: `You have successfully left the course ${isCourseExist.courseName}`,
    data: user,
  });
});

const updateUserInfo = catchAsync(async (req, res, next) => {});

module.exports = {
  joinCourseById,
  leaveCourseById,
  logout,
  login,
  SignUp,
  getAllUsers,
  updatePassword,
  deactivateUser,
  reactiveUser,
  getUserById,
  confirmEmailAddress,
  resendEmailVerificationToken,
  updateUserInfo,
};
