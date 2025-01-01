const express = require("express");
const {
  getAllReviews,
  addReviewByUserId,
  deleteReviewByUserId,
  updateReviewByUserId,
  getReviewsByUserId,
  getAllReviewsByCourseId,
} = require("../../controllers/reviews/reviewController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.get("/", grantedAccess, getAllReviews);
router.get("/:courseId", grantedAccess, getAllReviewsByCourseId);
router.post("/:id", grantedAccess, addReviewByUserId);
router.delete("/:id", grantedAccess, deleteReviewByUserId);
router.patch("/:id", grantedAccess, updateReviewByUserId);
router.get("/:id", grantedAccess, getReviewsByUserId);

module.exports = router;
