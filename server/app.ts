import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import limiter from "./middlewares/rateLimit.ts";
import errorHandler from "./middlewares/errorHandler.ts";
import undefinedRoute from "./middlewares/undefinedRoutes.ts";
import connectDb from "./config/connectDb.ts";
import loggerInfo from "./middlewares/logger.ts";
import courseRoute from "./routes/course/courseRoute.ts";
import couponRoute from "./routes/course/couponRoute.ts";
import lessonRoute from "./routes/course/lessonRoute.ts";
import sectionRoute from "./routes/course/sectionRoute.ts";
import courseProgressRoutes from "./routes/course/courseProgressRoutes.ts";
import userRoute from "./routes/users/userRoute.ts";
import commentRoute from "./routes/reviews/commentRoute.ts";
import reviewRoute from "./routes/reviews/reviewRoute.ts";
import reportReviewRoute from "./routes/reviews/reportReviewRoute.ts";
import instructorRoute from "./routes/users/instructorRoute.ts";

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Connect to Database
connectDb();

// Serve static images
app.use("/imgs", express.static("public/imgs"));

// Security middleware
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(loggerInfo);
// app.use(limiter);

// Allowed CORS origins
const allowedOrigins: string[] = [
  "http://localhost:5173", // Frontend in development
  "https://udemy-clone-ron-and-ben-front.onrender.com", // Frontend in production
  "http://127.0.0.1:5173",
];

// CORS Configuration
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

// Logging middleware
app.use(morgan("dev"));

// Root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    response: "Welcome to the Udemy clone backend server",
  });
});

// API Routes
app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);
app.use("/api/section", sectionRoute);
app.use("/api/lesson", lessonRoute);
app.use("/api/review", reviewRoute);
app.use("/api/report/review", reportReviewRoute);
app.use("/api/comment", commentRoute);
app.use("/api/instructor", instructorRoute);
app.use("/api/course-progress", courseProgressRoutes);
app.use("/api/coupon", couponRoute);

// Handle undefined routes
app.all("*", undefinedRoute);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;
