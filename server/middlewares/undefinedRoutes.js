const undefinedRoute = (req, res, next) => {
  const error = new Error(
    `The request route: ${req.url} is not exist in server.`
  );
  error.status = 404; // Custom status
  next(error); // Pass the error to the error handler
};

module.exports = undefinedRoute;
