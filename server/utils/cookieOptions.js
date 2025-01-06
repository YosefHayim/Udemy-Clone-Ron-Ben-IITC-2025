const cookieOptions = {
  httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
  secure: process.env.NODE_ENV === "production", // Sends cookies over HTTPS in production
  sameSite: "lax", // Helps with CSRF protection
  expires: new Date(
    Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
  ), // Expiry time in milliseconds
};
