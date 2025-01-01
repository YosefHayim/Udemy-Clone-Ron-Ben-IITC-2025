const Instructor = require("../../models/instructors/instructorModel");
const APIFeatures = require("../../utils/apiFeatures");
const cookieOptions = require("../../utils/cookieOptions");
const sendEmail = require("../../utils/email");
const { catchAsync } = require("../../utils/wrapperFn");
const { generateToken } = require("../authorization/authController");

const getAllInstructors = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Instructor.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const instructors = await features.query;

  if (!instructors || instructors.length === 0) {
    return next(new Error("No Instructor documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalInstructors: instructors.length,
    response: instructors,
  });
});

const getInstructorById = catchAsync(async (req, res, next) => {
  const instructorId = req.params.id;

  if (!instructorId) {
    return next(new Error("Please provide id in the url."));
  }

  const findInstructor = await Instructor.findOne({ _id: instructorId });

  if (!findInstructor) {
    return next(new Error("There is no such instructor in database"));
  }

  res.status(200).json({
    status: "success",
    data: findInstructor,
  });
});

const signUpInstructor = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  if (!name || !email || !password || !passwordConfirm) {
    return next(new Error("One of the fields is missing."));
  }

  const newInstructor = await Instructor.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  if (!newInstructor) {
    return next(new Error("Error occurred during instructor creation."));
  }

  const mailOptions = {
    from: "robustBackend@gmail.com",
    to: email,
    subject: `Hi ${name}, welcome aboard`,
    html: `<h1>Welcome to the robust backend website, ${name}!</h1>
    <p> Verify your email by clicking here: http://localhost:3000/api/instructor/?token=${newInstructor.emailVerificationToken}</p>`,
  };

  await sendEmail(mailOptions);

  const token = generateToken(newInstructor._id);
  res.cookie("cookie", token, cookieOptions);

  res.status(200).json({
    status: "success",
    message:
      "Instructor created successfully. Please confirm your email to log in.",
    data: newInstructor,
  });
});

const loginInstructor = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("Email or password is missing."));
  }

  const isFoundInstructor = await Instructor.findOne({ email }).select(
    "+password"
  );

  if (!isFoundInstructor) {
    return next(new Error("Invalid email or password."));
  }

  const token = generateToken(isFoundInstructor._id);
  res.cookie("cookie", token, cookieOptions);

  if (!isFoundInstructor.emailVerified) {
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

const confirmInstructorEmailAddress = catchAsync(async (req, res, next) => {
  const token = req.query.token;

  if (req.instructor.emailVerified) {
    res.status(200).json({
      status: "Success",
      message: "Your email has been already verified.",
    });
    return;
  }

  if (
    req.instructor.emailVerificationToken === token &&
    req.instructor.emailVerificationExpires > Date.now()
  ) {
    req.instructor.emailVerified = true;
    req.instructor.emailVerificationToken = undefined;
    req.instructor.emailVerificationExpires = undefined;
    await req.instructor.save();

    sendEmail({
      to: req.instructor.email,
      subject: "Your account has been verified",
      html: `<p>Enjoy our robust backend platform`,
    });

    res.status(200).json({
      status: "success",
      message: "Email successfully verified!",
    });
  }
});

const logoutInstructor = catchAsync(async (req, res, next) => {
  res.cookie("cookie", "clear", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
  });
});

module.exports = {
  logoutInstructor,
  loginInstructor,
  signUpInstructor,
  getAllInstructors,
  getInstructorById,
  confirmInstructorEmailAddress,
};
