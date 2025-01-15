const express = require("express");
const {
  getAllReports,
  getReportById,
  getReportsByReviewId,
  createReportByReviewId,
  deleteReportById,
} = require("../../controllers/reviews/reportReviewController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.get("/", getAllReports);
router.get("/:id", getReportById);
router.get("/:reviewId", getReportsByReviewId);
router.post("/:reviewId", createReportByReviewId);
router.delete("/:id", grantedAccess, deleteReportById);

module.exports = router;
