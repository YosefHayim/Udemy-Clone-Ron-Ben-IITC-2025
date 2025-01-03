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

const addReviewByCourseId = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  // Validate courseId
  if (!courseId) {
    return next(new Error("Please provide courseId to add a review."));
  }

  // Ensure user has bought the course
  if (!req.user.coursesBought?.map(String).includes(String(courseId))) {
    return next(new Error("You can't review a course you're not enrolled in."));
  }

  // Check if the user already added a review for this course
  const existingReview = await courseReviews.findOne({
    courseReview: courseId,
    user: req.user._id,
  });

  if (existingReview) {
    return next(
      new Error(
        `You can't add another review for course ${courseId}. Only one review is allowed.`
      )
    );
  }

  const { rating, comment } = req.body;

  // Create a new review
  const newReview = await courseReviews.create({
    courseReview: courseId,
    rating,
    comment,
    user: req.user._id,
  });

  if (!newReview) {
    return next(new Error(`Failed to add a review for course: ${courseId}`));
  }

  // Add the review ID to the course's reviews array
  await Course.findByIdAndUpdate(courseId, {
    $push: { reviews: newReview._id },
  });

  res.status(201).json({
    status: "success",
    response: `Review successfully added to the course.`,
    data: newReview,
  });
});

const toggleLikeByReviewId = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(new Error("Please provide reviewId in the URL."));
  }

  const review = await courseReviews.findById(reviewId);

  if (!review) {
    return next(new Error("There is no review with this ID."));
  }

  if (review.user.equals(req.user._id)) {
    return next(new Error("You can't react to your own review."));
  }

  const userId = req.user._id.toString(); // Ensure ID is a string

  // Toggle like
  const userIndexInLikes = review.likes.users.findIndex(
    (id) => id.toString() === userId
  );
  if (userIndexInLikes !== -1) {
    // Remove like
    review.likes.users.splice(userIndexInLikes, 1);
    review.likes.count -= 1;
  } else {
    // Add like
    review.likes.users.push(userId);
    review.likes.count += 1;

    // Remove dislike if present
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
    response: {
      likes: review.likes.count,
      dislikes: review.dislikes.count,
    },
  });
});

const toggleDislikeReaction = catchAsync(async (req, res, next) => {
  const reviewId = req.params.id;

  if (!reviewId) {
    return next(new Error("Please provide reviewId in the URL."));
  }

  const review = await courseReviews.findById(reviewId);

  if (!review) {
    return next(new Error("There is no review with this ID."));
  }

  if (review.user.equals(req.user._id)) {
    return next(new Error("You can't react to your own review."));
  }

  const userId = req.user._id.toString(); // Ensure ID is a string

  // Toggle dislike
  const userIndexInDislikes = review.dislikes.users.findIndex(
    (id) => id.toString() === userId
  );
  if (userIndexInDislikes !== -1) {
    // Remove dislike
    review.dislikes.users.splice(userIndexInDislikes, 1);
    review.dislikes.count -= 1;
  } else {
    // Add dislike
    review.dislikes.users.push(userId);
    review.dislikes.count += 1;

    // Remove like if present
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
    response: {
      likes: review.likes.count,
      dislikes: review.dislikes.count,
    },
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

module.exports = {
  getAllReviewsOfSelfUser,
  getAllReviews,
  addReviewByCourseId,
  deleteReviewById,
  updateReviewById,
  getReviewByReviewId,
  getAllReviewsByCourseId,
  toggleLikeByReviewId,
  toggleDislikeReaction,
};
