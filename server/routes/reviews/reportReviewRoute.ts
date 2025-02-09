import express from "express";
import { grantedAccess } from "../../controllers/authorization/authController.ts";
import {
  getAllReports,
  getReportById,
  getReportsByReviewId,
  createReportByReviewId,
  deleteReportById,
} from "../../controllers/reviews/reportReviewController.ts";

const router = express.Router();

router.get("/", getAllReports);
router.get("/:id", getReportById);
router.get("/:reviewId", getReportsByReviewId);
router.post("/:reviewId", grantedAccess, createReportByReviewId);
router.delete("/:id", grantedAccess, deleteReportById);

export default router;
