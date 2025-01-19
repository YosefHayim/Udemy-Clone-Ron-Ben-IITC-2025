const CourseProgress = require("../../models/courses/courseProgressModel");
const Course = require("../../models/courses/courseModel");
const APIFeatures = require("../../utils/apiFeatures");
const createError = require("../../utils/errorFn");
const { catchAsync } = require("../../utils/wrapperFn");
const { mongoose } = require("mongoose");

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

const getCourseProgressById = catchAsync(async (req, res, next) => {
  const courseProgressId = req.params.courseProgressId;

  const courseProgress = await CourseProgress.findById(courseProgressId);

  if (courseProgress.length < 1) {
    return next(
      createError(
        `There is no such course progress with this id: ${courseProgressId}.`,
        404
      )
    );
  }

  res.status(200).json({
    status: "success",
    data: courseProgress,
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

  // Fetch the course with its sections and lessons
  const course = await Course.findById(courseId);

  if (!course) {
    return next(createError(`Course ID: ${courseId} does not exist.`, 404));
  }

  // Extract lessons from sections
  const allLessons = course.sections.flatMap((section) =>
    section.lessons.map((lesson) => ({
      lesson: lesson._id,
      isDone: false,
    }))
  );

  // Check if the lesson exists in the course
  const lessonExists = allLessons.some((lesson) =>
    lesson.lesson.equals(lessonId)
  );
  if (!lessonExists) {
    return next(
      createError(
        `Lesson ID: ${lessonId} does not exist in the course: ${courseId}.`,
        404
      )
    );
  }

  // Find or create course progress
  let courseProg = await CourseProgress.findOne({
    course: courseId,
    user: userId,
  });
  if (!courseProg) {
    courseProg = await CourseProgress.create({
      course: courseId,
      user: userId,
      lessons: allLessons, // Attach all lessons to course progress
    });
  }

  // Modify the specific lesson's progress
  const updatedProgress = await CourseProgress.findOneAndUpdate(
    {
      course: courseId,
      user: userId,
      "lessons.lesson": lessonId, // Match the specific lesson
    },
    {
      $set: { "lessons.$.isDone": true }, // Update isDone to true
    },
    { new: true }
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
  getCourseProgressById,
  getCourseProgressByUserId,
  updateLessonByCourseId,
};
