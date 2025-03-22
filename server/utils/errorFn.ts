import { Response } from "express";

const createError = (res: Response, message: string, statusCode: number) => {
  const error = new Error(message);
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: error.message,
  });
};

export default createError;
