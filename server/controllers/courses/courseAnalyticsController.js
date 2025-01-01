const CourseAnalytics = require("../../models/courses/courseAnalyticsModel");
const APIFeatures = require("../../utils/apiFeatures");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllAnalytics = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(CourseAnalytics.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const analytics = await features.query;

  if (!analytics || analytics.length === 0) {
    return next(new Error("No analytics documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalAnalytics: analytics.length,
    response: analytics,
  });
});

const getAnalyticsById = catchAsync(async (req, res, next) => {
  const analyticsId = req.params.id;

  if (!analyticsId) {
    return next(new Error("Please provide id in the url."));
  }

  const findAnalytics = await CourseAnalytics.findOne({ _id: analyticsId });

  if (!findAnalytics) {
    return next(new Error("No such analytics entry in database"));
  }

  res.status(200).json({
    status: "success",
    data: findAnalytics,
  });
});

const createAnalytics = catchAsync(async (req, res, next) => {
  const { courseId, totalLessons, totalStudents, averageCompletionRate } =
    req.body;

  if (!courseId || !totalLessons || !totalStudents || !averageCompletionRate) {
    return next(new Error("One of the fields is missing."));
  }

  const newAnalytics = await CourseAnalytics.create({
    courseId,
    totalLessons,
    totalStudents,
    averageCompletionRate,
  });

  if (!newAnalytics) {
    return next(new Error("Error occurred during analytics creation."));
  }

  res.status(201).json({
    status: "success",
    message: "Analytics data created successfully.",
    data: newAnalytics,
  });
});

const updateAnalytics = catchAsync(async (req, res, next) => {
  const analyticsId = req.params.id;

  if (!analyticsId) {
    return next(new Error("Please provide the analytics ID in the URL."));
  }

  const updatedAnalytics = await CourseAnalytics.findByIdAndUpdate(
    analyticsId,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedAnalytics) {
    return next(new Error("Error occurred during analytics update."));
  }

  res.status(200).json({
    status: "success",
    message: "Analytics data updated successfully.",
    data: updatedAnalytics,
  });
});

const deleteAnalytics = catchAsync(async (req, res, next) => {
  const analyticsId = req.params.id;

  if (!analyticsId) {
    return next(new Error("Please provide the analytics ID in the URL."));
  }

  const deletedAnalytics = await CourseAnalytics.findByIdAndDelete(analyticsId);

  if (!deletedAnalytics) {
    return next(new Error("Error occurred during analytics deletion."));
  }

  res.status(204).json({
    status: "success",
    message: "Analytics data deleted successfully.",
  });
});

module.exports = {
  getAllAnalytics,
  getAnalyticsById,
  createAnalytics,
  updateAnalytics,
  deleteAnalytics,
};
