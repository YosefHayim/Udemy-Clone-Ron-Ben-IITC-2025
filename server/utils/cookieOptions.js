// define cookie options
const cookieOptions = {
  expiresIn: new Date(
    Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
  ), // Convert to milliseconds
};

module.exports = cookieOptions;
