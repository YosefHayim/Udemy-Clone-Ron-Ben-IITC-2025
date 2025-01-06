const Comment = require("../../models/reviews/instructorCommentModel");
const APIFeatures = require("../../utils/apiFeatures");
const createError = require("../../utils/errorFn");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllComments = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Comment.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const comments = await features.query;

  if (!comments || comments.length === 0) {
    return next(
      createError("No comments documents found in the database", 404)
    );
  }

  res.status(200).json({
    status: "Success",
    totalComments: comments.length,
    response: comments,
  });
});

const getCommentById = catchAsync(async (req, res, next) => {
  const commentId = req.params.id;

  if (!commentId) {
    return next(createError("No comment ID provided in the url", 400));
  }

  const findComment = await Comment.findById(commentId);

  if (!findComment) {
    return next(createError("There is no such comment in the database.", 404));
  }

  res.status(200).json({
    status: "success",
    response: findComment,
  });
});

const getCommentsByReviewId = catchAsync(async (req, res, next) => {
  const Review = require("../../models/reviewModel");
  const reviewId = req.params.reviewId;

  if (!reviewId) {
    return next(createError("Please provide review ID in the url", 400));
  }

  const findReview = await Review.findById(reviewId);

  if (!findReview) {
    return next(createError("There is no such comment in the database.", 404));
  }

  res.status(200).json({
    status: "success",
    response: findReview,
  });
});

const addCommentByReviewId = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  if (req.user._id.toString() === userId) {
    return next(createError("You can't add comment to yourself reviews.", 403));
  }

  const reviewId = req.params.id;

  if (!reviewId) {
    return next(createError("Please provide review ID in the url", 400));
  }

  const comment = req.body.comment;

  if (!comment) {
    return next(
      createError("Please provide comment key with value in the body", 400)
    );
  }

  const newComment = await Comment.create({ comment, reviewId });

  if (!newComment) {
    return next(
      createError(
        `Error occurred while creating a comment on a review to user ID: ${userId}`,
        409
      )
    );
  }

  res.status(201).json({
    status: "success",
    response: "Comment has been added successfully to the review",
    data: newComment,
  });
});

const updateCommentById = catchAsync(async (req, res, next) => {
  const comment = req.body.comment;
  const commentId = req.params.id;

  if (!commentId) {
    return next(createError("Please provide comment ID in the url", 400));
  }

  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    { comment },
    { new: true, runValidators: true }
  );

  if (!updatedComment) {
    return next(createError(`There is no comment with ID: ${commentId}.`, 404));
  }

  res.status(200).json({
    status: "success",
    response: `Comment ID: ${commentId} has been updated`,
    data: updatedComment,
  });
});

const deleteCommentById = catchAsync(async (req, res, next) => {
  const commentId = req.params.id;

  if (!commentId) {
    return next(createError("Please provide comment ID in the url", 400));
  }

  const findComment = await Comment.findByIdAndDelete(commentId);

  if (!findComment) {
    return next(createError(`There is no comment with ID: ${commentId}.`, 404));
  }

  res.status(200).json({
    status: "success",
    response: `Comment ID: ${commentId} has been successfully deleted`,
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
