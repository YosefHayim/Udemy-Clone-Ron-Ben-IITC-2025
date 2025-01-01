const Course = require("../../models/courses/courseModel");
const APIFeatures = require("../../utils/apiFeatures");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllCourses = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Course.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const courses = await features.query;

  if (!courses || courses.length === 0) {
    return next(new Error("No Course documents found in database"));
  }

  res.status(200).json({
    status: "Success",
    totalCourses: courses.length,
    response: courses,
  });
});

const getCourseById = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(new Error("Please provide id in the url."));
  }

  const findCourse = await Course.findOne({ _id: courseId });

  if (!findCourse) {
    return next(new Error("There is no such course in database"));
  }

  res.status(200).json({
    status: "success",
    data: findCourse,
  });
});

const createCourse = catchAsync(async (req, res, next) => {
  const { title, description, instructor } = req.body;

  if (!title || !description || !instructor) {
    return next(new Error("One of the fields is missing."));
  }

  const newCourse = await Course.create({
    title,
    description,
    instructor,
  });

  if (!newCourse) {
    return next(new Error("Error occurred during course creation."));
  }

  res.status(201).json({
    status: "success",
    message: "Course created successfully.",
    data: newCourse,
  });
});

const updateCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(new Error("Please provide the course ID in the URL."));
  }

  const updatedCourse = await Course.findByIdAndUpdate(courseId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedCourse) {
    return next(new Error("Error occurred during course update."));
  }

  res.status(200).json({
    status: "success",
    message: "Course updated successfully.",
    data: updatedCourse,
  });
});

const deleteCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(new Error("Please provide the course ID in the URL."));
  }

  const deletedCourse = await Course.findByIdAndDelete(courseId);

  if (!deletedCourse) {
    return next(new Error("Error occurred during course deletion."));
  }

  res.status(204).json({
    status: "success",
    message: "Course deleted successfully.",
  });
});

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
