const express = require("express");
const {
  getAllReviews,
  addReviewByCourseId,
  deleteReviewById,
  updateReviewById,
  getReviewByReviewId,
  getAllReviewsByCourseId,
  getAllReviewsOfUser,
  toggleReviewReaction,
  toggleLikeByReviewId,
  toggleDislikeReaction,
  getAllReviewsCountOfallCourses,
} = require("../../controllers/reviews/reviewController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`ID is: ${val}`);
  next();
});

// Get all reviews of all courses
router.get("/", getAllReviews);

// Get review by review id
router.get("/single/:id", getReviewByReviewId);

router.get("/courses/analytics", getAllReviewsCountOfallCourses);

// Get all reviews of specific course by its id
router.get("/course/:id", getAllReviewsByCourseId);

// Get all reviews that the current user that is auth is commented
router.get("/user/:id", getAllReviewsOfUser);

// Get review to a specific course by course id
router.get("/:courseid", addReviewByCourseId);

// Add review to a specific course by course id
router.post("/:id", grantedAccess, addReviewByCourseId);

// toggle like by review id
router.post("/like/:id", grantedAccess, toggleLikeByReviewId);

// toggle dislike by review id
router.post("/dislike/:id", grantedAccess, toggleDislikeReaction);

// Update a review by id and by the specific course
router.patch("/:id", grantedAccess, updateReviewById);

// Delete review by its id
router.delete("/:id", grantedAccess, deleteReviewById);

module.exports = router;
