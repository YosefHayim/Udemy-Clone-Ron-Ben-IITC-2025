const Course = require("../../models/courses/courseModel");
const User = require("../../models/users/userModel");
const APIFeatures = require("../../utils/apiFeatures");
const createError = require("../../utils/errorFn");
const { catchAsync } = require("../../utils/wrapperFn");

const getAllCourses = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Course.find(), req.query)
    .filter()
    .search()
    .sort()
    .limitFields()
    .paginate();

  const courses = await features.query;

  if (!courses || courses.length === 0) {
    return next(createError("No Course documents found in the database", 404));
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
    return next(createError("Please provide the course ID in the URL.", 400));
  }

  const findCourse = await Course.findOne({ _id: courseId });

  if (!findCourse) {
    return next(createError("There is no such course in the database.", 404));
  }

  res.status(200).json({
    status: "success",
    totalReviewsCourseHas: findCourse.reviews.length,
    data: findCourse,
  });
});

const updateCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(createError("Please provide the course ID in the URL.", 400));
  }

  const updatedCourse = await Course.findByIdAndUpdate(courseId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedCourse) {
    return next(createError("Error occurred during course update.", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Course updated successfully.",
    data: updatedCourse,
  });
});

const createCourse = catchAsync(async (req, res, next) => {
  const {
    courseName,
    courseDescription,
    coursePrice,
    category,
    subCategory,
    courseTopic,
    courseLevel,
    courseLanguages,
    moneyBackGuarantee,
  } = req.body;

  if (
    !courseName ||
    !courseDescription ||
    !coursePrice ||
    !category ||
    !subCategory ||
    !courseTopic ||
    !courseLevel ||
    !courseLanguages
  ) {
    return next(
      createError(
        "One of the required fields for creating course is missing.",
        400
      )
    );
  }

  const newCourse = await Course.create({
    courseName,
    courseDescription,
    coursePrice,
    category,
    subCategory,
    courseTopic,
    courseLevel,
    courseLanguages,
    courseInstructor: req.user._id,
    moneyBackGuarantee,
  });

  if (!newCourse) {
    return next(createError("Error occurred during course creation.", 500));
  }

  req.user.role = "instructor";
  req.user.coursesCreated.push(newCourse._id);
  await req.user.save();

  res.status(201).json({
    status: "success",
    message: `Course has successfully been created and assigned to user: ${req.user.fName}`,
    newCourse,
  });
});

const deleteCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(createError("Please provide the course ID in the URL.", 400));
  }

  const course = await Course.findById(courseId);

  if (!course) {
    return next(createError("Course not found.", 404));
  }

  const students = await User.find({
    role: "student",
    coursesBought: courseId,
  });

  await Promise.all(
    students.map(async (student) => {
      student.coursesBought = student.coursesBought.filter(
        (boughtCourseId) => !boughtCourseId.equals(courseId)
      );
      await student.save();
    })
  );

  course.isActive = false;
  await course.save();

  res.status(200).json({
    status: "success",
    message: "Course deleted successfully, and enrolled students updated.",
    studentsUpdated: students,
  });
});

const reactivateCourseById = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const user = req.user._id;

  if (!courseId) {
    return next(
      createError(
        "Please provide a course ID in the URL to re-activate it.",
        400
      )
    );
  }

  const course = await Course.findById(courseId);

  if (!course) {
    return next(
      createError(`There is no de-activated course with ID: ${courseId}.`, 404)
    );
  }

  if (!course.courseInstructor.equals(user)) {
    return next(
      createError("You can't re-activate a course you didn't create.", 403)
    );
  }

  course.isActive = true;
  await course.save();

  res.status(201).json({
    status: "success",
    response: "Course has been successfully re-activated.",
    course,
  });
});

module.exports = {
  reactivateCourseById,
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
