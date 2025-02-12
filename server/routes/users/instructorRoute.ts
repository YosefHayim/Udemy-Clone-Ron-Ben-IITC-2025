import express from "express";
import {
  getInstructorById,
  getThreeCoursesOfInstructor,
} from "../../controllers/users/instructorController.ts";

const router = express.Router();

// get 3 course ids of the instructor by id
router.get("/:id/three/courses", getThreeCoursesOfInstructor);

// get information about the instructor by id
router.get("/:id", getInstructorById);

export default router;
