const Course = require("../../models/courses/courseModel");
const courseReviews = require("../../models/reviews/courseReviewModel");
const APIFeatures = require("../../utils/apiFeatures");
const createError = require("../../utils/errorFn");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllReviews = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(courseReviews.find(), req.query)
    .filter()
    .sort()
    .search()
    .limitFields()
    .paginate();

  const reviews = await features.query;
  const courses = await Course.find();

  if (!reviews || reviews.length === 0) {
    return next(createError("No reviews documents found in the database", 404));
  }

  res.status(200).json({
    status: "Success",
    totalReviews: reviews.length,
    totalCourses: courses.length,
    response: "Reviews list",
    reviews,
  });
});

const getAllReviewsOfUser = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

  if (!userId) {
    return next(createError("User ID is required.", 400));
  }

  const reviews = await courseReviews.find({
    user: userId,
    isActive: { $ne: false },
  });

  if (!reviews || reviews.length === 0) {
    return next(createError("No reviews found for the current user.", 404));
  }

  res.status(200).json({
    status: "success",
    totalReviewsOfUserFound: reviews.length,
    data: reviews,
  });
});

const getReviewByReviewId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(createError("Please provide reviewId in the URL.", 400));
  }

  const findReview = await courseReviews.findById(reviewId);

  if (!findReview) {
    return next(createError(`There is no review with ID: ${reviewId}.`, 404));
  }

  res.status(200).json({
    status: "success",
    response: findReview,
  });
});

const getAllReviewsByCourseId = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(createError("Please provide courseId in the URL.", 400));
  }

  const isCourseExist = await Course.findById(courseId);

  if (!isCourseExist) {
    return next(createError(`No course found with ID: ${courseId}.`, 404));
  }

  const allReviewsOfCourseId = await courseReviews.find({
    courseReview: courseId,
  });

  res.status(200).json({
    success: "Success",
    response: `All reviews for the course ${isCourseExist.courseName}`,
    totalReviews: allReviewsOfCourseId.length,
    data: allReviewsOfCourseId,
  });
});

const addReviewByCourseId = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(createError("Please provide courseId to add a review.", 400));
  }

  if (!req.user.coursesBought?.map(String).includes(String(courseId))) {
    return next(
      createError("You can't review a course you're not enrolled in.", 403)
    );
  }

  const isCourseExist = await Course.findById(courseId);

  if (!isCourseExist) {
    return next(
      createError(`There is no such course with this ID: ${courseId}`, 404)
    );
  }

  const existingReview = await courseReviews.findOne({
    courseReview: courseId,
    user: req.user._id,
  });

  if (existingReview) {
    return next(
      createError("You can't add multiple reviews for the same course.", 403)
    );
  }

  const { rating, comment } = req.body;

  const newReview = await courseReviews.create({
    courseReview: courseId,
    rating,
    comment,
    user: req.user._id,
  });

  if (!newReview) {
    return next(createError("Failed to add a review for the course.", 500));
  }

  await Course.findByIdAndUpdate(courseId, {
    $push: { reviews: newReview._id },
  });

  res.status(201).json({
    status: "success",
    response: "Review successfully added to the course.",
    data: newReview,
  });
});

const toggleLikeByReviewId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(createError("Please provide reviewId in the URL.", 400));
  }

  const review = await courseReviews.findById(reviewId);

  if (!review) {
    return next(createError("No review found with this ID.", 404));
  }

  if (review.user.equals(req.user._id)) {
    return next(createError("You can't react to your own review.", 403));
  }

  const userId = req.user._id.toString();

  const userIndexInLikes = review.likes.users.findIndex(
    (id) => id.toString() === userId
  );
  if (userIndexInLikes !== -1) {
    review.likes.users.splice(userIndexInLikes, 1);
    review.likes.count -= 1;
  } else {
    review.likes.users.push(userId);
    review.likes.count += 1;

    const userIndexInDislikes = review.dislikes.users.findIndex(
      (id) => id.toString() === userId
    );
    if (userIndexInDislikes !== -1) {
      review.dislikes.users.splice(userIndexInDislikes, 1);
      review.dislikes.count -= 1;
    }
  }

  await review.save();

  res.status(200).json({
    message: "success",
    data: review,
  });
});

const toggleDislikeReaction = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(createError("Please provide reviewId in the URL.", 400));
  }

  const review = await courseReviews.findById(reviewId);

  if (!review) {
    return next(createError("No review found with this ID.", 404));
  }

  if (review.user.equals(req.user._id)) {
    return next(createError("You can't react to your own review.", 403));
  }

  const userId = req.user._id.toString();

  const userIndexInDislikes = review.dislikes.users.findIndex(
    (id) => id.toString() === userId
  );
  if (userIndexInDislikes !== -1) {
    review.dislikes.users.splice(userIndexInDislikes, 1);
    review.dislikes.count -= 1;
  } else {
    review.dislikes.users.push(userId);
    review.dislikes.count += 1;

    const userIndexInLikes = review.likes.users.findIndex(
      (id) => id.toString() === userId
    );
    if (userIndexInLikes !== -1) {
      review.likes.users.splice(userIndexInLikes, 1);
      review.likes.count -= 1;
    }
  }

  await review.save();

  res.status(200).json({
    message: "success",
    data: review,
  });
});

const updateReviewById = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;
  const { rating, comment } = req.body;

  if (!reviewId) {
    return next(createError("Please provide review ID in the URL.", 400));
  }

  if (!rating || !comment) {
    return next(createError("Rating and comment are required.", 400));
  }

  const updatedReview = await courseReviews.findById(reviewId);

  if (!updatedReview) {
    return next(createError(`No review found with ID: ${reviewId}.`, 404));
  }

  if (!updatedReview.user.equals(req.user._id)) {
    return next(createError("You can't update someone else's review.", 403));
  }

  const newReview = await courseReviews.findByIdAndUpdate(
    reviewId,
    { rating, comment },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    response: `Review ID: ${reviewId} has been updated.`,
    data: newReview,
  });
});

const deleteReviewById = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(createError("Please provide reviewId in the URL.", 400));
  }

  const findReview = await courseReviews.findById(reviewId);

  if (!findReview) {
    return next(createError(`No review found with ID: ${reviewId}.`, 404));
  }

  if (!findReview.user.equals(req.user._id)) {
    return next(createError("You can't delete someone else's review.", 403));
  }

  findReview.isActive = false;
  await findReview.save();

  res.status(204).json({
    status: "success",
    response: `Review has been successfully deleted.`,
  });
});

module.exports = {
  getAllReviewsOfUser,
  getAllReviews,
  addReviewByCourseId,
  deleteReviewById,
  updateReviewById,
  getReviewByReviewId,
  getAllReviewsByCourseId,
  toggleLikeByReviewId,
  toggleDislikeReaction,
};
