const errorHandler = (error, req, res, next) => {
  if (error.code === 11000) {
    return res.status(400).json({
      status: "Error",
      message: "Duplicate key error",
    });
  }

  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((el) => el.message);
    return res
      .status(400)
      .json({ status: "error", message: messages.join(". ") });
  }

  const statusCode = error.status || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
