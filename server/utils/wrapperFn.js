exports.catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next); // Pass any errors to the error handler
};
