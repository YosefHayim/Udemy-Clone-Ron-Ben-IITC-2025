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
  const {
    courseName,
    courseDescription,
    coursePrice,
    courseParentCategory,
    courseSubCategory,
    courseTopic,
    courseLevel,
    courseLanguages,
    moneyBackGuarantee,
  } = req.body;

  // Check for missing fields
  if (
    !courseName ||
    !courseDescription ||
    !coursePrice ||
    !courseParentCategory ||
    !courseSubCategory ||
    !courseTopic ||
    !courseLevel ||
    !courseLanguages
  ) {
    return next(new Error("One of the required fields is missing."));
  }

  // Create a new course
  const newCourse = await Course.create([
    {
      courseName,
      courseDescription,
      coursePrice,
      courseParentCategory,
      courseSubCategory,
      courseTopic,
      courseLevel,
      courseLanguages,
      courseInstructor,
      moneyBackGuarantee,
    },
  ]);

  if (!newCourse || newCourse.length === 0) {
    return next(new Error("Error occurred during course creation."));
  }

  const addedCourseToUser = req.user.coursesCreated.push(newCourse._id);

  if (!addedCourseToUser) {
    return next(new Error("Error adding course to array user."));
  }

  res.status(201).json({
    status: "success",
    message: "Course has successfully created and assigned to user",
    data: newCourse,
  });
});

const updateCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(new Error("Please provide the course ID in the URL."));
  }

  const {
    courseName,
    courseDescription,
    coursePrice,
    courseParentCategory,
    courseSubCategory,
    courseTopic,
    courseLevel,
    courseLanguages,
    courseInstructor,
    moneyBackGuarantee,
  } = req.body;

  const updatedCourse = await Course.findByIdAndUpdate(
    courseId,
    courseName,
    courseDescription,
    coursePrice,
    courseParentCategory,
    courseSubCategory,
    courseTopic,
    courseLevel,
    courseLanguages,
    courseInstructor,
    moneyBackGuarantee,
    {
      new: true,
      runValidators: true,
    }
  );

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
