const CourseProgress = require("../../models/courses/courseProgressModel");
const APIFeatures = require("../../utils/apiFeatures");
const createError = require("../../utils/errorFn");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllCoursesProgress = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(CourseProgress.find(), req.query)
    .filter()
    .search()
    .sort()
    .limitFields()
    .paginate();

  const coursesProgress = await features.query;
  const totalFound = await features.countDocuments();

  if (!coursesProgress || coursesProgress.length === 0) {
    return next(
      createError("No courses Progress documents found in the database", 404)
    );
  }

  res.status(200).json({
    status: "success",
    totalFound,
    data: coursesProgress,
  });
});

const getCourseProgressByUserId = catchAsync(async (req, res, next) => {
  const userId = req.params.id;

  const userCourseProgress = await CourseProgress.find({ user: userId });

  if (!userCourseProgress) {
    return next(
      createError(
        `There is no such user with this id: ${userId} that has course progresses.`,
        404
      )
    );
  }

  res.status(200).json({
    status: "success",
    data: userCourseProgress,
  });
});

module.exports = { getAllCoursesProgress, getCourseProgressByUserId };
