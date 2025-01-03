const Course = require("../../models/courses/courseModel");
const User = require("../../models/users/userModel");
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
    totalReviewsCourseHas: findCourse.reviews.length,
    data: findCourse,
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
    return next(
      new Error("One of the required fields for creating course is missing.")
    );
  }

  // Create a new course
  const newCourse = await Course.create({
    courseName,
    courseDescription,
    coursePrice,
    courseParentCategory,
    courseSubCategory,
    courseTopic,
    courseLevel,
    courseLanguages,
    courseInstructor: req.user._id,
    moneyBackGuarantee,
  });

  if (!newCourse) {
    return next(new Error("Error occurred during course creation."));
  }

  // modify user info
  req.user.role = "instructor";
  req.user.coursesCreated.push(newCourse._id);
  await req.user.save();

  res.status(201).json({
    status: "success",
    message: `Course has successfully created and assigned to user: ${req.user.fName}`,
    newCourse,
    newUserData: req.user,
  });
});

const deleteCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;

  if (!courseId) {
    return next(new Error("Please provide the course ID in the URL."));
  }

  // Fetch the course and ensure it exists
  const course = await Course.findById(courseId);
  if (!course) {
    return next(new Error("Course not found."));
  }

  // Find all students with the course in their coursesBought list
  const students = await User.find({
    role: "student",
    coursesBought: courseId,
  });

  // Update each student's coursesBought field to remove the deleted course
  await Promise.all(
    students.map(async (student) => {
      student.coursesBought = student.coursesBought.filter(
        (boughtCourseId) => !boughtCourseId.equals(courseId)
      );
      await student.save();
    })
  );

  course.isActive = false;
  course.save();

  res.status(200).json({
    status: "success",
    message: "Course deleted successfully, and enrolled students updated.",
  });
});

const reactivateCourseById = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const user = req.user._id;

  if (!courseId) {
    return next(
      new Error(
        `Please provide a course id in the url in order to re-activate it`,
        404
      )
    );
  }

  const course = await Course.findById(courseId);

  if (!course) {
    return next(
      new Error(`There is no de-activated course with id: ${courseId}`)
    );
  }

  if (course.courseInstructor !== user) {
    return next(
      new Error(
        `You cant re-activate course that you are not the creator of it.`
      )
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
