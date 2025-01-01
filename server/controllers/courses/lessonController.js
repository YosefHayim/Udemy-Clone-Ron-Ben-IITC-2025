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
    return next(new Error("No Lesson documents found in database"));
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
    return next(new Error("Please provide id in the url."));
  }

  const findLesson = await Lesson.findOne({ _id: lessonId });

  if (!findLesson) {
    return next(new Error("There is no such lesson in database"));
  }

  res.status(200).json({
    status: "success",
    data: findLesson,
  });
});

const createLesson = catchAsync(async (req, res, next) => {
  const { title, content, section } = req.body;

  if (!title || !content || !section) {
    return next(new Error("One of the fields is missing."));
  }

  const newLesson = await Lesson.create({
    title,
    content,
    section,
  });

  if (!newLesson) {
    return next(new Error("Error occurred during lesson creation."));
  }

  res.status(201).json({
    status: "success",
    message: "Lesson created successfully.",
    data: newLesson,
  });
});

const updateLesson = catchAsync(async (req, res, next) => {
  const lessonId = req.params.id;

  if (!lessonId) {
    return next(new Error("Please provide the lesson ID in the URL."));
  }

  const updatedLesson = await Lesson.findByIdAndUpdate(lessonId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedLesson) {
    return next(new Error("Error occurred during lesson update."));
  }

  res.status(200).json({
    status: "success",
    message: "Lesson updated successfully.",
    data: updatedLesson,
  });
});

const deleteLesson = catchAsync(async (req, res, next) => {
  const lessonId = req.params.id;

  if (!lessonId) {
    return next(new Error("Please provide the lesson ID in the URL."));
  }

  const deletedLesson = await Lesson.findByIdAndDelete(lessonId);

  if (!deletedLesson) {
    return next(new Error("Error occurred during lesson deletion."));
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
  updateLesson,
  deleteLesson,
};
