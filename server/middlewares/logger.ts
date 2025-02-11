import { NextFunction, Request, Response } from "express";
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs.log" })],
});

const loggerInfo = (req: Request, res: Response, next: NextFunction) => {
  // if (req.body.password || req.body.email) {
  //   req.body.password = "";
  //   req.body.email = "";
  // }
  logger.info({
    requestedAt: new Date(),
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
  });
  next();
};

export default loggerInfo;
