const express = require("express");
const {
  getAllComments,
  addCommentByReviewId,
  getCommentsByReviewId,
  updateCommentById,
  deleteCommentById,
  getCommentById,
} = require("../controllers/commentController");
const { grantedAccess } = require("../controllers/authController");

const router = express.Router();

router.get("/:id", grantedAccess, getCommentById);
router.get("/", grantedAccess, getAllComments);
router.get("/:reviewId", grantedAccess, getCommentsByReviewId);
router.post("/:id", grantedAccess, addCommentByReviewId);
router.put("/:id", grantedAccess, updateCommentById);
router.delete("/:id", grantedAccess, deleteCommentById);

module.exports = router;
