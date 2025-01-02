const CourseAnalytics = require("../../models/courses/courseAnalyticsModel");
const courseReviews = require("../../models/reviews/courseReviewModel");
const APIFeatures = require("../../utils/apiFeatures");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllReviews = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(courseReviews.find(), req.query)
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
    response: "Reviews list:",
    reviews,
  });
});

const addReviewByCourseId = catchAsync(async (req, res, next) => {
  // Get the course ID
  const courseId = req.params.courseId;

  if (!courseId) {
    return next(
      new Error(`Please provide courseId that you want to add review to.`)
    );
  }

  if (!req.user._id) {
    return next(
      new Error(`You must logged in, in order to add a review to a course.`)
    );
  }

  // Get review data of user
  const { rating, comment } = req.body;

  // Create the new review
  const newReview = await Review.create({
    courseReview: courseId,
    rating,
    comment,
    user: req.user._id,
  });

  if (!newReview) {
    return next(
      new Error(`Error occurred while adding review to course ID: ${courseId}`)
    );
  }

  res.status(201).json({
    status: "success",
    response: "Review has been added successfully to the user",
    data: newReview,
  });
});

const deleteReviewById = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(new Error(`Please provide reviewId in the url.`));
  }

  const findReview = await courseReviews.findById(reviewId);

  if (!findReview) {
    return next(new Error(`There is no review with ID: ${reviewId}.`));
  }

  if (findReview.user.toString() !== req.user._id.toString()) {
    return next(new Error(`You can't delete someone else's review.`));
  }

  findReview.isActive = false;
  await findReview.save();

  res.status(200).json({
    status: "success",
    response: `Review ID: ${reviewId} has been successfully deleted`,
  });
});

const updateReviewByCourseIdAndReviewId = catchAsync(async (req, res, next) => {
  const courseId = req.params.courseId;
  const reviewId = req.params.reviewId;
  const { rating, comment } = req.body;

  if (!rating || !comment) {
    return next(
      new Error(
        `Either rating score or comment is missing in the body request.`
      )
    );
  }

  if (!reviewId) {
    return next(new Error(`Please provide review ID in the URL.`));
  }

  if (!courseId) {
    return next(new Error(`Please provide course ID in the URL.`));
  }

  let updatedReview = await courseReviews.findById(reviewId);

  if (updatedReview.user !== req.user._id) {
    return next(new Error(`You cant update someone else review`));
  }

  if (!updatedReview) {
    return next(new Error(`There is no review with ID: ${reviewId}.`));
  }

  if (!updatedReview.courseReview !== courseId) {
    return next(new Error(`There is no course with this ID: ${courseId}`));
  }

  updatedReview = await courseReviews.findByIdAndUpdate(
    reviewId,
    { rating, comment },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    response: `Review ID: ${reviewId} has been updated`,
    data: updatedReview,
  });
});

const getReviewByReviewId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.reviewId;

  if (!reviewId) {
    return next(new Error(`Please provide reviewId in the url.`));
  }

  const findReview = await courseReviews.findById(reviewId);

  if (!findReview) {
    return next(new Error(`There is no review with ID: ${reviewId}.`));
  }

  res.status(200).json({
    status: "success",
    response: findReview,
  });
});

const getAllReviewsByCourseId = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(new Error(`Please provide courseId in the url.`));
  }

  const isCourseAnalyticsExist = CourseAnalytics.findById(courseId);

  if (!isCourseAnalyticsExist) {
    return next(
      new Error(`There is no such CourseAnalytics with this ID: ${courseId}`)
    );
  }

  res.status(200).json({
    success: "Success",
    response: `All reviews for the course ID: ${courseId}`,
    data: isCourseAnalyticsExist,
  });
});

const getAllReviewsOfSelfUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;

  if (!userId) {
    return next(new Error("User ID is required."));
  }

  const reviews = await courseReviews.find({
    user: userId,
    isActive: { $ne: false },
  });

  if (!reviews || reviews.length === 0) {
    return res.status(404).json({
      status: "error",
      message: "No reviews found for the current user.",
    });
  }

  res.status(200).json({
    status: "success",
    results: reviews.length,
    data: reviews,
  });
});

module.exports = {
  getAllReviewsOfSelfUser,
  getAllReviews,
  addReviewByCourseId,
  deleteReviewById,
  updateReviewByCourseIdAndReviewId,
  getReviewByReviewId,
  getAllReviewsByCourseId,
};
