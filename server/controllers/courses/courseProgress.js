const CourseProgress = require("../../models/courses/courseProgressModel");
const Course = require("../../models/courses/courseModel");
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
  const totalFound = await CourseProgress.countDocuments();

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

  if (userCourseProgress.length < 1) {
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

const updateLessonByCourseId = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const userId = req.user._id;
  const lessonId = req.body.lessonId;

  // Validate inputs
  if (!lessonId) {
    return next(createError("Lesson ID is required to update progress.", 400));
  }

  // Find the course progress for the user and course
  const courseProg = await CourseProgress.findOne({
    course: courseId,
    user: userId,
  });

  if (!courseProg) {
    return next(
      createError(
        `No course progress found for course ID: ${courseId} and user ID: ${userId}.`,
        404
      )
    );
  }

  // Ensure the lesson exists in the course
  const course = await Course.findById(courseId).populate({
    path: "sections",
    populate: { path: "lessons" },
  });

  const lessonExists = course.sections.some((section) =>
    section.lessons.some((lesson) => lesson._id === lessonId)
  );

  if (!lessonExists) {
    return next(
      createError(
        `Lesson ID: ${lessonId} does not exist in the course: ${courseId}.`,
        404
      )
    );
  }

  // Update the lesson progress
  const updatedProgress = await CourseProgress.findOneAndUpdate(
    {
      course: courseId,
      user: userId,
      "lessons.lesson": lessonId,
    },
    {
      $set: { "lessons.$.isDone": true },
    },
    { new: true, upsert: false }
  );

  if (!updatedProgress) {
    return next(
      createError(
        `Failed to update progress for lesson ID: ${lessonId}. Ensure the lesson is part of the course progress.`,
        400
      )
    );
  }

  res.status(200).json({
    status: "success",
    message: `Lesson ID: ${lessonId} marked as completed for course: ${courseId}.`,
    updatedProgress,
  });
});

module.exports = {
  getAllCoursesProgress,
  getCourseProgressByUserId,
  updateLessonByCourseId,
};
