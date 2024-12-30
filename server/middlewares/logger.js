const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs.log" })],
});

const loggerInfo = (req, res, next) => {
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

module.exports = loggerInfo;
