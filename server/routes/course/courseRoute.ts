import express, { NextFunction, Request, Response } from "express";
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  reactivateCourseById,
  joinCourseById,
  leaveCourseById,
  joinCoursesByIds,
  getCourseProsById,
  getCourseInfoForCart,
  viewCourseById,
  updateCourseProgressById,
} from "../../controllers/courses/courseController.ts";
import { grantedAccess } from "../../controllers/authorization/authController.ts";

const router = express.Router();

router.param("id", (req: Request, res: Response, next: NextFunction, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// Get all courses and filter by user queries
router.get("/", getAllCourses);

// view course by course id if it is part of the courses you bought
router.get("/:courseId", viewCourseById);

// Get course by specific course id
router.get("/:id", getCourseById);

// Get cart course info by course id
router.get("/cartInfo/:id", getCourseInfoForCart);

// Get course pros by courseId
router.get("/pros/:courseId", getCourseProsById);

// Re-activate course by the authorized creator
router.post("/re-activate/:id", grantedAccess, reactivateCourseById);

// join course by course id
router.post("/add/:id", grantedAccess, joinCourseById);

// join courses by array of courses ids
router.post("/multiple/courses", grantedAccess, joinCoursesByIds);

// leave course by course id
router.post("/leave/:id", grantedAccess, leaveCourseById);

// Create course
router.post("/", grantedAccess, createCourse);

// Update course information by course id
router.put("/:id", grantedAccess, updateCourse);

router.patch("/:id", grantedAccess, updateCourseProgressById);

// Delete course by course id
router.delete("/:id", grantedAccess, deleteCourse);

export default router;
