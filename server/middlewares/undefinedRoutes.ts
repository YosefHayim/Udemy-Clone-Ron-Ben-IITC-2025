import { NextFunction, Request, Response } from "express";

const undefinedRoute = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(
    `The request route: ${req.url} is not exist in server.`
  );
  // error.status = 404; // Custom status
  next(error); // Pass the error to the error handler
};

export default undefinedRoute;
