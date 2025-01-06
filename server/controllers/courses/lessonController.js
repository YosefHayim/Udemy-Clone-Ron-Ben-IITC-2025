const Lesson = require("../../models/courses/lessonModel");
const APIFeatures = require("../../utils/apiFeatures");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllLessons = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Lesson.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const lessons = await features.query;

  if (!lessons || lessons.length === 0) {
    return next(createError("No Lesson documents found in the database", 404));
  }

  res.status(200).json({
    status: "Success",
    totalLessons: lessons.length,
    response: lessons,
  });
});

const getLessonById = catchAsync(async (req, res, next) => {
  const lessonId = req.params.id;

  if (!lessonId) {
    return next(createError("Please provide the lesson ID in the URL.", 400));
  }

  const findLesson = await Lesson.findOne({ _id: lessonId });

  if (!findLesson) {
    return next(createError("There is no such lesson in the database.", 404));
  }

  res.status(200).json({
    status: "success",
    data: findLesson,
  });
});

const createLesson = catchAsync(async (req, res, next) => {
  const { title, content, section } = req.body;

  if (!title || !content || !section) {
    return next(createError("One of the required fields is missing.", 400));
  }

  const newLesson = await Lesson.create({ title, content, section });

  if (!newLesson) {
    return next(createError("Error occurred during lesson creation.", 500));
  }

  res.status(201).json({
    status: "success",
    message: "Lesson created successfully.",
    data: newLesson,
  });
});

const updateLessonById = catchAsync(async (req, res, next) => {
  const lessonId = req.params.id;
  const { title, content, section } = req.body;

  if (!lessonId) {
    return next(createError("Please provide the lesson ID in the URL.", 400));
  }

  const updatedLesson = await Lesson.findByIdAndUpdate(
    lessonId,
    title,
    content,
    section,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedLesson) {
    return next(createError("Error occurred during lesson update.", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Lesson updated successfully.",
    data: updatedLesson,
  });
});

const deleteLessonById = catchAsync(async (req, res, next) => {
  const lessonId = req.params.id;

  if (!lessonId) {
    return next(createError("Please provide the lesson ID in the URL.", 400));
  }

  const deletedLesson = await Lesson.findByIdAndDelete(lessonId);

  if (!deletedLesson) {
    return next(createError("Error occurred during lesson deletion.", 404));
  }

  res.status(204).json({
    status: "success",
    message: "Lesson deleted successfully.",
  });
});

module.exports = {
  getAllLessons,
  getLessonById,
  createLesson,
  updateLessonById,
  deleteLessonById,
};
