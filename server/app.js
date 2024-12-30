const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const limiter = require("./middlewares/rateLimit");
const errorHandler = require("./middlewares/errorHandler");
const undefinedRoute = require("./middlewares/undefinedRoutes");
const connectDb = require("./config/connectDb");
const commentRoute = require("./routes/commentRoute");
const userRoute = require("./routes/userRoute");
const reviewRoute = require("./routes/reviewRoute");
const loggerInfo = require("./middlewares/logger");

const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(loggerInfo);
app.use(limiter);
app.use(
  cors({
    origin: "http://localhost:3000",
    withCredentials: true,
  })
);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    response: `Welcome to the robust server`,
  });
});

app.use("/api/user", userRoute);
app.use("/api/review", reviewRoute);
app.use("/api/comment", commentRoute);

app.all("*", undefinedRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
