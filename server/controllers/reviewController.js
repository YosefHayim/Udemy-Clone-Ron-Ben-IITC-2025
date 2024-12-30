const Review = require("../models/reviewModel");
const User = require("../models/userModel");
const APIFeatures = require("../utils/apiFeatures");
const { catchAsync } = require("../utils/wrapperFn");

const getAllReviews = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Review.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const reviews = await features.query;

  if (!reviews || reviews.length === 0) {
    return next(new Error("No reviews documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalReviews: reviews.length,
    response: reviews,
  });
});

const addReviewByUserId = catchAsync(async (req, res, next) => {
  // Get the user ID
  const userId = req.params.id;

  if (!userId) {
    return next(new Error(`Please provide userId.`));
  }

  if (req.user._id.toString() === userId) {
    return next(new Error(`You can't add review to yourself.`));
  }

  // Get review data
  const { rating, comment } = req.body;

  // Create the new review
  const newReview = await Review.create({ rating, comment, userId });

  if (!newReview) {
    return next(
      new Error(`Error occurred while adding review to user ID: ${userId}`)
    );
  }

  res.status(201).json({
    status: "success",
    response: "Review has been added successfully to the user",
    data: newReview,
  });
});

const deleteReviewByUserId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(new Error(`Please provide reviewId in the url.`));
  }

  const findReview = await Review.findByIdAndDelete(reviewId);

  if (!findReview) {
    return next(new Error(`There is no review with ID: ${reviewId}.`));
  }

  res.status(200).json({
    status: "success",
    response: `Review ID: ${reviewId} has been successfully deleted`,
  });
});

const updateReviewByUserId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;
  const { rating, comment } = req.body;

  if (!reviewId) {
    return next(new Error(`Please provide reviewId in the URL.`));
  }

  const updatedReview = await Review.findByIdAndUpdate(
    reviewId,
    { rating, comment },
    { new: true, runValidators: true }
  );

  if (!updatedReview) {
    return next(new Error(`There is no review with ID: ${reviewId}.`));
  }

  res.status(200).json({
    status: "success",
    response: `Review ID: ${reviewId} has been updated`,
    data: updatedReview,
  });
});

const getReviewsByUserId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

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

module.exports = {
  getAllReviews,
  updateReviewByUserId,
  addReviewByUserId,
  deleteReviewByUserId,
  getReviewsByUserId,
};
