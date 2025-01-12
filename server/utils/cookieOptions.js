const cookieOptions = {
  httpOnly: false, // allow client-side JavaScript from accessing the cookie
  secure: process.env.NODE_ENV === "production", // Send cookie only over HTTPS in production
  sameSite: "None", // Required for cross-origin cookies
  maxAge: parseInt(process.env.JWT_EXPIRES_IN, 10), // Expiry time in milliseconds
};

module.exports = cookieOptions;
