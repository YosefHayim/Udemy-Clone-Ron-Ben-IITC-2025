const errorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(400).json({
      status: "Error",
      message: "Duplicate key error",
    });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((el) => el.message);
    return res
      .status(400)
      .json({ status: "error", message: messages.join(". ") });
  }
  
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
