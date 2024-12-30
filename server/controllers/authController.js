const jwt = require("jsonwebtoken");
const { catchAsync } = require("../utils/wrapperFn");
const crypto = require("crypto");

// Generate a random token for email confirmation
const confirmEmailToken = (length = 32) => {
  const emailToken = crypto.randomBytes(length).toString("hex"); // Convert to hexadecimal format
  return emailToken;
};

const generateToken = (id) => {
  // Generating token once user logged in
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = (token) => {
  // Verify the token that was provided
  return jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) throw Error("Error occurred durning verify token of user: ", err);
    return decoded;
  });
};

const grantedAccess = catchAsync(async (req, res, next) => {
  const User = require("../models/userModel");

  //  Getting token and check if it's there
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.cookie) {
    token = req.cookies.cookie;
  }

  if (!token) {
    return next(new Error("Please log in to get access."));
  }
  // Verify token
  const decoded = verifyToken(token);

  // Check if the user still exists
  const currentUser = await User.findOne({ _id: decoded.id });

  if (!currentUser) {
    return next(
      new Error("You are not logged in or you this user does not exist")
    );
  }

  req.user = currentUser;

  next();
});

module.exports = {
  verifyToken,
  grantedAccess,
  generateToken,
  confirmEmailToken,
};
