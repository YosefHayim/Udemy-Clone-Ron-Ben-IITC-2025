const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const limiter = require("./middlewares/rateLimit");
const errorHandler = require("./middlewares/errorHandler");
const undefinedRoute = require("./middlewares/undefinedRoutes");
const connectDb = require("./config/connectDb");
const loggerInfo = require("./middlewares/logger");
const courseRoute = require("./routes/course/courseRoute");
const lessonRoute = require("./routes/course/lessonRoute");
const sectionRoute = require("./routes/course/sectionRoute");
const courseProgressRoutes = require("./routes/course/courseProgressRoutes");
const userRoute = require("./routes/users/userRoute");
const commentRoute = require("./routes/reviews/commentRoute");
const reviewRoute = require("./routes/reviews/reviewRoute");
const reportReviewRoute = require("./routes/reviews/reportReviewRoute");

const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(loggerInfo);
// app.use(limiter);

const allowedOrigins = [
  "http://localhost:5173/", // Frontend in development
  "http://127.0.0.1:5173/", // IP for local frontend
  "http://localhost:3000/", // Another possible frontend
  "https://udemy-clone-ron-and-ben-front.onrender.com", // Production
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies
  })
);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    response: `Welcome to the udemy clone backend server`,
  });
});

app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);
app.use("/api/section", sectionRoute);
app.use("/api/lesson", lessonRoute);
app.use("/api/review", reviewRoute);
app.use("/api/report/review", reportReviewRoute);
app.use("/api/comment", commentRoute);
app.use("/api/course-progress", courseProgressRoutes);

app.all("*", undefinedRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  // console.log(`Server is running on port: ${PORT}`);
});
