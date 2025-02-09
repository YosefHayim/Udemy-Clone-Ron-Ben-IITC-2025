import express from "express";
import { getInstructorById } from "../../controllers/users/instructorController";

const router = express.Router();

router.get("/:id", getInstructorById);

export default router;
