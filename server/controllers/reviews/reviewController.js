const Course = require("../../models/courses/courseModel");
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
  const courses = await Course.find();

  if (!reviews || reviews.length === 0) {
    return next(new Error("No reviews documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalReviews: reviews.length,
    totalCourses: courses.length,
    response: "Reviews list",
    reviews,
  });
});

const addReviewByCourseId = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(new Error(`Please provide courseId to add a review.`));
  }

  if (!req.user.coursesBought?.map(String).includes(String(courseId))) {
    return next(new Error(`You can't review a course you're not enrolled in.`));
  }

  const isReviewExistByUserInCourse = await courseReviews.findOne({
    courseReview: courseId,
    user: req.user._id,
  });

  const course = await Course.findById(courseId);

  if (isReviewExistByUserInCourse) {
    return next(
      new Error(
        `You can't add another review for course ${course.courseName}. Only one review is allowed.`
      )
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
    return next(new Error(`Failed to add a review for course : ${courseId}`));
  }

  res.status(201).json({
    status: "success",
    response: `Review successfully added to the course ${course.courseName}`,
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

  res.status(204).json({
    status: "success",
    response: `Review ID: ${reviewId} has been successfully deleted`,
  });
});

const updateReviewById = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;
  const { rating, comment } = req.body;

  if (!reviewId) {
    return next(new Error(`Please provide review ID in the URL.`));
  }

  if (!rating || !comment) {
    return next(
      new Error(
        `Either rating score or comment is missing in the request body.`
      )
    );
  }

  const updatedReview = await courseReviews.findById(reviewId);

  if (!updatedReview) {
    return next(new Error(`There is no review with ID: ${reviewId}.`));
  }

  if (updatedReview.user.toString() !== req.user._id.toString()) {
    return next(new Error(`You can't update someone else's review.`));
  }

  const newReview = await courseReviews.findByIdAndUpdate(
    reviewId,
    { rating, comment },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    response: `Review ID: ${reviewId} has been updated`,
    data: newReview,
  });
});

const getReviewByReviewId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

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

  const isCourseExist = await Course.findById(courseId);

  if (!isCourseExist) {
    return next(
      new Error(`There is no such CourseAnalytics with this ID: ${courseId}`)
    );
  }

  res.status(200).json({
    success: "Success",
    response: `All reviews for the course ${isCourseExist.courseName}`,
    data: isCourseExist,
  });
});

const getAllReviewsOfSelfUser = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

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
  updateReviewById,
  getReviewByReviewId,
  getAllReviewsByCourseId,
};
