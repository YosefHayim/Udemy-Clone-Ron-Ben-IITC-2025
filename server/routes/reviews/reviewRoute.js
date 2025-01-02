const express = require("express");
const {
  getAllReviews,
  addReviewByCourseId,
  deleteReviewById,
  updateReviewByCourseIdAndReviewId,
  getReviewByReviewId,
  getAllReviewsByCourseId,
  getAllReviewsOfSelfUser,
} = require("../../controllers/reviews/reviewController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

// Get all reviews of all courses
router.get("/", getAllReviews);

// Get all reviews of specific course by its id
router.get("/:id", getAllReviewsByCourseId);

// Get all reviews that the current user that is auth is commented
router.get("/:userId", getAllReviewsOfSelfUser);

// get review to a specific course by course id
router.get("/:courseId", grantedAccess, addReviewByCourseId);

// Get review by review id
router.get("/:reviewId", grantedAccess, getReviewByReviewId);

// add review to a specific course by course id
router.post("/:id", grantedAccess, addReviewByCourseId);

// update a review by id and by the specific course
router.patch(
  "/:courseId/:reviewId",
  grantedAccess,
  updateReviewByCourseIdAndReviewId
);

// delete review by its id
router.delete("/:reviewId/:courseId", grantedAccess, deleteReviewById);

module.exports = router;
