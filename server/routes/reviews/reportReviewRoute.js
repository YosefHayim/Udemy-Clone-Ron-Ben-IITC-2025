const express = require("express");
const {
  getAllReports,
  getReportById,
  getReportsByReviewId,
  createReportByReviewId,
} = require("../../controllers/reviews/reportReviewController");

const router = express.Router();

router.get("/", getAllReports);
router.get("/:id", getReportById);
router.get("/:reviewId", getReportsByReviewId);
router.post("/:reviewId", createReportByReviewId);

module.exports = router;
