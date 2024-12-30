const Comment = require("../models/commentModel");
const APIFeatures = require("../utils/apiFeatures");
const { catchAsync } = require("../utils/wrapperFn");

const getAllComments = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Comment.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const comments = await features.query;

  if (!comments || comments.length === 0) {
    return next(new Error("No comments documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalComments: comments.length,
    response: comments,
  });
});

const addCommentByReviewId = catchAsync(async (req, res, next) => {
  // Get the user ID
  const userId = req.user._id;

  if (req.user._id.toString() === userId) {
    return next(new Error(`You can't add comment to yourself reviews.`));
  }

  const reviewId = req.params.id;

  if (!reviewId) {
    return next(new Error(`Please provide in the url the reviewId.`));
  }

  const comment = req.body.comment;

  if (!comment) {
    return next(new Error(`You cant reply to a review with empty comment.`));
  }

  const newComment = await Comment.create({ comment, reviewId });

  if (!newComment) {
    return next(
      new Error(`Error occurred while adding review to user ID: ${userId}`)
    );
  }

  res.status(201).json({
    status: "success",
    response: "Comment has been added successfully to the review",
    data: newComment,
  });
});

const deleteCommentById = catchAsync(async (req, res, next) => {
  const commentId = req.params.id;

  if (!commentId) {
    return next(new Error(`Please provide commentId in the url.`));
  }

  const findComment = await Comment.findByIdAndDelete(commentId);

  if (!findComment) {
    return next(new Error(`There is no comment with ID: ${commentId}.`));
  }

  res.status(200).json({
    status: "success",
    response: `Comment ID: ${commentId} has been successfully deleted`,
  });
});

const updateCommentById = catchAsync(async (req, res, next) => {
  const comment = req.body.comment;
  const commentId = req.params.id;

  if (!commentId) {
    return next(new Error(`Please provide commentId in the URL.`));
  }

  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    { comment },
    { new: true, runValidators: true }
  );

  if (!updatedComment) {
    return next(new Error(`There is no comment with ID: ${commentId}.`));
  }

  res.status(200).json({
    status: "success",
    response: `Comment ID: ${commentId} has been updated`,
    data: updatedComment,
  });
});

const getCommentsByReviewId = catchAsync(async (req, res, next) => {
  const Review = require("../models/reviewModel");

  const reviewId = req.params.reviewId;

  if (!reviewId) {
    return next(new Error(`Please provide reviewId in the url.`));
  }

  const findReview = await Review.findById(reviewId);

  if (!findReview) {
    return next(new Error(`There is no review with ID: ${reviewId}.`));
  }

  res.status(200).json({
    status: "success",
    response: findReview,
  });
});

const getCommentById = catchAsync(async (req, res, next) => {
  const commentId = req.params.id;

  if (!commentId) {
    return next(new Error(`Please provide commentId in the url.`));
  }

  const findComment = await Comment.findById(commentId);

  if (!findComment) {
    return next(
      new Error(`There is no such comment with this ID: ${commentId}.`)
    );
  }

  res.status(200).json({
    status: "success",
    response: findComment,
  });
});

module.exports = {
  getAllComments,
  getCommentById,
  addCommentByReviewId,
  getCommentsByReviewId,
  updateCommentById,
  deleteCommentById,
};
