import express from "express";
import { getInstructorById } from "../../controllers/users/instructorController.ts";

const router = express.Router();

router.get("/:id", getInstructorById);

export default router;
