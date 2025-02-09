import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../types/types.ts";

const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.code === 11000) {
    return res.status(400).json({
      status: "error",
      message: "Duplicate creation error",
    });
  }

  if (error.name === "ValidationError" && error.errors) {
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

export default errorHandler;
