const express = require("express");
const {
  getAllComments,
  addCommentByReviewId,
  getCommentsByReviewId,
  updateCommentById,
  deleteCommentById,
  getCommentById,
} = require("../../controllers/reviews/commentController");
const {
  grantedAccess,
} = require("../../controllers/authorization/authController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  // console.log(`ID is: ${val}`);
  next();
});

// Get a comment by its id
router.get("/:id", getCommentById);

// Get all comments
router.get("/", getAllComments);

// Get comment by a review id
router.get("/:reviewId", getCommentsByReviewId);

// Add comment by a review id
router.post("/:id", grantedAccess, addCommentByReviewId);

// updated comment by id
router.put("/:id", grantedAccess, updateCommentById);

// delete comment by id
router.delete("/:id", grantedAccess, deleteCommentById);

module.exports = router;
