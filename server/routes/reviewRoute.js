const express = require("express");
const {
  getAllReviews,
  addReviewByUserId,
  deleteReviewByUserId,
  updateReviewByUserId,
  getReviewsByUserId,
} = require("../controllers/reviewController");
const { grantedAccess } = require("../controllers/authController");

const router = express.Router();

router.get("/", grantedAccess, getAllReviews);
router.post("/:id", grantedAccess, addReviewByUserId);
router.delete("/:id", grantedAccess, deleteReviewByUserId);
router.patch("/:id", grantedAccess, updateReviewByUserId);
router.get("/:id", grantedAccess, getReviewsByUserId);

module.exports = router;
